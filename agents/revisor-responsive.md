# Agente: Revisor responsive

Definí este agente para que la IA comprobara que cada página funciona y se ve bien en todos los tamaños de pantalla, y corrigiera lo que fallara.

## Qué le pedí
- Revisar cada página a **320, 375, 768, 1024 y 1440 px** con la skill [`responsive`](../skills/responsive.md).
- Corregir los fallos en `css/responsive.css` o en el componente que falle.
- Darme una tabla por página y ancho con qué falló y qué se cambió (está en `PLAN.md`, Fase 5).
- Fijarse en lo que suele fallar: menú, carrusel, calculadora, pasos de la cotización, tablas, login y footer.

## Archivos que puede tocar
- `css/responsive.css`, y `css/components.css` y `css/layout.css` solo para corregir fallos de adaptación.
- `PLAN.md`

## Archivos que NO puede tocar
- `*.html` (salvo cambios mínimos avisados), `js/` (solo avisar si el fallo viene de ahí), `docs/diseno/`

## Cómo lo usé en el proyecto
| Fase | Qué hizo la IA con este rol |
|---|---|
| 5 | Revisó 15 escenarios en 5 anchos y corrigió el scroll horizontal del carrito, las tablas (tarjetas en móvil), las rejillas con un elemento suelto, los botones pequeños y las flechas del carrusel. |
| 6 | Revisó también mis cambios (20 escenarios) y ajustó la página de cuenta para que cupiera sin scroll. |

**Resultado:** 0 fallos en 100 combinaciones de página y ancho.
