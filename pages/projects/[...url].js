// import articles from '../articles';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { SiGithub } from 'react-icons/si';
import { useRouter } from 'next/router';

function Projects() {
	const [articulos, setArticulos] = useState([]);
	const router = useRouter();

	useEffect(() => {
		async function loadData(url) {
			url = router.query.url;
			const data = await fetch(
				`${process.env.BASE_URL}/proyectos?filters[url]=${url}&populate=imagen`
			);

			const res = await data.json();
			// console.log(res.data);

			setArticulos(res.data);
		}

		loadData();
	}, []);

	return (
		<Layout pagina={`$`}>
			<div class={'container mx-auto max-md:px-6 max-md:pb-[50px]'}>
				<div>
					<Link
						href={'/projects'}
						className="flex items-center gap-2 mb-12 w-fit h-12 border-b-2 border-fourty hover:border-terciary transition-all duration-200 cursor-pointer group text-secondary mt-5"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-7 h-7 transition-all duration-200 group-hover:translate-x-[-5px]
						group-hover:text-terciary"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
							/>
						</svg>
						<p className={'text-sm lg:text-base'}>VOLVER</p>
					</Link>
				</div>

				<div>
					{articulos.map(articulo => (
						<div key={articulo.id}>
							<div
								className={
									'flex flex-col gap-[100px] max-md:gap-[50px] max-md:h-full h-screen'
								}
							>
								<div
									className={
										'flex max-md:flex-col max-md:gap-[20px] justify-between'
									}
								>
									<div className={'flex flex-col gap-2'}>
										<h2
											className={
												'text-7xl max-md:text-5xl text-secondary font-bold pb-3'
											}
										>
											{articulo.attributes.title}
										</h2>

										<Link
											className={
												'font-bold text-terciary bg-secondary p-2 rounded-lg text-center text-lg'
											}
											href={articulo.attributes.link_proyecto}
										>
											Visitar
										</Link>
									</div>

									<div
										className={
											'flex gap-2 items-center h-16 bg-fourty px-5 py-2 rounded-lg hover:translate-x-[-5px] hover:bg-terciary transition-all duration-300 max-md: justify-center'
										}
									>
										<div>
											<Link
												className={'font-bold text-secondary'}
												href={articulo.attributes.link_github}
											>
												Ver Codigo
											</Link>
										</div>
										<div>
											<SiGithub
												className={
													'w-[40px] h-[40px] max-md:w-[30px] text-secondary'
												}
											/>
										</div>
									</div>
								</div>
								<div className={'w-full flex justify-center'}>
									<Image
										src={
											articulo.attributes.imagen.data[0].attributes.formats
												.large.url
										}
										height={400}
										width={1000}
										className={
											'rounded-lg shadow-lg shadow-fourty max-md:h-[250px] object-cover'
										}
										alt={''}
									/>
								</div>

								<div className={'w-full flex justify-center'}>
									<p className="bg-fourty p-4 rounded-lg font-semibold text-five w-[75%] max-md:w-full">
										{articulo.attributes.descripcion}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}

export default Projects;
