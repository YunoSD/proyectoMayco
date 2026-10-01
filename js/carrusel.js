/* ==========================================================================
   carrusel.js · Inicio
   Carrusel con flechas, puntos y teclado. Se apoya en el scroll-snap del CSS,
   así que también se puede deslizar con el dedo. No avanza solo, para no
   molestar a quien lee ni a quien prefiere menos movimiento.
   ========================================================================== */

// IA: generado
(function () {
  'use strict';

  document.querySelectorAll('.carousel').forEach(iniciarCarrusel);

  function iniciarCarrusel(carrusel) {
    const pista = carrusel.querySelector('.carousel__track');
    const diapositivas = [...carrusel.querySelectorAll('.carousel__slide')];
    const puntos = [...carrusel.querySelectorAll('.carousel__dot')];
    const anterior = carrusel.querySelector('.carousel__arrow--prev');
    const siguiente = carrusel.querySelector('.carousel__arrow--next');
    if (!pista || diapositivas.length === 0) return;

    let actual = 0;

    // Desplaza la pista hasta la diapositiva indicada (con vuelta al principio/final)
    function irA(indice) {
      const total = diapositivas.length;
      const destino = (indice + total) % total;
      pista.scrollTo({ left: diapositivas[destino].offsetLeft - pista.offsetLeft, behavior: movimiento() });
    }

    // Respeta la preferencia de movimiento reducido del sistema
    function movimiento() {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    }

    // Actualiza puntos y estado según la diapositiva visible
    function marcar(indice) {
      actual = indice;
      diapositivas.forEach((diapositiva, i) => {
        const visible = i === indice;
        diapositiva.classList.toggle('is-active', visible);
        // Los enlaces de las diapositivas ocultas no reciben el foco con Tab
        diapositiva.querySelectorAll('a').forEach((enlace) => {
          if (visible) enlace.removeAttribute('tabindex');
          else enlace.setAttribute('tabindex', '-1');
        });
      });
      puntos.forEach((punto, i) => {
        if (i === indice) punto.setAttribute('aria-current', 'true');
        else punto.removeAttribute('aria-current');
      });
    }

    // Detecta la diapositiva visible al terminar de desplazarse
    let espera;
    pista.addEventListener('scroll', () => {
      clearTimeout(espera);
      espera = setTimeout(() => {
        const indice = Math.round(pista.scrollLeft / pista.clientWidth);
        if (indice !== actual) marcar(Math.min(indice, diapositivas.length - 1));
      }, 80);
    });

    if (anterior) anterior.addEventListener('click', () => irA(actual - 1));
    if (siguiente) siguiente.addEventListener('click', () => irA(actual + 1));
    puntos.forEach((punto, i) => punto.addEventListener('click', () => irA(i)));

    // Flechas del teclado cuando el foco está dentro del carrusel
    carrusel.addEventListener('keydown', (evento) => {
      if (evento.key === 'ArrowRight') {
        evento.preventDefault();
        irA(actual + 1);
      } else if (evento.key === 'ArrowLeft') {
        evento.preventDefault();
        irA(actual - 1);
      }
    });

    marcar(0);
  }
})();
