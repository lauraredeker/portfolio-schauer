const config = {
	plugins: [
		require('postcss-each'),
		require('postcss-import'),
		require('tailwindcss/nesting'),
		require('tailwindcss'),
		require('autoprefixer')
	]
}

module.exports = config
