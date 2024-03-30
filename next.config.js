/** @type {import('next').NextConfig} */
const cspHeader = `
    default-src 'self';
	connect-src https://cdn.contentful.com https://inp-emanuel.vercel.app ws://localhost:3000;;
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: images.ctfassets.net ${process.env.NEXT_PUBLIC_S3_BUCKET_URL};
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
`
const nextConfig = {
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: cspHeader.replace(/\n/g, '')
					}
				]
			}
		]
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'inp-emmanuel.s3.us-east-2.amazonaws.com'
			},
			{
				protocol: 'https',
				hostname: 'images.ctfassets.net'
			}
		]
	}
}

module.exports = nextConfig
