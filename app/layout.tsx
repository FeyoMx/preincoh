import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://preincoh.mx'),
  title: 'Preincoh - Solidez con la eficiencia que tu proyecto necesita',
  description: 'Prefabricados e Insumos para la Construcción de Hidalgo. Asesoría experta, precios competitivos y servicio personalizado.',
  keywords: ['prefabricados', 'materiales construcción', 'Hidalgo', 'asesoría', 'arquitectos', 'construcción'],
  authors: [{ name: 'Preincoh' }],
  creator: 'Preincoh',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://preincoh.mx',
    siteName: 'Preincoh',
    title: 'Preincoh - Solidez con la eficiencia que tu proyecto necesita',
    description: 'Prefabricados e Insumos para la Construcción de Hidalgo',
    images: [
      {
        url: '/logopreincoh.png',
        width: 500,
        height: 500,
        alt: 'Preincoh - Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preincoh',
    description: 'Prefabricados e Insumos para la Construcción de Hidalgo',
    images: ['/logopreincoh.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#003366" />
        <meta name="msapplication-TileColor" content="#003366" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* JSON-LD Structured Data for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': process.env.NEXT_PUBLIC_BASE_URL || 'https://preincoh.mx',
              name: 'Preincoh',
              alternateName: 'Preincoh - Prefabricados e Insumos para la Construcción de Hidalgo',
              description: 'Prefabricados e Insumos para la Construcción de Hidalgo. Asesoría experta, precios competitivos y servicio personalizado.',
              url: process.env.NEXT_PUBLIC_BASE_URL || 'https://preincoh.mx',
              telephone: '+52-771-241-6450',
              email: 'preincoh@gmail.com',
              image: '/logopreincoh.png',
              logo: {
                '@type': 'ImageObject',
                url: '/logopreincoh.png',
                width: 500,
                height: 500,
              },
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'Hidalgo',
                addressCountry: 'MX',
              },
              areaServed: {
                '@type': 'State',
                name: 'Hidalgo',
              },
              priceRange: '$$',
              sameAs: [
                'https://facebook.com/preincoh',
                'https://instagram.com/preincoh',
              ],
            }),
          }}
        />

        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Preincoh',
              url: process.env.NEXT_PUBLIC_BASE_URL || 'https://preincoh.mx',
              logo: '/logopreincoh.png',
              description: 'Prefabricados e Insumos para la Construcción de Hidalgo',
              sameAs: [
                'https://facebook.com/preincoh',
                'https://instagram.com/preincoh',
              ],
              contact: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                telephone: '+52-771-241-6450',
                email: 'preincoh@gmail.com',
              },
            }),
          }}
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9DP6P39NFM" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9DP6P39NFM', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="antialiased bg-surface-light text-text-primary transition-colors duration-300">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
