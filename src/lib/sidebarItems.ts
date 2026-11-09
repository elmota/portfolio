// Los 8 items (3 "perfiles" + 5 "secciones"). El sidebar muestra solo las
// secciones; los perfiles se eligen con el selector en línea del Hero (ver
// Hero.astro), pero siguen compartiendo este mismo modelo de paletas. Son el mismo
// componente visual: bloques apilados, cada uno con su propia paleta fija de
// 4 colores (no la paleta aleatoria de sitio, que queda retirada — ver
// Sidebar.astro). Al activar un item, bg/ink pasan a ser el fondo/texto de
// TODA la página y detail/detailInk el acento, reemplazando lo que antes
// hacían --bg/--text (paleta de sitio) y --accent (lente) por separado.
//
// Contacto es la excepción: negro en todo el sitio, regla 60/30/10 (ver
// html[data-theme="contacto"] en global.css).
//
// Colores extraídos y mezclados a mano desde varias paletas de la grilla de
// cubos isométricos (incluye verde y magenta, antes ausentes), saturados y
// luego "bajados" de nuevo tras quedar demasiado eléctricos — cada uno
// revalidado con WCAG AA (4.5:1) contra su propio ink antes de fijarlo.
export interface SidebarItem {
  id: string;
  tipo: 'perfil' | 'seccion';
  numero: string;
  etiqueta: string;
  tagline: string;
  bg: string;
  ink: string;
  detail: string;
  detailInk: string;
}

export const sidebarItems: SidebarItem[] = [
  { id: 'diseno', tipo: 'perfil', numero: '01', etiqueta: 'Diseño', tagline: 'Entender a quien usa el producto.', bg: '#d36958', ink: '#0a0a0a', detail: '#2aa3b4', detailInk: '#0a0a0a' },
  { id: 'ambos', tipo: 'perfil', numero: '02', etiqueta: 'Diseño + Código', tagline: 'La experiencia, de la idea al código.', bg: '#7a56c8', ink: '#ffffff', detail: '#ec7fa6', detailInk: '#0a0a0a' },
  { id: 'ingenieria', tipo: 'perfil', numero: '03', etiqueta: 'Ingeniería', tagline: 'Código al servicio de la experiencia.', bg: '#2fc33e', ink: '#0a0a0a', detail: '#cd9f2f', detailInk: '#0a0a0a' },
  { id: 'casos', tipo: 'seccion', numero: '01', etiqueta: 'Casos', tagline: '7 proyectos con proceso y resultado.', bg: '#299dcd', ink: '#0a0a0a', detail: '#d2503c', detailInk: '#0a0a0a' },
  { id: 'enfoque', tipo: 'seccion', numero: '02', etiqueta: 'Enfoque', tagline: 'Cómo cruzo diseño e ingeniería.', bg: '#bc2d75', ink: '#ffffff', detail: '#cd9f2f', detailInk: '#0a0a0a' },
  { id: 'skills', tipo: 'seccion', numero: '03', etiqueta: 'Skills', tagline: 'De research a CI/CD.', bg: '#1e4382', ink: '#ffffff', detail: '#2aa3b4', detailInk: '#0a0a0a' },
  { id: 'trayectoria', tipo: 'seccion', numero: '04', etiqueta: 'Trayectoria', tagline: '2008 — hoy.', bg: '#dd8a2e', ink: '#0a0a0a', detail: '#2aa3b4', detailInk: '#0a0a0a' },
  { id: 'contacto', tipo: 'seccion', numero: '05', etiqueta: 'Contacto', tagline: 'Hablemos por LinkedIn.', bg: '#1c1c1c', ink: '#ffffff', detail: '#22d3ee', detailInk: '#0a0a0a' },
];

export const sidebarIds = sidebarItems.map((i) => i.id);
export const defaultSidebarId = 'ambos';
