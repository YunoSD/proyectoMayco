# Skill: Responsive

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
   - Login/signup: el panel azul ocupa el 100 % y la ilustración se reduce o se oculta.
   - Carrito: la tabla se convierte en tarjetas apiladas.
   - Footer: enlaces en columna.
8. Comprobar en las herramientas de desarrollo del navegador a 320, 375, 768, 1024 y 1440 px.

## Checklist de verificación
- [ ] No hay scroll horizontal en ningún ancho (`document.documentElement.scrollWidth <= innerWidth`).
- [ ] Imágenes sin deformar ni desbordar.
- [ ] Titulares con `clamp()` que no se cortan a 320 px.
- [ ] Menú usable en móvil, que abre, cierra y funciona con teclado.
- [ ] Áreas táctiles de al menos 44 × 44 px (botones, enlaces del menú, puntos del carrusel, iconos).
- [ ] Grids y tarjetas que se reorganizan sin solaparse.
- [ ] Formularios, calculadora y carrito a ancho completo en móvil.
- [ ] Textos largos y URLs con `overflow-wrap: anywhere`.
- [ ] Footer apilado en móvil.
- [ ] El header no tapa contenido (si es `sticky`, con `scroll-margin-top` en las anclas).
- [ ] `:hover` y `:focus-visible` visibles en todos los elementos interactivos.
