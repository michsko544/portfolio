interface Window {
	isDarkMode: () => boolean;
	initTheme: () => void;
	onContactSubmit: (token: string) => void;
	hcaptcha: { execute: () => void };
}
