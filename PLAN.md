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
| D5 | Tipografía | Libertad para elegir la más parecida. **Propuesta:** *Kumbh Sans* para titulares y cuerpo (geométrica, "g" de un piso, como en las capturas) y *Archivo* para botones y navegación. Ambas de Google Fonts. **Aprobada.** | Respuesta 5 y Prompt 05 |
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
| D22 | Revisión de la Fase 4 | Las 7 interacciones se programan de una vez y el alumno las revisa juntas, en lugar de parar tras cada una (como decía `agents/desarrollador-js.md`). | Prompt 05 |
| D23 | Ajustes visuales | El alumno cambiará tamaños e imágenes al ver el producto final. | Prompt 05 |
| D24 | Datos de prueba | Todos los datos de ejemplo (contacto, precios, densidades, productos, existencias) y las funciones simuladas (login, pedidos) se listan en `docs/datos-de-prueba.md`. El footer de todas las páginas avisa: «Proyecto académico: precios, existencias, datos de contacto y pedidos son de prueba». | Prompt 06 |
| D25 | Fase extra | Antes del README, nueva Fase 6: la IA pregunta página por página qué cambiar y lo aplica. | Prompt 06 |
| D26 | Inicio a pantalla completa | Las secciones OSG Royco, Maquinados y Fundición ocupan toda la pantalla (`100svh`). | Prompt 07 |
| D27 | Header translúcido | Fondo semitransparente con desenfoque (`backdrop-filter`) en todas las páginas; sobre fotos se ve borroso y el menú se lee. Si el navegador no lo admite, el fondo es opaco. Se elimina la variante de header blanco sobre foto. | Prompt 07 |
| D28 | Cotización de maquinados | Nueva página `pages/cotizacion-maquinados.html` (7 pasos). No calcula precio: un maquinado depende de material, horas de máquina, preparación, tolerancias y acabados, así que reúne los datos para que un técnico responda. La página lo explica. | Prompt 07 |
| D29 | Tarjetas del inicio | Rediseño: título «¿Qué necesitas?», 3 tarjetas centradas con imagen arriba (Stock, Pedidos según modelos, Peso) y toda la tarjeta clicable. | Prompt 07 |
| D30 | Stock de entrega inmediata | La tarjeta «Stock» despliega una tabla con 9 piezas inventadas (forma, calidad, medidas, peso, disponibles, precio) que se pueden agregar al carrito. | Prompt 07 |
| D31 | Rastrea tu pedido | Bloque con número de pedido y línea de 7 etapas. Los pedidos hechos en la web reciben un número MY-xxxx que se puede rastrear. | Prompt 07 |
| D32 | Footer y © | Footer rediseñado (marca, navegación, contacto con iconos, ubicación y barra inferior). El año del © indica la publicación de la web; se actualiza a 2026. | Prompt 07 |
| D33 | Carrusel: fotos completas | *Sustituida por D39.* Las fotos se mostraban enteras sobre un fondo desenfocado de sí mismas. | Prompt 08 |
| D34 | Header que se esconde | Al bajar se oculta y al subir vuelve a aparecer. Nunca se oculta con el menú abierto ni con el foco del teclado dentro. | Prompt 08 |
| D35 | Header más translúcido | Opacidad del 75 % al 50 %. Es el mínimo que mantiene el texto del menú en 4.9:1 de contraste sobre una foto negra (45 % bajaba a 4.1:1, por debajo de 4.5:1). | Prompt 08 |
| D36 | Imagen de la tarjeta «Peso» | *Imagen sustituida en D38.* Las tarjetas ya no ponen fondo detrás de la imagen. | Prompt 08 |
| D37 | Calculadora de Fundición | Solo forma, unidades y medidas: se quitan calidad y número de piezas. Usa la densidad promedio del bronce (8.8 g/cm³), calcula al escribir y muestra gramos por debajo de 1 kg. Forma y unidades se mantienen porque sin ellas no se puede saber si «4 x 2 x 10» es un buje o una placa, ni si son pulgadas o mm. | Prompt 08 |
| D38 | Imagen de «Peso» | Foto de dos bujes que aporta el alumno (ya sin fondo). | Prompt 09 |
| D39 | Carrusel | Solo la foto, llenando la diapositiva sin deformarse (`object-fit: cover`). Sin fondo desenfocado. | Prompt 09 |
| D40 | Calculadora sin botón ni fórmula | El peso aparece al escribir; Enter muestra el error si lo hay. | Prompt 09 |
| D41 | OSG Royco + IVA | Precios «$430 dlls + IVA» en catálogo, ficha y compra. En el carrito, el bloque USD también suma IVA 16 % y total. | Prompt 09 |
| D42 | Mi cuenta rediseñada | Sin header ni footer. Fondo blanco, logo largo arriba a la izquierda (enlace al inicio), «¡Bienvenido!» abajo a la izquierda, tarjeta blanca con campos de borde gris y botón azul de ancho completo. Títulos en español («Iniciar sesión», «Crear cuenta») y cambio entre formularios con un enlace. | Prompt 09 |
| D43 | Mi cuenta sin scroll | Cabe en una pantalla en 6 tamaños (1440×900 a 320×568), también con errores. Única excepción: 320×568 con los 4 errores a la vez (13 px), porque reducir más los campos los dejaría por debajo de 44 px. | Prompt 09 |
---

## 4. Fases

- [x] **Fase 0:** análisis del diseño (tokens, componentes, secciones y dudas).
- [x] **Fase 1:** repositorio y documentación del proceso (`.gitignore`, `.gitattributes`, `PLAN.md`, `agents/`, `skills/`).
- [x] **Fase 2:** HTML semántico de todas las páginas.
- [x] **Fase 3:** CSS organizado, mobile-first.
- [x] **Fase 4:** JavaScript (menú, calculadora, cotización, catálogo, carrito, formularios).
- [x] **Fase 5:** responsive a detalle (320 / 375 / 768 / 1024 / 1440).
- [ ] **Fase 6:** ajustes del alumno página por página (botones, orden, tamaños, imágenes y textos). *Añadida en el Prompt 06.*
- [ ] **Fase 7:** README.md.

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

### Fase 4: JavaScript
- **Fecha:** 2026-09-30
- **Prompt:** [`docs/prompts/05-fase4-javascript.md`](docs/prompts/05-fase4-javascript.md)
- **Qué generó la IA** (9 archivos en `js/`, sin librerías):
  - `main.js`: clase `.js`, menú hamburguesa (aria-expanded, Esc, clic fuera, enlace), contador del carrito en el header y utilidades compartidas (dinero, carrito en localStorage, indicador de pasos, errores de campo).
  - `carrusel.js`: flechas, puntos, teclado (← →), vuelta al principio. Sin avance automático.
  - `bronce.js`: datos de calidades (precio D7 y densidad), lector de medidas (fracciones «2 1/2», «2-1/2», «2½», decimales con punto o coma, pulgadas o mm) y cálculo de peso de barra, buje y placa.
  - `calculadora.js`: calculadora de fundición con la fórmula visible.
  - `cotizacion.js`: flujo de 7 pasos con validación por paso, resumen, peso y precio, «Hacer pedido» / «Agregar al carrito» y panel de ayuda modal con el correo rellenado (D8).
  - `productos.js` + `producto.js`: ficha por `?id=`, compra en 3 pasos, límite de existencias, `?paso=2` y «producto no encontrado».
  - `carrito.js`: grupos USD y MXN (subtotal, IVA 16 % y total), cambiar cantidad, eliminar, persistencia y «Finalizar pedido».
  - `auth.js`: cambio entre log in y sign up, validación con mensajes accesibles y «Recuérdame» (solo el usuario, nunca la contraseña).
- **Comprobaciones de la IA:**
  - 16 casos del lector de medidas y peso de referencia comprobado a mano (barra 4″ × 14″ SAE 62 = 25,14 kg).
  - 42 pruebas automáticas en navegador (Chromium) de todos los flujos: 42/42 correctas y ningún error en consola.
  - HTML regenerado: 0 problemas de ids, referencias ARIA, scripts o estilos. Sin `innerHTML` en el JS.
- **Errores encontrados y corregidos por la IA durante la fase:**
  - Con productos en el carrito seguía viéndose «Tu carrito está vacío». Causa: la regla del componente (`display: flex`) anulaba el atributo `hidden`, porque ambas tienen la misma prioridad. Solución: bloque «ESTADO: oculto» al final de `components.css`. Se verificó que ningún elemento con `hidden` se ve en las 9 páginas.
  - Los ids de las cantidades del carrito incluían espacios y comillas del nombre del producto (id no válido). Ahora se generan con moneda + posición.
- **Datos por verificar:** densidades del bronce en `bronce.js` (orientativas); existencias y plazos de los productos en `productos.js` (de ejemplo).
- **Pendiente de revisión manual:** probar los flujos en tu navegador; revisar textos de los mensajes.
- **Commit (lo hace el alumno):** `Fase 4: interacciones con JavaScript (menú, carrusel, calculadora, cotización, compra, carrito y cuenta)`. Hash: `[PLACEHOLDER]`.

### Fase 5: Responsive a detalle
- **Fecha:** 2026-10-01
- **Prompt:** [`docs/prompts/06-fase5-responsive.md`](docs/prompts/06-fase5-responsive.md)
- **Cómo se revisó:**
  - Un script recorre 15 escenarios × 5 anchos (75 combinaciones), con JavaScript activo. Los escenarios incluyen los pasos de la cotización, la ventana de ayuda, el carrito con y sin productos, el menú abierto y log in / sign up.
  - En cada combinación comprueba scroll horizontal, elementos fuera de pantalla, áreas táctiles < 44 px, texto desbordado, imágenes deformadas, letra < 12 px, header que tapa el contenido y foco visible al tabular.
  - Además, capturas a 320, 768, 1024 y 1440 px de todas las páginas, revisadas a ojo, y medición de cuántos elementos hay por fila en cada rejilla.
- **Tabla de revisión** (✔ = sin fallos; las celdas con texto indican el fallo y la corrección):

| Página | 320 | 375 | 768 | 1024 | 1440 |
|---|---|---|---|---|---|
| Todas | Enlace «Saltar al contenido» de 41 px de alto → mínimo 44 px | igual | igual | igual | igual |
| Inicio | Flechas del carrusel encima del título → movidas a la fila de los puntos | igual | ✔ | ✔ | ✔ |
| Maquinados | Etiquetas de materiales (enlaces) de 33 px → 44 px | igual | igual | igual | igual + servicios en 4 + 2 → 3 + 3 desde 1024 |
| Fundición | Tabla de calidades con desplazamiento lateral → tarjetas | igual | Tipos de bronce 3 + 1 → 2 × 2; «[PLACEHOLDER]» partido → datos en 2 × 2 | Proceso 3 + 1 → 4 en fila; datos 2 × 2 | ✔ (datos en 4 en fila) |
| Cotización | Botón «Contacto» de 36 px → 44 px | igual | igual | igual | igual |
| OSG Royco | ✔ | ✔ | ✔ | ✔ | ✔ |
| Producto | ✔ | ✔ | ✔ | ✔ | ✔ |
| Aceros | Tabla de aceros con desplazamiento lateral → tarjetas | igual | Plásticos 3 + 1 → 2 × 2 | ✔ | ✔ |
| Mi cuenta | ✔ | ✔ | ✔ | ✔ | ✔ |
| Carrito | **Scroll horizontal de toda la página** (etiquetas ocultas con `position: absolute` escapaban de la caja de la tabla) → caja con `position: relative` + filas como tarjetas; botones centrados | igual | ✔ | ✔ | ✔ |

- **Falsos positivos del script** (revisados y sin cambios):
  - Nombres de producto del catálogo de 24 px de alto: toda la tarjeta es la zona de clic.
  - Formas cromadas del login fuera de pantalla: decorativas y recortadas por su caja; no hay scroll.
  - «Main bajo el header» con la ventana de ayuda abierta en móvil: la página se había desplazado al pulsar «Contacto».
- **Resultado final:** 0 fallos en las 75 combinaciones y 42/42 pruebas de funcionamiento correctas.
- **Aprendizaje añadido a `skills/responsive.md`:** puntos 8 (tablas como tarjetas), 9 (rejillas sin elementos sueltos) y 10 (elementos ocultos y `position: relative`).
- **Commit (lo hace el alumno):** `Fase 5: responsive a detalle y documento de datos de prueba`. Hash: `[PLACEHOLDER]`.

### Fase 6: Ajustes del alumno · Inicio
- **Fecha:** 2026-10-01
- **Prompt:** [`docs/prompts/07-fase6-inicio.md`](docs/prompts/07-fase6-inicio.md)
- **Qué generó la IA:**
  - Inicio:
    - Secciones a pantalla completa y header translúcido con desenfoque (D26, D27).
    - Carrusel con las dos fotos nuevas. La de las caras de barras está recortada para que no se vea el suelo.
    - Sección «¿Qué necesitas?» rediseñada (D29), con stock de entrega inmediata (D30) y «Rastrea tu pedido» (D31).
  - Nueva `pages/cotizacion-maquinados.html` + `js/cotizacion-maquinados.js` (D28). Enlazada desde el carrusel (corona sinfín), la sección Maquinados del inicio, `maquinados.html` y el footer.
  - `js/pedidos.js` (etapas y pedidos de prueba) y `js/inicio.js` (stock y rastreo).
  - La ventana de ayuda «Contacto» pasa a `main.js` para que la usen las dos cotizaciones.
  - «Hacer pedido» (bronce) y «Finalizar pedido» (carrito) muestran ahora un número de pedido rastreable.
  - Footer rediseñado (D32). `docs/datos-de-prueba.md` ampliado con el stock, los pedidos y los folios.
- **Lo que la IA no pudo hacer:** crear una foto nueva «llena de caras de barras». Se recortó la foto del alumno; al venir de una imagen de 400 px, se ve algo borrosa en pantallas grandes.
- **Comprobaciones de la IA:**
  - 42 pruebas anteriores: 42/42 (no se rompió nada).
  - 25 pruebas nuevas: 25/25. Cubren pantalla completa, header, enlaces de cotización, stock (abrir, agregar, cerrar), rastreo (correcto e inexistente), números de pedido rastreables y la cotización de maquinados completa con errores y ayuda.
  - Auditoría responsive con 5 escenarios nuevos × 5 anchos.
  - HTML sin errores. Ninguna clase CSS ni token sin uso.
- **Errores encontrados y corregidos por la IA durante la fase:**
  - La tabla de stock a 768 px ensanchaba la página: el nombre de la pieza no se podía partir porque una regla de `responsive.css` (`white-space: nowrap`) tenía la misma prioridad y anulaba la corrección. Además, la caja de las tablas se puede deslizar si algo no cabe.
  - En la cotización de maquinados a 320 px, «Reparación o reposición» no cabía en dos columnas. Ahora las opciones usan 1 columna a 320 px y 2 desde 375 px.
- **Commit (lo hace el alumno):** `Fase 6 · Inicio: pantalla completa, header translúcido, stock, rastreo de pedidos, cotización de maquinados y footer`. Hash: `[PLACEHOLDER]`.

### Fase 6: Ajustes del alumno · Inicio (2.ª vuelta) y Fundición
- **Fecha:** 2026-10-01
- **Prompt:** [`docs/prompts/08-fase6-inicio-ajustes-y-fundicion.md`](docs/prompts/08-fase6-inicio-ajustes-y-fundicion.md)
- **Qué generó la IA:** D33 a D37 (carrusel con fotos completas, header que se esconde y más translúcido, imagen de «Peso» sin fondo y calculadora simplificada).
- **Comprobaciones de la IA:**
  - 14 pruebas nuevas: header que se esconde y reaparece (también con teclado), transparencia, fotos completas, calculadora al escribir, gramos y errores.
  - Pruebas anteriores 42/42 y 25/25. La de la calculadora se actualizó: 25,37 kg con la densidad promedio, antes 25,14 kg con SAE 62.
  - Auditoría responsive sin fallos. Sin clases ni imágenes sin uso: se borraron las copias `bronce-barra-y-placa.webp` y `bronce-barras-redondas.webp`; los originales del alumno siguen en su carpeta.
- **Errores encontrados y corregidos por la IA durante la fase:**
  - Al salir del campo de medidas con un error, la calculadora devolvía el cursor al campo y no dejaba salir (trampa de foco). Ahora solo muestra el mensaje.
  - Con piezas pequeñas en mm el resultado salía «0 kg». Ahora se muestra en gramos.
  - Con el 45 % de opacidad pedido para el header, el contraste bajaba de 4.5:1. Se dejó en el 50 % (D35).
- **Commit (lo hace el alumno):** `Fase 6 · Inicio y Fundición: fotos completas, header que se esconde, imagen sin fondo y calculadora simplificada`. Hash: `[PLACEHOLDER]`.

### Fase 6: Ajustes del alumno · Inicio, Fundición, OSG Royco, Mi cuenta (Aceros y Carrito sin cambios)
- **Fecha:** 2026-10-01
- **Prompt:** [`docs/prompts/09-fase6-varias-paginas.md`](docs/prompts/09-fase6-varias-paginas.md)
- **Qué generó la IA:** D38 a D43.
- **Comprobaciones de la IA:**
  - Las tres baterías de pruebas: 42/42, 25/25 y 30/30. Entre las nuevas: carrusel en `cover`, calculadora sin botón ni fórmula, «+ IVA» en catálogo, ficha y carrito, y Mi cuenta sin scroll ni header/footer en 6 tamaños.
  - Auditoría responsive sin fallos. HTML sin errores. Ninguna clase, token ni imagen sin uso.
- **Errores encontrados y corregidos por la IA durante la fase:**
  - Si la dirección cambiaba de `#login` a `#signup` sin recargar (botón «Atrás»), el formulario no cambiaba. Se añadió `hashchange` en `auth.js`.
  - Con la cuenta abierta como `user.html#login`, el navegador desplazaba la caja con `overflow: hidden` para «llegar» al formulario y el logo quedaba fuera de la vista. Se cambió a `overflow: clip`.
  - En móvil, «¡Bienvenido!» salía arriba en vez de abajo (orden del HTML). Se fijó con `grid-row`.
  - El logo quedaba encima de una forma cromada oscura y no se veía: se movieron las formas.
  - El campo «Confirmar» quedaba más bajo que «Contraseña»: `align-content: start` en `.field`.
  - Las capturas cromadas tenían un borde cortado en recto: se difuminó con `mask-image`.
  - Con todos los errores, el registro no cabía en móvil: mensajes más cortos, la nota de la contraseña cede su sitio al error y espacios más pequeños en pantallas bajas.
  - Una prueba anterior medía sin querer el formulario de inicio de sesión en lugar del de registro (por el fallo de `#signup`). Corregido el fallo, la prueba mide bien.
- **Commit (lo hace el alumno):** `Fase 6 · Inicio, Fundición, OSG Royco y Mi cuenta: carrusel, calculadora sin botón, precios + IVA y nueva página de cuenta`. Hash: `[PLACEHOLDER]`.
