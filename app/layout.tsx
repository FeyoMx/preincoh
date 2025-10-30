import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import ThemeToggle from '@/components/ThemeToggle'
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
      </head>
      <body className="antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeToggle />
        {children}
      </body>
    </html>
  )
}
