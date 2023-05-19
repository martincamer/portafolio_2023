function CardSlider({ index }) {
	const { title, image } = index;

	return (
		<div
			className={
				'flex flex-col justify-center items-center gap-2 bg-six h-[100%] w-[100%] md:w-full md:h-full rounded-3xl py-12 px-9 max-md:py-8 max-md:px-3'
			}
		>
			<div className="flex items-center justify-center text-3xl text-secondary bg-terciary rounded-full md:w-20 max-md:h-[4rem] max-md:w-[4rem] md:h-20">
				{image}
			</div>
			<h3
				className={
					'font-bold mt-6 mb-3 md:text-2xl max-md:text-1xl text-secondary'
				}
			>
				{title}
			</h3>
			<div className="h-1.5 w-14 max-md:h-0.5 bg-secondary"></div>
		</div>
	);
}

export default CardSlider;
