/* ==========================================================================
   inicio.js · Inicio (sección «¿Qué necesitas?»)
   1. Tarjeta «Stock»: muestra u oculta la tabla de stock de entrega
      inmediata y permite agregar piezas al carrito.
   2. «Rastrea tu pedido»: busca el número de pedido y muestra sus etapas.
   Sin JavaScript, la tabla de stock se ve siempre y el enlace «Ver stock»
   lleva a ella.
   ========================================================================== */

// IA: generado
(function (Mayco) {
  'use strict';

  /* ==========================================================
     1. STOCK DE ENTREGA INMEDIATA
     ========================================================== */
  const panel = document.querySelector('[data-stock-panel]');
  const abrirStock = document.querySelector('[data-stock-abrir]');

  if (panel && abrirStock) {
    const mensaje = panel.querySelector('[data-stock-mensaje]');
    panel.hidden = true;

    abrirStock.addEventListener('click', (evento) => {
      evento.preventDefault();
      const abierto = abrirStock.getAttribute('aria-expanded') === 'true';
      abrirStock.setAttribute('aria-expanded', String(!abierto));
      abrirStock.textContent = abierto ? 'Ver stock' : 'Ocultar stock';
      panel.hidden = abierto;
      if (!abierto) {
        panel.querySelector('.stock-panel__title').focus();
      }
    });

    panel.addEventListener('click', (evento) => {
      const boton = evento.target.closest('[data-stock-agregar]');
      if (!boton) return;
      const datos = boton.dataset;
      Mayco.agregarAlCarrito({
        id: datos.id,
        moneda: 'MXN',
        nombre: datos.nombre,
        detalle: datos.detalle,
        precio: Number(datos.precio),
        cantidad: 1,
        max: Number(datos.max),
      });
      const enCarrito = Mayco.leerCarrito().find((item) => item.id === datos.id);
      mensaje.replaceChildren();
      mensaje.append(`Agregado al carrito: ${datos.nombre}, ${datos.detalle.split(' · ')[0]} (${enCarrito ? enCarrito.cantidad : 1} en el carrito). `);
      const enlace = document.createElement('a');
      enlace.href = 'pages/carrito.html';
      enlace.textContent = 'Ver carrito';
      mensaje.append(enlace);
    });
  }

  /* ==========================================================
     2. RASTREA TU PEDIDO
     ========================================================== */
  const formulario = document.querySelector('[data-rastreo]');
  const resultado = document.querySelector('[data-rastreo-resultado]');
  if (!formulario || !resultado || !Mayco.etapasPedido) return;

  const campo = formulario.querySelector('#numero-pedido');

  // Acepta «my1004», «MY 1004», «1004»… y lo deja como «MY-1004»
  function normalizar(texto) {
    const numero = texto.toUpperCase().replace(/[^0-9]/g, '');
    return numero ? `MY-${numero}` : '';
  }

  function buscar(numero) {
    return Mayco.pedidosPrueba[numero] || Mayco.leerPedidos()[numero] || null;
  }

  function pintar(numero, pedido) {
    const titulo = document.createElement('h4');
    titulo.className = 'tracker__pedido';
    titulo.textContent = `Pedido ${numero}`;

    const descripcion = document.createElement('p');
    descripcion.textContent = pedido.descripcion;

    const estado = document.createElement('p');
    estado.className = 'tracker__estado';
    const etapaActual = Mayco.etapasPedido[pedido.etapa - 1];
    estado.textContent = `Estado: ${etapaActual.nombre} (etapa ${pedido.etapa} de ${Mayco.etapasPedido.length})`;

    const lista = document.createElement('ol');
    lista.className = 'timeline';
    Mayco.etapasPedido.forEach((etapa, indice) => {
      const numeroEtapa = indice + 1;
      const item = document.createElement('li');
      item.className = 'timeline__item';
      let textoEstado = 'pendiente';
      if (numeroEtapa < pedido.etapa) {
        item.classList.add('is-done');
        textoEstado = 'completada';
      } else if (numeroEtapa === pedido.etapa) {
        item.classList.add('is-active');
        item.setAttribute('aria-current', 'step');
        textoEstado = 'en curso';
      }
      const nombre = document.createElement('strong');
      nombre.className = 'timeline__nombre';
      nombre.textContent = etapa.nombre;
      const oculto = document.createElement('span');
      oculto.className = 'visually-hidden';
      oculto.textContent = ` (${textoEstado})`;
      const detalle = document.createElement('span');
      detalle.className = 'timeline__detalle';
      detalle.textContent = etapa.detalle;
      nombre.append(oculto);
      item.append(nombre, detalle);
      lista.append(item);
    });

    resultado.replaceChildren(titulo, descripcion, estado, lista);
    resultado.hidden = false;
  }

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const numero = normalizar(campo.value);
    if (!numero) {
      Mayco.error(campo, 'Escribe tu número de pedido, por ejemplo MY-1004.');
      resultado.hidden = true;
      campo.focus();
      return;
    }
    const pedido = buscar(numero);
    if (!pedido) {
      Mayco.error(campo, `No encontramos el pedido ${numero}. Revisa el número o llámanos.`);
      resultado.hidden = true;
      campo.focus();
      return;
    }
    Mayco.error(campo, '');
    campo.value = numero;
    pintar(numero, pedido);
  });
})(window.Mayco);
