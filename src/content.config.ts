import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const casos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/casos' }),
  schema: z.object({
    titulo: z.string(),
    resumen: z.string(),
    etiquetas: z.array(z.string()),
    orden: z.number(),
    problema: z.string(),
    rol: z.string(),
    proceso: z.string().optional(),
    resultado: z.string(),
  }),
});

export const collections = { casos };
