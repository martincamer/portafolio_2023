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
		<Layout
			className="background"
			pagina={'Home'}
		>
			<div className="relative">
				<div
					className={
						'container mx-auto max-md:px-4 w-full grid grid-cols-2 max-md:grid-cols-1 md:relative h-screen max-md:h-full '
					}
				>
					<div className={'z-[0] pt-[100px] max-md:pt-8 mb-16 max-md:mb-12 '}>
						<div>
							<AnimatedText
								className={'h-2 bg-six w-36 mb-12 max-md:hidden'}
							></AnimatedText>
						</div>
						<div>
							<AnimatedText
								className={
									'text-7xl max-md:text-5xl text-six font-bold pb-3 max-md:text-center'
								}
								text={'Soy Martín, Desarrollador Full Stack'}
							/>
						</div>
						<div>
							<p
								className={
									'text-lg max-md:text-base text-seventy font-semibold max-md:text-center'
								}
							>
								Bienvenidos a mi sitio web. ¡Echemos un vistazo a algunos de mis
								trabajos!
							</p>
						</div>
					</div>
					<div className={'z-[0] md:pt-[60px]'}>
						<div
							className={
								'flex flex-col gap-5 border-b border-six w-[100%] mb-10'
							}
						>
							<div class={'flex flex-col gap-3 '}>
								<h2 className={'text-six text-lg font-bold'}>
									TIPOS DE TECNOLOGÍA
								</h2>
								<p
									className={
										'text-seventy text-lg max-md:text-base font-medium'
									}
								>
									Descubre las tecnologías que utilizo para desarrollar tanto
									aplicaciones móviles como sitios web, así como los últimos
									proyectos en los que he estado trabajando.
								</p>
							</div>

							<div className="flex items-center gap-2 mb-12 w-fit h-12 border-b-2 border-six hover:border-seventy transition-all duration-200 cursor-pointer group text-six">
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
									class="w-7 h-7 transition-all duration-200 group-hover:translate-x-2 group-hover:text-seventy"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
								</svg>
							</div>
						</div>

						<div className={'flex flex-col gap-5'}>
							<div class={'flex flex-col gap-3'}>
								<h2 className={'text-six text-lg font-bold'}>CONTÁCTAME</h2>
								<p className={'text-six text-lg max-md:text-base'}>
									¿Tienes algo en mente para crear? ¡Charlemos! Complete el
									formulario, podemos crear cosas increíbles juntos.
								</p>
							</div>

							<div className="flex items-center gap-2 mb-12 w-fit h-12 border-b-2 border-six hover:border-seventy transition-all duration-200 cursor-pointer group text-six">
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
									class="w-7 h-7 transition-all duration-200 group-hover:translate-x-2 group-hover:text-seventy"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
								</svg>
							</div>
						</div>
					</div>

					<div className="mb-10 flex justify-center">
						<Image
							src={image}
							alt=""
							className={
								'md:absolute md:bottom-[0] z-[1030] md:left-[5%] md:h-[400px] md:w-[400px] w-[250px] h-full rounded-full'
							}
						/>
					</div>
				</div>
				<div className="absolute bottom-0 w-full max-md:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320"
					>
						<path
							fill="#15172F"
							fill-opacity="1"
							d="M0,256L40,234.7C80,213,160,171,240,160C320,149,400,171,480,192C560,213,640,235,720,224C800,213,880,171,960,133.3C1040,96,1120,64,1200,48C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
						></path>
					</svg>
				</div>
			</div>
		</Layout>
	);
}
