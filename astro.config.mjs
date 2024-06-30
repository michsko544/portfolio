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
				}
				return item;
			},
		}),
	],
	output: 'server',
	adapter: netlify(),
});
