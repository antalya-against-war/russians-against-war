/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/instagram/:path*',
        destination: 'https://instagram.fkiv2-1.fna.fbcdn.net/:path*',
      },
    ]
  },
}

module.exports = nextConfig;
