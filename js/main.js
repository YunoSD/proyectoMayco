/* ==========================================================================
   main.js
   Código común a todas las páginas:
   1. Marca que hay JavaScript (clase .js en <html>).
   2. Utilidades compartidas: formato de dinero, carrito en localStorage
      e indicador de pasos.
   3. Menú hamburguesa accesible.
   4. Contador del carrito en el header.
   Se carga en el <head> SIN defer para que la clase .js exista antes de
   pintar la página; el resto espera a DOMContentLoaded.
   ========================================================================== */

// IA: generado
document.documentElement.classList.add('js');

window.Mayco = window.Mayco || {};

(function (Mayco) {
  'use strict';

  /* ==========================================================
     UTILIDADES: formato de números y dinero
     ========================================================== */
  const formatoNumero = new Intl.NumberFormat('es-MX', { maximumFractionDigits: 2 });
  const formatoDinero = new Intl.NumberFormat('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  Mayco.numero = (valor) => formatoNumero.format(valor);
  Mayco.dinero = (valor, moneda) => `$${formatoDinero.format(valor)} ${moneda}`;

  /* ==========================================================
     UTILIDADES: carrito en localStorage
     Cada artículo: { id, moneda, nombre, detalle, precio, cantidad, max }
     ========================================================== */
  const CLAVE_CARRITO = 'mayco-carrito';

  Mayco.leerCarrito = function () {
    try {
      const datos = JSON.parse(localStorage.getItem(CLAVE_CARRITO));
      return Array.isArray(datos) ? datos : [];
    } catch (error) {
      return [];   // Sin localStorage (modo privado, bloqueado…) el carrito empieza vacío
    }
  };

  Mayco.guardarCarrito = function (articulos) {
    try {
      localStorage.setItem(CLAVE_CARRITO, JSON.stringify(articulos));
    } catch (error) {
      // Si no se puede guardar, la página sigue funcionando; solo se pierde al recargar
    }
    actualizarContador();
  };

  // Añade un artículo; si ya existe (mismo id), suma la cantidad sin pasar del máximo
  Mayco.agregarAlCarrito = function (articulo) {
    const carrito = Mayco.leerCarrito();
    const existente = carrito.find((item) => item.id === articulo.id);
    if (existente) {
      const suma = existente.cantidad + articulo.cantidad;
      existente.cantidad = articulo.max ? Math.min(suma, articulo.max) : suma;
    } else {
      carrito.push(articulo);
    }
    Mayco.guardarCarrito(carrito);
  };

  /* ==========================================================
     UTILIDADES: indicador de pasos (puntos verticales)
     Marca el paso actual y los anteriores como hechos.
     ========================================================== */
  Mayco.marcarPaso = function (lista, pasoActual) {
    if (!lista) return;
    const puntos = lista.querySelectorAll('.steps__item');
    puntos.forEach((punto, indice) => {
      const numero = indice + 1;
      punto.classList.toggle('is-active', numero === pasoActual);
      punto.classList.toggle('is-done', numero < pasoActual);
      if (numero === pasoActual) {
        punto.setAttribute('aria-current', 'step');
      } else {
        punto.removeAttribute('aria-current');
      }
    });
  };

  // Muestra la sección del paso indicado y lleva el foco a su título
  Mayco.mostrarPaso = function (secciones, pasoActual, moverFoco) {
    secciones.forEach((seccion) => {
      seccion.classList.toggle('is-active', Number(seccion.dataset.step) === pasoActual);
    });
    if (!moverFoco) return;
    const activa = [...secciones].find((seccion) => seccion.classList.contains('is-active'));
    const titulo = activa && activa.querySelector('[tabindex="-1"]');
    if (titulo) titulo.focus();
    window.scrollTo({ top: 0 });
  };

  // Muestra u oculta el mensaje de error de un campo
  Mayco.error = function (campo, mensaje) {
    const idError = campo.id ? `${campo.id}-error` : null;
    const zona = idError ? document.getElementById(idError) : null;
    if (mensaje) {
      campo.setAttribute('aria-invalid', 'true');
    } else {
      campo.removeAttribute('aria-invalid');
    }
    if (zona) zona.textContent = mensaje || '';
  };

  /* ==========================================================
     CONTADOR DEL CARRITO EN EL HEADER
     ========================================================== */
  function actualizarContador() {
    const total = Mayco.leerCarrito().reduce((suma, item) => suma + item.cantidad, 0);
    document.querySelectorAll('.icon-link--cart').forEach((enlace) => {
      const contador = enlace.querySelector('[data-cart-count]');
      const texto = enlace.querySelector('.visually-hidden');
      if (contador) {
        contador.textContent = total > 99 ? '99+' : String(total);
        contador.hidden = total === 0;
      }
      if (texto) {
        texto.textContent = total === 0 ? 'Carrito, vacío' : `Carrito, ${total} ${total === 1 ? 'producto' : 'productos'}`;
      }
    });
  }

  /* ==========================================================
     MENÚ HAMBURGUESA
     - aria-expanded en el botón
     - cierra con Esc, al pulsar un enlace, al hacer clic fuera
       y al pasar a pantalla ancha
     ========================================================== */
  function iniciarMenu() {
    const boton = document.querySelector('.site-header__toggle');
    const menu = document.getElementById('menu-principal');
    if (!boton || !menu) return;

    const textoBoton = boton.querySelector('.visually-hidden');

    function abrir() {
      boton.setAttribute('aria-expanded', 'true');
      menu.classList.add('is-open');
      if (textoBoton) textoBoton.textContent = 'Cerrar menú';
    }

    function cerrar(devolverFoco) {
      boton.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
      if (textoBoton) textoBoton.textContent = 'Abrir menú';
      if (devolverFoco) boton.focus();
    }

    const estaAbierto = () => boton.getAttribute('aria-expanded') === 'true';

    boton.addEventListener('click', () => (estaAbierto() ? cerrar(false) : abrir()));

    menu.addEventListener('click', (evento) => {
      if (evento.target.closest('a')) cerrar(false);
    });

    document.addEventListener('keydown', (evento) => {
      if (evento.key === 'Escape' && estaAbierto()) cerrar(true);
    });

    document.addEventListener('click', (evento) => {
      if (estaAbierto() && !evento.target.closest('.site-header')) cerrar(false);
    });

    const anchoTablet = window.matchMedia('(min-width: 768px)');
    anchoTablet.addEventListener('change', (evento) => {
      if (evento.matches) cerrar(false);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    iniciarMenu();
    actualizarContador();
  });
})(window.Mayco);
