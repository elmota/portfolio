import { getCollection } from 'astro:content';
import type { Lang } from '../i18n';

// Casos de estudio ordenados, en el idioma pedido. Cada idioma es su propia
// colección (src/content/casos y src/content/casos-en) con los mismos ids.
export async function getCasos(lang: Lang) {
  const casos = lang === 'en' ? await getCollection('casosEn') : await getCollection('casos');
  return casos.sort((a, b) => a.data.orden - b.data.orden);
}
