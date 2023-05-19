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
			primary: '#1B1F24',
			secondary: '#FFFFFF',
			terciary: '#075FE4',
			fourty: '#5D6C83',
			five: '#22282F',
			six: '#2D343F',
		},
	},
	plugins: [],
};
