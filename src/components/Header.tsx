import { useState } from 'react';
import { cn } from 'src/utils';
import { useClickAway } from '@uidotdev/usehooks';

function Logo() {
	return (
		<svg height="100%" viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M33.1349 0.226318L48.4905 15.5481V23.7735H41.3245V18.505L30.1716 7.37647H27.8548V23.7735H20.6889V0.226318H33.1349Z"
				fill="currentColor"
			/>
			<path
				d="M12.446 0.226318L27.8016 15.5481V23.7735H20.6356V18.505L9.48273 7.37647H7.16592V23.7735H0V0.226318H12.446Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function IconBurger() {
	return (
		<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4 13H28M4 19H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
		</svg>
	);
}

function IconBack() {
	return (
		<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M26.6666 13.3333V18.6666H14.6666L19.3333 23.3333L16.1066 26.5599L5.54663 15.9999L16.1066 5.43994L19.3333 8.66661L14.6666 13.3333H26.6666Z"
				fill="currentColor"
			/>
		</svg>
	);
}
function IconSun() {
	return (
		<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0_162_3051)">
				<path
					d="M2.36663 12.7267L3.30663 13.6667L4.50663 12.4734L3.55996 11.5267M7.99996 4.00008C5.79329 4.00008 3.99996 5.79342 3.99996 8.00008C3.99996 10.2067 5.79329 12.0001 7.99996 12.0001C10.2066 12.0001 12 10.2067 12 8.00008C12 5.78675 10.2066 4.00008 7.99996 4.00008ZM13.3333 8.66675H15.3333V7.33342H13.3333M11.4933 12.4734L12.6933 13.6667L13.6333 12.7267L12.44 11.5267M13.6333 3.33341L12.6933 2.40008L11.4933 3.59341L12.44 4.54008M8.66663 0.666748H7.33329V2.66675H8.66663M4.50663 3.59341L3.30663 2.40008L2.36663 3.33341L3.55996 4.54008L4.50663 3.59341ZM0.666626 8.66675H2.66663V7.33342H0.666626M8.66663 13.3334H7.33329V15.3334H8.66663"
					fill="currentColor"
				/>
			</g>
			<defs>
				<clipPath id="clip0_162_3051">
					<rect width="16" height="16" fill="currentColor" />
				</clipPath>
			</defs>
		</svg>
	);
}

function IconLinkedin() {
	return (
		<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M25.3333 4C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333ZM24.6667 24.6667V17.6C24.6667 16.4472 24.2087 15.3416 23.3936 14.5264C22.5784 13.7113 21.4728 13.2533 20.32 13.2533C19.1867 13.2533 17.8667 13.9467 17.2267 14.9867V13.5067H13.5067V24.6667H17.2267V18.0933C17.2267 17.0667 18.0533 16.2267 19.08 16.2267C19.5751 16.2267 20.0499 16.4233 20.3999 16.7734C20.75 17.1235 20.9467 17.5983 20.9467 18.0933V24.6667H24.6667ZM9.17333 11.4133C9.76742 11.4133 10.3372 11.1773 10.7573 10.7573C11.1773 10.3372 11.4133 9.76742 11.4133 9.17333C11.4133 7.93333 10.4133 6.92 9.17333 6.92C8.57571 6.92 8.00257 7.1574 7.57999 7.57999C7.1574 8.00257 6.92 8.57571 6.92 9.17333C6.92 10.4133 7.93333 11.4133 9.17333 11.4133ZM11.0267 24.6667V13.5067H7.33333V24.6667H11.0267Z"
				fill="currentColor"
			/>
		</svg>
	);
}
function IconGithub() {
	return (
		<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H19.4133C18.9867 27.9067 18.9733 27.0933 18.9733 26.8133L18.9867 23.52C18.9867 22.4 18.6 21.6667 18.1733 21.2933C20.8533 21 23.6533 20 23.6533 15.3733C23.6533 14.0667 23.1867 12.9867 22.4267 12.1467C22.5467 11.8533 22.96 10.6267 22.3067 8.97333C22.3067 8.97333 21.2933 8.66667 19 10.2133C18.04 9.94667 17.0267 9.81333 16 9.8C14.9867 9.81333 13.9467 9.94667 13 10.2133C10.7067 8.66667 9.69333 8.97333 9.69333 8.97333C9.04 10.6267 9.45333 11.8533 9.57333 12.1467C8.81333 12.9867 8.34667 14.0667 8.34667 15.3733C8.34667 20 11.1467 21 13.8133 21.3333C13.4667 21.6 13.16 22.1333 13.0533 22.9067C12.36 23.2133 10.6267 23.7467 9.56 21.9067C9.56 21.9067 8.92 20.76 7.72 20.6667C7.72 20.6667 6.54667 20.6667 7.64 21.4C7.64 21.4 8.42667 21.7733 8.97333 23.16C8.97333 23.16 9.66667 25.4933 13.0133 24.7733L13.0267 26.8133C13.0267 27.0933 13 27.9067 12.5733 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4Z"
				fill="currentColor"
			/>
		</svg>
	);
}
function IconStackoverflow() {
	return (
		<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M23.1467 26.9334V19.7601H25.5333V29.3334H4V19.7601H6.4V26.9334H23.1467ZM9.02667 19.0934L9.52 16.7467L21.24 19.2134L20.7467 21.5601L9.02667 19.0934ZM10.5733 13.4801L11.5867 11.3334L22.44 16.3734L21.4267 18.5334L10.5733 13.4801ZM13.5867 8.16008L15.12 6.32007L24.32 14.0001L22.7867 15.8267L13.5867 8.16008ZM19.52 2.49341L26.6667 12.1067L24.7467 13.5334L17.6 3.92007L19.52 2.49341ZM8.78667 24.5467V22.1467H20.76V24.5467H8.78667Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function IconMoon() {
	return (
		<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M1.33325 8.00008C1.33319 9.04685 1.57962 10.0789 2.05259 11.0128C2.52556 11.9466 3.21179 12.7559 4.0557 13.3752C4.89962 13.9945 5.87751 14.4064 6.9102 14.5775C7.94289 14.7486 9.00136 14.6741 9.99992 14.3601C8.64631 13.9347 7.46373 13.0885 6.62419 11.9447C5.78466 10.8008 5.33196 9.41896 5.33196 8.00008C5.33196 6.5812 5.78466 5.19933 6.62419 4.05548C7.46373 2.91163 8.64631 2.06547 9.99992 1.64008C9.00136 1.32605 7.94289 1.25157 6.9102 1.42267C5.87751 1.59378 4.89962 2.00565 4.0557 2.62496C3.21179 3.24426 2.52556 4.05359 2.05259 4.98741C1.57962 5.92123 1.33319 6.95331 1.33325 8.00008Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default function Header() {
	const [isMenuOpened, setIsMenuOpened] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(window.isDarkMode());

	const ref = useClickAway<HTMLElement>(() => {
		closeMenu();
	});

	const handleThemeChange = () => {
		if (isDarkMode) {
			localStorage?.setItem('theme', 'light');
			setIsDarkMode(false);
		} else {
			localStorage?.setItem('theme', 'dark');
			setIsDarkMode(true);
		}
		window.initTheme();
	};

	const closeMenu = () => {
		document.body.classList.remove('menu-opened');
		setIsMenuOpened(false);
	};
	const openMenu = () => {
		document.body.classList.add('menu-opened');
		setIsMenuOpened(true);
	};

	return (
		<header>
			<div className="">
				<div className="w-screen p-3 fixed top-0 left-0 lg:hidden z-20">
					<button className="w-8 h-8 bg-none border-none" onClick={openMenu}>
						<IconBurger />
					</button>
				</div>
				<aside
					ref={ref}
					className={cn(
						'flex flex-col place-content-center',
						'fixed w-1/2 h-[100dvh] px-3 bg-secondary border-r border-primary z-30 -translate-x-[101%] custom-transition',
						isMenuOpened && 'translate-x-0',
						'lg:px-0 lg:translate-x-0 lg:h-screen lg:w-[30%]',
					)}
				>
					<div className={cn('flex flex-col gap-12', 'lg:w-auto lg:max-w-[120px] lg:ml-auto lg:mr-8')}>
						<button
							className={cn('w-8 h-8 bg-none border-none absolute top-3 left-3', 'lg:hidden')}
							onClick={closeMenu}
						>
							<IconBack />
						</button>
						<div className="h-[23px] lg:h-[44px]">
							<Logo />
						</div>
						<nav>
							<ul className="flex flex-col gap-3">
								<li>
									<a
										href="#home"
										className="block w-fit uppercase font-sans text-base leading-[22px] bg-secondary-alt px-2 pt-3 pb-1.5 rounded custom-transition"
									>
										HOME
									</a>
								</li>
								<li>
									<a
										href="#about"
										className="block w-fit uppercase font-sans text-base leading-[22px] bg-secondary-alt px-2 pt-3 pb-1.5 rounded custom-transition"
									>
										ABOUT
									</a>
								</li>
								<li>
									<a
										href="#technologies"
										className="block w-fit uppercase font-sans text-base leading-[22px] bg-secondary-alt px-2 pt-3 pb-1.5 rounded custom-transition"
									>
										SKILLS
									</a>
								</li>
								<li>
									<a
										href="#projects"
										className="block w-fit uppercase font-sans text-base leading-[22px] bg-secondary-alt px-2 pt-3 pb-1.5 rounded custom-transition"
									>
										PORTFOLIO
									</a>
								</li>
								<li>
									<a
										href="#home"
										className="block w-fit uppercase font-sans text-base leading-[22px] bg-secondary-alt px-2 pt-3 pb-1.5 rounded custom-transition"
									>
										CONTACT
									</a>
								</li>
							</ul>
						</nav>
						<ul className="flex flex-wrap gap-2">
							<li>
								<a
									href="https://linkedin.com/in/micha%C5%82-skorus"
									target="_blank"
									rel="noopener"
									className="block w-8 h-8"
								>
									<IconLinkedin />
								</a>
							</li>
							<li>
								<a href="https://github.com/michsko544" target="_blank" rel="noopener" className="block w-8 h-8">
									<IconGithub />
								</a>
							</li>
							<li>
								<a
									href="https://stackoverflow.com/users/15263316/micha%c5%82-skorus"
									target="_blank"
									rel="noopener"
									className="block w-8 h-8"
								>
									<IconStackoverflow />
								</a>
							</li>
						</ul>
						<button
							className={cn(
								'absolute left-3 bottom-3 flex items-center gap-[2px]',
								'lg:left-[unset] lg:bottom-8 lg:w-auto lg:max-w-[120px] lg:ml-auto',
							)}
							onClick={handleThemeChange}
						>
							<div className="w-4 h-4">{isDarkMode ? <IconSun /> : <IconMoon />}</div>
							<span className="block uppercase font-sans pt-1 text-[12px] leading-[14px]">
								{isDarkMode ? 'Light' : 'Dark'}
							</span>
						</button>
					</div>
				</aside>
			</div>
		</header>
	);
}