const typography = require('@tailwindcss/typography')
const forms = require('@tailwindcss/forms')
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	corePlugins: {
		preflight: true
	},
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				black: '#0f0f0f',
				white: '#f2e9e4',
				transparent: 'transparent',
				current: 'currentColor',
				primary: {
					50: '#f3f2ff',
					100: '#e9e8ff',
					200: '#d5d4ff',
					300: '#b7b1ff',
					400: '#9385ff',
					500: '#6647ff',
					600: '#5e30f7',
					700: '#501ee3',
					800: '#4218bf',
					900: '#38169c',
					950: '#200b6a'
				},
				gray: {
					...colors.neutral
				}
			}
		},
		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			base: '1rem',
			l: '1.25rem',
			xl: '1.5rem',
			'2xl': ['1.875rem', {}],
			'3xl': ['2.25rem', {}],
			'4xl': ['2.875rem', {}],
			'5xl': [
				'3.25rem',
				{
					lineHeight: '3.25rem'
				}
			],
			'6xl': [
				'4.5rem',
				{
					lineHeight: '4.75rem'
				}
			],
			'7xl': [
				'6rem',
				{
					lineHeight: '1'
				}
			],
			'8xl': [
				'8rem',
				{
					lineHeight: '1'
				}
			],
			'9xl': [
				'9vw',
				{
					lineHeight: '1'
				}
			],
			'10xl': [
				'10vw',
				{
					lineHeight: '1'
				}
			]
		},
		fontFamily: {
			sans: ['Almarai', ...defaultTheme.fontFamily.sans],
			serif: ['Playfair Display Variable', ...defaultTheme.fontFamily.serif],
		},
		textShadow: {
			sm: '0 1px 2px var(--tw-shadow-color)',
			DEFAULT: '0px 42px 4px var(--tw-shadow-color)',
			lg: '0 8px 16px var(--tw-shadow-color)',
		  },
	},

	plugins: [
		forms, typography,
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
			  {
				'text-shadow': (value) => ({
				  textShadow: value,
				}),
			  },
			  { values: theme('textShadow') }
			)
		  }),
		]
}

module.exports = config
