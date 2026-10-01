# Skill: Accesibilidad

Con esta skill definí lo mínimo para que cualquiera pueda usar la web: con teclado, con lector de pantalla y con buen contraste.

## Cuándo se aplica
- Al escribir el HTML (Fase 2) y el JavaScript (Fase 4).
- En cada revisión del agente revisor de calidad.

## Pasos
1. **Estructura:** `lang="es"`, un solo `h1` por página, encabezados sin saltos y regiones `header`, `nav`, `main` y `footer`.
2. **Enlace "Saltar al contenido"** al principio de cada página.
3. **Imágenes:** `alt` que explique qué es ("Barra redonda de bronce SAE 62"), o `alt=""` si es decorativa (por ejemplo, las formas cromadas del login).
4. **Iconos sin texto** (usuario, carrito, flecha del carrusel): `aria-label` en el enlace o botón y el SVG con `aria-hidden="true"`.
5. **Formularios:**
   - `label` asociado a cada campo, aunque el diseño muestre solo un icono o un placeholder (se oculta visualmente con `.visually-hidden`).
   - `autocomplete` adecuado en cada campo (`username`, `current-password`, `new-password`, `email`, `name`).
   - Errores enlazados con `aria-describedby` y anunciados con `aria-live="polite"`.
   - Las opciones de la cotización (tipo, calidad, forma) son `input type="radio"` dentro de `fieldset` con `legend`, aunque parezcan tarjetas.
6. **Componentes interactivos:**
   - Menú: `aria-expanded` y `aria-controls`.
   - Carrusel: `aria-roledescription="carrusel"`, diapositivas con `aria-label="2 de 4"` y puntos como botones con `aria-current`.
   - Indicador de pasos: `aria-label="Paso 3 de 7"`.
   - Panel de contacto: foco al abrir, cierre con Esc y el foco vuelve al botón.
   - El contador del carrito anuncia los cambios.
7. **Contraste:** mínimo 4.5:1 en texto normal. El texto blanco sobre foto necesita un velo oscuro detrás.
8. **Movimiento:** respetar `prefers-reduced-motion` (el carrusel no avanza solo).
