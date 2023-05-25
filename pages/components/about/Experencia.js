import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

function Experencia() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'center start'],
	});

	const Details = ({ position, company, companyLink, time, address, work }) => {
		const ref = useRef(null);

		return (
			<li
				ref={ref}
				className={
					'my-8 first:mt-0 last:mb-0 md:w-[60%] max-md:w-[80%] mx-auto flex flex-col items-center justify-between'
				}
			>
				<LiIcon reference={ref} />

				<motion.div
					initial={{ y: 50 }}
					whileInView={{ y: 0 }}
					transition={{ duration: 0.5, type: 'spring' }}
				>
					<h3
						className={'capitalize font-bold text-3xl max-md:text-2xl text-six'}
					>
						{position}&nbsp;
						<a
							className={'text-seventy/50 ml-2'}
							href={companyLink}
						>
							@{company}
						</a>
					</h3>
					<span className={'capitalize font-medium text-seventy'}>
						{time} | {address}
					</span>
					<p
						className={
							'font-medium w-full text-six text-[18px] max-md:text-[16px]'
						}
					>
						{work}
					</p>
				</motion.div>
			</li>
		);
	};

	return (
		<div>
			<div className={'flex flex-col gap-[60px]'}>
				<div>
					<h1
						className={
							'text-7xl max-md:text-5xl text-six font-bold text-center'
						}
					>
						Experiencia
					</h1>
				</div>
				<div
					ref={ref}
					className={'w-[75%] max-md:w-full mx-auto relative'}
				>
					<motion.div
						style={{ scaleY: scrollYProgress }}
						className={
							'absolute left-9 max-md:left-0 top-0 w-[4px] h-full bg-six/60 origin-top'
						}
					/>

					<ul>
						<Details
							position={'Full Stack Developer'}
							companyLink={'#'}
							company={'Erveries'}
							time={'2023-Present'}
							address={'Venado Tuerto, Santa Fe'}
							work={
								'Trabajo como parte del equipo utilizando metodologías agiles SCRUM, Desarrolle Aplicaciones web, mobiles.- Tecnologías: ReactJs, React redux toolkit, React hook form, React router dom, React hot toast, Sass,Tailwind, Material ui, Axios, Day JS, Yup, Express, Node, Python, Django, FastApi, Next,Graphql, Stripe, Strapi.'
							}
						/>

						<Details
							position={'Front End Developer'}
							companyLink={'#'}
							company={'Nextart Design'}
							time={'2021-2022'}
							address={'Venado Tuerto, Santa Fe'}
							work={
								'Trabaje como parte del equipo utilizando metodologías agiles, Desarrolle Aplicaciones.Tecnologías: ReactJs, React redux toolkit, React hook form, React router dom, React hot toast, Sass,Tailwind, Material ui, Axios.'
							}
						/>

						<Details
							position={'FrontEnd Freelancer'}
							companyLink={'#'}
							company={'Erveries'}
							time={'2020-2021'}
							address={'Remote'}
							work={
								'Trabajo como parte del equipo utilizando metodologías agiles SCRUM, Desarrolle Aplicaciones web, mobiles.- Tecnologías: ReactJs, React redux toolkit, React hook form, React router dom, React hot toast, Sass,Tailwind, Material ui, Axios.'
							}
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Experencia;
