import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Proyectos() {
	const [articulos, setArticulos] = useState([]);

	useEffect(() => {
		async function loadData() {
			const datos = await fetch(`${process.env.BASE_URL}/proyectos?populate=*`);

			const res = await datos.json();
			// console.log(res.data);

			setArticulos(res.data);
			console.log(res.data);
		}

		loadData();
	}, []);

	return (
		<div
			className={
				'grid grid-cols-5 max-md:grid-cols-1 gap-x-10 max-md:pb-[50px]'
			}
		>
			{articulos.map(articulo => (
				<Link href={`projects/${articulo.attributes.url}`}>
					<motion.div
						key={articulo.id}
						className={
							'bg-fourty rounded-lg shadow-lg shadow-six h-full flex flex-col justify-center items-center w-full'
						}
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.2 }}
						// whileHover={{  }}
					>
						<Image
							width={300}
							height={150}
							priority={1}
							className={
								'rounded-t-lg h-[250px] w-full object-cover flex justify-center items-center'
							}
							alt=""
							src={articulo.attributes.imagen.data[0].attributes.url}
						/>
						<div className={'p-3 pb-5'}>
							<h2 className={'text-secondary font-bold text-2xl'}>
								{articulo.attributes.title}
							</h2>
							<h2 className={'text-six font-bold line-clamp-4'}>
								{articulo.attributes.descripcion}
							</h2>
						</div>

						<div className="flex gap-x-2 py-3">
							{articulo.attributes.icons.data.map((item, id) => {
								return (
									<Image
										src={item.attributes.url}
										width={35}
										height={35}
									/>
								);
							})}
						</div>
					</motion.div>
				</Link>
			))}
		</div>
	);
}

export default Proyectos;
