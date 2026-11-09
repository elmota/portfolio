# Portfolio de Alejandro Pérez Rocha

Sitio personal. Astro 7 con `<ClientRouter />` (View Transitions), colección de
contenido `casos` y Three.js (`BlueprintScene`). No hay GSAP. Publicado en
GitHub Pages (`elmota/portfolio`, rama `main`; el workflow `deploy.yml` define
`SITE_URL` y `BASE_PATH`). Estilo Swiss: cada item del sidebar trae su paleta.

## Reglas de trabajo

- Verificar en el navegador y correr `npx pnpm build` antes de commitear.
- Un commit por cambio; después preguntar "¿Lo publico?".
- `git push origin main` solo con un sí explícito (el push dispara el deploy).
- No ocultar nada al usuario: decir qué no se pudo verificar.
- Respuestas concisas, en español.
- Los commits terminan con la línea `Co-Authored-By` que indique la sesión.
- Para revisar visualmente, preferir medir con JS (alturas, colores, estados)
  antes que capturas: las capturas llenan el contexto muy rápido.

## Arquitectura

- **Perfiles y secciones** (`src/components/Hero.astro`, `Sidebar.astro`,
  `src/lib/sidebarItems.ts`): 3 perfiles (`diseno`, `ambos` = "Diseño + Código",
  `ingenieria`) y 5 secciones (`casos`, `enfoque`, `skills`, `trayectoria`,
  `contacto`), cada uno con paleta fija (`bg`/`ink`/`detail`/`detailInk`). Los
  perfiles se eligen con el **selector en línea del Hero** (`.perfil-btn`,
  siempre visible, también en móvil) y alternan paneles; el **sidebar lista Inicio y
  las 5 secciones** (numeradas 01–05). Las paletas de los 8 viajan como JSON
  (`#paletas-data`) porque `aplicarEstilo` las necesita sin item de menú.
  El menú abre con **Inicio** (00, delineado, sin paleta propia): vuelve al Hero
  conservando el último perfil, y queda activo mientras se está en el Hero.
- **Paleta de perfiles**: Diseño coral `#d36958`, Diseño + Código violeta
  `#7a56c8` (tono intermedio, texto blanco 5.26:1), Ingeniería verde. El
  naranja `#dd8a2e` es de Trayectoria (antes era de "Ambos": dos cálidos con el
  mismo peso). Cada cambio de paleta se valida con WCAG AA.
- **Primera vista**: presentación personal (nombre, rol, "Más allá del diseño:
  hasta producción.", ciudad y disponibilidad, ciclo de 4 pasos) sobre fondo
  neutro; el color del perfil vive en el fold del panel de abajo.
- **Scrollspy**: `IntersectionObserver` (`rootMargin: -45% 0 -45% 0`) solo avisa
  que algo cambió; `sincronizarActivo()` elige el bloque que cruza el centro de
  la pantalla. Se apaga mientras corre un scroll programático.
- **Clic en una sección**: salto instantáneo (`behavior: 'instant'`, porque
  `html` tiene `scroll-behavior: smooth`) + animación corta `.desplegando`
  en la sección destino. Los perfiles sí suben al Hero con scroll suave.
- **Tema**: JS fija `--bg`, `--text`, `--accent`, `--accent-ink` en `:root`;
  `html[data-theme]` permite sobrescribir. Contacto fija `--page`, `--page-ink`
  y `--page-bar` en negro (60% negro, 30% carbón `#1c1c1c`, 10% cyan `#22d3ee`).
- **Casos**: cada caso es una página (`/casos/[id]/`), sin modal. Transición
  con View Transition (slide, fade, bounce); la reversa es "volver".
  `CaseNav` vive en el slot fixed fuera de `.content` (`container-type` rompe
  `position: fixed` en Safari). Desktop abre por hover (`hover: hover` y
  `pointer: fine`); touch (`pointer: coarse`): primer tap abre, segundo navega.
- **Animaciones**: scroll-driven nativo (`view-timeline` en `.fold`,
  `animation-timeline`) con `@supports` como respaldo.
- **Menú móvil (≤960px)**: toggle de 4 cuadros de color. Panel de alto
  `calc(100dvh - var(--bar-h))` (`--bar-h: 66px`; actualizar si cambia el
  padding de la barra), items repartidos con `flex` (5 items), inactivos a ancho fijo
  (78%), activo al 100%. Bloquea el scroll de atrás mientras está abierto.

## Problemas ya resueltos (no reintroducir)

- Clase `.tag` en colisión: renombrada a `.item-tag`.
- Listeners del sidebar perdidos tras navegar: el sidebar va en un
  `<div transition:persist>`; el estado se rearma en `astro:page-load`.
- Overflow horizontal en móvil: canvas medido con `clientWidth`, matemática
  `cqw`/`%` de `.specs` corregida.
- iPad tratado como hover: usar `pointer: coarse`.
- Clic en el sidebar desde un caso: `navegarAHome`.
- Abrir el menú en Contacto cambiaba a Trayectoria (scrollspy en el borde).
- Titulares de perfil partidos en mitad de palabra en iPhone ("implementación" →
  "implementació/n"): `.hero-fold h2` deriva su tamaño del ancho disponible en
  ≤600px. Si se cambia el copy de un titular, revisar su palabra más larga
  (≈8.8em de ancho) a 320–600px antes de publicar.

## Pendiente de verificar

- Verificado en iPhone real con Safari (2026-11-08): menú móvil de 5 items,
  `100dvh`, tema negro de Contacto, selector de perfil en línea.
- El build no corre en el VM de Claude (binarios de macOS en `node_modules`,
  sin red para npm): compilar y hacer push desde la Mac.

## Narrativa (mantra y reglas de copy)

- **Mantra**: "Más allá del diseño: los productos están vivos." Una idea
  comienza en el discovery y el diseño y no termina en producción: evoluciona.
  El ciclo del Hero es continuo (Descubrir, Diseñar, Construir, Evolucionar y
  vuelta a empezar), no un círculo que se cierra al llegar a producción.
- **"Cada versión es otra vuelta."** (figura `.espiral`, al cierre de Enfoque):
  mantra + espiral de 3 vueltas con las versiones (puntos, sin números) sobre el
  mismo radio (cada vuelta vuelve al mismo punto, más afuera y con más contexto). Se
  dibuja con el scroll (`view-timeline` nombrado en la figura). Decisión: NO
  mostrar el doble diamante ni etapas de metodología como diagrama; hace que el
  sitio parezca un texto sobre definiciones de diseño y no un portafolio.
- Evitar "hasta producción" / "hasta que funcione": suenan a final.
- Usar "comienza" (no "parto"). No repetir "producto": alternar con "idea"
  cuando aplique; acompañar ideas también importa, más allá de lo tangible.
- Primera persona, concreto, sin cliché ni textos largos. Eje: el oficio es la
  base y la IA es un compañero que acelera y cubre casos borde; el criterio y
  la última revisión son humanos.
- En móvil, el selector de perfil debe quedar a la vista en la primera
  pantalla (hoy ~549–623px de 664): al alargar copy de la presentación,
  volver a medirlo.

## Principios a aplicar al evaluar o escribir/modificar contenido

Cuando se agregue, edite o critique copy, layout o estructura de cualquier
sección del landing, revisar contra estos tres marcos. No son checklists
decorativos: son el criterio real para aceptar o rechazar un cambio.

### 1. Heurísticas de usabilidad de Nielsen

Aplicar sobre todo a interacciones (perfiles del hero, páginas de casos, nav,
formularios/CTAs) y a cualquier estado nuevo (loading, vacío, error):

1. **Visibilidad del estado del sistema** — el usuario siempre sabe qué perfil/sección
   está activa, qué caso está abierto, dónde está en la página.
2. **Coincidencia con el mundo real** — lenguaje llano en español, sin jerga interna
   ("qué construir" en vez de "deliverables").
3. **Control y libertad del usuario** — todo overlay/estado es cerrable (Esc, click fuera,
   X, "volver"); nada atrapa al usuario.
4. **Consistencia y estándares** — mismos patrones de botón, misma tipografía de
   headline, mismo comportamiento de hover en todo el sitio.
5. **Prevención de errores** — antes que mensajes de error: que la interacción no
   permita el error (ej. foco visible, targets grandes).
6. **Reconocer antes que recordar** — no forzar al usuario a recordar qué perfil eligió
   para entender una sección más abajo; el estado se refleja visualmente.
7. **Flexibilidad y eficiencia de uso** — atajos para quien vuelve (el `#hash` de la URL abre un perfil o sección),
   sin estorbar a quien entra por primera vez.
8. **Diseño estético y minimalista** — cada elemento en pantalla compite por atención;
   si no suma, se saca (regla ya aplicada en la fase de restraint/critique del sitio).
9. **Ayudar a reconocer y recuperarse de errores** — mensajes claros, en el idioma de
   la interfaz, sin culpar al usuario.
10. **Ayuda y documentación** — en un portfolio esto rara vez aplica, pero sí aplica a
    microcopy de apoyo (ej. "Elige cómo quieres leer mi perfil").

### 2. Principios de Gestalt (para layout y jerarquía visual)

- **Proximidad** — elementos relacionados (headline + bajada + specs de un perfil) se
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
  — los tres perfiles (Diseño/Ambos/Ingeniería), las tarjetas de "Enfoque", los grupos
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
