// http://localhost:1337/api/blogs?populate=image

import Link from 'next/link';
import AnimatedText from './components/AnimatedText';
import Layout from './components/Layout';
import { useState, useEffect } from 'react';

function articles() {
	const [blog, setBlog] = useState([]);

	useEffect(() => {
		async function loadData() {
			const url = await fetch(`${process.env.BASE_URL}/blogs?populate=image`);

			const res = await url.json();
			// console.log(res.data);

			setBlog(res.data);
		}

		loadData();
	}, []);

	return (
		<Layout pagina={'Blog'}>
			<div
				className={
					'container mx-auto max-md:px-4 w-full max-md:h-full h-screen pb-[50px]'
				}
			>
				<div className={'py-[100px] max-md:py-[50px]'}>
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
							text={'Blog - Programacion'}
						/>
					</div>
					<div>
						<p className={'text-lg max-md:text-base text-fourty font-semibold'}>
							Blog sobre desarrollo web y marketing.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-4 max-md:grid-cols-2 gap-4">
					{blog.map(articulo => (
						<Link href={`/articulo/${articulo.attributes.url}`}>
							<div
								className={
									'w-full bg-fourty p-4 rounded-lg hover:scale-[1.06] hover:bg-terciary transition-all duration-300 ease-out  flex flex-col gap-2 max-md:h-full'
								}
								key={articulo.id}
							>
								<p className={'text-secondary font-semibold'}>
									{articulo.attributes.sub_title}
								</p>
								<h2 className={'text-six font-bold'}>
									{articulo.attributes.title}
								</h2>
								<p className={'line-clamp-2 text-secondary font-semibold'}>
									{articulo.attributes.descripcion}
								</p>
								<div className={'mt-3'}>
									<Link
										className={
											'text-secondary bg-five px-5 py-2 rounded-lg font-semibold'
										}
										href={`articulo/${articulo.attributes.url}`}
									>
										Leer articulo
									</Link>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</Layout>
	);
}

export default articles;
