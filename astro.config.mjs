import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.michalskorus.pl',
	integrations: [
		tailwind({
			applyBaseStyles: false,
			nesting: true,
		}),
		react(),
		partytown({
			config: {
				forward: ['dataLayer.push'],
			},
		}),
		mdx(),
		sitemap({
			serialize(item) {
				if (item.url === 'https://www.michalskorus.pl/') {
					item.changefreq = 'daily';
					item.lastmod = new Date();
					item.priority = 1;
					return item;
				}

				if (item.url === 'https://www.michalskorus.pl/blog/') {
					item.changefreq = 'daily';
					item.lastmod = new Date();
					item.priority = 0.8;
					return item;
				}

				if (item.url.includes('blog')) {
					item.changefreq = 'weekly';
					item.lastmod = new Date();
					item.priority = 0.6;
					return item;
				}

				item.changefreq = 'weekly';
				item.lastmod = item.lastmod || new Date();
				item.priority = 0.3;
				return item;
			},
		}),
	],
	output: 'server',
	adapter: netlify(),
});
