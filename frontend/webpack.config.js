const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const svgrRule = require('./svgr-rule');

module.exports = (config) => {
	config.module.rules.push(svgrRule);

	config.plugins = [
		...config.plugins,
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/images'),
					to: path.resolve(__dirname, 'public/images'),
				},
			],
		}),
	];

	return config;
};
