# PLAN · Mayco Company, proyecto con IA (PEC 6)

En este archivo llevo el historial completo del proyecto: qué quería conseguir, cómo trabajé con la IA, cada decisión que tomé y lo que pasó en cada fase.

---

## 1. Objetivo

Quería hacer una versión completa de la web de **Mayco Company**, una empresa que fabrica y vende bronce y otras aleaciones, y además vende herramientas de corte (es distribuidora de OSG Royco), maquinados, fundición, aceros y plásticos de ingeniería.

Esta vez la hice con apoyo de IA, partiendo de mi diseño de Figma de la PEC 3, para después compararla con mi proyecto manual.

- Diseño en Figma: https://www.figma.com/design/Apr7U6klWvMve566snTzIF/PEC2?node-id=0-1&p=f
- Capturas del diseño: [`docs/diseno/`](docs/diseno/)
- Tecnología: HTML5, CSS3 y JavaScript, sin frameworks, librerías ni paso de build.

---

## 2. Cómo trabajé con la IA

Usé **Claude (Claude Code)**. Antes de empezar le puse estas reglas:

- Trabajar **por fases** y detenerse al final de cada una para que yo revisara el resultado.
- **Los commits** con GitHub Desktop. Al final de cada fase, la IA me decía qué archivos entraban y me proponía el mensaje.
- Marcar el código que genera con `<!-- IA: generado -->`, para cambiarlo a `<!-- IA: corregido -->` cuando yo lo revise.
- Preguntarme antes de borrar archivos, añadir dependencias o cambiar la estructura de carpetas.

---

## 3. Decisiones tomadas

| # | Tema | Decisión | Origen |
|---|---|---|---|
| D1 | Carpeta del diseño | Moví las capturas de `diseno/` a `docs/diseno/`. | Respuesta 1 |
| D2 | Git | Usé el repositorio que ya tenía (`github.com/YunoSD/proyectoMayco`). Los commits y el push los hago yo. | Respuesta 2 |
| D3 | Estructura del inicio | Cuatro tipos de sección, una debajo de otra: **(1)** acceso directo a un producto de OSG Royco para verlo y comprarlo; **(2)** carrusel con 3–4 diapositivas y puntos; **(3)** secciones de servicio a pantalla completa (Maquinados, Fundición); **(4)** tarjetas. Después, el footer. | Respuesta 3 |
| D4 | Imágenes | Las fotos originales las tenía yo y se las pasé a la IA cuando las necesitó. | Respuesta 4 |
| D5 | Tipografía | Le pedí la más parecida a mi diseño. Me propuso *Kumbh Sans* (titulares y texto) y *Archivo* (botones y menú); **la aprobé** al verla en el navegador. | Respuesta 5 y Prompt 05 |
| D6 | Forma de la pieza | Selector de forma (**barra, buje o placa**) y un campo de medidas en pulgadas o mm que admite fracciones («2 1/2 x 20»). Barra: diámetro × largo. Buje: Ø exterior × Ø interior × largo (el interior siempre menor). Placa: espesor × ancho × largo. Yo di las reglas de barra y buje; la de la placa la propuso la IA y **la aprobé**. | Respuesta 6 y Prompt 03 |
| D7 | Precios del bronce | Precio fijo por kilo según la calidad, en MXN más IVA: SAE 62 → $230, SAE 64 → $235, SAE 65 → $235, SAE 68 → $220, SAE 660 → $230, SAE 600 → $220. Yo di los tres precios; el reparto por calidad lo propuso la IA y **lo aprobé**.  |
| D8 | Botón «Contacto» | En todos los pasos de la cotización, por si el cliente se atasca. Abre un panel con teléfono y un correo ya escrito con lo que eligió. | Respuesta 8 |
| D9 | Footer | Con información de contacto y general. «Contacto» y «Ubicación» llevan a esa parte del footer. | Respuesta 8 |
| D10 | Compra en OSG Royco | Catálogo → ficha del producto → número de piezas y precio → «Agregar al carrito» → confirmación. | Respuesta 9 |
| D11 | Indicador de pasos | Puntos a la izquierda, **uno por paso**, tantos como pasos tenga el proceso. | Respuesta 10 |
| D12 | Monedas en el carrito | No sabía cómo resolverlo y la IA me propuso un solo carrito separado por moneda (USD y MXN), con subtotales por separado y sin convertir. **Lo aprobé.**  |
| D13 | Versión móvil | No tenía diseño móvil; le pedí a la IA que lo propusiera a partir del de escritorio. | Respuesta 12 |
| D14 | Páginas extra | Además de las 7 páginas de mi PEC 2, hacían falta `cotizacion.html` y `producto.html`. | Fase 2 |
| D15 | Header en las cotizaciones | Header simplificado (logo y título), como en mis capturas. **Aprobado.** 
| D16 | Botones «Anterior / Siguiente» | No estaban en mi diseño. La IA los propuso porque avanzar solo con elegir una opción complica usar el teclado. **Aprobado.**  |
| D17 | Bronce en el carrito | En el paso 6 de la cotización, además de «Hacer pedido», un botón «Agregar al carrito». **Aprobado.** |
| D18 | Primer bloque del inicio | «Mostrar más» lleva a la ficha del producto y «Comprar» va directo a elegir cantidad. | Prompt 04 |
| D19 | Imágenes finales | Usé mi foto del machuelo y el erizo en el carrito vacío, en lugar del pato. | |
| D21 | Sin JavaScript | La web se puede usar aunque falle el JavaScript: el menú se ve siempre, el carrusel se desliza y los pasos aparecen seguidos. | Fase 3 |
| D22 | Revisión del JavaScript | Le pedí que hiciera todas las interacciones de una vez y las revisé juntas.  |
| D23 | Ajustes visuales | Dejé los cambios de tamaños e imágenes para cuando viera la web terminada. |
| D24 | Datos de prueba | Pedí que todo lo inventado (contacto, precios, densidades, productos, pedidos) quedara listado. Está en el README y el footer de todas las páginas lo avisa. |
| D25 | Fase extra | Añadí la Fase 6 para revisar la web página por página como cliente y pedir cambios.|
| D26 | Inicio a pantalla completa | OSG Royco, Maquinados y Fundición ocupan toda la pantalla. |
| D27 | Header translúcido | Fondo semitransparente con desenfoque, para que se lea encima de las fotos.|
| D28 | Cotización de maquinados | Nueva página. No sabía cómo se cotiza un maquinado; la IA me explicó que depende del material, las horas de máquina, la preparación, las tolerancias y los acabados. Por eso no calcula precio, sino que reúne los datos para que responda un técnico.  |
| D29 | Tarjetas del inicio | No me gustaba cómo estaban. Ahora tienen título «¿Qué necesitas?», 3 tarjetas centradas con imagen arriba y toda la tarjeta se puede pulsar.  |
| D30 | Stock de entrega inmediata | La tarjeta «Stock» muestra una tabla de piezas (inventadas) que se pueden agregar al carrito. |
| D31 | Rastrea tu pedido | Escribes tu número de pedido y ves en qué etapa está. Yo propuse fundición, desmolde, maquinados, últimos detalles y listo; la IA añadió «Pedido recibido» y «Entregado» y unió «últimos detalles» con la inspección. |
| D32 | Footer y © | Footer rediseñado. Pregunté qué significaba «© 2025»: es el año de publicación de la web, así que lo cambié a 2026.  |
| D33 | Carrusel con fotos completas |
| D34 | Header que se esconde | Se oculta al bajar y vuelve al subir, para ver bien las secciones a pantalla completa. |
| D35 | Header más translúcido | Pedí más transparencia. La IA lo dejó al 50 % y me explicó por qué: por debajo de eso el menú no se lee bien encima de una foto oscura. |
| D36 | Imagen de «Peso» sin fondo  |
| D37 | Calculadora | Solo forma, unidades y medidas, con la densidad promedio del bronce. Forma y unidades se quedan porque sin ellas no se puede saber si «4 x 2 x 10» es un buje o una placa.  |
| D38 | Imagen de «Peso» | Puse una foto mía de dos bujes. |
| D39 | Carrusel | Solo la foto, llenando la diapositiva sin deformarse.  |
| D40 | Calculadora sin botón ni fórmula | El peso aparece al escribir las medidas.  |
| D41 | OSG Royco + IVA | Aunque cobramos en dólares también hay impuestos: los precios dicen «+ IVA» y el carrito suma el IVA en los dos bloques.|
| D42 | Mi cuenta | Sin header ni footer, fondo blanco, logo largo arriba a la izquierda, «¡Bienvenido!» abajo a la izquierda, y un formulario nuevo (colores y botones). |
| D43 | Mi cuenta sin scroll | Todo cabe en una pantalla en computadora y en móvil. Única excepción: el móvil más pequeño (320 × 568) con los 4 errores a la vez, porque encogerlo más dejaría los campos demasiado pequeños para el dedo. |
| D44 | Documentación para la rúbrica | Guardé las pruebas automáticas de la IA en `docs/pruebas/` y repasé Git, agentes, skills y README según mi rúbrica. | Prompt 10 |
| D45 | Redacción y archivos | Toda la documentación en primera persona y de 26 a 13 archivos `.md`. | Prompt 11 |

---

## 4. Fases

- [x] **Fase 0:** análisis del diseño.
- [x] **Fase 1:** Git y documentación del proceso (`.gitignore`, `.gitattributes`, `PLAN.md`, agentes y skills).
- [x] **Fase 2:** HTML de todas las páginas.
- [x] **Fase 3:** CSS, mobile-first.
- [x] **Fase 4:** JavaScript.
- [x] **Fase 5:** responsive a detalle (320 / 375 / 768 / 1024 / 1440 px).
- [x] **Fase 6:** mis ajustes página por página.
- [x] **Fase 7:** README y repaso de la rúbrica.

---

## 5. Historial

### Fase 0 · Análisis del diseño
- **Qué hizo la IA:**
  - Midió en los píxeles de mis capturas una paleta de 12 colores (primario `#516FA6`, fondo `#F5F5F5`, texto `#000000`).
  - Propuso tipografía, tamaños, espaciados y radios.
  - Hizo la lista de los 12 componentes que se repiten y de las secciones de cada página.
  - Me planteó 12 dudas.
- **Qué hice yo:** respondí las 12 dudas.
- **Commit:** ninguno (no hubo archivos).

### Fase 1 · Git y documentación 
- **Qué hizo la IA:**
  - Movió las capturas a `docs/diseno/`.
  - Creó `.gitignore`, `.gitattributes`, este `PLAN.md`, los 5 agentes y las 5 skills.
- **Qué hice yo:** revisé los archivos y aprobé las propuestas.
- **Commit:** `Fase 1: configuración de Git, plan del proyecto, agentes y skills` ·

### Fase 2 · HTML 
- **Qué hizo la IA:**
  - Maquetó 9 páginas en HTML semántico, con el mismo header y footer en todas.
  - Convirtió mis imágenes a WebP (de 7,4 MB a 520 KB) y separó la imagen de los tipos de bronce en 4.
  - Comprobó automáticamente la estructura: ids, `label`, encabezados, enlaces e imágenes (0 problemas).
- **Lo que no pudo hacer:** pasar el validador oficial del W3C (bloqueado en su entorno).
- **Qué hice yo:**
  - Revisé el resultado y le pasé la foto original del machuelo 
  - Pedí el erizo en el carrito vacío, mantener SAE 600, más productos en el catálogo y cambiar los botones del primer bloque del inicio.
- **Commit:** `Fase 2: estructura HTML de las 9 páginas e imágenes optimizadas` ·

### Fase 3 · CSS 
- **Qué hizo la IA:**
  - Los 5 archivos CSS, con todos los valores del diseño como tokens en `variables.css`.
  - Más de 20 componentes y la versión móvil, que no existía en mi diseño.
  - Comprobó que no hubiera colores fuera de `variables.css`, `!important` ni selectores por ID.
- **Errores que la IA encontró y corrigió:**
  - Los botones de los heroes se apilaban en vertical.
  - El subtítulo de las secciones sobre foto quedaba en medio y no debajo del título.
- **Qué hice yo:** abrí la web en mi navegador y aprobé la tipografía.
- **Commit:** `Fase 3: estilos CSS con tokens, componentes y versión móvil` ·

### Fase 4 · JavaScript 
- **Qué hizo la IA:**
  - 9 archivos JS: menú móvil, carrusel, lector de medidas y cálculo de peso, calculadora, cotización de 7 pasos con ayuda «Contacto», ficha y compra de productos, carrito con dos monedas, y login y registro con validación.
  - 42 pruebas automáticas en el navegador, todas correctas y sin errores en consola.
  - Comprobó el cálculo de peso a mano: una barra de 4″ × 14″ en SAE 62 pesa 25,14 kg.
- **Errores que la IA y corrigió:**
  - Con productos en el carrito seguía viéndose «Tu carrito está vacío»: el CSS anulaba el atributo `hidden`.
  - Ids no válidos en los campos de cantidad del carrito.
- **Qué hice yo:** probé las cotizaciones y pedí la Fase 6 y la lista de datos de prueba 
- **Commit:** `Fase 4: interacciones con JavaScript (menú, carrusel, calculadora, cotización, compra, carrito y cuenta)` ·

### Fase 5 · Responsive a detalle 
- **Cómo se revisó:**
  - La IA pasó un script por 15 escenarios en 5 anchos (75 combinaciones). En cada uno buscaba scroll horizontal, elementos fuera de pantalla, botones de menos de 44 px, texto desbordado, imágenes deformadas, letra de menos de 12 px y foco invisible.
  - También revisó capturas de todas las páginas.
- **Tabla de revisión** (✔ = sin fallos):

| Página | 320 | 375 | 768 | 1024 | 1440 |
|---|---|---|---|---|---|
| Todas | Enlace «Saltar al contenido» de 41 px → 44 px | igual | igual | igual | igual |
| Inicio | Flechas del carrusel encima del título → movidas a la fila de los puntos | igual | ✔ | ✔ | ✔ |
| Maquinados | Etiquetas de materiales de 33 px → 44 px | igual | igual | igual | igual + servicios 4 + 2 → 3 + 3 |
| Fundición | Tabla con desplazamiento lateral → tarjetas | igual | Tipos de bronce 3 + 1 → 2 × 2; «[PLACEHOLDER]» partido → 2 × 2 | Proceso 3 + 1 → 4 en fila | ✔ |
| Cotización | Botón «Contacto» de 36 px → 44 px | igual | igual | igual | igual |
| OSG Royco | ✔ | ✔ | ✔ | ✔ | ✔ |
| Producto | ✔ | ✔ | ✔ | ✔ | ✔ |
| Aceros | Tabla con desplazamiento lateral → tarjetas | igual | Plásticos 3 + 1 → 2 × 2 | ✔ | ✔ |
| Mi cuenta | ✔ | ✔ | ✔ | ✔ | ✔ |
| Carrito | **Scroll horizontal de toda la página** → corregido; productos como tarjetas | igual | ✔ | ✔ | ✔ |

- **Resultado:** 0 fallos en las 75 combinaciones y las 42 pruebas siguen bien.
- **Commit:** `Fase 5: responsive a detalle y documento de datos de prueba` · 

### Fase 6 · Mis ajustes: Inicio 
- **Qué pedí:**
  - Secciones a pantalla completa y un header translúcido.
  - Fotos nuevas en el carrusel (se las pasé yo).
  - Una cotización de maquinados.
  - Tarjetas mejoradas, una tarjeta de stock que muestre lo que tenemos y otra para rastrear pedidos.
  - Un footer más bonito.
- **Qué hizo la IA:** todo lo anterior, más 25 pruebas nuevas, todas correctas.
- **Lo que la IA no pudo hacer:** crear una foto nueva «llena de caras de barras». Recortó la mía, pero no me gustó y en la siguiente vuelta lo cambié.
- **Errores que la IA y corrigió:**
  - La tabla de stock ensanchaba la página a 768 px.
  - Una opción de la cotización de maquinados no cabía a 320 px.
- **Commit:** `Fase 6 · Inicio: pantalla completa, header translúcido, stock, rastreo de pedidos, cotización de maquinados y footer` ·

### Fase 6 · Mis ajustes: Inicio (2.ª vuelta) y Fundición 
- **Qué pedí:**
  - Las fotos del carrusel sin recortar.
  - Que el header se escondiera al bajar y fuera más translúcido.
  - Quitar el fondo de la imagen de «Peso».
  - La calculadora solo con medidas.
- **Errores que la IA encontró y corrigió:**
  - El cursor se quedaba atrapado en el campo de la calculadora.
  - Las piezas pequeñas daban «0 kg».
  - Con la transparencia que pedí, el menú no se leía bien.
- **Commit:** `Fase 6 · Inicio y Fundición: fotos completas, header que se esconde, imagen sin fondo y calculadora simplificada` ·

### Fase 6 · Mis ajustes: resto de páginas 
- **Qué pedí:**
  - Otra foto para «Peso».
  - Calculadora sin botón ni fórmula.
  - Carrusel con la foto llenando el espacio.
  - «+ IVA» en OSG Royco.
  - Una página de cuenta nueva.
  - Aceros, Carrito, Maquinados y las cotizaciones los dejé como estaban.
- **Qué hizo la IA:** Las 97 pruebas correctas y Mi cuenta sin scroll en 6 tamaños de pantalla.
- **Errores que la IA encontró y corrigió:**
  - El formulario de cuenta no cambiaba con el botón «Atrás».
  - El logo desaparecía al abrir `user.html#login`.
  - «¡Bienvenido!» salía arriba en el móvil.
  - El campo «Confirmar» estaba desalineado.
  - Las formas cromadas tenían un corte recto.
  - El registro no cabía en móvil con errores.
- **Commit:** `Fase 6 · Inicio, Fundición, OSG Royco y Mi cuenta: carrusel, calculadora sin botón, precios + IVA y nueva página de cuenta` ·
