import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const schema = z.object({
  titulo: z.string(),
  resumen: z.string(),
  etiquetas: z.array(z.string()),
  orden: z.number(),
  problema: z.string(),
  rol: z.string(),
  proceso: z.string().optional(),
  resultado: z.string(),
});

// Un caso por archivo; el nombre del archivo es el id (y el slug de la URL) y es
// el mismo en ambos idiomas.
const casos = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/casos' }), schema });
const casosEn = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/casos-en' }), schema });

export const collections = { casos, casosEn };
