/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: require('./webpack.config.js'),
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
};

module.exports = nextConfig;
