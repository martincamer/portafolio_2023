import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
	SiGithub,
	SiInstagram,
	SiLinkedin,
	SiTwitter,
	SiWhatsapp,
} from 'react-icons/si';

const CustomLink = ({ href, title, className = '' }) => {
	const router = useRouter();
	return (
		<Link
			href={href}
			className={`${className} relative group`}
		>
			{title}

			<span
				className={`h-1 inline-block bg-six absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
					router.asPath === href ? 'w-full' : 'w-0'
				}`}
			>
				&nbsp;
			</span>
		</Link>
	);
};

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			className={
				' mx-auto container max-md:px-6 flex justify-between items-center py-6 relative'
			}
		>
			<div className={'flex items-center gap-3.5 max-md:gap-2'}>
				<svg
					stroke="currentColor"
					fill="currentColor"
					stroke-width="0"
					viewBox="0 0 640 512"
					className="w-10 h-10 max-md:w-8 max-md:h-8 text-six"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
				</svg>
				<h2 className={'font-bold text-3xl max-md:text-[24px] text-seventy'}>
					Martin Developer
				</h2>
			</div>

			<button
				className={
					'flex-col justify-center items-center hidden max-md:flex font-medium'
				}
				onClick={handleClick}
			>
				<span
					className={`bg-six dark:bg-six transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
						isOpen ? 'rotate-45 translate-y-[10px]' : '-translate-y-0.5'
					}`}
				></span>
				<span
					className={`bg-six dark:bg-six transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
						isOpen ? 'opacity-0' : 'opacity-100'
					}`}
				></span>
				<span
					className={`bg-six dark:bg-six transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm translate-y-0.5 ${
						isOpen ? '-rotate-45 -translate-y-[5.3px]' : 'translate-y-0.5'
					}`}
				></span>
			</button>

			<div className={'max-md:hidden'}>
				<nav className={'flex gap-12'}>
					<ul className={'flex gap-14'}>
						<CustomLink
							href={'/'}
							title="Home"
							className="text-six text-[18px]"
						/>
						<CustomLink
							href={'/about'}
							title="About"
							className="text-six text-[18px]"
						/>
						<CustomLink
							href={'/projects'}
							title="Projects"
							className="text-six text-[18px]"
						/>
						<CustomLink
							href={'/contact'}
							title="Contact"
							className="text-six text-[18px]"
						/>
					</ul>

					<ul className={'flex gap-3 items-center'}>
						<motion.a
							href={'https://twitter.com/martin_camer'}
							className={'text-3xl text-five/90'}
							whileHover={{
								y: -2,
							}}
							whileTap={{
								scale: 0.9,
							}}
						>
							<SiTwitter />
						</motion.a>
						<motion.a
							href={'https://www.linkedin.com/in/martin-camer-115651201/'}
							className={'text-3xl text-five/90'}
							whileHover={{
								y: -2,
							}}
							whileTap={{
								scale: 0.9,
							}}
						>
							<SiLinkedin />
						</motion.a>
						<motion.a
							href={'https://github.com/martincamer'}
							className={'text-3xl text-five/90'}
							whileHover={{
								y: -2,
							}}
							whileTap={{
								scale: 0.9,
							}}
						>
							<SiGithub />
						</motion.a>
						<motion.a
							href={'https://www.instagram.com/martincamer011/'}
							className={'text-3xl text-five/90'}
							whileHover={{
								y: -2,
							}}
							whileTap={{
								scale: 0.9,
							}}
						>
							<SiInstagram />
						</motion.a>
						<motion.a
							href={
								'https://api.whatsapp.com/send?phone=3462693961&text=MENSAJE'
							}
							className={'text-3xl text-five/90'}
							whileHover={{
								y: -2,
							}}
							whileTap={{
								scale: 0.9,
							}}
						>
							<SiWhatsapp />
						</motion.a>
					</ul>
				</nav>
			</div>

			{isOpen ? (
				<motion.div
					initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
					animate={{ scale: 1, opacity: 1 }}
					className={
						'min-w-[84.5vw] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-seventy/80 z-50 rounded-lg p-10 backdrop-blur-md'
					}
				>
					<nav
						className={
							'flex flex-col justify-center items-center gap-12 text-center'
						}
					>
						<ul className={'flex flex-col gap-14'}>
							<CustomLink
								href={'/'}
								title="Home"
								className="text-six text-[18px]"
							/>
							<CustomLink
								href={'/about'}
								title="About"
								className="text-six text-[18px]"
							/>
							<CustomLink
								href={'/projects'}
								title="Projects"
								className="text-six text-[18px]"
							/>
							<CustomLink
								href={'/contact'}
								title="Contact"
								className="text-six text-[18px]"
							/>
						</ul>

						<ul className={'flex gap-3 items-center'}>
							<motion.a
								href={'https://twitter.com/martin_camer'}
								className={'text-3xl text-ninety'}
								whileHover={{
									y: -2,
								}}
								whileTap={{
									scale: 0.9,
								}}
							>
								<SiTwitter />
							</motion.a>
							<motion.a
								href={'https://www.linkedin.com/in/martin-camer-115651201/'}
								className={'text-3xl text-ninety'}
								whileHover={{
									y: -2,
								}}
								whileTap={{
									scale: 0.9,
								}}
							>
								<SiLinkedin />
							</motion.a>
							<motion.a
								href={'https://github.com/martincamer'}
								className={'text-3xl text-ninety'}
								whileHover={{
									y: -2,
								}}
								whileTap={{
									scale: 0.9,
								}}
							>
								<SiGithub />
							</motion.a>
							<motion.a
								href={'https://www.instagram.com/martincamer011/'}
								className={'text-3xl text-ninety'}
								whileHover={{
									y: -2,
								}}
								whileTap={{
									scale: 0.9,
								}}
							>
								<SiInstagram />
							</motion.a>
							<motion.a
								href={
									'https://api.whatsapp.com/send?phone=3462693961&text=MENSAJE'
								}
								className={'text-3xl text-ninety'}
								whileHover={{
									y: -2,
								}}
								whileTap={{
									scale: 0.9,
								}}
							>
								<SiWhatsapp />
							</motion.a>
						</ul>
					</nav>
				</motion.div>
			) : null}
		</div>
	);
}

export default Navbar;
