import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

function Educacion() {
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
					'my-8 first:mt-0 last:mb-0 w-[60%] max-md:w-[80%] mx-auto flex flex-col items-center justify-between'
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
							className={'text-seventy/60 ml-2'}
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
			<div className={'flex flex-col gap-[60px] pb-[300px] max-md:pb-[60px]'}>
				<div>
					<h1
						className={
							'text-7xl max-md:text-5xl text-seventy font-bold text-center'
						}
					>
						Educacion
					</h1>
				</div>
				<div
					ref={ref}
					className={'w-[75%] max-md:w-full mx-auto relative'}
				>
					<motion.div
						style={{ scaleY: scrollYProgress }}
						className={
							'absolute left-9 max-md:left-0 top-0 w-[4px] h-full bg-six/50 origin-top'
						}
					/>

					<ul>
						<Details
							position={'Full Stack Bootcamp'}
							companyLink={'#'}
							company={'Soy Henry'}
							time={'2023'}
							address={'2023'}
							work={
								'En este curso adquiri las habilidades como, html, css, javascript, react, redux, sass, tailwind, postgresql, node, express, next.'
							}
						/>

						<Details
							position={'Cursos Realizados'}
							companyLink={'#'}
							company={'Educacion IT'}
							time={'2022'}
							address={'2023'}
							work={
								'Realice cursos como javascript, react, redux, mongodb, node, express, python, django'
							}
						/>

						<Details
							position={'Cursos Realizados'}
							companyLink={'#'}
							company={'Udemy'}
							time={'2020'}
							address={'2023'}
							work={
								'En la plataforma realice cursos de los profesores,Codigo Juan, Fernando Herrera,Hector Costa Guzman. Adquiri habilidades como javascript, react, redux, vue, python, django, node, express, nest, angular, flutter, react native, wordpress, dart. '
							}
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Educacion;
