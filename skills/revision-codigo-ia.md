# Skill: Revisión del código generado por IA

## Cuándo se aplica
- Al terminar cada fase, **antes de hacer el commit** en GitHub Desktop.
- Lo aplica el alumno, con ayuda del agente revisor de calidad.

## Pasos
1. **Leer el diff** en GitHub Desktop, archivo por archivo, antes de hacer el commit. Nada se sube sin leerlo.
2. **Comparar con la captura:** abrir la página junto a su captura de `docs/diseno/` y anotar diferencias de orden, colores, tamaños o textos.
3. **Buscar los errores típicos de la IA:**
   - Datos inventados que parecen reales (teléfonos, direcciones, certificaciones, precios, especificaciones de productos).
   - Funcionalidades o secciones que no se pidieron.
   - Clases CSS o funciones JS que no se usan en ningún sitio.
   - Rutas relativas incorrectas (`../` de más o de menos).
   - `innerHTML` con datos del usuario.
   - Comentarios que dicen una cosa y el código hace otra.
   - Accesibilidad aparente (un `aria-*` mal usado es peor que ninguno).
4. **Probar a mano:** clic en todos los enlaces, formularios con datos mal escritos y la consola del navegador abierta.
5. **Marcar lo revisado:** cambiar `<!-- IA: generado -->` por `<!-- IA: corregido -->` en los bloques que se hayan revisado o cambiado.
6. **Anotar en `PLAN.md`** lo que se ha corregido a mano. Esto alimenta la sección "Cambios realizados manualmente" del README.
7. **Hacer el commit** en GitHub Desktop con el mensaje propuesto al final de la fase.

## Checklist de verificación
- [ ] He leído todo el diff.
- [ ] La página coincide con su captura (o las diferencias están anotadas).
- [ ] No quedan datos inventados sin marcar como `[PLACEHOLDER]`.
- [ ] La consola no muestra errores.
- [ ] Los comentarios `IA: generado` / `IA: corregido` reflejan lo que he revisado.
- [ ] `PLAN.md` recoge mis cambios manuales de esta fase.
