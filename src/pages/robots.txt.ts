import type { APIRoute } from 'astro';

const robotsTxt = `
User-agent: *
Disallow:

# Twitter preview bot
User-agent: Twitterbot
Allow: /

# Facebook scraper
User-agent: FacebookExternalHit
Allow: /

# LinkedIn bot
User-agent: LinkedInBot
Allow: /

Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};
