---
titulo: "Muévete (Falabella) — de React a Next.js sin frenar el contenido"
resumen: "UX y frontend de un sitio interno de atracción de talento de Falabella, conectado a un CMS headless y en migración de React a Next.js."
etiquetas: ["Producto interno", "Next.js", "Strapi", "CMS headless", "Refactor"]
orden: 4
problema: "Falabella necesitaba un sitio de atracción de talento (Muévete) cuyo contenido —artículos, categorías, autores, secciones de landing— lo pudiera actualizar el equipo de RR. HH. sin depender de un despliegue de código para cada cambio de texto o imagen."
rol: "Diseñador UX y desarrollador Front End, en Base Dos para Falabella, entre marzo y agosto de 2025."
proceso: "Diseñé la UX e implementé el frontend en React, lo conecté a Strapi como CMS headless para que el contenido fuera editable, y empecé la migración de esa base a Next.js."
resultado: "El sitio con integración a Strapi quedó funcionando: home, navbar, footer, secciones de landing y contenido editorial (artículos, categorías, autores) servidos desde el CMS. La migración a Next.js está en una etapa temprana. [Completar: alcance final de la migración y métricas de uso del sitio]"
---

## En una frase

Diseñé y construí un sitio interno de Falabella donde el equipo de RR. HH. publica y actualiza contenido sin tocar código, y empecé a llevar esa base de React a Next.js para mejorar su rendimiento y su capa de frontend.

## Contexto

Muévete es un producto interno de atracción de talento de Falabella: una landing con contenido editorial (artículos, categorías de interés, autores) pensada para que el equipo de RR. HH. la mantenga viva sin depender de desarrollo para cada cambio.

## El problema de diseño

Un sitio de contenido que depende de desarrollo para cada actualización se queda desactualizado. El reto era doble: diseñar una experiencia clara para quien visita el sitio, y una arquitectura de contenido que el equipo de negocio pudiera operar por su cuenta.

## Decisiones clave

1. **Strapi como fuente de contenido, no solo de imágenes.** Modelé los tipos de contenido (artículo, categoría, autor, "about", configuración global) y conecté el home, el navbar, el footer y las secciones de landing directamente al CMS.
2. **Texto enriquecido real, no HTML suelto.** Incorporé un componente de *rich text* para que el contenido editorial mantenga formato sin que el equipo de contenido tenga que escribir marcado.
3. **Migrar sin reescribir todo de una vez.** La base en React con Strapi ya operaba en producción; empecé la migración a Next.js como una evolución incremental de esa misma integración, no como una reescritura completa desde cero.

## Lo que entregué

- **Diseño UX** del sitio y su arquitectura de contenido.
- **Frontend en React** conectado a Strapi: home, navbar, holding, footer, galería de imágenes y video, y secciones de landing editables.
- **Modelado de contenido en Strapi:** artículo, categoría, autor, "about" y configuración global.
- **Inicio de la migración a Next.js**, con TypeScript, como siguiente paso de arquitectura frontend.

## Estado actual

La integración con Strapi está en uso: el sitio en React sirvió contenido real durante varios meses, con iteraciones de landing hasta octubre. La migración a Next.js quedó en una etapa temprana de exploración técnica al cierre de mi participación en el proyecto. <span class="todo">[Completar: si alguien continuó la migración, o si se retomó después]</span>

## Aprendizajes

<span class="todo">[Completar: qué aprendiste de modelar contenido para un equipo no técnico, y qué harías distinto en la migración.]</span>
