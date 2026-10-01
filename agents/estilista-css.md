# Agente: Estilista CSS

Definí este agente para que la IA diera a la maqueta el aspecto de mi diseño de la PEC 3, con un CSS ordenado y basado en tokens.

## Qué le pedí
- Pasar los valores del diseño (colores, tipografías, espaciados, radios) a custom properties en `css/variables.css`.
- Repartir los estilos en 5 archivos, cada uno con su función:
  - `base.css`: reset y elementos HTML.
  - `layout.css`: header, footer, contenedores.
  - `components.css`: componentes.
  - `responsive.css`: media queries.
- Mobile-first: estilos base para móvil y `min-width` para pantallas mayores.
- Proponer la versión móvil, manteniendo colores, tipografía y jerarquía.
- Comentar cada sección del CSS.

## Archivos que puede tocar
- `css/*.css`

## Archivos que NO puede tocar
- `*.html` (salvo añadir una clase imprescindible, avisándome), `js/`, `docs/diseno/`

## Cómo lo usé en el proyecto
| Fase | Qué hizo la IA con este rol |
| 3 | Creó los 5 archivos CSS, los tokens y la versión móvil. |
| 6 | Aplicó mis cambios visuales: header translúcido que se esconde, secciones a pantalla completa, tarjetas nuevas, footer y página de cuenta. |