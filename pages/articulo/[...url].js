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
			console.log(res.data);

			setBlog(res.data);
		}

		loadData();
	}, []);

	return (
		<Layout
			className="background"
			pagina={`${blog.map(item => {
				return `${item.attributes.title}`;
			})}`}
		>
			<div
				className={
					'container mx-auto max-md:px-4 w-full max-md:h-full py-[80px] max-md:py-[60px]'
				}
			>
				<div className="h-full w-full">
					{blog.map(articulo => (
						<div
							className={'flex flex-col justify-center items-center gap-8'}
							key={articulo.id}
						>
							<Image
								height={400}
								width={1000}
								alt=""
								className={'rounded-lg  object-cover object-center '}
								src={articulo.attributes.image.data[0].attributes.url}
							/>

							<p className={'text-six font-semibold text-2xl'}>
								{articulo.attributes.sub_title}
							</p>
							<h2
								className={'text-seventy text-3xl font-bold max-md:text-center'}
							>
								{articulo.attributes.title}
							</h2>
							<p
								className={
									'text-seventy font-semibold bg-six/30 rounded-lg shadow-lg shadow-seventy/60 p-4'
								}
							>
								{articulo.attributes.descripcion}
							</p>
							<p
								className={
									'text-seventy font-semibold bg-six/30 rounded-lg shadow-lg shadow-seventy/60 p-4'
								}
							>
								{articulo.attributes.sub_descripcion}
								<p className={'pt-2 text-ninety font-bold'}>
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
