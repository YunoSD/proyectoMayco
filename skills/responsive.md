# Skill: Responsive

Con esta skill definí cómo debe adaptarse la web a cada tamaño de pantalla. La IA la siguió al escribir el CSS y en la revisión de la Fase 5. Los puntos 8 a 10 los añadí después, con lo que fue fallando durante el proyecto.

## Cuándo se aplica
- Al escribir el CSS de cualquier componente (Fase 3).
- En la revisión completa de la Fase 5.
- Cada vez que se añade una sección, imagen o formulario nuevo.

## Pasos
1. **Mobile-first:** los estilos base son para 320–767 px. Las pantallas mayores se añaden con `@media (min-width: …)`.
2. **Breakpoints del proyecto** (en `variables.css`, como referencia):
   - `768px`: tablet.
   - `1024px`: escritorio pequeño.
   - `1440px`: escritorio del diseño.
3. **Tipografía fluida:** los titulares usan `clamp(mín, preferido, máx)`. Por ejemplo, el h1 del hero con `clamp(2.5rem, 6vw + 1rem, 5.5rem)`.
4. **Imágenes:** `max-width: 100%` y `height: auto` en general. En las fotos de fondo del hero, `object-fit: cover` con `aspect-ratio`.
5. **Layouts:** `grid` con `repeat(auto-fit, minmax(…, 1fr))` para tarjetas y `flex-wrap` para grupos de botones.
6. **Header:** a partir de 768 px, la navegación en línea; por debajo, botón hamburguesa. Los iconos de usuario y carrito siempre a la vista.
7. **Componentes con adaptación propia:**
   - Carrusel: una diapositiva visible y flechas de 44 px.
   - Cotización: las opciones pasan de 4 columnas a 2 y luego a 1. El indicador de pasos pasa a horizontal arriba en móvil.
   - Mi cuenta: sin header ni footer y sin scroll en ninguna pantalla (`min-height: 100svh`, espacios en `vh`, contraseña y confirmación lado a lado, `overflow: clip` para que `#login`/`#signup` no desplacen la caja).
   - Carrito: la tabla se convierte en tarjetas apiladas.
   - Footer: enlaces en columna.
8. **Tablas:** en móvil, cada fila es una tarjeta y cada celda muestra su encabezado con `data-label` y `td::before { content: attr(data-label) }`. Desde 768 px vuelven a ser tabla. Así no hay desplazamiento lateral.
9. **Rejillas con un número fijo de elementos** (4 pasos, 4 datos, 6 servicios): fijar las columnas en cada breakpoint (2 × 2, 4 en fila, 3 + 3) en lugar de `auto-fit`, para que no quede un elemento suelto (3 + 1).
10. **Elementos ocultos con `position: absolute`** (`.visually-hidden`) dentro de una caja con `overflow`: la caja necesita `position: relative`, o se escapan y crean scroll horizontal.
11. Comprobar en las herramientas de desarrollo del navegador a 320, 375, 768, 1024 y 1440 px.