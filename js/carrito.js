/* ==========================================================================
   carrito.js · Carrito
   Pinta el carrito guardado en localStorage agrupado por moneda (decisión D12):
   - Herramientas OSG Royco en USD (subtotal).
   - Bronce en MXN (subtotal + IVA 16 % + total).
   Las dos monedas no se suman. Permite cambiar cantidades, eliminar y
   finalizar el pedido (simulado: no hay servidor).
   ========================================================================== */

// IA: generado
(function (Mayco) {
  'use strict';

  const vacio = document.querySelector('[data-cart-empty]');
  const contenido = document.querySelector('[data-cart-content]');
  if (!vacio || !contenido) return;

  const aviso = document.querySelector('[data-cart-aviso]');
  const IVA = 0.16;

  const anunciar = (texto) => { if (aviso) aviso.textContent = texto; };

  /* ==========================================================
     UNA FILA DE LA TABLA (creada con nodos y textContent)
     ========================================================== */
  function crearFila(item, indice) {
    const idCampo = `cantidad-${item.moneda}-${indice}`;   // id válido aunque el del producto tenga espacios
    const fila = document.createElement('tr');

    const celdaProducto = document.createElement('td');
    celdaProducto.className = 'cart-table__product';
    const nombre = document.createElement('strong');
    nombre.textContent = item.nombre;
    const detalle = document.createElement('span');
    detalle.className = 'cart-table__detail';
    detalle.textContent = item.detalle;
    celdaProducto.append(nombre, detalle);

    const celdaPrecio = document.createElement('td');
    celdaPrecio.dataset.label = 'Precio';   // En móvil, la fila es una tarjeta con etiquetas (CSS)
    celdaPrecio.textContent = Mayco.dinero(item.precio, item.moneda);

    const celdaCantidad = document.createElement('td');
    celdaCantidad.dataset.label = 'Cantidad';
    const etiqueta = document.createElement('label');
    etiqueta.className = 'visually-hidden';
    etiqueta.htmlFor = idCampo;
    etiqueta.textContent = `Cantidad de ${item.nombre}`;
    const cantidad = document.createElement('input');
    cantidad.className = 'field__input cart-table__qty';
    cantidad.type = 'number';
    cantidad.id = idCampo;
    cantidad.min = '1';
    if (item.max) cantidad.max = String(item.max);
    cantidad.step = '1';
    cantidad.inputMode = 'numeric';
    cantidad.value = String(item.cantidad);
    cantidad.dataset.id = item.id;
    celdaCantidad.append(etiqueta, cantidad);

    const celdaSubtotal = document.createElement('td');
    celdaSubtotal.dataset.label = 'Subtotal';
    celdaSubtotal.textContent = Mayco.dinero(item.precio * item.cantidad, item.moneda);

    const celdaEliminar = document.createElement('td');
    celdaEliminar.className = 'cart-table__actions';
    const eliminar = document.createElement('button');
    eliminar.className = 'cart-table__remove';
    eliminar.type = 'button';
    eliminar.dataset.eliminar = item.id;
    eliminar.textContent = 'Eliminar';
    const oculto = document.createElement('span');
    oculto.className = 'visually-hidden';
    oculto.textContent = ` ${item.nombre}`;
    eliminar.append(oculto);
    celdaEliminar.append(eliminar);

    fila.append(celdaProducto, celdaPrecio, celdaCantidad, celdaSubtotal, celdaEliminar);
    return fila;
  }

  /* ==========================================================
     PINTAR TODO EL CARRITO
     ========================================================== */
  function pintar() {
    const carrito = Mayco.leerCarrito();
    vacio.hidden = carrito.length > 0;
    contenido.hidden = carrito.length === 0;

    contenido.querySelectorAll('[data-cart-group]').forEach((grupo) => {
      const moneda = grupo.dataset.cartGroup;
      const articulos = carrito.filter((item) => item.moneda === moneda);
      const cuerpo = grupo.querySelector('[data-cart-items]');

      grupo.hidden = articulos.length === 0;
      cuerpo.replaceChildren(...articulos.map(crearFila));

      const subtotal = articulos.reduce((suma, item) => suma + item.precio * item.cantidad, 0);
      grupo.querySelector('[data-cart-subtotal]').textContent = Mayco.dinero(subtotal, moneda);

      const iva = grupo.querySelector('[data-cart-iva]');
      const total = grupo.querySelector('[data-cart-total]');
      if (iva) iva.textContent = Mayco.dinero(subtotal * IVA, moneda);
      if (total) total.textContent = Mayco.dinero(subtotal * (1 + IVA), moneda);
    });
  }

  /* ==========================================================
     CAMBIAR CANTIDAD Y ELIMINAR
     ========================================================== */
  contenido.addEventListener('change', (evento) => {
    const campo = evento.target.closest('.cart-table__qty');
    if (!campo) return;
    const carrito = Mayco.leerCarrito();
    const item = carrito.find((articulo) => articulo.id === campo.dataset.id);
    if (!item) return;

    let cantidad = Math.floor(Number(campo.value));
    if (!Number.isFinite(cantidad) || cantidad < 1) cantidad = 1;
    if (item.max && cantidad > item.max) cantidad = item.max;
    item.cantidad = cantidad;

    Mayco.guardarCarrito(carrito);
    pintar();
    anunciar(`${item.nombre}: ${cantidad} ${cantidad === 1 ? 'pieza' : 'piezas'}.`);
    const nuevoCampo = document.getElementById(campo.id);
    if (nuevoCampo) nuevoCampo.focus();
  });

  contenido.addEventListener('click', (evento) => {
    const boton = evento.target.closest('[data-eliminar]');
    if (boton) {
      const carrito = Mayco.leerCarrito();
      const item = carrito.find((articulo) => articulo.id === boton.dataset.eliminar);
      Mayco.guardarCarrito(carrito.filter((articulo) => articulo.id !== boton.dataset.eliminar));
      pintar();
      anunciar(`${item ? item.nombre : 'Producto'} eliminado del carrito.`);
      document.querySelector('[data-cart-titulo]').focus();
      return;
    }

    if (evento.target.closest('[data-cart-finalizar]')) finalizar();
  });

  /* ==========================================================
     FINALIZAR PEDIDO (simulado)
     Vacía el carrito y muestra la confirmación del diseño.
     ========================================================== */
  function finalizar() {
    Mayco.guardarCarrito([]);
    contenido.hidden = true;
    vacio.hidden = true;

    const confirmacion = document.createElement('section');
    confirmacion.className = 'confirmation';
    confirmacion.setAttribute('aria-labelledby', 'pedido-titulo');

    const imagen = document.createElement('img');
    imagen.className = 'confirmation__image';
    imagen.src = '../assets/img/confirmacion-erizo.webp';
    imagen.alt = 'Erizo saludando';
    imagen.width = 160;
    imagen.height = 235;

    const titulo = document.createElement('h2');
    titulo.className = 'confirmation__title';
    titulo.id = 'pedido-titulo';
    titulo.tabIndex = -1;
    titulo.textContent = 'Pedido mandado correctamente';

    const enlace = document.createElement('a');
    enlace.className = 'btn btn--primary';
    enlace.href = '../index.html';
    enlace.textContent = 'Volver al inicio';

    confirmacion.append(titulo, imagen, enlace);
    contenido.after(confirmacion);
    titulo.focus();
  }

  pintar();
})(window.Mayco);
