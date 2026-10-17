import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: z.object({
    titre: z.string(),
    resume: z.string(),                      // une ou deux phrases pour la carte
    date: z.coerce.date(),
    domaines: z.array(z.enum(['IA', 'Automatisme', 'Robotique', 'Systèmes autonomes', 'Énergie'])),
    technologies: z.array(z.string()).default([]),
    statut: z.enum(['terminé', 'en cours']).default('terminé'),
    phare: z.boolean().default(false),        // true = affiché sur l'accueil
    image: z.string().optional(),             // ex. /projets/sentinelle/couverture.jpg
    video: z.string().optional(),             // lien YouTube, TikTok ou Google Drive
    github: z.string().optional(),
    lien: z.string().optional(),              // site, publication, certificat
  }),
});

export const collections = { projets };
