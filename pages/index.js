// import Image from 'next/image';
// import { Inter } from 'next/font/google';

import Image from 'next/image';
import Layout from './components/Layout';
import image from './../assets/martin.jpg';
import AnimatedText from './components/AnimatedText';
import Link from 'next/link';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<Layout pagina={'Home'}>
			<div
				className={
					'container mx-auto max-md:px-4 w-full grid grid-cols-2 max-md:grid-cols-1 md:relative h-screen max-md:h-full '
				}
			>
				<div className={'z-[0] pt-[100px] max-md:pt-12 mb-16 '}>
					<div>
						<AnimatedText
							className={'h-2 bg-secondary w-36 mb-12'}
						></AnimatedText>
					</div>
					<div>
						<AnimatedText
							className={
								'text-7xl max-md:text-5xl text-secondary font-bold pb-3'
							}
							text={'Soy Martín, Desarrollador Full Stack'}
						/>
					</div>
					<div>
						<p className={'text-lg max-md:text-base text-fourty font-semibold'}>
							Bienvenidos a mi sitio web. ¡Echemos un vistazo a algunos de mis
							trabajos!
						</p>
					</div>
				</div>
				<div className={'z-[0] md:pt-[60px]'}>
					<div
						className={
							'flex flex-col gap-16 border-b border-fourty w-[100%] mb-10'
						}
					>
						<div class={'flex flex-col gap-3 '}>
							<h2 className={'text-secondary text-lg font-bold'}>
								TIPOS DE TECNOLOGÍA
							</h2>
							<p className={'text-secondary text-lg max-md:text-base'}>
								Descubre las tecnologías que utilizo para desarrollar tanto
								aplicaciones móviles como sitios web, así como los últimos
								proyectos en los que he estado trabajando.
							</p>
						</div>

						<div className="flex items-center gap-2 mb-12 w-fit h-12 border-b-2 border-fourty hover:border-terciary transition-all duration-200 cursor-pointer group text-secondary">
							<Link
								href={'/about'}
								className={'text-sm lg:text-base'}
							>
								APRENDE MÁS
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

					<div className={'flex flex-col gap-16'}>
						<div class={'flex flex-col gap-3'}>
							<h2 className={'text-secondary text-lg font-bold'}>CONTÁCTAME</h2>
							<p className={'text-secondary text-lg max-md:text-base'}>
								¿Tienes algo en mente para crear? ¡Charlemos! Complete el
								formulario, podemos crear cosas increíbles juntos.
							</p>
						</div>

						<div className="flex items-center gap-2 mb-12 w-fit h-12 border-b-2 border-fourty hover:border-terciary transition-all duration-200 cursor-pointer group text-secondary">
							<Link
								href={'/contact'}
								className={'text-sm lg:text-base'}
							>
								FORMULARIO COMPLETO
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

				<Image
					src={image}
					alt=""
					className={
						' md:absolute md:bottom-[0] z-0 md:left-[19%] md:h-[430px] md:w-[430px] w-full h-full rounded-t-[300px] shadow-terciary'
					}
				/>
			</div>
		</Layout>
	);
}
