// import CardSlider from './CardSlider';
import Slider from 'react-slick/lib/slider';
import { IoLogoJavascript } from 'react-icons/io';
import {
	SiCss3,
	SiDjango,
	SiExpress,
	SiHtml5,
	SiMongodb,
	SiNodedotjs,
	SiPostgresql,
	SiPython,
	SiReact,
	SiReactivex,
	SiRedux,
	SiTailwindcss,
} from 'react-icons/si';
import { DiSass } from 'react-icons/di';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const settings = {
	arrows: true,
	infinite: false,
	speed: 600,
	slidesToShow: 5,
	slidesToScroll: 1,
	nextArrow: <NextArrow />,
	prevArrow: <PrevArrow />,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 650,
			settings: {
				slidesToShow: 2,
			},
		},
	],
};

const habilidades = [
	{
		id: 1,
		image: <IoLogoJavascript />,
		title: 'JAVASCRIPT',
	},
	{
		id: 2,
		image: <SiHtml5 />,
		title: 'HTML5',
	},
	{
		id: 3,
		image: <SiCss3 />,
		title: 'CSS',
	},
	{
		id: 4,
		image: <DiSass />,
		title: 'SASS',
	},
	{
		id: 5,
		image: <SiTailwindcss />,
		title: 'TAILWIND',
	},

	{
		id: 6,
		image: <SiReact />,
		title: 'REACT',
	},
	{
		id: 7,
		image: <SiRedux />,
		title: 'REDUX',
	},
	{
		id: 8,
		image: <SiReactivex />,
		title: 'REACTIVE',
	},
	{
		id: 9,
		image: <SiNodedotjs />,
		title: 'NODE JS',
	},
	{
		id: 10,
		image: <SiExpress />,
		title: 'EXPRESS',
	},
	{
		id: 11,
		image: <SiMongodb />,
		title: 'MONGO DB',
	},
	{
		id: 12,
		image: <SiPostgresql />,
		title: 'POSTGRESQL',
	},
	{
		id: 13,
		image: <SiPython />,
		title: 'PYTHON',
	},
	{
		id: 13,
		image: <SiDjango />,
		title: 'DJANGO',
	},
];

function MySliderHabilitys() {
	return (
		<div className={'relative pt-32'}>
			<Slider {...settings}>
				{habilidades.map(index => (
					<div
						key={index.id}
						className={
							'flex flex-col justify-center items-center gap-2 bg-six h-[100%] w-[100%] md:w-full md:h-full rounded-3xl py-12 px-9 max-md:py-8 max-md:px-3'
						}
					>
						<div className="flex items-center text-center mx-auto justify-center text-4xl max-md:text-3xl text-ninety bg-five/20 rounded-full md:w-20 max-md:h-[4rem] max-md:w-[4rem] md:h-20">
							{index.image}
						</div>
						<h3
							className={
								'font-bold mt-6 mb-3 md:text-2xl max-md:text-1xl text-ninety text-center mx-auto'
							}
						>
							{index.title}
						</h3>
						<div className="h-1.5 w-14 max-md:h-0.5 bg-ninety/20 text-center mx-auto"></div>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default MySliderHabilitys;
