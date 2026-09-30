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
| D5 | Tipografía | Libertad para elegir la más parecida. **Propuesta:** *Kumbh Sans* para titulares y cuerpo (geométrica, "g" de un piso, como en las capturas) y *Archivo* para botones y navegación. Ambas de Google Fonts. | Respuesta 5 |
| D6 | Forma de la pieza | Selector de forma (**Barra / Buje / Placa**) más un campo de medidas en pulgadas o mm que admite fracciones ("2 1/2 x 20"). Reglas: **Barra** → 2 valores (diámetro × largo); **Buje** → 3 valores (Ø exterior × Ø interior × largo), con Ø interior menor que Ø exterior; **Placa** → 3 valores (espesor × ancho × largo). *La regla de la placa es una propuesta pendiente de confirmar.* | Respuesta 6 |
| D7 | Precios del bronce | Precio fijo por kg según calidad, en MXN más IVA. **Asignación propuesta (pendiente de confirmar):** SAE 62 → $230 · SAE 64 → $235 · SAE 65 → $235 · SAE 68 → $220 · SAE 660 → $230 · SAE 600 → $220. | Respuesta 7 |
| D8 | Botón "Contacto" | Visible en todos los pasos de la cotización. Abre un panel con teléfono y correo. El enlace del correo se rellena con lo que el cliente ya ha elegido (forma, calidad, medidas y cantidad). Teléfono y correo son `[PLACEHOLDER]`. | Respuesta 8 |
| D9 | Footer | Incluye información de contacto y general (dirección, teléfono, correo, horario), con `[PLACEHOLDER]` en los datos reales. "Contacto" y "Ubicación" apuntan a esa sección del footer. | Respuesta 8 |
| D10 | Flujo de compra de OSG Royco | Catálogo → vista de producto (paso 1) → "Siguiente" → número de piezas, precio total y confirmación (paso 2) → "Agregar al carrito" → confirmación "Agregado al carrito" (paso 3). | Respuesta 9 |
| D11 | Indicador de pasos | Puntos verticales a la izquierda, **un punto por paso**, generados según el número real de pasos del flujo. | Respuesta 10 |
| D12 | Monedas en el carrito | **Propuesta (pendiente de confirmar):** un solo carrito agrupado por moneda. Un bloque "Herramientas OSG Royco (USD)" y otro "Bronce (MXN + IVA)", cada uno con su subtotal. Sin conversión automática, con la nota "Los importes en USD se facturan al tipo de cambio del día de pago". Evita tener dos carritos y no bloquea al cliente. | Respuesta 11 |
| D13 | Móvil | No hay diseño móvil. La IA lo propone en la Fase 3 a partir de los componentes de escritorio. | Respuesta 12 |

---

## 4. Fases

- [x] **Fase 0:** análisis del diseño (tokens, componentes, secciones y dudas).
- [x] **Fase 1:** repositorio y documentación del proceso (`.gitignore`, `.gitattributes`, `PLAN.md`, `agents/`, `skills/`).
- [ ] **Fase 2:** HTML semántico de todas las páginas.
- [ ] **Fase 3:** CSS organizado, mobile-first.
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
