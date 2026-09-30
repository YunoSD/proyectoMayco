# PLAN — Mayco Company · Proyecto con IA (PEC 6)

Historial completo del proyecto: objetivo, decisiones, fases y registro de lo que se hizo en cada una.

---

## 1. Objetivo

Construir una segunda versión completa de la web de **Mayco Company**, una empresa que fabrica y vende bronce y otros metales y aleaciones. También vende herramientas de corte (distribuidor OSG Royco), maquinados, fundición, aceros y plásticos de ingeniería.

La web se hace con apoyo de IA, partiendo del diseño de Figma de la PEC 3, para después compararla con el proyecto manual.

- Diseño (Figma): https://www.figma.com/design/Apr7U6klWvMve566snTzIF/PEC2?node-id=0-1&p=f
- Capturas del diseño: [`docs/diseno/`](docs/diseno/)
- Prompts utilizados: [`docs/prompts/`](docs/prompts/)
- Tecnología: HTML5, CSS3 y JavaScript vanilla, sin frameworks, librerías ni paso de build.

---

## 2. Reglas de trabajo

- La IA trabaja por fases y se detiene al final de cada una para que el alumno revise.
- **Commits y push los hace el alumno con GitHub Desktop.** Al terminar cada fase, la IA indica qué archivos entran y propone el mensaje del commit.
- Los bloques de HTML generados llevan el comentario `<!-- IA: generado -->`. El alumno lo cambia a `<!-- IA: corregido -->` cuando lo revisa.
- La IA no escribe opiniones del alumno ni la comparación con el proyecto manual; deja `[PLACEHOLDER]`.
- La IA pregunta antes de borrar archivos, añadir dependencias o cambiar la estructura de carpetas.

---

## 3. Decisiones tomadas

| # | Tema | Decisión | Origen |
|---|---|---|---|
| D1 | Carpeta del diseño | Las capturas se mueven de `diseno/` a `docs/diseno/`. | Respuesta 1 |
| D2 | Git | El repo ya existe (`github.com/YunoSD/proyectoMayco`). No se hace `git init`. Commits y push, a cargo del alumno. | Respuesta 2 |
| D3 | Estructura del inicio | Cuatro tipos de sección, una debajo de otra: **(1)** acceso directo a un producto (OSG Royco) para verlo y comprar; **(2)** carrusel desplazable con 3–4 diapositivas y puntos; **(3)** secciones de servicio a pantalla completa (Maquinados, Fundición); **(4)** tarjetas (Stock / Pedidos). Después, el footer. | Respuesta 3 |
| D4 | Imágenes | El alumno tiene las fotos originales y las pasará en un zip cuando se pidan (Fase 2). Hasta entonces se usan placeholders locales. | Respuesta 4 |
| D5 | Tipografía | Libertad para elegir la más parecida. **Propuesta:** *Kumbh Sans* para titulares y cuerpo (geométrica, "g" de un piso, como en las capturas) y *Archivo* para botones y navegación. Ambas de Google Fonts. *Enlazadas en el HTML; el alumno decide al verlas con estilos en la Fase 3.* | Respuesta 5 y Prompt 03 |
| D6 | Forma de la pieza | Selector de forma (**Barra / Buje / Placa**) más un campo de medidas en pulgadas o mm que admite fracciones ("2 1/2 x 20"). Reglas: **Barra** → 2 valores (diámetro × largo); **Buje** → 3 valores (Ø exterior × Ø interior × largo), con Ø interior menor que Ø exterior; **Placa** → 3 valores (espesor × ancho × largo). **Aprobada.** | Respuesta 6 y Prompt 03 |
| D7 | Precios del bronce | Precio fijo por kg según calidad, en MXN más IVA. **Aprobada:** SAE 62 → $230 · SAE 64 → $235 · SAE 65 → $235 · SAE 68 → $220 · SAE 660 → $230 · SAE 600 → $220. | Respuesta 7 y Prompt 03 |
| D8 | Botón "Contacto" | Visible en todos los pasos de la cotización. Abre un panel con teléfono y correo. El enlace del correo se rellena con lo que el cliente ya ha elegido (forma, calidad, medidas y cantidad). Teléfono y correo son `[PLACEHOLDER]`. | Respuesta 8 |
| D9 | Footer | Incluye información de contacto y general (dirección, teléfono, correo, horario), con `[PLACEHOLDER]` en los datos reales. "Contacto" y "Ubicación" apuntan a esa sección del footer. | Respuesta 8 |
| D10 | Flujo de compra de OSG Royco | Catálogo → vista de producto (paso 1) → "Siguiente" → número de piezas, precio total y confirmación (paso 2) → "Agregar al carrito" → confirmación "Agregado al carrito" (paso 3). | Respuesta 9 |
| D11 | Indicador de pasos | Puntos verticales a la izquierda, **un punto por paso**, generados según el número real de pasos del flujo. | Respuesta 10 |
| D12 | Monedas en el carrito | **Aprobada:** un solo carrito agrupado por moneda. Un bloque "Herramientas OSG Royco (USD)" y otro "Bronce (MXN + IVA)", cada uno con su subtotal. Sin conversión automática, con la nota "Los importes en USD se facturan al tipo de cambio del día de pago". Evita tener dos carritos y no bloquea al cliente. | Respuesta 11 y Prompt 03 |
| D13 | Móvil | No hay diseño móvil. La IA lo propone en la Fase 3 a partir de los componentes de escritorio. | Respuesta 12 |
| D14 | Páginas extra | Se añaden `pages/cotizacion.html` (flujo de 7 pasos) y `pages/producto.html` (vista de producto y compra en 3 pasos). En total hay 9 páginas. | Fase 2 |
| D15 | Header en flujos | La cotización y la página de cuenta usan un header simplificado (logo más título), como en las capturas. El resto usa el header completo. El footer es el mismo en todas. **Aprobada.** | Fase 2 y Prompt 04 |
| D16 | Botones "Anterior / Siguiente" | Se añaden en los pasos de la cotización aunque no aparecen en el diseño. Avanzar solo con elegir una opción impide usar las flechas del teclado dentro de un grupo de opciones. **Aprobada.** | Fase 2 y Prompt 04 |
| D17 | Bronce en el carrito | El paso 6 de la cotización tiene "Hacer pedido" (como en el diseño) y además "Agregar al carrito", para que el bronce pueda llegar al carrito según D12. **Aprobada.** | Fase 2 y Prompt 04 |
| D18 | Inicio, sección 1 | «Mostrar más» → ficha del producto EXOCARB® VX. «Comprar» → la misma ficha, directamente en el paso de cantidad (`?paso=2`). | Prompt 04 |
| D19 | Imágenes finales | Foto original del machuelo (horizontal para el inicio y el catálogo; girada en vertical para la ficha). El erizo sustituye al pato en el carrito vacío. | Prompt 04 |
| D20 | Fuentes | No se pueden descargar desde el entorno de la IA (la red bloquea npm y Google Fonts), así que se cargan desde Google Fonts en el navegador del usuario. Las capturas de la IA salen con una fuente de reserva. | Fase 3 |
| D21 | Sin JavaScript | La web funciona sin JS: el menú se ve siempre, el carrusel se desliza con scroll-snap y los pasos se muestran seguidos. Cuando `main.js` añade la clase `.js` a `<html>`, se activan el menú desplegable, las flechas y los puntos del carrusel, y un paso cada vez. | Fase 3 |

---

## 4. Fases

- [x] **Fase 0:** análisis del diseño (tokens, componentes, secciones y dudas).
- [x] **Fase 1:** repositorio y documentación del proceso (`.gitignore`, `.gitattributes`, `PLAN.md`, `agents/`, `skills/`).
- [x] **Fase 2:** HTML semántico de todas las páginas.
- [x] **Fase 3:** CSS organizado, mobile-first.
- [ ] **Fase 4:** JavaScript (menú, calculadora, cotización, catálogo, carrito, formularios).
- [ ] **Fase 5:** responsive a detalle (320 / 375 / 768 / 1024 / 1440).
- [ ] **Fase 6:** README.md.

---

## 5. Historial

### Fase 0: Análisis del diseño
- **Fecha:** 2026-09-30
- **Prompt:** [`docs/prompts/01-prompt-inicial.md`](docs/prompts/01-prompt-inicial.md)
- **Qué generó la IA:**
  - Paleta de 12 colores medida en los píxeles de las capturas. Primario `#516FA6`, fondo `#F5F5F5`, texto `#000000`.
  - Propuesta de tipografía, escala de tamaños, espaciados y radios.
  - Lista de 12 componentes repetidos.
  - Secciones de cada página con captura.
  - 12 dudas sobre el diseño.
- **Pendiente de revisión manual:** los tamaños de fuente son estimaciones, porque las capturas están reducidas. Hay que compararlos con Figma en la Fase 3.
- **Commit:** ninguno (fase sin archivos).

### Fase 1: Repositorio y documentación del proceso
- **Fecha:** 2026-09-30
- **Prompt:** [`docs/prompts/02-respuestas-fase0.md`](docs/prompts/02-respuestas-fase0.md)
- **Qué generó la IA:**
  - Movió las capturas de `diseno/` a `docs/diseno/`.
  - `.gitignore` y `.gitattributes`.
  - Este `PLAN.md`, con la tabla de decisiones D1–D13.
  - 5 agentes en `agents/` y 5 skills en `skills/`.
  - Registro de los prompts en `docs/prompts/`.
- **Pendiente de revisión manual:**
  - Confirmar las propuestas D5 (tipografía), D6 (regla de la placa), D7 (precio por calidad) y D12 (monedas).
  - Revisar que los agentes y skills describan bien cómo quiero trabajar.
- **Commit (lo hace el alumno):** `Fase 1: configuración de Git, plan del proyecto, agentes y skills`. Hash: `[PLACEHOLDER]`.

### Fase 2: HTML
- **Fecha:** 2026-09-30
- **Prompt:** [`docs/prompts/03-fase2-imagenes-y-confirmaciones.md`](docs/prompts/03-fase2-imagenes-y-confirmaciones.md)
- **Qué generó la IA:**
  - 9 páginas en HTML semántico:
    - `index.html`, con 4 tipos de sección según D3 (acceso directo a OSG Royco, carrusel de 3 diapositivas, secciones de Maquinados y Fundición, y tarjetas Stock / Pedidos).
    - `pages/maquinados.html`, `pages/fundicion.html` (datos, tipos de bronce, tabla de calidades y precios, proceso y calculadora) y `pages/cotizacion.html` (7 pasos más el panel de ayuda).
    - `pages/osgRoyco.html` (catálogo de 5 productos), `pages/producto.html` (compra en 3 pasos), `pages/aceros.html` (tabla de aceros y plásticos de ingeniería), `pages/user.html` (log in y sign up) y `pages/carrito.html` (vacío y agrupado por moneda).
  - Header y footer iguales en todas las páginas, con rutas relativas desde la raíz y desde `pages/`.
  - Imágenes: 15 de las 16 del alumno convertidas a WebP con nombres descriptivos (de 7,4 MB a 520 KB; `broncebarras.png` no se ha usado). La imagen de tipos de bronce se separó en 4, una por tipo.
  - Comprobación automática: etiquetas bien cerradas, ids únicos, `label` en cada campo, un solo `h1`, encabezados sin saltos y ni enlaces ni imágenes rotos (0 problemas). **No se pudo pasar el validador oficial del W3C** porque la red del entorno lo bloquea: pendiente de pasarlo a mano.
- **Imágenes provisionales** (recortadas de las capturas del diseño; hay que sustituirlas por las originales):
  - `PROVISIONAL-osg-machuelo-horizontal.webp`: inicio, sección OSG Royco.
  - `PROVISIONAL-osg-machuelo-vertical.webp`: vista de producto y las 5 tarjetas del catálogo.
  - `PROVISIONAL-barra-redonda.webp`: pasos 4, 5 y 6 de la cotización.
- **Datos inventados o por verificar** (marcados en la web como `[PLACEHOLDER]` o con una nota):
  - Teléfono, correo, horario y dirección del footer y del panel de ayuda.
  - Tipo y aplicaciones de SAE 600. Tiempo de entrega de la fundición. Formas de acero en existencia.
  - Tipos y aplicaciones de las calidades SAE: orientativos.
  - Catálogo OSG Royco: nombres de producto, referencias ("List") y precios en USD de ejemplo, salvo EXOCARB® VX, que viene del diseño.
- **Otros usos de imágenes que hay que revisar:**
  - El pato (`carrito-vacio-pato.webp`) no aparece en el diseño; se usa en el carrito vacío.
  - La foto de fundición mide 678 px de ancho y puede verse pixelada a pantalla completa.
- **Pendiente de revisión manual:** D15, D16, D17; enlaces de los botones del inicio (ver la respuesta de la fase); validar en validator.w3.org.
- **Commit (lo hace el alumno):** `Fase 2: estructura HTML de las 9 páginas e imágenes optimizadas`. Hash: `[PLACEHOLDER]`.

#### Correcciones de la Fase 2 tras la revisión del alumno
- **Prompt:** [`docs/prompts/04-fase3-revision-fase2.md`](docs/prompts/04-fase3-revision-fase2.md)
- Aplicadas D18 y D19, SAE 600 como «Consultar» y catálogo de 8 productos.
- Eliminadas las imágenes `PROVISIONAL-osg-machuelo-*` y el pato. Solo queda provisional `PROVISIONAL-barra-redonda.webp`.

### Fase 3: CSS
- **Fecha:** 2026-09-30
- **Prompt:** [`docs/prompts/04-fase3-revision-fase2.md`](docs/prompts/04-fase3-revision-fase2.md)
- **Qué generó la IA:**
  - `variables.css`: 57 tokens de color, tipografía (tamaños fluidos con `clamp()`), espaciado, radios y layout.
  - `base.css`: reset, estilos de elementos, foco visible, `.visually-hidden` y enlace «Saltar al contenido».
  - `layout.css`: contenedor, header (3 variantes: normal, sobre foto y simplificado), navegación, footer y secciones.
  - `components.css`: 21 bloques de componente (botones, heroes, carrusel, tarjetas, tablas, formularios, calculadora, indicador de pasos, cotización, confirmación, catálogo, ficha de producto, login y carrito).
  - `responsive.css`: todas las media queries (768, 1024 y 1440 px, y movimiento reducido).
  - Propuesta de diseño móvil (no había captura): menú hamburguesa, puntos de pasos en horizontal arriba, login con la ilustración como franja superior y opciones de 2 en 2.
- **Comprobaciones de la IA:**
  - Ningún color, `!important`, selector por ID ni media query fuera de su sitio (búsqueda automática).
  - Capturas de las 9 páginas a 1440 y 375 px, comparadas con `docs/diseno/`: sin scroll horizontal en ninguna.
- **Errores encontrados y corregidos por la IA durante la fase:**
  - Los botones de los heroes se apilaban en vertical. Causa: el grupo de botones no ocupaba todo el ancho dentro de un contenedor flex centrado.
  - En las secciones sobre foto, el subtítulo quedaba en medio. Se movió bajo el título y los botones abajo, como en el diseño.
- **Pendiente para la Fase 5 (responsive):** en móvil las flechas del carrusel tapan el título; las tablas de calidades se desplazan en horizontal dentro de su caja.
- **Pendiente de revisión manual:** D5 (tipografía) al abrir la web en el navegador; comparar tamaños con Figma.
- **Commit (lo hace el alumno):** `Fase 3: estilos CSS con tokens, componentes y versión móvil`. Hash: `[PLACEHOLDER]`.
