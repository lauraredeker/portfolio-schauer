const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				black: colors.black,
			}
		}
	},

	plugins: [forms, typography]
};

module.exports = config;
