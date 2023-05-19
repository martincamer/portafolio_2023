import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Proyectos() {
	const [articulos, setArticulos] = useState([]);

	useEffect(() => {
		async function loadData() {
			const url = await fetch(
				`${process.env.BASE_URL}/proyectos?populate=imagen`
			);

			const res = await url.json();
			console.log(res.data);

			setArticulos(res.data);
		}

		loadData();
	}, []);

	return (
		<div className={'grid grid-cols-5 max-md:grid-cols-1 max-md:pb-[50px]'}>
			{articulos.map(articulo => (
				<Link href={`projects/${articulo.attributes.url}`}>
					<motion.div
						key={articulo.id}
						className={'bg-fourty rounded-lg shadow-lg shadow-six'}
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.2 }}
						// whileHover={{  }}
					>
						<Image
							width={300}
							height={400}
							className={'w-full rounded-t-lg'}
							alt=""
							src={
								articulo.attributes.imagen.data[0].attributes.formats.medium.url
							}
						/>
						<div className={'p-3 pb-5'}>
							<h2 className={'text-secondary font-bold text-2xl'}>
								{articulo.attributes.title}
							</h2>
							<h2 className={'text-six font-bold line-clamp-4'}>
								{articulo.attributes.descripcion}
							</h2>
						</div>
					</motion.div>
				</Link>
			))}
		</div>
	);
}

export default Proyectos;
