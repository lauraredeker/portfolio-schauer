const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				black: colors.black,
				white: colors.white,
				purple: colors.purple,
				primary: {
					'50': '#f3f2ff',
					'100': '#e9e8ff',
					'200': '#d5d4ff',
					'300': '#b7b1ff',
					'400': '#9385ff',
					'500': '#6647ff',
					'600': '#5e30f7',
					'700': '#501ee3',
					'800': '#4218bf',
					'900': '#38169c',
					'950': '#200b6a',
				},
			}
		},
		fontFamily: {
			sans: ['Poppins', ...defaultTheme.fontFamily.sans]
		}
	},

	plugins: [forms, typography]
};

module.exports = config;
