/* ==========================================================================
   producto.js · Vista de producto
   Lee ?id= de la URL, pinta el producto y gestiona la compra en 3 pasos
   (decisión D10): 1 producto → 2 número de piezas → 3 agregado al carrito.
   ?paso=2 abre directamente el paso de cantidad (botón «Comprar» del inicio).
   ========================================================================== */

// IA: generado
(function (Mayco) {
  'use strict';

  const flujo = document.querySelector('.product-flow');
  if (!flujo || !Mayco.productos) return;

  const parametros = new URLSearchParams(window.location.search);
  const id = parametros.get('id') || 'exocarb-vx';
  const producto = Mayco.productos[id];
  const secciones = flujo.querySelectorAll('.product-step');
  const indicador = flujo.querySelector('[data-steps]');

  const poner = (selector, texto) => {
    const nodo = flujo.querySelector(selector);
    if (nodo) nodo.textContent = texto;
  };

  /* ==========================================================
     PRODUCTO NO ENCONTRADO
     ========================================================== */
  if (!producto) {
    const tarjeta = flujo.querySelector('.product-card');
    const botonSiguiente = flujo.querySelector('[data-step="1"] [data-next]');
    tarjeta.replaceChildren();

    const titulo = document.createElement('h1');
    titulo.className = 'product-card__name';
    titulo.textContent = 'Producto no encontrado';
    const texto = document.createElement('p');
    texto.textContent = 'El producto que buscas no existe o ya no está en el catálogo.';
    const enlace = document.createElement('a');
    enlace.className = 'btn btn--primary';
    enlace.href = 'osgRoyco.html';
    enlace.textContent = 'Ver catálogo';

    tarjeta.append(titulo, texto);
    botonSiguiente.replaceWith(enlace);
    flujo.querySelector('[data-producto-imagen]').hidden = true;
    indicador.hidden = true;
    document.title = 'Producto no encontrado · Mayco Company';
    return;
  }

  /* ==========================================================
     PASO 1: datos del producto
     ========================================================== */
  poner('[data-producto-ref]', producto.referencia);
  poner('[data-producto-nombre]', producto.nombre);
  poner('[data-producto-desc]', producto.descripcion);
  poner('[data-producto-precio]', `$${producto.precio}`);
  poner('[data-producto-stock]', String(producto.stock));
  poner('[data-producto-entrega]', producto.entrega);
  document.title = `${producto.nombre} · Mayco Company`;

  /* ==========================================================
     PASO 2: número de piezas y total
     ========================================================== */
  const formulario = flujo.querySelector('[data-agregar-carrito]');
  const campoPiezas = formulario.querySelector('#producto-piezas');
  const salidaTotal = formulario.querySelector('[data-precio-total]');

  campoPiezas.max = producto.stock;
  poner('[data-precio-unitario]', `$${producto.precio} dlls`);

  function leerPiezas() {
    const piezas = Number(campoPiezas.value);
    if (!Number.isInteger(piezas) || piezas < 1) {
      return { error: 'Escribe un número entero de piezas, 1 o más.' };
    }
    if (piezas > producto.stock) {
      return { error: `Solo hay ${producto.stock} piezas en existencia.` };
    }
    return { piezas };
  }

  function actualizarTotal() {
    const lectura = leerPiezas();
    salidaTotal.textContent = lectura.error ? '—' : `$${Mayco.numero(lectura.piezas * producto.precio)} dlls`;
  }

  campoPiezas.addEventListener('input', () => {
    Mayco.error(campoPiezas, '');
    actualizarTotal();
  });

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const lectura = leerPiezas();
    if (lectura.error) {
      Mayco.error(campoPiezas, lectura.error);
      campoPiezas.focus();
      return;
    }
    Mayco.agregarAlCarrito({
      id,
      moneda: 'USD',
      nombre: producto.nombre,
      detalle: producto.referencia,
      precio: producto.precio,
      cantidad: lectura.piezas,
      max: producto.stock,
    });
    irA(3);
  });

  /* ==========================================================
     NAVEGACIÓN ENTRE PASOS
     ========================================================== */
  function irA(paso, moverFoco = true) {
    Mayco.mostrarPaso(secciones, paso, moverFoco);
    Mayco.marcarPaso(indicador, paso);
  }

  flujo.addEventListener('click', (evento) => {
    if (evento.target.closest('[data-next]')) irA(2);
    if (evento.target.closest('[data-prev]')) irA(1);
  });

  actualizarTotal();
  irA(parametros.get('paso') === '2' ? 2 : 1, false);
})(window.Mayco);
