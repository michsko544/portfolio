interface Window {
	isDarkMode: () => boolean;
	initTheme: () => void;
	onContactSubmit: (token: string) => void;
	hcaptcha: { execute: () => void };
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	dataLayer: { push: (args: any) => void };
	posthog: {
		init(token: string, options: { api_host: string; person_profiles: string }): void;
		capture(event: string, properties?: Record<string, unknown>): void;
	};
}
