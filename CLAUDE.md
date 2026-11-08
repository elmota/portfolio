# Portfolio de Alejandro Pérez Rocha

Sitio personal (Astro), estilo Swiss (blanco/negro + un acento intercambiable —
ver sistema de paletas en `src/lib/palettes.ts` y `src/styles/global.css`).

## Principios a aplicar al evaluar o escribir/modificar contenido

Cuando se agregue, edite o critique copy, layout o estructura de cualquier
sección del landing, revisar contra estos tres marcos. No son checklists
decorativos: son el criterio real para aceptar o rechazar un cambio.

### 1. Heurísticas de usabilidad de Nielsen

Aplicar sobre todo a interacciones (lentes del hero, modal de casos, nav,
formularios/CTAs) y a cualquier estado nuevo (loading, vacío, error):

1. **Visibilidad del estado del sistema** — el usuario siempre sabe qué lente/paleta
   está activa, qué caso está abierto, dónde está en la página.
2. **Coincidencia con el mundo real** — lenguaje llano en español, sin jerga interna
   ("qué construir" en vez de "deliverables").
3. **Control y libertad del usuario** — todo modal/estado es cerrable (Esc, click fuera,
   X); nada atrapa al usuario.
4. **Consistencia y estándares** — mismos patrones de botón, misma tipografía de
   headline, mismo comportamiento de hover en todo el sitio.
5. **Prevención de errores** — antes que mensajes de error: que la interacción no
   permita el error (ej. foco visible, targets grandes).
6. **Reconocer antes que recordar** — no forzar al usuario a recordar qué lente eligió
   para entender una sección más abajo; el estado se refleja visualmente.
7. **Flexibilidad y eficiencia de uso** — atajos para quien vuelve (URL con `?lente=`),
   sin estorbar a quien entra por primera vez.
8. **Diseño estético y minimalista** — cada elemento en pantalla compite por atención;
   si no suma, se saca (regla ya aplicada en la fase de restraint/critique del sitio).
9. **Ayudar a reconocer y recuperarse de errores** — mensajes claros, en el idioma de
   la interfaz, sin culpar al usuario.
10. **Ayuda y documentación** — en un portfolio esto rara vez aplica, pero sí aplica a
    microcopy de apoyo (ej. "Elige cómo quieres leer mi perfil").

### 2. Principios de Gestalt (para layout y jerarquía visual)

- **Proximidad** — elementos relacionados (headline + bajada + specs de un lente) se
  agrupan con espaciado menor entre sí que respecto a otros bloques.
- **Similitud** — mismo tratamiento visual (tipografía, peso, color) = misma categoría
  de contenido; no usar un mismo estilo para cosas conceptualmente distintas.
- **Continuidad** — el ojo sigue líneas/alineaciones; evitar quiebres de alineación
  sin motivo (ya corregido una vez: párrafo alineado a la derecha "fuera de lugar"
  al apilarse en mobile/tablet).
- **Cierre (closure)** — el usuario completa patrones incompletos; no abusar de esto
  dejando información realmente ambigua.
- **Figura/fondo** — el contraste de color y el padding definen qué es "sección" y qué
  es "separador"; dos secciones nunca deben leerse como una sola por falta de
  separación (ya corregido una vez: padding-bottom faltante entre secciones).
- **Región común** — un borde, fondo o card agrupa visualmente lo que contiene; no
  envolver en una misma card/región cosas que no son del mismo grupo lógico.

### 3. Narrativa de Barbara Minto (Pyramid Principle) para estructurar copy

- **Empezar por la respuesta, no por el camino** — cada sección lidera con la
  conclusión/beneficio (el headline), y solo después da el razonamiento o el detalle
  (la bajada, los bullets). Nunca al revés.
- **Agrupar ideas de forma MECE** (mutuamente excluyentes, colectivamente exhaustivas)
  — los tres lentes (Diseño/Ambos/Ingeniería), las tarjetas de "Enfoque", los grupos
  de skills: cada ítem de una agrupación debe ser claramente distinto de los demás
  y, juntos, cubrir el espacio sin solapar.
  - una idea por headline;
  - el headline debe poder "pararse solo" como conclusión, sin necesitar el resto
    del párrafo para tener sentido;
  - si dos secciones podrían decir lo mismo con otras palabras, son candidatas a
    fusionarse o diferenciarse más.
- **Pirámide, no lista plana** — al construir o revisar una sección: primero la idea
  central (1 oración), luego 2–4 ideas de soporte (nunca una sola, nunca más de
  cuatro), y recién ahí el detalle/evidencia. Si una sección necesita más de una
  oración para decir su idea central, probablemente son dos secciones.

## Cómo usar esto en la práctica

- Al **evaluar** contenido existente: pasar la sección por los tres marcos y nombrar
  explícitamente qué heurística/principio se está violando, no solo "esto se ve raro".
- Al **agregar o modificar** copy o layout: redactar primero la conclusión de una
  línea (Minto), después verificar que la jerarquía visual la sostenga (Gestalt), y
  por último validar la interacción resultante (Nielsen).
- Estos principios se suman a las reglas de diseño ya usadas en este proyecto
  (ver skill `frontend-design`: evitar clichés de "AI slop", un acento, tipografía
  intencional, motion escaso y orquestado).
