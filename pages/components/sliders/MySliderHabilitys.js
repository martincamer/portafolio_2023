import Slider from 'react-slick/lib/slider';
import CardSlider from './CardSlider';
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
					<CardSlider
						key={index.id}
						index={index}
					/>
				))}
			</Slider>
		</div>
	);
}

export default MySliderHabilitys;
