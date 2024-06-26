import { useState } from 'react';
import { cn } from 'src/utils';
import { getLocalStorageConsent, setLocalStorageConsent } from 'src/utils/cookie';

export default function CookieConsent() {
	const hasNotSeeConsent = getLocalStorageConsent() === null;

	const [isOpen, setIsOpen] = useState(hasNotSeeConsent);

	const title = 'Cookies';
	const description =
		'We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. By clicking accept, you agree to this, as outlined in our Cookie Policy.';

	const gtag: Gtag.Gtag = () => {
		// eslint-disable-next-line prefer-rest-params
		window.dataLayer.push(arguments);
	};

	const acceptCookies = () => {
		gtag('consent', 'update', {
			ad_user_data: 'granted',
			ad_personalization: 'granted',
			ad_storage: 'granted',
			analytics_storage: 'granted',
		});
		setIsOpen(false);
		setLocalStorageConsent('accept');
	};

	const denyCookies = () => {
		gtag('consent', 'update', {
			ad_user_data: 'denied',
			ad_personalization: 'denied',
			ad_storage: 'denied',
			analytics_storage: 'denied',
		});
		setIsOpen(false);
		setLocalStorageConsent('deny');
	};

	return (
		<div
			className={cn(
				'flex gap-4 bg-secondary-alt px-3 py-4 max-w-[400px] rounded-[8px] border border-border fixed z-30 left-3 right-3 bottom-3 lg:left-[unset] lg:right-12 lg:bottom-8 custom-transition',
				!isOpen && 'hidden',
			)}
		>
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="flex-shrink-0"
			>
				<path
					d="M16 4C12.8174 4 9.76515 5.26428 7.51472 7.51472C5.26428 9.76515 4 12.8174 4 16C4 19.1826 5.26428 22.2348 7.51472 24.4853C9.76515 26.7357 12.8174 28 16 28C19.1826 28 22.2348 26.7357 24.4853 24.4853C26.7357 22.2348 28 19.1826 28 16C28 15.3333 27.9467 14.6667 27.8267 14C27.4667 13.3333 26.6667 13.3333 26.6667 13.3333H24V12C24 10.6667 22.6667 10.6667 22.6667 10.6667H20V9.33333C20 8 18.6667 8 18.6667 8H17.3333V5.33333C17.3333 4 16 4 16 4ZM12.6667 8C13.1971 8 13.7058 8.21071 14.0809 8.58579C14.456 8.96086 14.6667 9.46957 14.6667 10C14.6667 10.5304 14.456 11.0391 14.0809 11.4142C13.7058 11.7893 13.1971 12 12.6667 12C12.1362 12 11.6275 11.7893 11.2525 11.4142C10.8774 11.0391 10.6667 10.5304 10.6667 10C10.6667 9.46957 10.8774 8.96086 11.2525 8.58579C11.6275 8.21071 12.1362 8 12.6667 8ZM8.66667 13.3333C9.1971 13.3333 9.70581 13.544 10.0809 13.9191C10.456 14.2942 10.6667 14.8029 10.6667 15.3333C10.6667 15.8638 10.456 16.3725 10.0809 16.7475C9.70581 17.1226 9.1971 17.3333 8.66667 17.3333C8.13623 17.3333 7.62753 17.1226 7.25245 16.7475C6.87738 16.3725 6.66667 15.8638 6.66667 15.3333C6.66667 14.8029 6.87738 14.2942 7.25245 13.9191C7.62753 13.544 8.13623 13.3333 8.66667 13.3333ZM15.3333 14.6667C15.8638 14.6667 16.3725 14.8774 16.7475 15.2525C17.1226 15.6275 17.3333 16.1362 17.3333 16.6667C17.3333 17.1971 17.1226 17.7058 16.7475 18.0809C16.3725 18.456 15.8638 18.6667 15.3333 18.6667C14.8029 18.6667 14.2942 18.456 13.9191 18.0809C13.544 17.7058 13.3333 17.1971 13.3333 16.6667C13.3333 16.1362 13.544 15.6275 13.9191 15.2525C14.2942 14.8774 14.8029 14.6667 15.3333 14.6667ZM22 17.3333C22.5304 17.3333 23.0391 17.544 23.4142 17.9191C23.7893 18.2942 24 18.8029 24 19.3333C24 19.8638 23.7893 20.3725 23.4142 20.7475C23.0391 21.1226 22.5304 21.3333 22 21.3333C21.4696 21.3333 20.9609 21.1226 20.5858 20.7475C20.2107 20.3725 20 19.8638 20 19.3333C20 18.8029 20.2107 18.2942 20.5858 17.9191C20.9609 17.544 21.4696 17.3333 22 17.3333ZM14.6667 21.3333C15.1971 21.3333 15.7058 21.544 16.0809 21.9191C16.456 22.2942 16.6667 22.8029 16.6667 23.3333C16.6667 23.8638 16.456 24.3725 16.0809 24.7475C15.7058 25.1226 15.1971 25.3333 14.6667 25.3333C14.1362 25.3333 13.6275 25.1226 13.2525 24.7475C12.8774 24.3725 12.6667 23.8638 12.6667 23.3333C12.6667 22.8029 12.8774 22.2942 13.2525 21.9191C13.6275 21.544 14.1362 21.3333 14.6667 21.3333Z"
					fill="currentColor"
				/>
			</svg>

			<div className="flex flex-col gap-3">
				<div>
					<h4 className="font-sans uppercase">{title}</h4>
					<p className="font-serif text-[14px] leading-[17px]">{description}</p>
				</div>
				<div className="flex gap-2 justify-end">
					<button
						onClick={acceptCookies}
						className="bg-secondary flex gap-3 px-2 items-center w-fit rounded-[4px] hover:contrast-[0.96] disabled:opacity-50 custom-transition"
					>
						<div className="pt-3 pb-1.5 uppercase text-primary font-sans text-[16px] leading-[22px]">ACCEPT</div>
					</button>
					<button
						onClick={denyCookies}
						className="bg-secondary-alt flex gap-3 px-2 items-center w-fit rounded-[4px] hover:contrast-[0.96] disabled:opacity-50 custom-transition"
					>
						<div className="pt-3 pb-1.5 uppercase text-primary font-sans text-[16px] leading-[22px]">DENY ALL</div>
					</button>
				</div>
			</div>
		</div>
	);
}
