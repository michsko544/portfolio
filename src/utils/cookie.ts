export const getLocalStorageConsent = () => {
	return localStorage.getItem('cookie_consent');
};

export const setLocalStorageConsent = (value: 'accept' | 'deny' | null) => {
	localStorage.setItem('cookie_consent', value);
};
