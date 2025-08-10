import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const art = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        medium: z.string(),
        dimensions: z.string(),
        year: z.number(),
        month: z.number(),
        heroImage: z.string(),
        author: z.string(),
        text: z.string(),
        status: z.string().optional(), // Sold/Available
    }),
});


export const collections = { blog, art }

