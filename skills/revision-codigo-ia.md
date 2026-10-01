# Skill: Revisión del código generado por IA

Esta es la skill que me aplico a mí: cómo reviso lo que genera la IA antes de subirlo.

## Cuándo se aplica
- Al terminar cada fase, **antes de hacer el commit** en GitHub Desktop.
- La aplico yo, con ayuda del agente revisor de calidad.

## Pasos
1. **Leer el diff** en GitHub Desktop, archivo por archivo, antes de hacer el commit. Nada se sube sin leerlo.
2. **Comparar con la captura:** abrir la página junto a su captura de `docs/diseno/` y anotar diferencias de orden, colores, tamaños o textos.
3. **Buscar los errores típicos de la IA:**
   - Datos inventados que parecen reales (teléfonos, direcciones, certificaciones, precios, especificaciones de productos).
   - Funcionalidades o secciones que no se pidieron.
   - Clases CSS o funciones JS que no se usan en ningún sitio.
   - Rutas relativas incorrectas (`../` de más o de menos).
   - Comentarios que dicen una cosa y el código hace otra.
4. **Probar a mano:** clic en todos los enlaces, formularios con datos mal escritos y la consola del navegador abierta.
5. **Marcar lo revisado:** cambiar `<!-- IA: generado -->` por `<!-- IA: Revisado -->` en los bloques que se hayan revisado o cambiado.
6. **Anotar en `PLAN.md`** lo que se ha corregido a mano. Esto alimenta la sección "Cambios realizados manualmente" del README.
7. **Hacer el commit** en GitHub Desktop con el mensaje propuesto al final de la fase.



## Errores reales de la IA en este proyecto
Estos son errores que cometió la IA en mi proyecto. Los encontró y corrigió ella misma al probar su código (detalle en `PLAN.md`), y los guardo como ejemplos de lo que tengo que buscar cuando reviso:

| Error | Dónde | Cómo se detectó | Lección |
|---|---|---|---|
| Con productos en el carrito se seguía viendo «Tu carrito está vacío» | `components.css` | Captura de pantalla | Un `display: flex` en una clase anula el atributo `hidden`. Hay que reforzarlo (`.clase[hidden] { display: none }`). |
| Scroll horizontal en el carrito a 320 px | Tabla del carrito | Auditoría responsive | Un `.visually-hidden` (absoluto) se escapa de una caja con `overflow` si la caja no tiene `position: relative`. |
| Ids no válidos (espacios y comillas) en los campos de cantidad | `carrito.js` | Revisión del código | No usar datos del producto como `id`; generarlo. |
| El cursor quedaba atrapado en el campo de medidas | `calculadora.js` | Prueba automática | No llamar a `focus()` al salir de un campo (`blur`). |
| Una pieza pequeña pesaba «0 kg» | `calculadora.js` | Prueba automática | Probar valores extremos, no solo el caso típico. |
| La corrección de la tabla de stock no se aplicaba | `components.css` / `responsive.css` | Auditoría responsive | A igual especificidad gana la regla que va después: revisar `responsive.css`. |
| El logo de Mi cuenta desaparecía al abrir `user.html#login` | `components.css` | Medición en el navegador | Un ancla desplaza una caja con `overflow: hidden`; `overflow: clip` no. |
| El formulario no cambiaba con el botón «Atrás» | `auth.js` | Prueba automática | Escuchar `hashchange`, no solo leer el `#` al cargar. |
| Una prueba de «Crear cuenta» medía en realidad «Iniciar sesión» | Pruebas | Al corregir el fallo del `#signup`, la prueba empezó a dar otro resultado | Las pruebas también pueden estar mal: comprobar que miden lo que dicen medir. |
| Header al 45 % de opacidad con contraste 4.1:1 | `variables.css` | Cálculo de contraste | Comprobar el contraste en el peor caso (texto sobre foto negra). |