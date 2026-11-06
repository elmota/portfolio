---
titulo: "Paybest — abrir una cuenta y retirar dinero sin perder el control"
resumen: "Diseño y frontend del onboarding KYC/KYB y del retiro de fondos de una plataforma de cuentas digitales en USD, guiados por un blueprint de producto con decisiones documentadas."
etiquetas: ["Fintech", "Onboarding KYC/KYB", "Retiro de fondos", "Design Systems", "Next.js"]
orden: 2
problema: "Una empresa internacional que quiere abrir una cuenta digital en USD debe completar un onboarding largo, regulado y de alto riesgo (empresa, representantes, beneficiarios y documentos), y después necesita retirar dinero entendiendo con claridad qué ocurre con él."
rol: "Diseño de producto y desarrollo frontend: auditoría UX/UI del KYC, diseño e implementación de las mejoras de KYC, onboarding, retiro de fondos y dashboard, y el blueprint que las gobierna. [Completar: periodo completo y tamaño del equipo]"
proceso: "Partí de una auditoría de la experiencia existente, la convertí en un plan por fases con protocolo de validación y contrato de medición, y la llevé a código en Next.js con pruebas automatizadas. Trabajé con apoyo de coding agents."
resultado: "Un KYC reorganizado en tareas guiadas, un flujo de retiro especificado de punta a punta y un blueprint con más de 40 decisiones registradas. [Completar: estado en producción, feedback cualitativo de usuarios o del equipo]"
---

## En una frase

Rediseñé el onboarding KYC y el retiro de fondos de Paybest para que quien abre una cuenta o mueve dinero siempre sepa **dónde está, qué se le pide y qué pasa después**, y lo documenté en un blueprint que equipo y coding agents usan como la misma fuente de verdad.

## Contexto

Paybest es una plataforma tecnológica y de onboarding que da acceso a servicios financieros provistos por terceros regulados. Su público son empresas internacionales, sellers de e-commerce y freelancers que necesitan una cuenta digital en USD. No se presenta como banco, y esa restricción también es una regla de diseño: la interfaz no puede atribuirse custodia ni transmisión de dinero.

El trabajo del usuario es concreto: abrir la cuenta, completar el KYC/KYB, recibir pagos, mantener fondos en USD, convertir y retirar a una cuenta bancaria local.

## El problema de diseño

Dos experiencias concentraban el riesgo:

- **El KYC empresarial.** Es largo, pide datos sensibles de la empresa, de sus representantes y de sus beneficiarios finales, y exige documentos. Un usuario que se pierde o duda abandona, o envía algo incompleto.
- **El retiro de fondos.** Mover dinero exige certeza: cuánto sale, hacia dónde y cuál es el estado de la operación.

## Principio rector

> Paybest solo presenta como controles los datos sobre los que el usuario debe tomar una decisión. Todo dato inferido, calculado o inmutable se muestra como contexto, resultado o estado.

Con esa regla la interfaz pide el mínimo de decisiones y hace visible qué ocurre con el dinero y qué acción tiene consecuencias. La dirección visual, *Swiss Operational Fintech*, busca certeza sobre espectáculo: retícula rigurosa, jerarquía tipográfica, color semántico controlado y progressive disclosure.

## Decisiones clave

1. **El KYC en tareas guiadas.** El formulario se organiza en cuatro etapas (Empresa, Personas, Documentos y Revisión) con tareas dentro de cada una. En móvil se ve la etapa actual, la posición global y marcadores compactos; en escritorio, un panel lateral con nombres y estados. Se puede volver a cualquier etapa completada, pero una etapa futura incompleta no se desbloquea desde el indicador.
2. **Estados que no prometen de más.** Validar en el cliente no equivale a la aceptación del proveedor, y que no haya solicitudes pendientes no significa aprobado. Por eso el copy distingue **Información requerida** de **En revisión**, y el sistema nunca calcula un porcentaje de aprobación inventado.
3. **Privacidad desde el diseño.** Los enlaces a beneficiarios usan una identidad opaca derivada con HMAC; ni nombres ni números de documento viajan en la URL.
4. **Accesibilidad como requisito.** El foco vuelve al encabezado al cambiar de tarea, los controles de orientación miden al menos 44 × 44 px y los avisos llevan texto además de color e icono.
5. **El retiro como flujo especificado.** Monto, destino, revisión, confirmación y resultado, con reglas de validación, comportamiento responsivo y lista de QA, además de un formulario continuo y alta de cuenta bancaria.
6. **Una sola fuente para color y tema.** Los roles de color del blueprint se centralizaron para que diseño y código no se desvíen.

## Lo que entregué

- **Auditoría del KYC** y un plan de mejora por fases, con benchmark, revisión de accesibilidad, protocolo de validación y contrato de medición.
- **Blueprint de producto:** fundamentos, sistema de diseño, componentes, patrones, flujos de Retiro y Dashboard, contenido, implementación y gobernanza, con un registro de más de 40 decisiones.
- **Sistema de emails transaccionales** especificado dentro del mismo blueprint.
- **Implementación frontend** del onboarding, el retiro y el dashboard en Next.js y React con Tailwind y DaisyUI.

## Ingeniería: de la API al despliegue

El mismo criterio de diseño llega al código y a la entrega:

- **Integración con APIs.** El onboarding guarda borradores por API, procesa el envío completo y persiste el expediente, con subida de documentos a almacenamiento externo. La autenticación usa Auth0.
- **Calidad automatizada.** Pruebas unitarias con Jest y pruebas de extremo a extremo con Playwright; análisis estático con SonarQube; TypeScript y lint.
- **Entrega.** Pipeline en Bitbucket, imagen de Docker y despliegue en Vercel. <span class="todo">[Confirmar qué parte de la configuración de entrega fue tuya]</span>
- **Despliegue gradual.** La experiencia guiada del KYC se activa con un *feature flag*, sin retirar la versión anterior.

## Qué verifiqué y qué no

La corrección final de la navegación del KYC se comprobó con 4 suites y 17 pruebas focalizadas, y con una revisión visual en 320, 768, 1024 y 1440 px, en modo claro y oscuro. Dejé documentado lo que **no** se midió: la comprensión del panel de pendientes con usuarios reales sigue pendiente, y hay señales de progreso por campo que necesitan una definición conjunta entre producto y backend antes de mostrar contadores.

## Aprendizajes

<span class="todo">[Completar: qué aprendiste del trabajo sobre un producto financiero regulado y qué cambiarías.]</span>

<!--
PENDIENTE ANTES DE PUBLICAR
- Confirmar con Paybest qué se puede mostrar públicamente (producto, capturas, nombre).
- Anonimizar o rehacer las capturas con datos ficticios; hay capturas de dashboard y retiro en las carpetas del proyecto.
- Confirmar el estado en producción de la experiencia guiada de KYC (depende de un feature flag).
- NO usar cifras de marketing del sitio comercial como resultados propios.
-->
