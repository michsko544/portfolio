import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			applyBaseStyles: false,
			nesting: true,
		}),
		react(),
		partytown({ config: { forward: ['dataLayer.push'] } }),
	],
	output: 'server',
	adapter: netlify(),
});
