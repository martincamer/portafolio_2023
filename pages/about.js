import AnimatedText from './components/AnimatedText';
import Layout from './components/Layout';
import MySliderHabilitys from './components/sliders/MySliderHabilitys';
import Experencia from './components/about/Experencia';
import Educacion from './components/about/Educacion';
import Link from 'next/link';

function about() {
	return (
		<Layout
			className={'background'}
			pagina={'About'}
		>
			<div
				className={
					'container mx-auto max-md:px-4 w-fullmax-md:h-full flex flex-col gap-[80px]'
				}
			>
				<div className={'grid grid-cols-2 max-md:grid-cols-1 md:gap-20 z-[0]'}>
					<div
						className={
							'z-[1030] max-md:pt-6 pt-32 md:mb-16 flex flex-col justify-center md:pb-20'
						}
					>
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
								text={'Sobre Mi'}
							/>
						</div>
						<div>
							<p
								className={
									'text-lg max-md:text-base text-six/80 font-semibold max-md:text-center'
								}
							>
								He estado desarrollando sitios web y aplicaciones desde 2020
							</p>
						</div>

						<div className={'mt-5'}>
							<p
								className={'text-seventy font-semibold text-2xl max-md:text-lg'}
							>
								Empecé a trabajar como desarrollador después de terminar mis
								estudios en Soy Henry - Bootcamp Full Stack en 2023, una
								formación intensiva con más de 800 horas de estudio, donde
								aprendí las últimas tecnologías del mercado, para convertirme en
								Desarrollador Full Stack. Actualmente, estoy enfocado en el Full
								Stack, y siempre sigo aprendiendo para estar al día con las
								nuevas tecnologías.
							</p>
						</div>

						<div className="flex items-center gap-2 mb-12 w-fit h-12 border-b-2 border-six hover:border-seventy transition-all duration-200 cursor-pointer group text-six mt-5">
							<Link
								className={'text-sm lg:text-base'}
								href={'/Martin_Camer_CV.pdf'}
								target="_blank"
							>
								RESUME
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

					<div className={'flex flex-col gap-5 items-center justify-center'}>
						<div className={'flex'}>
							<div className="flex flex-1 items-center gap-2">
								<p class="font-bold text-six text-5xl lg:text-7xl">
									<font styles="vertical-align: inherit;">
										<font styles="vertical-align: inherit;">2</font>
									</font>
								</p>
								<p className="w-2/2 font-bold text-sm max-md:text-md md:text-2xl text-seventy">
									<font styles="vertical-align: inherit;">
										<font styles="vertical-align: inherit;">
											Año de Experiencia
										</font>
									</font>
								</p>
							</div>

							<div className="flex flex-1 items-center gap-2">
								<p className="font-bold text-5xl lg:text-7xl text-six">
									<font styles="vertical-align: inherit">
										<font styles="vertical-align: inherit">+30</font>
									</font>
								</p>
								<p className="font-bold text-sm max-md:text-md md:text-2xl text-seventy">
									<font styles="vertical-align: inherit;">
										<font styles="vertical-align: inherit">
											Proyectos exitosos
										</font>
									</font>
								</p>
							</div>
						</div>

						<div>
							<p className={'text-six font-semibold max-md:text-lg text-2xl'}>
								Durante el último año he estado trabajando en varios proyectos,
								lo que me hizo rodearme de diferentes equipos a nivel mundial y
								llevar mis habilidades blandas y técnicas al siguiente nivel.
							</p>
						</div>
					</div>
				</div>

				<div>
					<div className="flex justify-center">
						<h1 className={'text-7xl max-md:text-5xl text-seventy font-bold'}>
							Habilidades
						</h1>
					</div>

					<MySliderHabilitys />
				</div>

				<Experencia />
				<Educacion />
			</div>
		</Layout>
	);
}

export default about;
