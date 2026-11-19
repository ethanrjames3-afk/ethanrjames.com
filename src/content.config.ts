import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per job or project in src/content/work/.
// Images live in src/assets/work/<slug>/ and are referenced relative to the Markdown file.
const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // 'job' entries list under Experience, 'project' entries under Projects.
      kind: z.enum(['job', 'project']),
      org: z.string().optional(),
      role: z.string(),
      // Shown for jobs only. "2019" or "2019–2020".
      years: z.coerce.string().optional(),
      // Sorts newest first. For jobs, use the year the work ended.
      sort: z.number(),
      summary: z.string(),
      cover: image().optional(),
      // Optional different image for the home page card (defaults to the cover).
      thumb: image().optional(),
      thumbAlt: z.string().optional(),
      coverAlt: z.string().optional(),
      // Optional looping video at the top of the page, from public/ (e.g. /media/clip.mp4). The cover is its poster.
      video: z.string().optional(),
      // 'contain' shows the whole cover on the home page card (good for diagrams); 'cover' crops to fill.
      coverFit: z.enum(['cover', 'contain']).default('cover'),
      gallery: z
        .array(z.object({
            src: image(),
            caption: z.string(),
            // Optional link, e.g. a playable demo; opens in a new tab. Without it the image links to itself.
            href: z.string().url().optional(),
          }))
        .default([]),
    }),
});

export const collections = { work };
