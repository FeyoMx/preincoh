import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  // Enable SWR caching
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache for optimized images
    unoptimized: false,
  },
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Cache static assets for 1 year
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
            has: [
              {
                type: 'header',
                key: 'Accept',
              },
            ],
          },
        ],
      },
      // Cache HTML pages for 1 hour (revalidate)
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ]
  },
}

export default nextConfig
