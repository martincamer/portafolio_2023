import { BsChevronLeft } from 'react-icons/bs';
import { motion } from 'framer-motion';

function PrevArrow({ onClick }) {
	return (
		<div
			className={
				'absolute right-[85px] max-md:right-[60px] -top-[80px] max-md:-top-[65px]'
			}
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
				<BsChevronLeft />
			</motion.div>
		</div>
	);
}

export default PrevArrow;
