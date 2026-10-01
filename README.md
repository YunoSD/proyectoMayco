# Mayco Company · Proyecto con IA (PEC 6)

Esta versión de la web de **Mayco Company**, una empresa que fabrica y vende bronce y otras aleaciones y que además ofrece maquinados, fundición, aceros, plásticos de ingeniería y herramientas de corte **OSG Royco**.

La hice **con apoyo de inteligencia artificial**, partiendo de mi diseño de la PEC 3, para compararla con mi proyecto manual. Es una PEC aparte del proyecto final y la uso también como pieza de portafolio.

| | |
|---|---|
| **Diseño en Figma (PEC 3)** | https://www.figma.com/design/Apr7U6klWvMve566snTzIF/PEC2?node-id=0-1&p=f |
| **Repositorio** | https://github.com/YunoSD/proyectoMayco |
| **Web publicada** | https://maycoo.netlify.app/ |
| **Tecnología** | HTML5, CSS3 y JavaScript (sin frameworks, librerías ni paso de build) |
| **Autor** | Yunoe Sierra Díaz |

> Los precios, las existencias, los teléfonos, la dirección y los pedidos son **de prueba**

---

## Índice
1. [Qué incluye la web](#1-qué-incluye-la-web)
2. [Cómo verla en local](#2-cómo-verla-en-local)
3. [Estructura de carpetas](#3-estructura-de-carpetas)
4. [Herramientas de IA que usé](#4-herramientas-de-ia-que-usé)
5. [Cómo trabajé con la IA](#5-cómo-trabajé-con-la-ia)
6. [Qué generó la IA y qué hice yo](#6-qué-generó-la-ia-y-qué-hice-yo)
7. [Mis cambios hechos a mano](#7-mis-cambios-hechos-a-mano)
8. [Agentes y skills](#8-agentes-y-skills)
9. [Git](#9-git)
10. [Datos de prueba](#10-datos-de-prueba)
11. [Comparación con mi proyecto manual](#11-comparación-con-mi-proyecto-manual)
12. [Requisitos de la PEC](#12-requisitos-de-la-pec)

---

## 1. Qué incluye la web

La web tiene **10 páginas** con navegación entre ellas:

| Página | Archivo | Qué hace |
|---|---|---|
| Inicio | `index.html` | Secciones a pantalla completa (OSG Royco, Maquinados, Fundición), carrusel, stock de entrega inmediata, rastreo de pedidos y tarjetas de acceso |
| Maquinados | `pages/maquinados.html` | Servicios, materiales y proceso de trabajo |
| Fundición | `pages/fundicion.html` | Datos, tipos y calidades de bronce, proceso y **calculadora de peso** |
| Cotización de bronce | `pages/cotizacion.html` | 7 pasos: tipo → calidad → forma y medidas → piezas → resumen → precio → pedido |
| Cotización de maquinados | `pages/cotizacion-maquinados.html` | 7 pasos: servicio → material → pieza → cantidad → datos → resumen → folio |
| OSG Royco | `pages/osgRoyco.html` | Catálogo de herramientas de corte |
| Producto | `pages/producto.html?id=…` | Ficha y compra en 3 pasos |
| Aceros | `pages/aceros.html` | Calidades de acero y plásticos de ingeniería |
| Mi cuenta | `pages/user.html` | Iniciar sesión y crear cuenta (sin header ni footer, en una sola pantalla) |
| Carrito | `pages/carrito.html` | Productos en USD y en MXN, cada bloque con su IVA |

**Interacciones con JavaScript:**
- Menú móvil.
- Header que se esconde al bajar.
- Carrusel.
- Calculadora de peso, que entiende medidas como «2 1/2 x 20».
- Las dos cotizaciones por pasos.
- Compra de productos y carrito guardado en el navegador.
- Stock con «Agregar al carrito».
- Rastreo de pedidos.
- Validación de formularios.

**Responsive:** la web está probada a 320, 375, 768, 1024 y 1440 px.

---

## 2. Cómo verla en local

No hace falta instalar nada:

1. Descargar o clonar el repositorio.
2. Abrir `index.html` en el navegador (doble clic).

Las fuentes (Kumbh Sans y Archivo) se cargan desde Google Fonts. Sin conexión se ve una fuente de reserva.

---

## 3. Estructura de carpetas

```
proyectoMayco/
├── index.html                  Inicio
├── pages/                      Las otras 9 páginas
├── css/
│   ├── variables.css           Design tokens (colores, tipografía, espacios…)
│   ├── base.css                Reset y elementos HTML
│   ├── layout.css              Header, footer, contenedores
│   ├── components.css          Componentes (botones, tarjetas, formularios…)
│   └── responsive.css          Todas las media queries (mobile-first)
├── js/                         12 archivos, uno por funcionalidad
├── assets/img/                 21 imágenes en WebP (≈ 0,6 MB)
├── docs/
│   └── diseno/                 Capturas de mi diseño de Figma (PEC 3)
├── agents/                     Los 5 agentes
├── skills/                     Las 5 skills
├── PLAN.md                     Historial completo del proyecto
├── README.md                   Este archivo
├── .gitignore
└── .gitattributes
```

---

## 4. Herramientas de IA que usé

| Herramienta | Para qué la usé |
|---|---|
| **Claude (Claude Code)**, modelo `claude-opus-5-5` | Análisis del diseño, HTML, CSS, JavaScript, tratamiento de imágenes, pruebas y borradores de la documentación |
| **Skill *prompt-master*** de Claude | Redactar mi prompt inicial |

Para comprobar su propio trabajo, la IA usó Playwright (pruebas en un navegador), Pillow (imágenes) y BeautifulSoup (estructura del HTML).

---

## 5. Cómo trabajé con la IA

Trabajé **por fases**. Al final de cada una, la IA se detenía; yo revisaba el resultado, respondía sus dudas o pedía cambios, y hacía el commit en GitHub Desktop.

| Fase | Qué se hizo | Qué hice yo |
|---|---|---|
| 0 · Análisis | La IA sacó de mis capturas los colores (midiendo píxeles), los componentes y las secciones, y me planteó 12 dudas | Respondí las 12 dudas |
| 1 · Documentación | `.gitignore`, `.gitattributes`, `PLAN.md`, agentes y skills | Revisé y aprobé sus propuestas |
| 2 · HTML | 9 páginas semánticas e imágenes optimizadas | Le pasé mis fotos y pedí correcciones |
| 3 · CSS | Tokens, componentes y versión móvil | Aprobé la tipografía al verla en mi navegador |
| 4 · JavaScript | 9 archivos de interacciones y 42 pruebas | Probé las cotizaciones |
| 5 · Responsive | Revisión en 5 anchos y corrección de fallos | Pedí antes una fase extra de ajustes y la lista de datos de prueba |
| 6 · Mis ajustes | La IA aplicaba lo que yo pedía | Revisé la web **página por página** como si fuera un cliente |
| 7 · README | Documentación final y repaso de mi rúbrica | Pedí la redacción en primera persona y menos archivos |

Antes de empezar le puse estas reglas:
- Solo HTML, CSS y JS.
- Ser fiel a mi diseño.
- Preguntarme antes de borrar algo o cambiar la estructura.
- No escribir mis opiniones.
- Marcar el código generado con `<!-- IA: generado -->`.

---

## 6. Qué generó la IA y qué hice yo

| Parte | Lo generó la IA | La IA lo corrigió al probarlo | Lo pedí o decidí yo |
|---|---|---|---|
| Análisis del diseño (paleta, componentes) | ✔ | — | Respuestas a sus 12 dudas |
| HTML de las 10 páginas | ✔ | Estructura revisada (0 errores) | Páginas, flujos, textos clave y todos los cambios de la Fase 6 |
| Textos de ejemplo (servicios, calidades, aceros) | ✔ | — | Datos marcados como prueba |
| CSS (tokens, componentes, versión móvil) | ✔ | Sí (ver `PLAN.md`, Fases 3, 5 y 6) | Tipografía y cambios visuales de la Fase 6 |
| JavaScript (12 archivos) | ✔ | Sí (ver `PLAN.md`, Fases 4 y 6) | Reglas de medidas, precios, etapas de los pedidos |
| Responsive | ✔ | Sí (tabla en `PLAN.md`, Fase 5) | — |
| Imágenes | Conversión, recortes y quitar un fondo | — | **Todas las fotos son mías** |


La IA encontró y corrigió errores . Algunos de ellos:
- Se veía «Tu carrito está vacío» con productos dentro.
- Había scroll horizontal en el carrito a 320 px.
- El cursor se quedaba atrapado en la calculadora.
- El logo de Mi cuenta desaparecía.


---

## 7. Mis cambios hechos a mano

- **Inicio:**
  - Secciones a pantalla completa.
  - Header translúcido que se esconde al bajar.
  - Fotos nuevas en el carrusel.
  - Tarjetas rediseñadas.
  - Stock de entrega inmediata.
  - Footer nuevo.
- **Calculadora:** solo con medidas y sin botón.
- **OSG Royco:** precios con «+ IVA», también en el carrito.
- **Mi cuenta:** página nueva, sin header ni footer y sin scroll.

**Cómo revisé el código generado:**
- Revisé cada página en el ordenador y en el móvil y la comparé con mi diseño de Figma (capturas en `docs/diseno/`). En la Fase 6 hice dos rondas de revisión.
- Detecté y pedí corregir:
  - Las fotos del carrusel salían recortadas. Luego la IA les puso un fondo desenfocado, que tampoco me gustó, y al final quedaron llenando el espacio.
  - Las secciones del inicio no ocupaban la pantalla completa.
  - El header no era lo bastante translúcido.
  - La calculadora tenía demasiados campos y un botón innecesario.
  - Mi cuenta tenía scroll y header/footer, que yo no quería.

## 8. Agentes y skills

**Agentes** (carpeta [`agents/`](agents/)): son los roles que le di a la IA, cada uno con su tarea, los archivos que puede tocar y cuándo está «hecho». En cada archivo explico cómo lo usé.

| Agente | Fases |
|---|---|
| [Maquetador HTML](agents/maquetador-html.md) | 2, 6 |
| [Estilista CSS](agents/estilista-css.md) | 3, 6 |
| [Desarrollador JavaScript](agents/desarrollador-js.md) | 4, 6 |
| [Revisor responsive](agents/revisor-responsive.md) | 5, 6 |
| [Revisor de calidad](agents/revisor-calidad.md) | 2–7 |

**Skills** (carpeta [`skills/`](skills/)): son los ajustes que hay que aplicar al proyecto, con pasos y una checklist. Las fui ampliando con lo que aprendí.

| Skill | Para qué |
|---|---|
| [Responsive](skills/responsive.md) | Breakpoints, tablas, rejillas, tamaño de los botones |
| [Accesibilidad](skills/accesibilidad.md) | Estructura, formularios, foco, contraste |
| [Tokens de diseño](skills/tokens-de-diseno.md) | Todos los valores en `variables.css` |
| [Organización del CSS](skills/organizacion-css.md) | 5 archivos, nombres BEM, orden de carga |
| [Revisión del código de IA](skills/revision-codigo-ia.md) | Lo que reviso antes de cada commit y los errores reales de la IA |

---

## 9. Git

- Trabajo con GitHub Desktop y hago **un commit por fase**. Los mensajes están en [`PLAN.md`](PLAN.md#5-historial).
- [`.gitignore`](.gitignore) deja fuera archivos del sistema (`.DS_Store`, `__MACOSX`), de editores, dependencias, la caché de Python y archivos temporales.
- [`.gitattributes`](.gitattributes):
  - Guarda todos los textos con finales de línea LF.
  - Marca imágenes, fuentes y PDF como binarios.
  - Deja la documentación fuera de las estadísticas de lenguaje de GitHub.

---


## 10. Datos de prueba

Es un proyecto académico, así que muchos datos son inventados para que la web funcione. El footer de todas las páginas lo avisa.

**Contacto:** teléfono, correo, horario y dirección son `[PLACEHOLDER]`. El correo apunta a `ventas@ejemplo.com`, un dominio reservado para ejemplos. Se cambian en el footer de cada página y en el panel «Contacto» de las cotizaciones.

**Bronce:**

| Dato | Valor | Dónde se cambia |
|---|---|---|
| Precio por kilo (MXN + IVA) | SAE 62: $230 · 64: $235 · 65: $235 · 68: $220 · 660: $230 · 600: $220. Los decidí yo; no son precios de mercado | `js/bronce.js` y tabla de `pages/fundicion.html` |
| Densidad (g/cm³) | SAE 62: 8.72 · 64: 8.95 · 65: 8.77 · 68: 7.45 · 660: 8.93 · 600: 8.80. **Orientativas** | `js/bronce.js` |
| Densidad de la calculadora | 8.8 (promedio del bronce) | `js/bronce.js` |
| Tipo y usos de cada calidad | Orientativos; SAE 600 aparece como «Consultar» | `pages/fundicion.html` |
| Tiempo de entrega | `[PLACEHOLDER]` | `pages/fundicion.html` |
| IVA | 16 %, en MXN y en USD | `js/carrito.js` |

**OSG Royco:** EXOCARB® VX (List 341, $430) viene de mi diseño. El resto de productos usa nombres de líneas reales de OSG, pero sus referencias, precios, existencias y plazos son de ejemplo. Todos llevan la misma foto. Se cambian en `js/productos.js` y `pages/osgRoyco.html`.

**Inicio:**
- **Stock de entrega inmediata:** las 9 piezas son inventadas. El peso y el precio se calculan con las densidades y precios de arriba (`index.html`).
- **Pedidos:**
  - Los pedidos MY-1001 a MY-1007 son de prueba, uno en cada etapa (`js/pedidos.js`).
  - Los pedidos nuevos (MY-2000 a MY-9999) se guardan solo en el navegador y siempre se quedan en «Pedido recibido».
- **Maquinados:** el folio de la cotización (MQ-xxxx) es aleatorio y el plazo de respuesta es `[PLACEHOLDER]`.

**Aceros y maquinados:** las calidades de acero y los plásticos tienen información general, no existencias reales. Las formas de acero disponibles son `[PLACEHOLDER]`. Los textos de servicios de maquinado son de ejemplo; el «a partir de 20 dientes» de las coronas viene de mi diseño.

**Funciones simuladas (no hay servidor):**

| Función | Qué hace en realidad |
|---|---|
| Iniciar sesión / Crear cuenta | Valida los campos y muestra un mensaje. No comprueba contraseñas ni crea cuentas. «Recuérdame» guarda solo el usuario en el navegador. |
| Hacer pedido / Finalizar pedido | Muestra la confirmación y un número de pedido. No envía nada. |
| Carrito | Se guarda en el navegador; si se borran sus datos, se pierde. USD y MXN no se suman ni se convierten. |
| Cotización de maquinados | Reúne los datos y muestra un folio. No envía nada ni sube el archivo adjunto. |
| Correo de ayuda | Abre el programa de correo con un mensaje ya escrito para `ventas@ejemplo.com`. |

**Imágenes mejorables:**
- `carrusel-barras-bronce.webp` mide 400 px y se ve algo borrosa al ampliarla.
- `PROVISIONAL-barra-redonda.webp` está recortada de una captura de mi diseño.

---

## 11. Comparación con mi proyecto manual

**¿Qué ha sido más rápido con IA?**
El uso de la herramienta hizo el trabajo mucho más fácil, ya que no solo me ayudó a escribir código y corregir, me ayudó desde la planeación, definiendo fases. El uso de la IA hizo más rápido la maquetación, la creación de secciones nuevas, detalles cosméticos.

**¿Qué ha sido más difícil de controlar?**
Lo más difícil de controlar en la ia en general es que al dar promts básicos y con falta de información, la IA resuelve aún y con la poca información. En la elaboración de este proyecto no tuve complicaciones al controlar el proyecto ya que con la skill que importé, desarrollé junto con la IA un promt bastante completo

**¿Qué partes del código he tenido que corregir?**
7. [Mis cambios hechos a mano](#7-mis-cambios-hechos-a-mano)

**¿Qué resultado visual es más fiel al diseño de la PEC 3?**
El resultado visual mas fiel a mi diseño en la PEC 3 fue la que yo contruí, pero gracias a la IA pude complementar demasiado mi diseño principal, agregando botones o secciones que no habia pensado del todo bien o que no había definido del todo.

**¿Qué he aprendido al comparar ambos procesos?**
Que la IA es una excelente herramienta de la cual podemos trabajar de la mano, haciendo los procesos mucho más rápido y fácil. De igual manera considero que el uso de la IA es una herramienta más, lo que no quiere decir que sería un remplazo del todo. 