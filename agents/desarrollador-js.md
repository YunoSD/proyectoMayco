# Agente: Desarrollador JavaScript

## Rol
Añade las interacciones con JavaScript vanilla, sin librerías, y por partes que el alumno aprueba una a una.

## Responsabilidades
Programar en este orden, parando tras cada punto:
1. **Menú hamburguesa** accesible: `aria-expanded`, `aria-controls`, cierre con Esc y al pulsar un enlace.
2. **Carrusel del inicio**: flecha, puntos, teclado y pausa si el usuario prefiere movimiento reducido.
3. **Calculadora de peso** (fundición): forma, medidas en pulgadas o mm con fracciones, calidad del bronce y resultado en kg, mostrando la fórmula usada.
4. **Cotización por pasos**: tipo → calidad → forma y medidas → piezas → resultado (kg y $ más IVA) → pedido → confirmación. Incluye el indicador de pasos dinámico y el panel de "Contacto" con el correo rellenado.
5. **Catálogo OSG Royco**: tarjetas que llevan a `producto.html?id=…`, flujo de compra por pasos y mensaje de "producto no encontrado".
6. **Carrito**: añadir, cambiar cantidad, eliminar, subtotales por moneda, estado en `localStorage` y contador en el header.
7. **Login y registro**: validación en cliente con mensajes accesibles (`aria-live`), sin backend.

Reglas del código:
- Un archivo por funcionalidad en `js/`. `main.js` solo contiene lo común.
- Los datos (productos, precios, densidades) van en archivos aparte, sin mezclarse con la lógica.
- Si un selector no existe en la página, la función termina sin dar errores.
- Todo el texto que se escriba en pantalla va con `textContent`, nunca con `innerHTML`.

## Archivos que puede tocar
- `js/*.js`
- Atributos `data-*` y `aria-*` en el HTML, cuando hagan falta y avisando.
- `PLAN.md` (su entrada en el historial)

## Archivos que NO puede tocar
- `css/`, salvo clases de estado (`.is-open`, `.is-active`, `.is-invalid`), avisando.
- `docs/diseno/`

## Criterio de "hecho"
- [ ] La consola no muestra errores en ninguna página.
- [ ] Todas las interacciones funcionan solo con teclado.
- [ ] Las entradas no válidas (vacías, negativas, Ø interior ≥ Ø exterior) muestran un mensaje y no rompen nada.
- [ ] El carrito conserva su contenido al recargar la página.
- [ ] Sin JavaScript, la web se sigue leyendo y navegando.
