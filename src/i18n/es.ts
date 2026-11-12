// Textos del sitio en español (idioma por defecto, rutas sin prefijo).
// La estructura es la fuente de verdad: en.ts debe tener exactamente las mismas
// claves (ver `Dict` en index.ts). El contenido largo de cada caso vive aparte,
// en src/content/casos (es) y src/content/casos-en (en).
export const es = {
  meta: {
    title: 'Alejandro Pérez Rocha — Senior Product / UX Designer y UX Design Engineer',
    description:
      'Más de 15 años mejorando la experiencia de usuario de productos digitales, desde el diseño y el frontend: Product Thinking, UX Strategy, Design Systems, REST APIs y CI/CD.',
    locale: 'es_CL',
  },
  ui: {
    logo: 'Alejandro Pérez',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    sections: 'Secciones',
    language: 'Idioma',
    // Etiqueta accesible de cada opción del selector de idioma.
    switchTo: { es: 'Español', en: 'Cambiar a English' },
    home: { label: 'Inicio', tag: 'Quién soy y mis perfiles.' },
  },
  // Etiqueta y descripción de los 8 items (paletas en sidebarItems.ts).
  items: {
    diseno: { etiqueta: 'Diseño', tagline: 'Entender a quien usa el producto.' },
    ambos: { etiqueta: 'Diseño + Código', tagline: 'La experiencia, de la idea al código.' },
    ingenieria: { etiqueta: 'Ingeniería', tagline: 'Código al servicio de la experiencia.' },
    casos: { etiqueta: 'Casos', tagline: '7 proyectos con proceso y resultado.' },
    enfoque: { etiqueta: 'Enfoque', tagline: 'Cómo cruzo diseño e ingeniería.' },
    skills: { etiqueta: 'Skills', tagline: 'De research a CI/CD.' },
    trayectoria: { etiqueta: 'Trayectoria', tagline: '2008 — hoy.' },
    contacto: { etiqueta: 'Contacto', tagline: 'Hablemos por LinkedIn.' },
  } as Record<string, { etiqueta: string; tagline: string }>,
  hero: {
    nombre: 'Alejandro Pérez Rocha',
    cargo: 'Product / UX Designer y Frontend Developer',
    meta: 'Santiago de Chile. Disponible de inmediato.',
    titular: 'Más allá del diseño: los productos están vivos.',
    lead: 'Hola, soy Alejandro. Llevo 15 años en banca, minería y trámites públicos, donde equivocarse cuesta. Una idea comienza en el discovery y el diseño, y no termina en producción: la acompaño mientras evoluciona.',
    cicloAria: 'Del discovery a la evolución, y vuelta a empezar',
    ciclo: ['Descubrir', 'Diseñar', 'Construir', 'Evolucionar'],
    switchTitle: 'Elige cómo mirar mi trabajo',
    switchHint: ', o desliza',
    ctaCasos: 'Ver casos de estudio',
    ctaContacto: 'Hablemos',
    lentes: [
      {
        id: 'diseno',
        rol: 'Product / UX Design',
        titular: 'Las soluciones se diseñan junto con el usuario.',
        bajada:
          'Research en terreno, Product Thinking y design systems en banca, minería y trámites públicos. La IA me acompaña a sintetizar, auditar y cubrir casos borde; las decisiones de diseño las tomo yo.',
        datos: [
          ['Entender a la persona', 'research y discovery en terreno antes de diseñar'],
          ['Decidir qué construir', 'Product Thinking y UX Strategy'],
          ['IA como compañero', 'síntesis de research y auditorías de UX, también para cubrir casos borde'],
        ],
      },
      {
        id: 'ambos',
        rol: 'Diseño + Código',
        titular: 'Acompañar la solución desde la necesidad hasta su evolución.',
        bajada:
          'La misma persona define la experiencia y la construye, antes y después del lanzamiento. Los agentes de IA son un compañero: aceleran el proceso y ayudan con los casos borde; el criterio y la última revisión son míos.',
        datos: [
          ['15+', 'años acompañando ideas digitales'],
          ['Design + Code', 'de la estrategia al frontend, y su evolución'],
          ['IA con criterio', 'research, prototipos y QA; la validación final es mía'],
        ],
      },
      {
        id: 'ingenieria',
        rol: 'UX / Design Engineering',
        titular: 'Integración de soluciones sin complicaciones.',
        bajada:
          'TypeScript, Next.js, Angular y React Native conectados a APIs REST y CI/CD. Los coding agents me acompañan en implementación y QA, útiles para casos borde; reviso cada cambio antes de producción.',
        datos: [
          ['TypeScript', 'Angular, Next.js y React Native'],
          ['REST APIs y CI/CD', 'integración y entrega continua'],
          ['Coding agents', 'acompañan la implementación y el QA; yo reviso cada cambio'],
        ],
      },
    ],
  },
  home: {
    casos: {
      titulo: 'Casos de estudio',
      intro: 'Productos donde la complejidad es el trabajo: dinero, maquinaria, trámites públicos y confianza.',
      otrosTitulo: 'Otros proyectos',
      otros: [
        {
          titulo: 'Barrio Alonso de Córdova',
          texto: 'Proyecto digital para un entorno de boutiques de moda, diseño, regalos y restaurantes.',
        },
      ],
    },
    enfoque: {
      titulo: 'Diseño que sabe cómo se construye',
      intro:
        'Los productos con los que suelo trabajar —dinero, maquinaria crítica, trámites de gobierno— son complejos y tienen poco margen de error. Entre el diseño y el código suele perderse fidelidad: una decisión de UX llega distinta al código, o una restricción técnica llega tarde al diseño. Se evita cuando ambos lados del trabajo los sostiene la misma persona, de principio a fin.',
      tarjetas: [
        {
          titulo: 'Qué construir',
          lentes: 'diseno',
          texto:
            'Product Thinking y UX Strategy, antes de abrir una herramienta de diseño: qué problema resolver, para quién, y cómo se verá el éxito.',
        },
        {
          titulo: 'Cómo construirlo',
          lentes: 'ingenieria',
          texto:
            'De la maqueta a producción y después: frontend, integración con REST APIs y despliegue con CI/CD, con criterio de implementación desde el primer boceto.',
        },
        {
          titulo: 'Donde ambos se cruzan',
          lentes: 'diseno ingenieria',
          texto:
            'Lo que se diseña es lo que se implementa: menos traducciones entre etapas, y QA compartido con el equipo cuando hace falta.',
        },
        {
          titulo: 'La IA acompaña, el criterio decide',
          lentes: 'diseno ingenieria',
          texto:
            'Es mi compañero en research, auditorías, prototipos, implementación y QA: acelera y ayuda a cubrir casos borde. Yo valido cada resultado, y un blueprint de producto con las decisiones documentadas mantiene al equipo y a los agentes con el mismo criterio.',
        },
      ],
      espiralTitulo: 'Cada versión es otra vuelta.',
      espiralTexto:
        'Lo que la gente hace con lo entregado abre el siguiente descubrir. Acompaño esas vueltas, no solo la primera.',
      espiralSvg: 'Una espiral que se abre en cada vuelta: cada punto es una versión, y sigue.',
    },
    skills: {
      titulo: 'De la investigación al código en producción',
      intro: 'Incorporo IA y coding agents en el diseño, la implementación y el QA, siempre con criterio humano al frente.',
      grupos: [
        { titulo: 'Investigación y discovery', lentes: 'diseno', items: ['Research con usuarios', 'Pruebas de usuario', 'Discovery en terreno', 'Validación de hipótesis'] },
        { titulo: 'Estrategia y producto', lentes: 'diseno', items: ['Product Thinking', 'UX Strategy', 'Arquitectura de información', 'Definición de flujos'] },
        { titulo: 'Diseño', lentes: 'diseno', items: ['Product Design', 'UX/UI', 'Diseño de interacción', 'Prototipado', 'Design Systems'] },
        { titulo: 'Implementación frontend', lentes: 'ingenieria', items: ['TypeScript', 'JavaScript', 'Angular', 'Next.js', 'React Native', 'Tailwind CSS', 'WordPress'] },
        { titulo: 'Integración y entrega', lentes: 'ingenieria', items: ['CMS headless (Strapi)', 'REST APIs', 'Configuración de servicios', 'CI/CD', 'Despliegue'] },
        { titulo: 'IA en el proceso', lentes: 'diseno ingenieria', items: ['Research y auditorías con IA', 'Prototipos con coding agents', 'Implementación y QA'] },
      ],
    },
    trayectoria: {
      titulo: 'Trayectoria',
      rango: '2008 — hoy',
      sobreMi:
        'Empecé en diseño gráfico y programación en 2008, y con los años me quedé en el cruce entre ambos: donde una buena decisión de diseño se encuentra con una restricción técnica real. Me muevo mejor en productos donde equivocarse cuesta —dinero, identidad, regulación— y donde la claridad es una forma de cuidar al usuario.',
      entradas: [
        { cuando: 'Desde mar. 2024', titulo: 'Fraudia', rol: 'Líder UX/UI Design y Front End Developer', texto: 'Diseño UX/UI y desarrollo frontend de un producto del sector financiero.' },
        { cuando: '—', titulo: 'Paybest', rol: 'Diseño de producto y desarrollo frontend', texto: 'Billetera digital: diseño de producto y desarrollo frontend.' },
        { cuando: 'Desde may. 2015', titulo: 'Base Dos', rol: 'Front End Architect / Designer Lead', texto: 'Arquitectura frontend, dirección de diseño y diseño UX para clientes financieros, entre ellos Banco Security (2017–2019).' },
        { cuando: '2011–2020', titulo: 'Banco de Chile', rol: 'Cuatro encargos distintos', texto: 'Portal de seguros, especificación de compatibilidad IE6, un sistema interno para la Teletón (2012–2018) y la app Mi Pago (React Native, 2020).' },
        { cuando: '2015', titulo: 'Porta SA', rol: 'Front End Developer', texto: '' },
        { cuando: '2013–2015', titulo: 'CodeBase Chile', rol: 'Front End Engineer', texto: '' },
        { cuando: '2010–2013', titulo: 'Imagemaker', rol: 'Diseñador y desarrollador web', texto: '' },
        { cuando: '2009–2010', titulo: 'monotono.cl', rol: 'Diseño web, diseño gráfico y desarrollo', texto: '' },
        { cuando: '2008–2013', titulo: 'Freelance', rol: 'Diseño y desarrollo de aplicaciones y sitios', texto: 'El punto de partida: diseño y código desde el primer día.' },
      ],
      formacionTitulo: 'Formación',
      formacionRango: '2005 — 2020',
      formacion: [
        { anio: '2020', titulo: 'Diplomado en Diseño y Medición de Experiencia de Usuario en Entornos Digitales', lugar: 'Pontificia Universidad Católica de Chile' },
        { anio: '2014–2016', titulo: 'Analista Programador', lugar: 'INACAP' },
        { anio: '2011', titulo: 'Diplomado en Gestión de Proyectos Web', lugar: 'Universidad de Chile' },
        { anio: '2009–2010', titulo: 'Diplomado en Programación Web', lugar: 'Universidad del Pacífico' },
        { anio: '2005–2008', titulo: 'Diseño Gráfico', lugar: 'INACAP' },
      ],
    },
    contacto: {
      titulo: '¿Tu idea necesita a alguien que la acompañe mientras evoluciona?',
      texto:
        'Busco roles de Senior Product / UX Designer o UX Design Engineer: formular el problema, investigarlo con quienes lo viven y acompañar cada decisión mientras la idea crece y cambia, también después de salir a producción.',
      cta: 'Escríbeme por LinkedIn',
    },
  },
  caso: {
    volver: '← Todos los casos',
    problema: 'Problema',
    rol: 'Mi rol',
    proceso: 'Proceso',
    resultado: 'Resultado',
    navAria: 'Navegar entre casos',
    sufijoTitulo: 'Alejandro Pérez Rocha',
  },
  footer: {
    autor: 'Alejandro Pérez Rocha',
    clarityAntes: 'Mido cómo se usa este sitio con ',
    clarityEnlace: 'Microsoft Clarity',
    clarityHref: 'https://privacy.microsoft.com/es-es/privacystatement',
    clarityDespues: ' (mapas de calor y sesiones anonimizadas). Si tu navegador envía «No rastrear», no se activa.',
  },
};
