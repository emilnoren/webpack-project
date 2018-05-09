module.exports = {
  plugins: [
  	
  	// Take care of all the dumb vendor prefixes
    require('autoprefixer'),

    // Minify our css
    require('cssnano')
  ]
}