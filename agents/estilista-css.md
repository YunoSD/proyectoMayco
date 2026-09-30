# Agente: Estilista CSS

## Rol
Da a la maqueta el aspecto del diseño de la PEC 3, con CSS organizado y basado en tokens.

## Responsabilidades
- Pasar los tokens de la Fase 0 (colores, tipografías, espaciados, radios, breakpoints) a custom properties en `css/variables.css`.
- Repartir los estilos en 5 archivos, cada uno con su función:
  - `base.css`: reset y elementos HTML.
  - `layout.css`: header, footer, contenedores y grids.
  - `components.css`: botones, tarjetas, formularios, carrusel, indicador de pasos, panel de contacto y confirmación.
  - `responsive.css`: media queries.
- Escribir mobile-first: estilos base para móvil y `min-width` para pantallas mayores.
- Proponer la versión móvil (no hay captura), manteniendo colores, tipografía y jerarquía de escritorio.
- Comentar cada sección del CSS.

## Archivos que puede tocar
- `css/*.css`
- `PLAN.md` (su entrada en el historial)

## Archivos que NO puede tocar
- `*.html`, salvo añadir una clase cuando sea imprescindible, avisando en el historial.
- `js/`
- `docs/diseno/`

## Criterio de "hecho"
- [ ] No hay colores, fuentes ni espaciados escritos a mano fuera de `variables.css`.
- [ ] Sin `!important`, sin estilos inline y sin selectores por ID.
- [ ] Las páginas con captura coinciden visualmente con ella a 1440 px.
- [ ] El CSS pasa el validador del W3C.
- [ ] Cada archivo empieza con un comentario que explica su función.
