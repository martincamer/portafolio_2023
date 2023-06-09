import AnimatedText from './components/AnimatedText';
import Layout from './components/Layout';
import Proyectos from './components/projects/Proyectos';

function projects() {
	return (
		<Layout
			className="background"
			pagina={'Projects'}
		>
			<div
				className={
					'container mx-auto max-md:px-4 w-full h-full pb-20 max-md:pb-0'
				}
			>
				<div className={'z-[1030] pt-[100px] max-md:pt-12 mb-16'}>
					<div>
						<AnimatedText
							className={'h-2 bg-six w-36 mb-12 max-md:hidden'}
						></AnimatedText>
					</div>
					<div>
						<AnimatedText
							className={'text-7xl max-md:text-5xl text-six font-bold pb-3'}
							text={'Proyectos'}
						/>
					</div>
					<div>
						<p
							className={'text-lg max-md:text-base text-seventy font-semibold'}
						>
							Echa un vistazo a los últimos proyectos que he hecho.
						</p>
					</div>
				</div>

				<Proyectos />
			</div>
		</Layout>
	);
}

// export async function getStaticProps() {
// 	const res = await fetch(
// 		`http://localhost:1337/api/proyectos?populate=imagen`
// 	);

// 	const data = await res.json();

// 	return {
// 		props: {
// 			data: data,
// 		},
// 	};
// }

export default projects;
