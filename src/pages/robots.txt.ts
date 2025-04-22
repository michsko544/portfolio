import type { APIRoute } from 'astro';

const disallowedPaths = ['/~partytown/*'];

const robotsTxt = `
User-agent: *
Allow: /
${disallowedPaths.map(path => `Disallow: ${path}`).join('\n')}
Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}

# Google adsbot ignores robots.txt unless specifically named!
User-agent: adsbot-google
${disallowedPaths.map(path => `Disallow: ${path}`).join('\n')}

User-agent: Nutch
Disallow: /

User-agent: AhrefsBot
Crawl-delay: 10
${disallowedPaths.map(path => `Disallow: ${path}`).join('\n')}
Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}

User-agent: AhrefsSiteAudit
Crawl-delay: 10
${disallowedPaths.map(path => `Disallow: ${path}`).join('\n')}
Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};
