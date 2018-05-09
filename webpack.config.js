const Path = require('path'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  mode: 'production',
  entry: ['./src/app.js', './src/scss/main.scss'],
  output: {
    path: Path.resolve(__dirname, 'dist'),
    filename: './assets/js/main.bundle.js'
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
        use: ExtractTextPlugin.extract([
          'css-loader', 
          'postcss-loader', 
          'sass-loader'
        ])
      }

    ]
  },
  plugins: [

    // Send a notification when the build is finished
    new WebpackNotifierPlugin({
      title: 'Webpack'
    }),

    // Define where to save the file
    new ExtractTextPlugin({
      filename: './assets/css/[name].bundle.css',
      allChunks: true,
    }),

  ],
};