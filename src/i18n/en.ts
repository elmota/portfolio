// English copy. Same keys as es.ts (the type is checked in index.ts).
import type { Dict } from './index';

export const en: Dict = {
  meta: {
    title: 'Alejandro Pérez Rocha — Senior Product / UX Designer and UX Design Engineer',
    description:
      'Over 15 years improving the user experience of digital products from both design and frontend: Product Thinking, UX Strategy, Design Systems, REST APIs and CI/CD.',
    locale: 'en_US',
  },
  ui: {
    logo: 'Alejandro Pérez',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    sections: 'Sections',
    language: 'Language',
    switchTo: { es: 'Cambiar a Español', en: 'English' },
    home: { label: 'Home', tag: 'Who I am and my profiles.' },
  },
  items: {
    diseno: { etiqueta: 'Design', tagline: 'Understanding who uses the product.' },
    ambos: { etiqueta: 'Design + Code', tagline: 'The experience, from idea to code.' },
    ingenieria: { etiqueta: 'Engineering', tagline: 'Code in service of the experience.' },
    casos: { etiqueta: 'Case studies', tagline: '7 projects with process and outcome.' },
    enfoque: { etiqueta: 'Approach', tagline: 'How I bridge design and engineering.' },
    skills: { etiqueta: 'Skills', tagline: 'From research to CI/CD.' },
    trayectoria: { etiqueta: 'Experience', tagline: '2008 — today.' },
    contacto: { etiqueta: 'Contact', tagline: "Let's talk on LinkedIn." },
  },
  hero: {
    nombre: 'Alejandro Pérez Rocha',
    cargo: 'Product / UX Designer and Frontend Developer',
    meta: 'Santiago, Chile. Available immediately.',
    titular: 'Beyond design: products are alive.',
    lead: "Hi, I'm Alejandro. I've spent 15 years in banking, mining and public services, where mistakes are costly. An idea starts with discovery and design, and it doesn't end in production: I stay with it as it evolves.",
    cicloAria: 'From discovery to evolution, and back to the start',
    ciclo: ['Discover', 'Design', 'Build', 'Evolve'],
    switchTitle: 'Choose how to look at my work',
    switchHint: ', or swipe',
    ctaCasos: 'See case studies',
    ctaContacto: "Let's talk",
    lentes: [
      {
        id: 'diseno',
        rol: 'Product / UX Design',
        titular: 'Solutions are designed together with the user.',
        bajada:
          'Field research, Product Thinking and design systems in banking, mining and public services. AI helps me synthesize, audit and cover edge cases; the design decisions are mine.',
        datos: [
          ['Understanding the person', 'field research and discovery before designing'],
          ['Deciding what to build', 'Product Thinking and UX Strategy'],
          ['AI as a companion', 'research synthesis and UX audits, also to cover edge cases'],
        ],
      },
      {
        id: 'ambos',
        rol: 'Design + Code',
        titular: 'Seeing a solution through, from the need to its evolution.',
        bajada:
          'The same person defines the experience and builds it, before and after launch. AI agents are a companion: they speed up the process and help with edge cases; judgment and the final review are mine.',
        datos: [
          ['15+', 'years accompanying digital ideas'],
          ['Design + Code', 'from strategy to frontend, and its evolution'],
          ['AI with judgment', 'research, prototypes and QA; final validation is mine'],
        ],
      },
      {
        id: 'ingenieria',
        rol: 'UX / Design Engineering',
        titular: 'Integrating solutions without the friction.',
        bajada:
          'TypeScript, Next.js, Angular and React Native connected to REST APIs and CI/CD. Coding agents help me with implementation and QA, useful for edge cases; I review every change before production.',
        datos: [
          ['TypeScript', 'Angular, Next.js and React Native'],
          ['REST APIs and CI/CD', 'integration and continuous delivery'],
          ['Coding agents', 'they assist implementation and QA; I review every change'],
        ],
      },
    ],
  },
  home: {
    casos: {
      titulo: 'Case studies',
      intro: 'Products where complexity is the job: money, machinery, public services and trust.',
      otrosTitulo: 'Other projects',
      otros: [
        {
          titulo: 'Barrio Alonso de Córdova',
          texto: 'A digital project for a neighborhood of fashion boutiques, design, gift shops and restaurants.',
        },
      ],
    },
    enfoque: {
      titulo: 'Design that knows how it gets built',
      intro:
        'The products I usually work on —money, critical machinery, government services— are complex and leave little room for error. Fidelity tends to get lost between design and code: a UX decision reaches the code changed, or a technical constraint reaches design too late. That is avoided when the same person carries both sides of the work, from start to finish.',
      tarjetas: [
        {
          titulo: 'What to build',
          lentes: 'diseno',
          texto:
            'Product Thinking and UX Strategy, before opening a design tool: which problem to solve, for whom, and what success will look like.',
        },
        {
          titulo: 'How to build it',
          lentes: 'ingenieria',
          texto:
            'From mockup to production and beyond: frontend, REST API integration and CI/CD deployment, with an implementation mindset from the first sketch.',
        },
        {
          titulo: 'Where the two meet',
          lentes: 'diseno ingenieria',
          texto:
            'What gets designed is what gets implemented: fewer translations between stages, and QA shared with the team when needed.',
        },
        {
          titulo: 'AI assists, judgment decides',
          lentes: 'diseno ingenieria',
          texto:
            'It is my companion in research, audits, prototypes, implementation and QA: it speeds things up and helps cover edge cases. I validate every result, and a product blueprint with documented decisions keeps the team and the agents on the same criteria.',
        },
      ],
      espiralTitulo: 'Every version is another turn.',
      espiralTexto:
        'What people do with what was delivered opens the next discovery. I stay through those turns, not just the first one.',
      espiralSvg: 'A spiral that widens with every turn: each dot is a version, and it keeps going.',
    },
    skills: {
      titulo: 'From research to code in production',
      intro: 'I bring AI and coding agents into design, implementation and QA, always with human judgment in charge.',
      grupos: [
        { titulo: 'Research and discovery', lentes: 'diseno', items: ['User research', 'Usability testing', 'Field discovery', 'Hypothesis validation'] },
        { titulo: 'Strategy and product', lentes: 'diseno', items: ['Product Thinking', 'UX Strategy', 'Information architecture', 'Flow definition'] },
        { titulo: 'Design', lentes: 'diseno', items: ['Product Design', 'UX/UI', 'Interaction design', 'Prototyping', 'Design Systems'] },
        { titulo: 'Frontend implementation', lentes: 'ingenieria', items: ['TypeScript', 'JavaScript', 'Angular', 'Next.js', 'React Native', 'Tailwind CSS', 'WordPress'] },
        { titulo: 'Integration and delivery', lentes: 'ingenieria', items: ['Headless CMS (Strapi)', 'REST APIs', 'Service configuration', 'CI/CD', 'Deployment'] },
        { titulo: 'AI in the process', lentes: 'diseno ingenieria', items: ['Research and audits with AI', 'Prototypes with coding agents', 'Implementation and QA'] },
      ],
    },
    trayectoria: {
      titulo: 'Experience',
      rango: '2008 — today',
      sobreMi:
        "I started in graphic design and programming in 2008, and over the years I stayed at the intersection of the two: where a good design decision meets a real technical constraint. I do my best work on products where mistakes are costly —money, identity, regulation— and where clarity is a way of looking after the user.",
      entradas: [
        { cuando: 'Since Mar 2024', titulo: 'Fraudia', rol: 'UX/UI Design Lead and Front End Developer', texto: 'UX/UI design and frontend development of a financial-sector product.' },
        { cuando: '—', titulo: 'Paybest', rol: 'Product design and frontend development', texto: 'Digital wallet: product design and frontend development.' },
        { cuando: 'Since May 2015', titulo: 'Base Dos', rol: 'Front End Architect / Designer Lead', texto: 'Frontend architecture, design direction and UX design for financial clients, including Banco Security (2017–2019).' },
        { cuando: '2011–2020', titulo: 'Banco de Chile', rol: 'Four separate engagements', texto: 'An insurance portal, an IE6 compatibility specification, an internal system for Teletón (2012–2018) and the Mi Pago app (React Native, 2020).' },
        { cuando: '2015', titulo: 'Porta SA', rol: 'Front End Developer', texto: '' },
        { cuando: '2013–2015', titulo: 'CodeBase Chile', rol: 'Front End Engineer', texto: '' },
        { cuando: '2010–2013', titulo: 'Imagemaker', rol: 'Web designer and developer', texto: '' },
        { cuando: '2009–2010', titulo: 'monotono.cl', rol: 'Web design, graphic design and development', texto: '' },
        { cuando: '2008–2013', titulo: 'Freelance', rol: 'Application and website design and development', texto: 'The starting point: design and code from day one.' },
      ],
      formacionTitulo: 'Education',
      formacionRango: '2005 — 2020',
      formacion: [
        { anio: '2020', titulo: 'Postgraduate Diploma in User Experience Design and Measurement in Digital Environments', lugar: 'Pontificia Universidad Católica de Chile' },
        { anio: '2014–2016', titulo: 'Programming Analyst (technical degree)', lugar: 'INACAP' },
        { anio: '2011', titulo: 'Postgraduate Diploma in Web Project Management', lugar: 'Universidad de Chile' },
        { anio: '2009–2010', titulo: 'Postgraduate Diploma in Web Programming', lugar: 'Universidad del Pacífico' },
        { anio: '2005–2008', titulo: 'Graphic Design', lugar: 'INACAP' },
      ],
    },
    contacto: {
      titulo: 'Does your idea need someone to stay with it as it evolves?',
      texto:
        "I'm looking for Senior Product / UX Designer or UX Design Engineer roles: framing the problem, researching it with the people who live it, and supporting each decision as the idea grows and changes, including after it reaches production.",
      cta: 'Message me on LinkedIn',
    },
  },
  caso: {
    volver: '← All case studies',
    problema: 'Problem',
    rol: 'My role',
    proceso: 'Process',
    resultado: 'Outcome',
    navAria: 'Browse case studies',
    sufijoTitulo: 'Alejandro Pérez Rocha',
  },
  footer: {
    autor: 'Alejandro Pérez Rocha',
    clarityAntes: 'I measure how this site is used with ',
    clarityEnlace: 'Microsoft Clarity',
    clarityHref: 'https://privacy.microsoft.com/en-us/privacystatement',
    clarityDespues: ' (heatmaps and anonymized sessions). If your browser sends "Do Not Track", it is not activated.',
  },
};
