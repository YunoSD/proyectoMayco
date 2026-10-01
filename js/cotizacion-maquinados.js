/* ==========================================================================
   cotizacion-maquinados.js · Cotización de maquinados (Fase 6)
   Un maquinado no se puede cotizar por kilo: depende del material, las horas
   de máquina, la preparación, las tolerancias y los acabados. Por eso este
   flujo NO calcula un precio: reúne los datos para que un técnico responda.
   Pasos: 1 servicio · 2 material · 3 pieza · 4 cantidad y acabado ·
   5 datos de contacto · 6 resumen · 7 confirmación con folio.
   ?servicio=corona (desde el carrusel del inicio) marca ese servicio.
   ========================================================================== */

// IA: generado
(function (Mayco) {
  'use strict';

  const formulario = document.querySelector('[data-cotizacion-maquinados]');
  if (!formulario) return;

  const secciones = formulario.querySelectorAll('.quote-step');
  const indicador = document.querySelector('[data-steps]');
  const ULTIMO_PASO = secciones.length;
  let paso = 1;

  const campo = (id) => formulario.querySelector(`#${id}`);
  const opcion = (nombre) => formulario.querySelector(`[name="${nombre}"]:checked`);
  const textoOpcion = (nombre) => {
    const elegida = opcion(nombre);
    if (!elegida) return '';
    const etiqueta = elegida.closest('label');
    return (etiqueta.querySelector('.option-card__label') || etiqueta).textContent.trim();
  };

  /* ==========================================================
     ERRORES DE LOS GRUPOS DE OPCIONES (pasos 1 y 2)
     ========================================================== */
  function zonaError(seccion) {
    let zona = seccion.querySelector('[data-error-paso]');
    if (!zona) {
      const grupo = seccion.querySelector('fieldset');
      zona = document.createElement('p');
      zona.className = 'field__error';
      zona.id = `mq-paso${seccion.dataset.step}-error`;
      zona.setAttribute('aria-live', 'polite');
      zona.setAttribute('data-error-paso', '');
      grupo.after(zona);
      grupo.setAttribute('aria-describedby', zona.id);
    }
    return zona;
  }

  /* ==========================================================
     VALIDACIÓN POR PASO
     ========================================================== */
  function exigir(id, condicion, mensaje) {
    const elemento = campo(id);
    if (!condicion(elemento.value)) {
      Mayco.error(elemento, mensaje);
      return elemento;
    }
    Mayco.error(elemento, '');
    return null;
  }

  function validar(numero) {
    const seccion = formulario.querySelector(`[data-step="${numero}"]`);

    if (numero === 1 || numero === 2) {
      const nombre = numero === 1 ? 'servicio' : 'material';
      const zona = zonaError(seccion);
      if (!opcion(nombre)) {
        zona.textContent = numero === 1 ? 'Elige qué necesitas maquinar.' : 'Elige el material de la pieza.';
        seccion.querySelector(`[name="${nombre}"]`).focus();
        return false;
      }
      zona.textContent = '';
      return true;
    }

    let fallos = [];
    if (numero === 3) {
      fallos = [exigir('mq-descripcion', (v) => v.trim().length >= 10, 'Describe la pieza con al menos 10 caracteres (qué es y sus medidas principales).')];
    }
    if (numero === 4) {
      fallos = [exigir('mq-cantidad', (v) => Number.isInteger(Number(v)) && Number(v) >= 1, 'Escribe un número entero de piezas, 1 o más.')];
    }
    if (numero === 5) {
      fallos = [
        exigir('mq-nombre', (v) => v.trim() !== '', 'Escribe tu nombre.'),
        exigir('mq-correo', (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()), 'Escribe un correo válido (ejemplo: nombre@empresa.com).'),
      ];
    }
    const primero = fallos.find(Boolean);
    if (primero) {
      primero.focus();
      return false;
    }
    return true;
  }

  /* ==========================================================
     RESUMEN (paso 6)
     ========================================================== */
  function pintarResumen() {
    const archivo = campo('mq-archivo').files[0];
    const fecha = campo('mq-fecha').value;
    const filas = [
      ['Servicio', textoOpcion('servicio')],
      ['Material', [textoOpcion('material'), campo('mq-especificacion').value.trim()].filter(Boolean).join(' · ')],
      ['Referencia', [textoOpcion('referencia'), archivo ? `archivo: ${archivo.name}` : ''].filter(Boolean).join(' · ')],
      ['Descripción', campo('mq-descripcion').value.trim()],
      ['Piezas', campo('mq-cantidad').value],
      ['Tolerancia', opcion('tolerancia').value],
      ['Tratamiento', campo('mq-tratamiento').value],
      ['Fecha deseada', fecha ? new Date(`${fecha}T12:00:00`).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Sin fecha'],
      ['Contacto', [campo('mq-nombre').value.trim(), campo('mq-empresa').value.trim(), campo('mq-correo').value.trim(), campo('mq-telefono').value.trim()].filter(Boolean).join(' · ')],
    ];
    const lista = formulario.querySelector('[data-mq-resumen]');
    lista.replaceChildren(...filas.map(([etiqueta, valor]) => {
      const fila = document.createElement('div');
      fila.className = 'summary__row';
      const dt = document.createElement('dt');
      dt.textContent = etiqueta;
      const dd = document.createElement('dd');
      dd.textContent = valor;
      fila.append(dt, dd);
      return fila;
    }));
  }

  /* ==========================================================
     NAVEGACIÓN
     ========================================================== */
  function irA(numero, moverFoco = true) {
    paso = Math.min(Math.max(numero, 1), ULTIMO_PASO);
    if (paso === 6) pintarResumen();
    Mayco.mostrarPaso(secciones, paso, moverFoco);
    Mayco.marcarPaso(indicador, paso);
  }

  formulario.addEventListener('click', (evento) => {
    if (evento.target.closest('[data-next]')) {
      if (validar(paso)) irA(paso + 1);
    } else if (evento.target.closest('[data-prev]')) {
      irA(paso - 1);
    }
  });

  // Enter avanza de paso; solo el paso 6 envía la solicitud
  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if (paso < 6) {
      if (validar(paso)) irA(paso + 1);
      return;
    }
    const folio = `MQ-${1000 + Math.floor(Math.random() * 9000)}`;
    formulario.querySelector('[data-mq-folio]').textContent = folio;
    irA(ULTIMO_PASO);
  });

  formulario.addEventListener('change', (evento) => {
    const seccion = evento.target.closest('.quote-step');
    const zona = seccion && seccion.querySelector('[data-error-paso]');
    if (zona) zona.textContent = '';
    // El campo de archivo solo tiene sentido si hay plano o foto
    if (evento.target.name === 'referencia') {
      formulario.querySelector('[data-campo-archivo]').hidden = evento.target.value === 'medidas';
    }
  });

  /* ==========================================================
     AYUDA («Contacto») y servicio indicado en la URL
     ========================================================== */
  Mayco.iniciarAyuda(() => [
    'Hola, necesito ayuda con una cotización de maquinado.',
    '',
    `Servicio: ${textoOpcion('servicio') || 'sin elegir'}`,
    `Material: ${textoOpcion('material') || 'sin elegir'}`,
    `Descripción: ${campo('mq-descripcion').value.trim() || 'sin indicar'}`,
    `Número de piezas: ${campo('mq-cantidad').value || 'sin indicar'}`,
  ].join('\n'), 'Ayuda con un maquinado');

  const servicio = new URLSearchParams(window.location.search).get('servicio');
  const preseleccion = servicio && formulario.querySelector(`[name="servicio"][value="${CSS.escape(servicio)}"]`);
  if (preseleccion) preseleccion.checked = true;

  irA(1, false);
})(window.Mayco);
