/* ==========================================================================
   pedidos.js · Datos para «Rastrea tu pedido» (inicio)
   - Etapas de un pedido de fundición, en orden.
   - Pedidos de prueba MY-1001 … MY-1007, uno en cada etapa.
   Los pedidos reales que se hacen en la web (cotización y carrito) se
   guardan en el navegador con Mayco.crearPedido() y empiezan en la etapa 1.
   DATOS DE PRUEBA: ver README.md, apartado 12 «Datos de prueba»
   ========================================================================== */

// IA: generado
window.Mayco = window.Mayco || {};

window.Mayco.etapasPedido = [
  { nombre: 'Pedido recibido', detalle: 'Revisamos tu pedido y preparamos el material.' },
  { nombre: 'Fundición', detalle: 'Fundimos la aleación y la vaciamos en el molde.' },
  { nombre: 'Desmolde y limpieza', detalle: 'La pieza se enfría, sale del molde y se limpia de arena y rebabas.' },
  { nombre: 'Maquinado', detalle: 'Dejamos la pieza a la medida final.' },
  { nombre: 'Inspección y últimos detalles', detalle: 'Revisamos medidas y acabado antes de entregarla.' },
  { nombre: 'Listo para entrega', detalle: 'Puedes recogerlo o te lo enviamos.' },
  { nombre: 'Entregado', detalle: 'El pedido ya está en tus manos.' },
];

window.Mayco.pedidosPrueba = {
  'MY-1001': { descripcion: '4 Bujes SAE 64 de 3″ × 2″ × 8″', etapa: 1, fecha: '2026-09-28' },
  'MY-1002': { descripcion: '2 Coronas sinfín SAE 65 según modelo', etapa: 2, fecha: '2026-09-22' },
  'MY-1003': { descripcion: '10 Barras redondas SAE 62 de 2 1/2″ × 12″', etapa: 3, fecha: '2026-09-18' },
  'MY-1004': { descripcion: '6 Bujes con pestaña SAE 660 según plano', etapa: 4, fecha: '2026-09-15' },
  'MY-1005': { descripcion: '1 Placa SAE 68 de 1″ × 10″ × 20″', etapa: 5, fecha: '2026-09-10' },
  'MY-1006': { descripcion: '20 Bujes SAE 64 de 1 1/2″ × 1″ × 6″', etapa: 6, fecha: '2026-09-05' },
  'MY-1007': { descripcion: '3 Barras redondas SAE 660 de 4″ × 14″', etapa: 7, fecha: '2026-08-29' },
};
