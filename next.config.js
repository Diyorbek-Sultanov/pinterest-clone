/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			'avatars.githubusercontent.com',
			'blgovhcqebcpbijcwavk.supabase.co',
		],
	},
	experimental: {
		serverActions: true,
	},
}

module.exports = nextConfig
