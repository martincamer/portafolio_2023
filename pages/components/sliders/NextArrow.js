import { motion } from 'framer-motion';
import { BsChevronRight } from 'react-icons/bs';

function NextArrow({ onClick }) {
	return (
		<div
			className={'absolute right-0 -top-[80px] max-md:-top-[65px]'}
			onClick={onClick}
		>
			<motion.div
				whileHover={{
					opacity: 0.5,
				}}
				className={
					'bg-seventy text-six text-[18px] h-[50px] w-[50px] max-md:h-[40px] max-md:w-[40px] rounded-full grid place-items-center cursor-pointer'
				}
			>
				<BsChevronRight />
			</motion.div>
		</div>
	);
}

export default NextArrow;
