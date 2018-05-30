module.exports = {
	plugins: [
		
		// Take care of all the dumb vendor prefixes
		require('autoprefixer'),

		// Minify our css
		require('cssnano'),

		// Add all: initial reset functionality
		require('postcss-initial')({
			reset: 'inherited'
		}),

		// Allow modern CSS in our files
		require('postcss-preset-env'),

		// Useful utilities and mixins for our SCSS-files
		require('postcss-utilities'),
	]
}