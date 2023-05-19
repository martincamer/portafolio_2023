import { useState, useEffect } from 'react';

import Link from 'next/link';
import AnimatedText from '../components/AnimatedText';
import Layout from '../components/Layout';
import Image from 'next/image';

function articles() {
	const [blog, setBlog] = useState([]);

	useEffect(() => {
		async function loadData() {
			const url = await fetch(`${process.env.BASE_URL}/blogs?populate=image`);

			const res = await url.json();
			console.log(res.data);

			setBlog(res.data);
		}

		loadData();
	}, []);

	return (
		<Layout>
			<div
				className={
					'container mx-auto max-md:px-4 w-full max-md:h-full  py-[80px] max-md:py-[60px]'
				}
			>
				<div>
					{blog.map(articulo => (
						<div
							className={'flex flex-col justify-center items-center gap-8'}
							key={articulo.id}
						>
							<Image
								height={500}
								width={500}
								alt=""
								className={'rounded-lg'}
								src={
									articulo.attributes.image.data[0].attributes.formats.large.url
								}
							/>
							<p className={'text-secondary font-semibold text-2xl'}>
								{articulo.attributes.sub_title}
							</p>
							<h2
								className={
									'text-terciary text-3xl font-bold max-md:text-center'
								}
							>
								{articulo.attributes.title}
							</h2>
							<p className={'text-secondary font-semibold bg-six p-4'}>
								{articulo.attributes.descripcion}
							</p>
							<p className={'text-secondary font-semibold bg-six p-4'}>
								{articulo.attributes.sub_descripcion}
								<p className={'pt-2 text-terciary font-bold'}>
									Publicado el {articulo.attributes.date}
								</p>
							</p>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}

export default articles;
