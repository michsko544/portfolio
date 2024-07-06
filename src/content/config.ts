import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			author: z.string(),
			cover: image().refine(img => img.width >= 1080, {
				message: 'Cover image must be at least 1080 pixels wide!',
			}),
			coverAlt: z.string(),
			coverAuthor: z.string().optional(),
			publishDate: z.date(),
			tags: z.array(z.string()),
			readTime: z.string().optional(),
			draft: z.boolean().optional(),
		}),
});

export const collections = {
	blog: blogCollection,
};
