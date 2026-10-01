/* ==========================================================================
   bronce.js · Fundición y Cotización
   Datos del bronce y cálculo de peso. Lo usan calculadora.js y cotizacion.js.
   - Calidades SAE: precio por kg (decisión D7) y densidad aproximada.
   - Lectura de medidas: «2 1/2 x 20», «2-1/2 x 20», «2½ x 20», «63.5 x 500»…
   - Reglas de forma (decisión D6): barra 2 medidas, buje y placa 3.
   ========================================================================== */

// IA: generado
window.Mayco = window.Mayco || {};

(function (Mayco) {
  'use strict';

  /* ==========================================================
     DATOS
     Densidades en g/cm³: valores orientativos de cada familia de
     bronce. REVISAR con la ficha técnica del proveedor.
     ========================================================== */
  Mayco.calidades = {
    sae62:  { nombre: 'SAE 62',  precioKg: 230, densidad: 8.72 },
    sae64:  { nombre: 'SAE 64',  precioKg: 235, densidad: 8.95 },
    sae65:  { nombre: 'SAE 65',  precioKg: 235, densidad: 8.77 },
    sae68:  { nombre: 'SAE 68',  precioKg: 220, densidad: 7.45 },
    sae660: { nombre: 'SAE 660', precioKg: 230, densidad: 8.93 },
    sae600: { nombre: 'SAE 600', precioKg: 220, densidad: 8.80 },   // Densidad genérica del bronce
  };

  Mayco.formas = {
    barra: {
      medidas: 2,
      singular: 'Barra redonda',
      plural: 'Barras redondas',
      ayuda: 'diámetro × largo',
      ejemplo: { in: '2 1/2 x 20', mm: '63.5 x 500' },
    },
    buje: {
      medidas: 3,
      singular: 'Buje',
      plural: 'Bujes',
      ayuda: 'Ø exterior × Ø interior × largo',
      ejemplo: { in: '4 x 2 x 10', mm: '100 x 50 x 250' },
    },
    placa: {
      medidas: 3,
      singular: 'Placa',
      plural: 'Placas',
      ayuda: 'espesor × ancho × largo',
      ejemplo: { in: '1 x 6 x 12', mm: '25 x 150 x 300' },
    },
  };

  const CM_POR_UNIDAD = { in: 2.54, mm: 0.1 };
  const FRACCIONES = { '¼': ' 1/4', '½': ' 1/2', '¾': ' 3/4', '⅛': ' 1/8', '⅜': ' 3/8', '⅝': ' 5/8', '⅞': ' 7/8' };

  /* ==========================================================
     LECTURA DE UN NÚMERO: «2», «2.5», «2,5», «1/2», «2 1/2», «2-1/2», «2½»
     Devuelve NaN si no se entiende.
     ========================================================== */
  function leerNumero(texto) {
    let t = texto.trim();
    Object.keys(FRACCIONES).forEach((simbolo) => { t = t.split(simbolo).join(FRACCIONES[simbolo]); });
    t = t.replace(/(″|"|'')/g, '').replace(/\b(in|pulg|mm)\b\.?/gi, '').replace(',', '.').trim();

    let m = t.match(/^(\d+(?:\.\d+)?)$/);
    if (m) return Number(m[1]);

    m = t.match(/^(\d+)\s*\/\s*(\d+)$/);
    if (m) return Number(m[2]) > 0 ? Number(m[1]) / Number(m[2]) : NaN;

    m = t.match(/^(\d+)(?:\s+|\s*-\s*)(\d+)\s*\/\s*(\d+)$/);
    if (m) return Number(m[3]) > 0 ? Number(m[1]) + Number(m[2]) / Number(m[3]) : NaN;

    return NaN;
  }

  /* ==========================================================
     LECTURA Y VALIDACIÓN DE LAS MEDIDAS
     Devuelve { valores, textos } o { error: 'mensaje' }.
     ========================================================== */
  Mayco.leerMedidas = function (texto, forma) {
    const regla = Mayco.formas[forma];
    const limpio = (texto || '').trim();

    if (!limpio) {
      return { error: `Escribe las medidas: ${regla.ayuda}.` };
    }

    const partes = limpio.split(/\s*[x×*]\s*/i).filter((parte) => parte !== '');
    if (partes.length !== regla.medidas) {
      return { error: `Para ${regla.singular.toLowerCase()} hacen falta ${regla.medidas} medidas: ${regla.ayuda}.` };
    }

    const valores = partes.map(leerNumero);
    if (valores.some((valor) => Number.isNaN(valor))) {
      return { error: 'Hay una medida que no se entiende. Usa números como 4, 2.5 o 2 1/2.' };
    }
    if (valores.some((valor) => valor <= 0)) {
      return { error: 'Todas las medidas deben ser mayores que cero.' };
    }
    if (forma === 'buje' && valores[1] >= valores[0]) {
      return { error: 'El diámetro interior debe ser menor que el exterior.' };
    }

    return { valores, textos: partes.map((parte) => parte.trim()) };
  };

  /* ==========================================================
     CÁLCULO DEL PESO
     Volumen en cm³ × densidad (g/cm³) ÷ 1000 = kg
     ========================================================== */
  Mayco.calcularPeso = function ({ forma, unidad, valores, calidad, piezas }) {
    const factor = CM_POR_UNIDAD[unidad];
    const cm = valores.map((valor) => valor * factor);
    let volumen;
    let formula;

    if (forma === 'barra') {
      const [d, largo] = cm;
      volumen = (Math.PI / 4) * d * d * largo;
      formula = `π/4 × ${Mayco.numero(d)}² × ${Mayco.numero(largo)}`;
    } else if (forma === 'buje') {
      const [de, di, largo] = cm;
      volumen = (Math.PI / 4) * (de * de - di * di) * largo;
      formula = `π/4 × (${Mayco.numero(de)}² − ${Mayco.numero(di)}²) × ${Mayco.numero(largo)}`;
    } else {
      const [espesor, ancho, largo] = cm;
      volumen = espesor * ancho * largo;
      formula = `${Mayco.numero(espesor)} × ${Mayco.numero(ancho)} × ${Mayco.numero(largo)}`;
    }

    const datos = Mayco.calidades[calidad];
    const kgPieza = (volumen * datos.densidad) / 1000;
    const cantidad = piezas || 1;

    return {
      volumen,
      kgPieza,
      kgTotal: kgPieza * cantidad,
      precioPieza: kgPieza * datos.precioKg,
      precioTotal: kgPieza * cantidad * datos.precioKg,
      formula: `${formula} = ${Mayco.numero(volumen)} cm³ · ${datos.nombre}: ${datos.densidad} g/cm³`,
    };
  };

  /* ==========================================================
     TEXTOS DE RESUMEN: «SAE 62 de 4″ × 14″», «3 Barras redondas»
     ========================================================== */
  Mayco.describirMedidas = function (textos, unidad) {
    const marca = unidad === 'in' ? '″' : ' mm';
    return textos.map((texto) => `${texto}${marca}`).join(' × ');
  };

  Mayco.nombrePiezas = function (forma, piezas) {
    const regla = Mayco.formas[forma];
    return piezas === 1 ? `1 ${regla.singular}` : `${piezas} ${regla.plural}`;
  };
})(window.Mayco);
