// import Link from 'next/link';
// import AnimatedText from '../components/AnimatedText';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import { useRouter } from 'next/router';

function articles() {
	const [blog, setBlog] = useState([]);
	const router = useRouter();

	useEffect(() => {
		async function loadData(url) {
			url = router.query.url;
			const data = await fetch(
				`${process.env.BASE_URL}/blogs?filters[url]=${url}&populate=image`
			);

			const res = await data.json();
			// console.log(res.data);

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
				<div className="">
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
									articulo.attributes.image.data[0].attributes.formats.medium
										.url
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
