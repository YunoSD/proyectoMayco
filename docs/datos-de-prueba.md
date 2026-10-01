# Datos de prueba y funciones simuladas

Esta web es un **proyecto académico (PEC 6)**. Muchos datos no son reales: son de ejemplo para que la web funcione y se pueda evaluar. Aquí se listan todos, con el archivo donde se cambian.

> En la web, el footer de todas las páginas incluye un aviso: *«Proyecto académico: precios, existencias, datos de contacto y pedidos son de prueba».*

---

## 1. Datos de contacto (inventados)

| Dato | Valor actual | Dónde aparece | Dónde se cambia |
|---|---|---|---|
| Teléfono | `[PLACEHOLDER: teléfono]` (enlace a `tel:+520000000000`) | Footer de todas las páginas; panel de ayuda de la cotización | Footer de cada `.html`; `pages/cotizacion.html` (panel «¿Necesitas ayuda…?») |
| Correo de ventas | `[PLACEHOLDER: correo de ventas]` (enlace a `ventas@ejemplo.com`) | Footer; botón «Enviar correo» del panel de ayuda | Footer de cada `.html`; `js/cotizacion.js` (función `abrir`) |
| Horario | `[PLACEHOLDER: horario]` | Footer | Footer de cada `.html` |
| Dirección | `[PLACEHOLDER: calle y número]`, `[PLACEHOLDER: colonia, ciudad y código postal]` | Footer (sección «Ubicación») | Footer de cada `.html` |

`ejemplo.com` es un dominio reservado para ejemplos: los correos no llegan a ninguna parte.

---

## 2. Bronce: precios y densidades

| Dato | Valor | Estado | Dónde se cambia |
|---|---|---|---|
| Precio por kg | SAE 62 → $230 · SAE 64 → $235 · SAE 65 → $235 · SAE 68 → $220 · SAE 660 → $230 · SAE 600 → $220 (MXN + IVA) | **Fijos por decisión del alumno (D7)**, no son precios de mercado | `js/bronce.js` (`Mayco.calidades`) y tabla de `pages/fundicion.html` |
| Densidad (g/cm³) | SAE 62: 8.72 · SAE 64: 8.95 · SAE 65: 8.77 · SAE 68: 7.45 · SAE 660: 8.93 · SAE 600: 8.80 | **Orientativas** por familia de bronce. SAE 600 usa una densidad genérica. Verificar con la ficha técnica | `js/bronce.js` (`Mayco.calidades`) |
| Tipo y aplicaciones de cada calidad SAE | Ver tabla «Calidades y precios» | **Orientativos**. SAE 600 aparece como «Consultar» | `pages/fundicion.html` |
| Peso calculado | Volumen × densidad | **Aproximado**: no tiene en cuenta tolerancias, sobremedida ni mermas | `js/bronce.js` (`Mayco.calcularPeso`) |
| Tiempo de entrega de la fundición | `[PLACEHOLDER]` | Sin dato | `pages/fundicion.html` («Nuestra fundición en datos») |
| IVA | 16 % | Tasa general de México; verificar si cambia | `js/carrito.js` (constante `IVA`) |

---

## 3. Catálogo OSG Royco

| Dato | Estado | Dónde se cambia |
|---|---|---|
| EXOCARB® VX Taps (List 341, $430 dlls, 30 piezas, 2–3 días) | Viene del **diseño de Figma**; no se ha comprobado con OSG | `js/productos.js` y `pages/osgRoyco.html` |
| Resto de productos (A-TAP®, A-SFT®, AE-VMS, ADO y variantes M6/M10/M12) | **Nombres de líneas reales de OSG**, pero descripciones, referencias («List [PLACEHOLDER]»), precios, existencias y plazos son **de ejemplo** | `js/productos.js` y `pages/osgRoyco.html` (hay que cambiar los dos) |
| Imagen de las tarjetas | La misma foto (EXOCARB® VX) para todos los productos | `pages/osgRoyco.html` |

---

## 4. Aceros, plásticos y maquinados

| Dato | Estado | Dónde se cambia |
|---|---|---|
| Calidades de acero (1018, 1045, 4140, 8620, D2, inoxidable 304) y sus usos | Información **general** de cada acero; no indica que haya existencias | `pages/aceros.html` |
| Formas de acero disponibles | `[PLACEHOLDER: confirmar las formas y medidas que se tienen en existencia]` | `pages/aceros.html` |
| Plásticos de ingeniería (nylon, acetal, UHMW, PTFE) | Información **general** | `pages/aceros.html` |
| Servicios de maquinado, proceso de trabajo y «coronas a partir de 20 dientes» | Textos **de ejemplo** (el «20 dientes» viene del diseño) | `pages/maquinados.html` e `index.html` (carrusel) |

---

## 5. Funciones simuladas (no hay servidor)

| Función | Qué hace en realidad |
|---|---|
| **Log in** | Valida los campos y muestra un mensaje de demostración. No comprueba ninguna contraseña. «Recuérdame» guarda solo el usuario en el navegador (`localStorage`). |
| **Sign up** | Valida los campos y muestra un mensaje. No crea ninguna cuenta. |
| **Hacer pedido** (cotización) | Muestra «Pedido mandado correctamente». No envía nada. |
| **Finalizar pedido** (carrito) | Vacía el carrito y muestra la confirmación. No envía nada. |
| **Carrito** | Se guarda en el navegador del usuario (`localStorage`). Si se borran los datos del navegador, se pierde. |
| **Monedas** | USD y MXN no se suman ni se convierten. No hay tipo de cambio. |
| **Correo de ayuda** | Abre el programa de correo con un mensaje ya escrito, dirigido a `ventas@ejemplo.com`. |

---

## 6. Otros

| Dato | Estado |
|---|---|
| `assets/img/PROVISIONAL-barra-redonda.webp` | Recortada de la captura del diseño; sustituir por una foto original. Solo se muestra para la forma «barra». |
| Copyright «Mayco © 2025» | Copiado del diseño de Figma. |
