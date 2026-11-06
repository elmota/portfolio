// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL y BASE_PATH los define el workflow de GitHub Pages (.github/workflows/deploy.yml).
// En local no hacen falta: el sitio se sirve desde la raíz.
export default defineConfig({
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH ?? '/',
});
