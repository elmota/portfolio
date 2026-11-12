// Internacionalización: español (por defecto, sin prefijo) e inglés (/en/).
// Las páginas existen estáticamente en ambos idiomas; la detección por idioma
// del sistema y el selector viven en Base.astro y Sidebar.astro.
import { es } from './es';
import { en } from './en';
import { url } from '../lib/url';

export type Lang = 'es' | 'en';
export type Dict = typeof es;

export const langs: Lang[] = ['es', 'en'];
export const defaultLang: Lang = 'es';

const dicts: Record<Lang, Dict> = { es, en };
export const getDict = (lang: Lang): Dict => dicts[lang];

// URL de una ruta en un idioma, respetando `base`: es → /ruta, en → /en/ruta.
// Las rutas se escriben siempre en su forma española ('casos/x/'); en inglés el
// primer segmento se traduce ('/en/cases/x/'), para que ningún URL en inglés
// lleve una palabra en español.
export const lurl = (lang: Lang, path = ''): string => {
  if (lang === 'es') return url(path);
  const limpia = path.replace(/^\//, '').replace(/^casos\//, 'cases/');
  return url(`en/${limpia}`);
};

// Rutas equivalentes de una misma página en cada idioma (para el selector,
// los <link rel="alternate"> y la redirección por idioma del sistema).
export const altPaths = (path = ''): Record<Lang, string> => ({
  es: lurl('es', path),
  en: lurl('en', path),
});
