/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'images.unsplash.com', 'hudsonmanpower.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hudsonmanpower.com',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'gsap'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig

