/* ==========================================================================
   calculadora.js · Fundición
   Calculadora de peso aproximado. Usa los datos y el cálculo de bronce.js.
   ========================================================================== */

// IA: generado
(function (Mayco) {
  'use strict';

  const formulario = document.querySelector('[data-calculadora]');
  if (!formulario || !Mayco.calcularPeso) return;

  const campoMedidas = formulario.querySelector('#calc-medidas');
  const campoPiezas = formulario.querySelector('#calc-piezas');
  const ayuda = formulario.querySelector('#calc-medidas-ayuda');
  const salidaPeso = document.querySelector('[data-calc-peso]');
  const salidaFormula = document.querySelector('[data-calc-formula]');

  const valor = (nombre) => formulario.querySelector(`[name="${nombre}"]:checked`).value;

  // Cambia el ejemplo y la ayuda según la forma y las unidades elegidas
  function actualizarAyuda() {
    const forma = Mayco.formas[valor('forma')];
    const unidad = valor('unidad');
    campoMedidas.placeholder = forma.ejemplo[unidad];
    ayuda.textContent = `${forma.singular}: ${forma.ayuda}, en ${unidad === 'in' ? 'pulgadas' : 'milímetros'}.`;
  }

  formulario.addEventListener('change', (evento) => {
    if (evento.target.name === 'forma' || evento.target.name === 'unidad') {
      actualizarAyuda();
      Mayco.error(campoMedidas, '');
    }
  });

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const forma = valor('forma');
    const unidad = valor('unidad');
    const medidas = Mayco.leerMedidas(campoMedidas.value, forma);

    if (medidas.error) {
      Mayco.error(campoMedidas, medidas.error);
      campoMedidas.focus();
      return;
    }
    Mayco.error(campoMedidas, '');

    const piezas = Math.max(1, Math.floor(Number(campoPiezas.value) || 1));
    campoPiezas.value = piezas;

    const resultado = Mayco.calcularPeso({
      forma,
      unidad,
      valores: medidas.valores,
      calidad: formulario.querySelector('#calc-calidad').value,
      piezas,
    });

    salidaPeso.textContent = `${Mayco.numero(resultado.kgTotal)} kg`;
    salidaFormula.textContent = piezas > 1
      ? `${Mayco.numero(resultado.kgPieza)} kg por pieza × ${piezas} piezas. Volumen: ${resultado.formula}`
      : `Volumen: ${resultado.formula}`;
  });

  actualizarAyuda();
})(window.Mayco);
