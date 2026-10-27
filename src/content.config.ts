import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const recht = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/recht' }),
  schema: z.object({ title: z.string(), description: z.string() }),
});

const ratgeber = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/ratgeber' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Kürzerer Titel für Suchergebnisse, falls title zu lang ist */
      seoTitel: z.string().optional(),
      /** Kurzer Titel für Karten und Brotkrumen */
      kurz: z.string(),
      description: z.string(),
      kategorie: z.string(),
      datum: z.coerce.date(),
      aktualisiert: z.coerce.date().optional(),
      lesezeit: z.number(),
      bild: image(),
      bildAlt: z.string(),
    }),
});

export const collections = { recht, ratgeber };
