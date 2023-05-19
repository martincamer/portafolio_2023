import Image from 'next/image';
import image from '../../../assets/martin.jpg';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

function Footer() {
	return (
		<footer
			className={
				'bg-five pt-20 pb-10  max-md:pt-20 max-md:pb-10 border-t-2 border-t-fourty'
			}
		>
			<div className="flex max-md:flex-col justify-center items-center container mx-auto md:gap-32 max-md:gap-16 border-b-2 border-b-fourty">
				<div className={'flex  items-center gap-10 max-md:gap-5'}>
					<div className="relative flex bg-gray-0 h-24 w-24 lg:h-32 lg:w-32 rounded-full overflow-hidden">
						<Image
							className="absolute"
							src={image}
						/>
					</div>
					<div className="flex flex-col gap-4">
						<p class="font-extrabold text-xl lg:text-6xl text-secondary">
							<font styles="vertical-align: inherit;">
								<font styles="vertical-align: inherit;">Martin Camer</font>
							</font>
						</p>
						<p className="text-2xl font-semibold text-terciary">
							Developer Full Stack
						</p>
						<div className="flex gap-4">
							<motion.a
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 300 }}
								href={'https://www.linkedin.com/in/martin-camer-115651201/'}
							>
								<svg
									stroke="currentColor"
									fill="currentColor"
									stroke-width="0"
									version="1.1"
									viewBox="0 0 17 17"
									className="w-10 h-10 max-md:h-8 hover:-translate-y-2 transition-all duration-200 text-fourty hover:text-secondary"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g></g>
									<path d="M0.698 5.823h3.438v10.323h-3.438v-10.323zM2.438 0.854c-1.167 0-1.938 0.771-1.938 1.782 0 0.989 0.74 1.781 1.896 1.781h0.021c1.198 0 1.948-0.792 1.938-1.781-0.011-1.011-0.74-1.782-1.917-1.782zM12.552 5.583c-1.829 0-2.643 1.002-3.094 1.709v-1.469h-3.427c0 0 0.042 0.969 0 10.323h3.427v-5.761c0-0.312 0.032-0.615 0.114-0.843 0.251-0.615 0.812-1.25 1.762-1.25 1.238 0 1.738 0.948 1.738 2.333v5.521h3.428v-5.917c0-3.167-1.688-4.646-3.948-4.646z"></path>
								</svg>
							</motion.a>

							<motion.a
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 300 }}
								href={'https://github.com/martincamer'}
							>
								<svg
									stroke="currentColor"
									fill="currentColor"
									stroke-width="0"
									viewBox="0 0 496 512"
									class="w-10 h-10 max-md:h-8 hover:-translate-y-2 transition-all duration-200 text-fourty hover:text-secondary"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
								</svg>
							</motion.a>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-3 max-md:gap-8">
					<div className="flex gap-2 items-center">
						<h2 className="font-bold text-secondary text-4xl max-md:text-3xl">
							Ponerse en contacto
						</h2>
						<svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							viewBox="0 0 24 24"
							class="w-10 h-10 lg:w-14 lg:h-14 text-terciary"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
						</svg>
					</div>
					<div className="flex flex-col gap-2">
						<div>
							<p className="font-semibold text-secondary text-2xl max-md:text-xl">
								ENVÍEME UN CORREO ELECTRÓNICO:
							</p>
							<div className="flex items-center gap-2 mb-12 w-fit h-12 border-b-2 border-fourty hover:border-terciary transition-all duration-200 cursor-pointer group text-secondary mt-5">
								<Link
									href={'mailto:martincamer011@gmail.com'}
									className={'text-2xl max-md:text-xl font-semibold'}
								>
									martincamer011@gmail.com
								</Link>
								<svg
									stroke="currentColor"
									fill="currentColor"
									stroke-width="0"
									viewBox="0 0 24 24"
									class="w-7 h-7 transition-all duration-200 group-hover:translate-x-2 group-hover:text-terciary"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
								</svg>
							</div>
						</div>
						<div>
							<p className="font-semibold text-secondary text-2xl max-md:text-xl">
								LLAMAME:
							</p>
							<div className="flex items-center gap-2 mb-12 w-fit h-12 border-b-2 border-fourty hover:border-terciary transition-all duration-200 cursor-pointer group text-secondary mt-5">
								<Link
									href={
										'https://api.whatsapp.com/send?phone=3462693961&text=MENSAJE'
									}
									className={'text-2xl font-semibold max-md:text-xl'}
								>
									(+54)3462693961
								</Link>
								<svg
									stroke="currentColor"
									fill="currentColor"
									stroke-width="0"
									viewBox="0 0 24 24"
									class="w-7 h-7 transition-all duration-200 group-hover:translate-x-2 group-hover:text-terciary"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container mx-auto pt-10 flex flex-col items-center">
				<ul className="flex gap-12 max-md:gap-3">
					<Link
						className="font-semibold text-secondary text-2xl max-md:text-lg hover:text-terciary transition-all duration-300 ease-out"
						href={'/home'}
					>
						Home
					</Link>
					<Link
						className="font-semibold text-secondary text-2xl max-md:text-lg hover:text-terciary transition-all duration-300 ease-out"
						href={'/about'}
					>
						About
					</Link>
					<Link
						className="font-semibold text-secondary text-2xl max-md:text-lg hover:text-terciary transition-all duration-300 ease-out"
						href={'/projects'}
					>
						Projects
					</Link>
					<Link
						className="font-semibold text-secondary text-2xl max-md:text-lg hover:text-terciary transition-all duration-300 ease-out"
						href={'/articles'}
					>
						Articles
					</Link>
					<Link
						className="font-semibold text-secondary text-2xl max-md:text-lg hover:text-terciary transition-all duration-300 ease-out"
						href={'/contact'}
					>
						Contact
					</Link>
				</ul>
				<div>
					<p className="font-semibold text-fourty max-md:text-lg text-2xl pt-4">
						Diseñado por Martín Camer
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
