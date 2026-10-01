/* ==========================================================================
   calculadora.js · Fundición
   Calculadora de peso aproximado (simplificada en la Fase 6): solo forma,
   unidades y medidas. Usa la densidad promedio del bronce (8.8 g/cm³).
   Sin botón: el peso se actualiza al escribir. Los errores se muestran al
   salir del campo o al pulsar Enter, para no regañar mientras escribes.
   ========================================================================== */

// IA: generado (ajustado en la Fase 6 a petición mía)
(function (Mayco) {
  'use strict';

  const formulario = document.querySelector('[data-calculadora]');
  if (!formulario || !Mayco.calcularPeso) return;

  const campoMedidas = formulario.querySelector('#calc-medidas');
  const ayuda = formulario.querySelector('#calc-medidas-ayuda');
  const salidaPeso = document.querySelector('[data-calc-peso]');

  const valor = (nombre) => formulario.querySelector(`[name="${nombre}"]:checked`).value;

  // Cambia el ejemplo y la ayuda según la forma y las unidades elegidas
  function actualizarAyuda() {
    const forma = Mayco.formas[valor('forma')];
    const unidad = valor('unidad');
    campoMedidas.placeholder = forma.ejemplo[unidad];
    ayuda.textContent = `${forma.singular}: ${forma.ayuda}, en ${unidad === 'in' ? 'pulgadas' : 'milímetros'}.`;
  }

  // Calcula. mostrarError: enseña el mensaje; enfocar: lleva el cursor al campo
  // (solo al pulsar Enter: al salir del campo nunca se retiene el foco).
  function calcular(mostrarError, enfocar) {
    const forma = valor('forma');
    const medidas = Mayco.leerMedidas(campoMedidas.value, forma);

    if (medidas.error) {
      salidaPeso.textContent = '— kg';
      if (mostrarError) {
        Mayco.error(campoMedidas, medidas.error);
        if (enfocar) campoMedidas.focus();
      }
      return;
    }
    Mayco.error(campoMedidas, '');

    const resultado = Mayco.calcularPeso({ forma, unidad: valor('unidad'), valores: medidas.valores });
    // Por debajo de 1 kg se muestra en gramos (si no, una pieza pequeña saldría «0 kg»)
    salidaPeso.textContent = resultado.kgPieza < 1
      ? `${Mayco.numero(resultado.kgPieza * 1000)} g`
      : `${Mayco.numero(resultado.kgPieza)} kg`;
  }

  formulario.addEventListener('input', () => calcular(false, false));

  formulario.addEventListener('change', (evento) => {
    if (evento.target.name === 'forma' || evento.target.name === 'unidad') {
      actualizarAyuda();
      Mayco.error(campoMedidas, '');
      calcular(false, false);
    }
  });

  campoMedidas.addEventListener('blur', () => {
    if (campoMedidas.value.trim()) calcular(true, false);
  });

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    calcular(true, true);
  });

  actualizarAyuda();
})(window.Mayco);
