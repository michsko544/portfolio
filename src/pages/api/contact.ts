import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_TOKEN);

export const POST: APIRoute = async ({ request }) => {
	const data = await request.formData();
	const fullname = data.get('fullname');
	const email = data.get('email');
	const topic = data.get('topic');
	const message = data.get('message');

	try {
		if (!fullname) {
			throw new Error('Fullname is required');
		}

		if (!email) {
			throw new Error('Email is required');
		}

		if (!topic) {
			throw new Error('Topic is required');
		}

		if (!message) {
			throw new Error('Message is required');
		}

		const response = await resend.emails.send({
			from: 'contact@michalskorus.pl',
			to: 'mskorus.biznes@gmail.com',
			subject: `[michalskorus.pl] Contact form - ${fullname}`,
			html: `<h3>${topic}</h3><p>${message}</p><br><p>${fullname}<p><a href="mailto:${email}">${email}</a>`,
			reply_to: `${email}`,
		});

		if (response.error) {
			throw new Error(response.error.message);
		}
	} catch (error) {
		if (error instanceof Error) {
			return new Response(
				JSON.stringify({
					message: error.message ?? 'Error',
				}),
				{ status: 400 },
			);
		}
	}

	return new Response(
		JSON.stringify({
			message: 'Successfully sent email',
		}),
		{ status: 200 },
	);
};
