# Agente: Revisor de calidad

Definí este agente para que la IA revisara el trabajo de los otros agentes antes de cada commit: validez, accesibilidad y orden del código. Su trabajo es encontrar problemas y explicarlos, no añadir cosas.

## Qué le pedí
- Revisar la accesibilidad con la skill [`accesibilidad`](../skills/accesibilidad.md).
- Comprobar que el CSS sigue las skills de [organización](../skills/organizacion-css.md) y de [tokens](../skills/tokens-de-diseno.md).
- Aplicar la skill de [revisión del código de IA](../skills/revision-codigo-ia.md).
- Buscar enlaces rotos, rutas mal escritas, código sin usar y comentarios desactualizados.
- Anotar en `PLAN.md` lo que encuentre y cómo se resolvió.

## Archivos que puede tocar
- Cualquiera, **solo para corregir** errores, explicando cada cambio.
- `PLAN.md`

## Archivos que NO puede tocar
- `docs/diseno/`
- Mis decisiones de diseño y el contenido: si algo le parece mejorable, me lo propone pero no lo cambia.

## Cómo lo usé en el proyecto
Al final de cada fase (de la 2 a la 7), la IA revisó la estructura del HTML, el contraste de colores, las clases y tokens sin usar y las imágenes sin usar. Los errores que encontró están en la skill de [revisión del código de IA](../skills/revision-codigo-ia.md#errores-reales-de-la-ia-en-este-proyecto) y en `PLAN.md`.