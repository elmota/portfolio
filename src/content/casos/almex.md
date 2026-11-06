---
titulo: "Almex — del reporte de una falla a la mantención certificada"
resumen: "UX y frontend de una plataforma de inventario y mantención de maquinaria minera, desde el levantamiento con el usuario hasta la publicación."
etiquetas: ["Minería", "Inventario de activos", "UX Research", "Design Systems", "Webapp"]
orden: 6
problema: "Operarios de faenas mineras necesitaban reportar problemas en maquinaria y equipos (como bandejas transportadoras) de forma clara, para que esos reportes derivaran en mantenciones reales y en certificados verificables, sin perderse en el camino."
rol: "Diseño UX e implementación frontend de punta a punta: levantamiento del problema con el usuario, research, flujos, prototipos, diseño de interfaz y desarrollo."
proceso: "Levanté el problema directamente con el usuario en faena, lo traduje en flujos de usuario y prototipos, diseñé la interfaz para web app, escritorio y el módulo de sistema, y la llevé a producción."
resultado: "La plataforma está en producción, con tres frentes de interfaz (web app, escritorio y sistema) que cubren reporte de problemas, mantenciones y generación de certificados. Las mantenciones actuales son operativas —del proceso de mantención en sí— más que del frontend. [Completar: adopción o feedback de los operarios]"
---

## En una frase

Diseñé y construí, de punta a punta, la plataforma donde un operario de minería reporta una falla en su maquinaria y ese reporte se convierte en una mantención con certificado, sin perder trazabilidad entre el terreno y el sistema.

## Contexto

Almex opera inventario y mantención de maquinaria y equipos de minería —camiones, bandejas transportadoras y otros activos—. El problema no era solo de interfaz: era entender cómo un operario, muchas veces en terreno y con condiciones de trabajo exigentes, puede reportar una falla de forma que ese reporte se transforme en una acción real de mantención.

## El problema de diseño

Un reporte que no deriva en una mantención certificada no sirve. La plataforma necesitaba conectar tres momentos: **detectar y reportar** el problema, **ejecutar** la mantención, y **certificar** que ocurrió, con un lenguaje y un flujo que un operario de terreno pudiera usar sin fricción.

## Decisiones clave

1. **El levantamiento empezó con el usuario, no con una pantalla.** El problema se definió junto a quienes reportan fallas en terreno, antes de proponer cualquier flujo.
2. **Tres superficies, un mismo modelo.** Web app, escritorio y el módulo de sistema comparten la misma lógica de inventario y mantención, para que el dato no se desalinee entre quien reporta y quien administra.
3. **De punta a punta, un solo criterio.** Al llevar el proyecto desde el research hasta la implementación y publicación, las decisiones de UX llegaron al código sin reinterpretarse en el camino.

## Lo que entregué

- **Research con usuarios** en el contexto real de reporte de fallas.
- **Flujos de usuario y prototipos** para reporte de problemas, mantención y certificación.
- **Diseño de interfaz** para web app, escritorio y sistema.
- **Desarrollo frontend** de la solución y su publicación.

## Estado actual

La plataforma está en producción. El trabajo de mantención que sigue hoy es principalmente **operativo** —de los procesos de inventario y mantención en sí, no del código frontend—, lo que sugiere que la base construida quedó estable.

## Aprendizajes

<span class="todo">[Completar: qué aprendiste de diseñar para un contexto de terreno/industrial, y qué cambiarías.]</span>

<!-- PENDIENTE: confirmar qué capturas del Figma de Almex se pueden mostrar públicamente antes de publicar. -->
