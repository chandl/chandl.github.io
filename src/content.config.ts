import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    url: z.url().optional(),
    repo: z.url(),
    stack: z.array(z.string()).default([]),
    status: z.enum(['live', 'wip', 'archived']).default('live'),
    order: z.number().default(100),
    accent: z
      .string()
      .regex(/^#[0-9a-fA-F]{6}$/)
      .optional(),
  }),
});

export const collections = { projects };
