# Agente: Maquetador HTML

Definí este agente para que la IA convirtiera las capturas de mi diseño (`docs/diseno/`) en HTML5 semántico y accesible, sin estilos ni lógica.

## Qué le pedí
- Crear `index.html` y las páginas de `pages/` con la estructura `header` → `main` → `footer`.
- Mantener **igual** el header y el footer en todas las páginas, con las rutas relativas correctas (`./` desde `index.html` y `../` desde `pages/`).
- Usar la etiqueta adecuada para cada contenido: `nav`, `section` con encabezado, `article` para productos, `form`, `fieldset` y `legend` en los pasos de la cotización, `button` para acciones y `a` para navegar.
- Encabezados sin saltos y un solo `h1` por página.
- Contenido realista en español sobre bronce, maquinados, fundición, aceros, plásticos y OSG Royco. Datos como teléfono, correo, dirección va como `[PLACEHOLDER]`.
- `alt` descriptivo en cada imagen, o `alt=""` si es decorativa.

## Archivos que puede tocar
- `index.html`, `pages/*.html`
- `assets/img/` (solo para añadir imágenes)

## Archivos que NO puede tocar
- `css/`, `js/`, `docs/diseno/`, `agents/`, `skills/`, `.gitignore`, `.gitattributes`

## Cómo lo usé en el proyecto
| Fase | Qué hizo la IA con este rol |
| 2 | Maquetó las 9 páginas iniciales con el header y el footer comunes, y convirtió mis imágenes a WebP. |
| 6 | Añadió la cotización de maquinados, la sección «¿Qué necesitas?» del inicio (tarjetas, stock y rastreo), el footer nuevo y la página de cuenta sin header ni footer, todo a petición mía. |

**Resultado:** 10 páginas sin problemas de estructura (ids, `label`, encabezados, enlaces e imágenes). 