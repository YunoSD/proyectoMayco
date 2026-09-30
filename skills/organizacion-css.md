# Skill: Organización del CSS

## Cuándo se aplica
- En toda la Fase 3 y en cualquier cambio posterior de estilos.

## Pasos
1. **Orden de carga** en el `<head>` de todas las páginas, siempre el mismo:
   `variables.css` → `base.css` → `layout.css` → `components.css` → `responsive.css`.
2. **Qué va en cada archivo:**
   - `variables.css`: solo custom properties.
   - `base.css`: reset, `html`, `body`, encabezados, enlaces, imágenes y la clase `.visually-hidden`.
   - `layout.css`: `.container`, header, nav, footer y grids generales de sección.
   - `components.css`: un bloque por componente (botón, hero, carrusel, tarjeta promo, tarjeta de producto, opción de cotización, indicador de pasos, formulario, panel de contacto, confirmación y carrito).
   - `responsive.css`: media queries agrupadas por breakpoint y, dentro de cada una, por componente.
3. **Nombres de clase** con BEM sencillo: `.card`, `.card__title`, `.card--promo`. Los estados que pone JavaScript llevan el prefijo `is-` (`.is-open`, `.is-active`).
4. **Comentarios de sección** con este formato:
   ```css
   /* ==========================================================
      COMPONENTE: Botón
      ========================================================== */
   ```
5. **Orden de las propiedades** dentro de cada regla: posición → modelo de caja → tipografía → aspecto → otros.
6. Selectores con poca especificidad: como mucho 2 niveles de anidación, sin IDs y sin `!important`.

## Checklist de verificación
- [ ] Todas las páginas cargan los 5 CSS en el mismo orden.
- [ ] No hay IDs en los selectores ni `!important`.
- [ ] Ninguna media query fuera de `responsive.css`.
- [ ] Cada componente tiene su comentario de cabecera.
- [ ] Sin reglas duplicadas ni vacías.
