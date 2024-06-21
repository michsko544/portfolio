import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_TOKEN);
const hcaptchaSecret = import.meta.env.HCAPTCHA_SECRET_KEY;

type HCaptchaResponse = {
	success: boolean; // is the passcode valid, and does it meet security criteria you specified, e.g. sitekey?
	challenge_ts: string; // timestamp of the challenge (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
	hostname: string; // the hostname of the site where the challenge was solved
	credit: boolean; // optional: whether the response will be credited
	'error-codes': unknown[]; // optional: any error codes
	score: number; // ENTERPRISE feature: a score denoting malicious activity.
	score_reason: unknown[]; // ENTERPRISE feature: reason(s) for score. See BotStop.com for details.
};

export const POST: APIRoute = async ({ request }) => {
	const data = await request.formData();
	const fullname = data.get('fullname');
	const email = data.get('email');
	const topic = data.get('topic');
	const message = data.get('message');
	const captcha = data.get('captcha');

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

		const captchaResponse = await fetch('https://hcaptcha.com/siteverify', {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
			},
			body: `response=${captcha}&secret=${hcaptchaSecret}`,
			method: 'POST',
		});

		const captchaValidation = (await captchaResponse.json()) as HCaptchaResponse;
		if (!captchaValidation.success) {
			throw new Error('Invalid captcha code');
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
