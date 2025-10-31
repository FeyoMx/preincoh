import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/.next/', '/node_modules/'],
    },
    sitemap: [
      `${process.env.NEXT_PUBLIC_BASE_URL || 'https://preincoh.mx'}/sitemap.xml`,
    ],
  }
}
