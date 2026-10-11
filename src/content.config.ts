import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.string(),
    role: z.string(),
    stack: z.array(z.string()),
    cover: z.string(),
    coverAlt: z.string(),
    repo: z.url().optional(),
    live: z.url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  loader: file('./src/content/experience.json'),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    start: z.string(),
    end: z.string(),
    summary: z.string(),
    highlights: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    url: z.url().optional(),
    order: z.number(),
  }),
});

export const collections = { projects, writing, experience };
