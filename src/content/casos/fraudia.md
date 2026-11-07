---
titulo: "Fraudia — la mesa de trabajo de un analista de compliance"
resumen: "Diseño y frontend de una plataforma de fraude y compliance: del flujo de Alertas a un sistema de diseño gobernado por decisiones documentadas."
etiquetas: ["Fintech", "Compliance", "Design Systems", "Liderazgo UX/UI", "Angular"]
orden: 1
problema: "Un analista debe decidir con rapidez y evidencia si una alerta de riesgo es real, y dejar esa decisión trazable. La interfaz tenía que reducir la carga cognitiva sin esconder evidencia ni aparentar certezas que no existen."
rol: "Líder UX/UI Design desde marzo de 2024, en un equipo de 2 o 3 personas, con implementación frontend propia. Estrategia de producto y UX, flujos de Alertas, Casos y Reglas, sistema de diseño y migración técnica del frontend."
proceso: "Definí un blueprint de producto como fuente única de verdad (fundamentos, sistema de diseño, componentes, patrones, flujos, contenido e implementación), con auditorías de UX sobre las pantallas existentes y un registro de decisiones. Lo trabajé con apoyo de coding agents para redactar, ordenar y mantener la documentación."
resultado: "El producto está en marcha blanca: construido y en ajuste interno, sin pruebas en entornos reales todavía. El blueprint permite que el equipo y los coding agents trabajen con el mismo criterio mientras avanza esa etapa."
---

## En una frase

Diseñé cómo un analista pasa de una cola de alertas a una decisión justificada, y construyo el sistema de diseño y el frontend que lo sostienen, con cada decisión de producto documentada para que el equipo, y los coding agents que usamos, trabajen con el mismo criterio.

## Contexto

Fraudia es una plataforma para detectar e investigar fraude y cumplimiento normativo. Sus dominios son **alertas**, **casos**, **reglas de detección**, **workflows** de acción, reportes y exploración de datos. Quien la usa es un analista de riesgo y compliance que revisa señales, contrasta evidencia y ejecuta una acción autorizada.

El modelo que ordena todo el producto es una cadena de trabajo completa:

> Señal → Contexto → Comprensión → Evidencia → Investigación → Decisión → Acción → Trazabilidad → Aprendizaje

## El problema de diseño

El trabajo del analista se resume en un *job to be done*: cuando recibe una alerta, quiere saber por qué se generó, qué hechos la sostienen o la contradicen, qué falta y qué acción corresponde, para producir una decisión trazable sin perder el contexto de su carga de trabajo.

Eso exige una interfaz que explique la prioridad, no solo que muestre un puntaje; que permita pasar de la cola a un resumen y al detalle sin perder filtros ni posición; y que distinga con claridad un dato de una inferencia de la IA.

## Decisiones clave

1. **La IA ayuda, pero no se confunde con los hechos.** La asistencia se muestra con divulgación progresiva: primero un anticipo compacto (*sneak peek*) y, solo si el analista lo pide, el análisis completo. Los datos, las inferencias, las limitaciones y las recomendaciones se diferencian visualmente.
2. **Ninguna acción con consecuencias se ejecuta en silencio.** Elegir un workflow abre primero un contexto intermedio donde se ven sus requisitos y su efecto. Las acciones bloqueadas muestran por qué lo están y qué falta para habilitarlas.
3. **Móvil no recorta capacidad.** Se puede cambiar el orden y el patrón de interacción, pero la vista móvil ofrece el panorama completo y todas las acciones.
4. **Cada componente alimenta el sistema de diseño.** Toda pieza nueva se evalúa para reutilizarse y se incorpora al sistema en la misma tarea, para evitar sistemas paralelos.
5. **La evidencia manda sobre la intuición.** El blueprint separa lo observado, lo confirmado por el negocio, lo inferido, lo propuesto y lo pendiente de validar. Una captura, un texto generado por IA o un nombre de botón no bastan para fijar una regla de negocio.

## Lo que entregué

- **Flujo de Alertas:** una cola con vistas "Mis alertas" y "Todas", filtros y columnas configurables, una vista rápida lateral con flujos de trabajo e historial, y un detalle con resumen, línea de tiempo, actividad transaccional, documentos, notas y bitácora.
- **Blueprint de producto:** fundamentos y usuarios, sistema de diseño (layout, tipografía, color, motion, estados y responsivo), componentes y patrones (UI optimista, operaciones asíncronas, flujos contextuales, asistencia IA, espacios de datos densos), páginas y flujos, contenido y gobernanza.
- **Auditorías de UX** de las pantallas existentes, con hallazgos y propuestas de mejora separados de las decisiones normativas.
- **Registro de decisiones** con estados (propuesta, aceptada) y los documentos que cada decisión afecta.
- **Implementación frontend:** Angular con Tailwind y DaisyUI, y un plan de migración progresiva (Angular 19 → 20 → 21 y Tailwind 3 → 4) separado en un track visual y otro técnico.
- **Auditoría del módulo de Sistema:** gestión de agentes y equipos (invitación, estados, permisos directos y heredados por equipo) y configuración de datos (tipo de movimiento, umbrales de riesgo del cliente), con hallazgos priorizados y una propuesta de rediseño para escritorio, tablet y móvil.

## Estado actual

El producto está en **marcha blanca**: el flujo de Alertas y el sistema de diseño están construidos y en ajuste interno, pero todavía no hay pruebas en entornos reales con analistas. Lo pendiente quedó decidido y documentado en el registro: el comportamiento en tablet y pantallas ultraanchas pasa a la siguiente versión de Alertas, y las pruebas entre navegadores y las integraciones se difirieron.

## Sistema: quién puede hacer qué

Alertas no es el único lugar donde la claridad importa. Audité **Sistema** (agentes y equipos) y la configuración de datos (tipo de movimiento, riesgo del cliente) con el mismo estándar: separar lo observado en el código de lo que falta validar con negocio.

El hallazgo más importante fue de confianza, no solo de layout: un agente puede tener permisos **directos** y permisos **heredados de sus equipos**, y el código ya distingue esas dos colecciones, pero la interfaz no siempre deja claro de dónde viene cada permiso. Propuse un panel de detalle que separa ambos orígenes en vez de mostrarlos mezclados, y dejé una lista de preguntas de negocio sin responder (por ejemplo, qué hace exactamente "sincronizar" en tipo de movimiento) en lugar de asumir una respuesta.

## Diseño y código en el mismo equipo

Este caso muestra el perfil híbrido en la práctica. El mismo criterio que define cómo se presenta una sugerencia de IA define cómo se estructuran los componentes y cómo se migra el frontend. El blueprint declara que la implementación es "traducción técnica, nunca redefinición de UX", y esa regla evita que las decisiones de diseño se degraden al construirlas.


<!--
PENDIENTE ANTES DE PUBLICAR
- Las capturas del producto contienen datos de prueba (nombres, RUT, montos). No publicarlas sin anonimizar o rehacerlas con datos ficticios.
- Confirmar con Fraudia qué se puede mostrar públicamente (producto, capturas, nombre del cliente).
- Añadir 2 o 3 imágenes: cola de alertas, detalle de alerta y un componente del sistema de diseño.
-->
