import { defineCollection, z } from 'astro:content';

const releases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    bandcampUrl: z.string().url(),
    bandcampEmbedId: z.string(),
    coverImage: z.string(),
    coverAlt: z.string(),
    shortDescription: z.string(),
    tags: z.array(z.string()).optional(),
    credits: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const photos = defineCollection({
  type: 'data',
  schema: z.object({
    image: z.string(),
    alt: z.string(),
    location: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    printAvailable: z.boolean().default(false),
    printSKU: z.string().optional(),
    printPrice: z.number().optional(),
    printSizes: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

const motion = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    videoPath: z.string().optional(),
    instagramUrl: z.string().url().optional(),
    thumbnail: z.string(),
    tags: z.array(z.string()),
    pairedTrack: z.string().optional(), // Reference to release slug
    date: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    archetype: z.enum(['rack-breakdown', 'track-deconstruction', 'dj-workflow', 'field-recording']),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    tools: z.array(z.string()),
    tags: z.array(z.string()),
    coverImage: z.string().optional(),
    series: z.string().optional(), // e.g., "Ableton Basics", "DJ Tools", "Urban Textures"
  }),
});

export const collections = {
  releases,
  photos,
  motion,
  posts,
};
