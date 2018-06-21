// Get our config
require('dotenv').config();

const Path = require('path'),
			CircularDependencyPlugin = require('circular-dependency-plugin'),
			ExtractTextPlugin = require('extract-text-webpack-plugin'),
			WebpackNotifierPlugin = require('webpack-notifier');

// Shared plugins
const sharedPlugins = [
	
	// Get rid of circular dependencies
	new CircularDependencyPlugin({
		exclude: /a\.js|node_modules/,
		failOnError: true,
		allowAsyncCycles: false,
		cwd: process.cwd(),
	}),

];

module.exports = [

	/* CLIENTSIDE CONFIG */
	{
		mode: process.env.ENVIRONMENT,
		devtool: 'source-map',
		entry: [
			'./src/client/main.js', 
			'./src/client/scss/main.scss'
		],
		output: {
			path: Path.resolve(__dirname, 'dist'),
			filename: './assets/js/main.bundle.js'
		},
		module: {
			rules: [

				// Babel-loader for webpack
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
							plugins:
							[
								[
									'@babel/plugin-transform-runtime',
									{
										polyfill    : false,
										regenerator : true,
									}
								],
							],
						}
					}
				},

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
						{
							loader: 'css-loader', 
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'postcss-loader', 
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader', 
							options: {
								sourceMap: true
							}
						}
					])
				}

			]
		},
		plugins: [

			// Define where to save the compiled css file
			new ExtractTextPlugin({
				filename: './assets/css/[name].bundle.css',
				allChunks: true,
			}),

			// Send a notification when the build is finished
			new WebpackNotifierPlugin({
				title: 'Client assets'
			}),

		].concat(sharedPlugins),
	},

	/* SERVER CONFIG */
	{
		mode:  process.env.ENVIRONMENT,
		target: 'node',
		devtool: 'source-map',
		entry: ['./src/server/app.js'],
		output: {
			path: Path.resolve(__dirname, 'dist'),
			libraryTarget: 'commonjs',
			filename: './app.js'
		},
		// Don't compile anything in node_modules or without a relative path
		externals: [
			/^(?!\.|\/).+/i,
		],
		module: {
			rules: [

				// Babel-loader for webpack
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
							plugins:
							[
								[
									'@babel/plugin-transform-runtime',
									{
										polyfill    : false,
										regenerator : true,
									}
								],
							],
						}
					}
				},

			]
		},
		plugins: [

			// Send a notification when the build is finished
			new WebpackNotifierPlugin({
				title: 'Server assets'
			}),

		].concat(sharedPlugins),
	}
];