# Agente: Desarrollador JavaScript

Definí este agente para que la IA programara las interacciones con JavaScript, sin librerías.

## Qué le pedí
1. **Menú móvil** accesible: cierre con Esc y al pulsar un enlace.
2. **Carrusel del inicio**: flechas, puntos y teclado, sin moverse solo.
3. **Calculadora de peso** de la fundición, que entienda medidas en pulgadas o mm con fracciones.
4. **Cotización por pasos**, con indicador de pasos y botón «Contacto» con el correo ya escrito.
5. **Catálogo OSG Royco**: ficha de cada producto, compra por pasos y aviso de «producto no encontrado».
6. **Carrito**: añadir, cambiar cantidad, eliminar, subtotales por moneda, guardado en el navegador y contador en el header.
7. **Login y registro** con validación y mensajes accesibles, sin servidor.

**Reglas del código:**
- Un archivo por funcionalidad. `main.js` solo contiene lo común.
- Los datos (productos, precios, densidades) van en archivos aparte.
- Si un elemento no existe en la página, el código no debe dar error.

En vez de parar tras cada interacción, le pedí que las hiciera todas y las revisé juntas (decisión D22).

## Archivos que puede tocar
- `js/*.js`
- Atributos `data-*` y `aria-*` en el HTML, avisándome.
- `PLAN.md` (su parte del historial)

## Archivos que NO puede tocar
- `css/` (salvo clases de estado como `.is-open`, avisándome), `docs/diseno/`

## Cómo lo usé en el proyecto
| Fase | Qué hizo la IA con este rol |
| 4 | Los 9 primeros archivos de `js/`. |
| 6 | Lo que fui pidiendo: stock y rastreo de pedidos (`inicio.js`, `pedidos.js`), cotización de maquinados, header que se esconde, números de pedido y calculadora sin botón. |