# Prompt 01 — Prompt inicial del proyecto

- **Herramienta:** Claude (Claude Code en la nube, modelo claude-opus-5-5)
- **Fecha:** 2026-09-30
- **Cómo se creó:** redactado con ayuda de la skill *prompt-master* y ajustado a mano con los datos del proyecto.
- **Uso:** es el prompt que define todas las fases. Se envió una vez y después se fue respondiendo fase a fase.

---

```xml
<contexto>
Soy estudiante de diseño web. Esta es la PEC 6 de mi asignatura: una segunda versión de mi proyecto web hecha con apoyo de IA. Luego la compararé con mi versión manual. El diseño ya está hecho en Figma (PEC 3); tienes capturas de cada página en `diseno/`. La web trata sobre una empresa que vende y fabrica bronce, entre otros metales y aleacion, ademas de vender material de corte, maquinados, fundicion, aceros, plasticos de ingenieria entre otros y tiene estas páginas (definidas en la PEC 2):
1. [PÁGINA 1] → index.html (esta en diseno inicioParte1.....inicioParte5)
2. [PÁGINA 2]→maquinados.html
3. [PÁGINA 3]→fundicion.html (deberia de mostrar datos importantes de una fundicion como una calculadora de pesos aproximados, y en un boton llamada solicitar cotizacion saldra lo de diseno cotizacionPt1.........cotizacionPt7)
4. [PÁGINA 4]→osgRoyco.html (mostrara el catalogo de royco podras dar click en uno y mostrara la siguiente pagina maquetada que esta en diseno vistaProducto)
5. [PÁGINA 5]→aceros.html
6. [PÁGINA 6]→user.html (login/signup) (esta en diseno login y signup )
7. [PÁGINA 7]→Carrito.html

Enlace al Figma: https://www.figma.com/design/Apr7U6klWvMve566snTzIF/PEC2?node-id=0-1&p=f

La entrega NO se acepta si parece generada por IA sin revisión. Por eso trabajamos por fases, y yo reviso y apruebo cada una antes de seguir.
</contexto>

<reglas_obligatorias>
- Solo HTML5, CSS3 y JavaScript vanilla. NUNCA uses frameworks, librerías, npm, Tailwind, Bootstrap ni ningún paso de build.
- Sé fiel a las capturas de `docs/diseno/`: colores, tipografías, espaciados, jerarquía y orden de secciones. Si algo de la captura es ambiguo, pregúntame; no lo inventes.
- Trabaja solo dentro de esta carpeta del proyecto.
- PARA y pregúntame antes de: borrar cualquier archivo, hacer `git push`, crear un remoto, añadir dependencias o cambiar la estructura de carpetas acordada.
- NUNCA escribas mis opiniones personales ni la comparación con el proyecto manual. Deja plantillas con [PLACEHOLDERS] para que yo las rellene.
- Al terminar cada fase: actualiza `PLAN.md`, haz un commit local con un mensaje descriptivo en español y DETENTE a esperar mi revisión.
</reglas_obligatorias>

<estructura_objetivo>
index.html · pages/ · css/ (variables, base, layout, components, responsive) · js/main.js · assets/img/ · docs/diseno/ · agents/ · skills/ · PLAN.md · README.md · .gitignore · .gitattributes
</estructura_objetivo>

<fases>
FASE 0 — Análisis (sin código) · FASE 1 — Repositorio y documentación del proceso · FASE 2 — HTML · FASE 3 — CSS · FASE 4 — JavaScript · FASE 5 — Responsive a detalle · FASE 6 — README.md
(El texto completo de cada fase está en el historial de la conversación; aquí se resume por brevedad.)
</fases>

<formato_de_respuesta>
✅ completado · archivos creados/modificados · hash del commit · puntos a revisar · dudas
</formato_de_respuesta>

Empieza por la FASE 0.
```
