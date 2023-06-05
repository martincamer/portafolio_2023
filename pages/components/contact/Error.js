function Error({ children, className }) {
	return (
		<div
			className={`bg-[#FF0000]/50 font-semibold text-lg text-[#FFFF] rounded-lg p-2 text-center mb-2`}
		>
			{children}
		</div>
	);
}

export default Error;
