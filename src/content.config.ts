import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			author: z.string(),
			cover: image(),
			coverAlt: z.string(),
			coverAuthor: z.string().optional(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			readTime: z.string().optional(),
			draft: z.boolean().optional(),
		}),
});

export const collections = {
	blog: blogCollection,
};
