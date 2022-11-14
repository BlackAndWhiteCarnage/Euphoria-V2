const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'src')],
	},
	webpack: require('./webpack.config.js'),
	swcMinify: true,
};

module.exports = nextConfig;
