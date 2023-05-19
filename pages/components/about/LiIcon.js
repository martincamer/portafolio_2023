import { motion, useScroll } from 'framer-motion';

function LiIcon({ reference }) {
	const { scrollYProgress } = useScroll({
		target: reference,
		offset: ['center end', 'center center'],
	});
	return (
		<figure className={'absolute left-0 max-md:left-[-28px] stroke-fourty'}>
			<svg
				width="75"
				height="75"
				viewBox="0 0 100 100"
				className={'-rotate-90 max-md:w-[60px]'}
			>
				<circle
					cx="75"
					cy={'50'}
					r={'20'}
					className={'stroke-terciary stroke-[9px] fill-none'}
				/>
				<motion.circle
					cx="75"
					cy={'50'}
					r={'20'}
					className={'stroke-[5px] fill-fourty'}
					style={{
						pathLength: scrollYProgress,
					}}
				/>
				<circle
					cx="75"
					cy={'50'}
					r={'10'}
					className={'animate-pulse stroke-1 fill-secondary'}
				/>
			</svg>
		</figure>
	);
}

export default LiIcon;
