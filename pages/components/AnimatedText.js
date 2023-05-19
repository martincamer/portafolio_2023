import { motion } from 'framer-motion';

const quote = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.08,
		},
	},
};

function AnimatedText({ text, className = '' }) {
	return (
		<div>
			<motion.h1
				variants={quote}
				initial={quote.initial}
				animate={quote.animate}
				className={` ${className}`}
			>
				{text}
			</motion.h1>
		</div>
	);
}

export default AnimatedText;
