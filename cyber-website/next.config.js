/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure CSS is properly handled in production
  experimental: {
    optimizeCss: false, // Disable CSS optimization that might remove animations
  },
  
  // Ensure static assets are properly served
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Optimize for Vercel deployment
  output: 'standalone',
  
  // Ensure CSS animations are not stripped
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error']
    } : false,
  },
  
  // Headers for proper CSS loading
  async headers() {
    return [
      {
        source: '/assets/css/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig