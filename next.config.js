/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		BASE_URL: process.env.API_URL,
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		domains: ['res.cloudinary.com'],
	},
};

module.exports = nextConfig;
