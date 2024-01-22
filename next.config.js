/** @type {import('next').NextConfig} */
const cspHeader = `
  default-src 'self';
  script-src 'self' 'strict-dynamic';
  style-src 'self';
  img-src 'self' blob: data: ${process.env.NEXT_PUBLIC_S3_BUCKET_URL};
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  block-all-mixed-content;
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, ' ').trim()

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "inp-emmanuel.s3.us-east-2.amazonaws.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
