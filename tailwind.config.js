/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {},
		colors: {
			black: '#000',
			primary: '#3032DD',
			secondary: '#3335E2',
			terciary: '#3AD87C',
			fourty: '#F8C869',
			five: '#D9C0FF',
			six: '#F4F5F7',
			seventy: '#15172F',
			ninety: '#7E42FF',
		},
	},
	plugins: [],
};
