import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per project in src/content/projects/.
// To add a project: drop a .glb in public/models/, copy an existing .md file, edit the fields.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),                         // one or two sentences, shown on cards
    kind: z.enum(['academic', 'side']),          // academic -> /projects, side -> /side-projects
    discipline: z.enum(['Mechanical', 'Civil', 'Architectural', 'Structural', 'Software']),
    course: z.string().optional(),               // e.g. "MANU 209 · Product Manufacturing Drafting"
    term: z.string(),                            // e.g. "Fall 2026"
    software: z.array(z.string()),
    model: z.string().optional(),                // /models/xyz.glb
    poster: z.string().optional(),               // /posters/xyz.webp
    sizeMB: z.number().optional(),
    cameraOrbit: z.string().optional(),
    drawings: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
    links: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
    status: z.string().optional(),               // e.g. "Beta v0.2" for side projects
    order: z.number().default(100),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
