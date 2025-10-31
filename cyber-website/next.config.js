/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove output: 'export' for Vercel deployment
  // Only use export for static hosting
}

module.exports = nextConfig