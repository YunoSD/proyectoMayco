# Skill: Tokens de diseño

Con esta skill definí que todos los valores de mi diseño (colores, fuentes, espacios, radios) vivan en un solo archivo, `css/variables.css`, para poder cambiarlos en un solo sitio.

## Cuándo se aplica
- Al crear `css/variables.css` (Fase 3).
- Cada vez que haga falta un color, tamaño, espaciado o radio nuevo.

## Pasos
1. Todos los valores del diseño viven en `:root` dentro de `css/variables.css`. Ningún otro archivo escribe un hex, una fuente o un tamaño a mano.
2. Los nombres describen la función, no el valor (`--color-primario`, no `--azul`).
3. Tokens de partida, medidos en las capturas (Fase 0):

| Token | Valor | Uso |
|---|---|---|
| `--color-primario` | `#516FA6` | Botón principal, panel del login, acentos |
| `--color-primario-hover` | *(un 10 % más oscuro, a definir)* | Hover del botón principal |
| `--color-texto` | `#000000` | Texto y titulares |
| `--color-texto-invertido` | `#FFFFFF` | Texto sobre foto o sobre azul |
| `--color-fondo` | `#F5F5F5` | Fondo general |
| `--color-superficie` | `#F2F2F2` | Tarjetas, opciones SAE |
| `--color-seccion` | `#E8E8E8` | Fondo de zonas (tarjetas, carrusel) |
| `--color-caja` | `#E6E6E6` | Caja de opciones, input de medidas |
| `--color-btn-secundario` | `#D7D7D7` | "Mostrar más" |
| `--color-input` | `#DBDBDB` | Campos del login y signup |
| `--color-footer` | `#DCDCDC` | Footer |
| `--color-deshabilitado` | `#CECECE` | Botones inactivos |
| `--color-indicador` | `#7B7B7B` | Puntos del carrusel y de los pasos |
| `--font-titulos` | `"Kumbh Sans", system-ui, sans-serif` | Titulares y cuerpo |
| `--font-ui` | `"Archivo", system-ui, sans-serif` | Botones y navegación |
| `--espacio-1` … `--espacio-7` | 0.5 / 1 / 1.5 / 2 / 3 / 4 / 6 rem | Escala de 8 px |
| `--radio-boton` | `4px` | Botones |
| `--radio-input` | `8px` | Campos |
| `--radio-tarjeta` | `12px` | Tarjetas, cajas, panel del login |
| `--ancho-max` | `1200px` | Contenedor |

4. Si una captura muestra un valor que no está en la tabla, se ajusta al token más cercano. Si la diferencia es clara, se añade un token nuevo y se anota en `PLAN.md`.