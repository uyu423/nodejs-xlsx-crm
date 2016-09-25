var path = require('path');

module.exports = {
	entry : './src/index.js',

	output : {
		path : __dirname + '/public',
		filename: 'bundle.js'
	},

	module : {
		loaders : [{
			test : /\.js$/,
			exclude : /node_modules/,
			loaders : [
				'babel?' + JSON.stringify({
					cacheDirectory: true,
					presets : ['es2015', 'react']
				})]
		}, {
			test: /\.css$/,
			loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
		}]
	},

	resolve : {
		root: path.resolve('./src')
	}
}
