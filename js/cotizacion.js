/* ==========================================================================
   cotizacion.js · Cotización
   Flujo de 7 pasos (captura cotizacionPt1–7):
   1 tipo · 2 calidad · 3 forma y medidas · 4 piezas · 5 resumen ·
   6 precio (Hacer pedido / Agregar al carrito) · 7 confirmación.
   También abre el panel de ayuda del botón «Contacto» con el correo
   rellenado con lo que el cliente ya eligió (decisión D8).
   ========================================================================== */

// IA: generado
(function (Mayco) {
  'use strict';

  const formulario = document.querySelector('[data-cotizacion]');
  if (!formulario || !Mayco.calcularPeso) return;

  const secciones = formulario.querySelectorAll('.quote-step');
  const indicador = document.querySelector('[data-steps]');
  const campoMedidas = formulario.querySelector('#cot-medidas');
  const campoPiezas = formulario.querySelector('#cot-piezas');
  const ayudaMedidas = formulario.querySelector('#cot-medidas-ayuda');
  const ULTIMO_PASO = secciones.length;

  let paso = 1;
  let cotizacion = null;   // Resultado del cálculo del paso 5

  const elegido = (nombre) => {
    const opcion = formulario.querySelector(`[name="${nombre}"]:checked`);
    return opcion ? opcion.value : '';
  };

  const textoOpcion = (nombre) => {
    const opcion = formulario.querySelector(`[name="${nombre}"]:checked`);
    return opcion ? opcion.closest('label').textContent.trim() : '';
  };

  /* ==========================================================
     ERRORES DE LOS PASOS 1 Y 2 (grupos de opciones)
     Se crea un mensaje debajo de cada grupo, enlazado con aria-describedby.
     ========================================================== */
  function zonaError(seccion) {
    let zona = seccion.querySelector('[data-error-paso]');
    if (!zona) {
      const grupo = seccion.querySelector('fieldset');
      zona = document.createElement('p');
      zona.className = 'field__error';
      zona.id = `paso${seccion.dataset.step}-error`;
      zona.setAttribute('aria-live', 'polite');
      zona.setAttribute('data-error-paso', '');
      grupo.after(zona);
      grupo.setAttribute('aria-describedby', zona.id);
    }
    return zona;
  }

  /* ==========================================================
     VALIDACIÓN DE CADA PASO
     Devuelve true si se puede avanzar.
     ========================================================== */
  function validar(numero) {
    const seccion = formulario.querySelector(`[data-step="${numero}"]`);

    if (numero === 1 || numero === 2) {
      const nombre = numero === 1 ? 'tipo' : 'calidad';
      const zona = zonaError(seccion);
      if (!elegido(nombre)) {
        zona.textContent = numero === 1 ? 'Elige un tipo de bronce.' : 'Elige una calidad de bronce.';
        seccion.querySelector(`[name="${nombre}"]`).focus();
        return false;
      }
      zona.textContent = '';
    }

    if (numero === 3) {
      const medidas = Mayco.leerMedidas(campoMedidas.value, elegido('forma'));
      if (medidas.error) {
        Mayco.error(campoMedidas, medidas.error);
        campoMedidas.focus();
        return false;
      }
      Mayco.error(campoMedidas, '');
    }

    if (numero === 4) {
      const piezas = Number(campoPiezas.value);
      if (!Number.isInteger(piezas) || piezas < 1) {
        Mayco.error(campoPiezas, 'Escribe un número entero de piezas, 1 o más.');
        campoPiezas.focus();
        return false;
      }
      Mayco.error(campoPiezas, '');
    }

    return true;
  }

  /* ==========================================================
     RESUMEN Y CÁLCULO (pasos 4, 5 y 6)
     ========================================================== */
  function actualizarResumen() {
    const forma = elegido('forma');
    const unidad = elegido('unidad');
    const calidad = elegido('calidad');
    const medidas = Mayco.leerMedidas(campoMedidas.value, forma);
    if (medidas.error || !calidad) return;

    const detalle = `${Mayco.calidades[calidad].nombre} de ${Mayco.describirMedidas(medidas.textos, unidad)}`;
    const piezas = Number(campoPiezas.value) || 1;

    formulario.querySelector('[data-resumen-forma]').textContent = Mayco.formas[forma].singular;
    formulario.querySelectorAll('[data-resumen-detalle]').forEach((nodo) => { nodo.textContent = detalle; });
    formulario.querySelectorAll('[data-resumen-cantidad]').forEach((nodo) => {
      nodo.textContent = Mayco.nombrePiezas(forma, piezas);
    });

    // La imagen provisional es de una barra: se oculta para bujes y placas
    formulario.querySelectorAll('[data-resumen-imagen]').forEach((imagen) => {
      imagen.hidden = forma !== 'barra';
    });

    cotizacion = Mayco.calcularPeso({ forma, unidad, valores: medidas.valores, calidad, piezas });
    cotizacion.piezas = piezas;
    cotizacion.detalle = detalle;
    cotizacion.forma = forma;
    cotizacion.calidad = calidad;
    cotizacion.medidas = Mayco.describirMedidas(medidas.textos, unidad);

    formulario.querySelector('[data-cot-peso]').textContent = `${Mayco.numero(cotizacion.kgTotal)} kg`;
    formulario.querySelector('[data-cot-precio]').textContent = Mayco.dinero(cotizacion.precioTotal, 'MXN');
  }

  /* ==========================================================
     NAVEGACIÓN ENTRE PASOS
     ========================================================== */
  function irA(numero, moverFoco = true) {
    paso = Math.min(Math.max(numero, 1), ULTIMO_PASO);
    if (paso >= 4) actualizarResumen();
    Mayco.mostrarPaso(secciones, paso, moverFoco);
    Mayco.marcarPaso(indicador, paso);
  }

  formulario.addEventListener('click', (evento) => {
    if (evento.target.closest('[data-next]')) {
      if (validar(paso)) irA(paso + 1);
    } else if (evento.target.closest('[data-prev]')) {
      irA(paso - 1);
    } else if (evento.target.closest('[data-agregar-carrito]')) {
      agregarAlCarrito();
    }
  });

  // Enter dentro de un campo avanza de paso en lugar de enviar el pedido
  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if (paso < 6) {
      if (validar(paso)) irA(paso + 1);
      return;
    }
    confirmar('Pedido mandado correctamente', false);
  });

  // Al elegir una opción se borra el error del grupo
  formulario.addEventListener('change', (evento) => {
    const seccion = evento.target.closest('.quote-step');
    const zona = seccion && seccion.querySelector('[data-error-paso]');
    if (zona) zona.textContent = '';
    if (evento.target.name === 'forma' || evento.target.name === 'unidad') {
      actualizarAyudaMedidas();
      Mayco.error(campoMedidas, '');
    }
  });

  function actualizarAyudaMedidas() {
    const forma = Mayco.formas[elegido('forma')];
    const unidad = elegido('unidad');
    campoMedidas.placeholder = forma.ejemplo[unidad];
    ayudaMedidas.textContent = `${forma.singular}: ${forma.ayuda}, en ${unidad === 'in' ? 'pulgadas' : 'milímetros'}.`;
  }

  /* ==========================================================
     PASO 6 → 7: pedido o carrito
     ========================================================== */
  function agregarAlCarrito() {
    if (!cotizacion) return;
    Mayco.agregarAlCarrito({
      id: `bronce-${cotizacion.calidad}-${cotizacion.forma}-${cotizacion.medidas}`,
      moneda: 'MXN',
      nombre: `${Mayco.formas[cotizacion.forma].singular} de bronce ${Mayco.calidades[cotizacion.calidad].nombre}`,
      detalle: `${cotizacion.medidas} · ${Mayco.numero(cotizacion.kgPieza)} kg por pieza`,
      precio: Math.round(cotizacion.precioPieza * 100) / 100,
      cantidad: cotizacion.piezas,
    });
    confirmar('Agregado al carrito', true);
  }

  function confirmar(titulo, verCarrito) {
    formulario.querySelector('[data-confirmacion-titulo]').textContent = titulo;
    const enlace = formulario.querySelector('[data-ver-carrito]');
    if (enlace) enlace.hidden = !verCarrito;
    irA(ULTIMO_PASO);
  }

  /* ==========================================================
     PANEL DE AYUDA («Contacto»)
     Se abre como ventana modal: foco dentro, Esc o clic fuera para cerrar.
     ========================================================== */
  const panel = document.getElementById('ayuda-cotizacion');
  if (panel) {
    const cerrarBoton = panel.querySelector('[data-cerrar-ayuda]');
    const titulo = panel.querySelector('.help-panel__title');
    const correo = panel.querySelector('[data-ayuda-correo]');
    let origen = null;

    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'true');
    if (cerrarBoton) cerrarBoton.hidden = false;

    function textoCorreo() {
      const lineas = [
        'Hola, necesito ayuda con una cotización.',
        '',
        `Tipo de bronce: ${textoOpcion('tipo') || 'sin elegir'}`,
        `Calidad: ${textoOpcion('calidad') || 'sin elegir'}`,
        `Forma: ${textoOpcion('forma') || 'sin elegir'}`,
        `Medidas: ${campoMedidas.value.trim() || 'sin indicar'} (${textoOpcion('unidad')})`,
        `Número de piezas: ${campoPiezas.value || 'sin indicar'}`,
      ];
      return lineas.join('\n');
    }

    function abrir(boton) {
      origen = boton;
      if (correo) {
        const asunto = encodeURIComponent('Ayuda con mi cotización');
        correo.href = `mailto:ventas@ejemplo.com?subject=${asunto}&body=${encodeURIComponent(textoCorreo())}`;
      }
      panel.classList.add('is-open');
      titulo.focus();
    }

    function cerrar() {
      panel.classList.remove('is-open');
      if (origen) origen.focus();
    }

    document.addEventListener('click', (evento) => {
      const boton = evento.target.closest('.btn--contact');
      if (boton) {
        evento.preventDefault();
        abrir(boton);
      } else if (evento.target === panel || evento.target.closest('[data-cerrar-ayuda]')) {
        cerrar();
      }
    });

    panel.addEventListener('keydown', (evento) => {
      if (evento.key === 'Escape') {
        cerrar();
        return;
      }
      // Mantiene el foco dentro del panel mientras está abierto
      if (evento.key === 'Tab') {
        const enfocables = [...panel.querySelectorAll('a[href], button:not([hidden])')];
        const primero = enfocables[0];
        const ultimo = enfocables[enfocables.length - 1];
        if (evento.shiftKey && (document.activeElement === primero || document.activeElement === titulo)) {
          evento.preventDefault();
          ultimo.focus();
        } else if (!evento.shiftKey && document.activeElement === ultimo) {
          evento.preventDefault();
          primero.focus();
        }
      }
    });
  }

  actualizarAyudaMedidas();
  irA(1, false);
})(window.Mayco);
