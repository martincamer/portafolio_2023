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
				'grid grid-cols-4 max-md:grid-cols-1 gap-x-8 gap-y-8 max-md:pb-[50px]'
			}
		>
			{articulos.map(articulo => (
				<motion.div
					key={articulo.id}
					className={
						'bg-six/30 rounded-lg shadow-lg shadow-seventy/60 h-full max-md:w-[80%] max-md:mx-auto flex flex-col  cursor-pointer'
					}
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
				>
					<Image
						width={300}
						height={150}
						priority={1}
						className={
							'rounded-t-lg h-[120px] max-md:h-[100px] w-full object-cover flex justify-center items-center'
						}
						alt=""
						src={articulo.attributes.imagen.data[0].attributes.url}
					/>
					<div className="px-4 py-4 flex flex-col items-center justify-center gap-y-3 h-full">
						<div className={'flex flex-col '}>
							<h2
								className={
									'text-seventy font-bold text-xl max-md:text-[16px] w-full'
								}
							>
								{articulo.attributes.title}
							</h2>
							<h2
								className={
									'text-seventy/60 font-bold line-clamp-4 max-md:text-[16px]'
								}
							>
								{articulo.attributes.descripcion}
							</h2>
						</div>

						<div className="flex gap-x-2 py-4 px-4 mb-2 bg-six/30 rounded-full w-full items-center justify-center">
							{articulo.attributes.icons.data.map((item, id) => {
								return (
									<Image
										src={item.attributes.url}
										width={30}
										height={30}
									/>
								);
							})}
						</div>

						<div className="flex gap-x-4">
							<Link
								href={articulo.attributes.link_github}
								className="rounded-full bg-seventy/90 px-2 py-2 shadow-lg shadow-seventy/50 text-six text-sm"
							>
								GitHub
							</Link>
							<Link
								href={articulo.attributes.link_proyecto}
								className="rounded-full bg-seventy/90 px-2 py-2 shadow-lg shadow-seventy/50 text-six text-sm"
							>
								Sitio Web
							</Link>
						</div>
					</div>
				</motion.div>
			))}
		</div>
	);
}

export default Proyectos;
