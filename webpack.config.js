const Path = require('path'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: ['./src/app.js', './src/scss/main.scss'],
  output: {
    path: Path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [

      // Regular CSS files
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1',
        }),
      },

      // SCSS loader for webpack
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }

    ]
  },
  plugins: [

    // Define where to save the file
    new ExtractTextPlugin({
      filename: './assets/css/[name].bundle.css',
      allChunks: true,
    }),

  ],
};