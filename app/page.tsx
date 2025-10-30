'use client'

import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'

// Lazy load components below the fold for better performance
const Values = dynamic(() => import('@/components/Values'), { ssr: true })
const Services = dynamic(() => import('@/components/Services'), { ssr: true })
const Benefits = dynamic(() => import('@/components/Benefits'), { ssr: true })
const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })
const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'), {
  ssr: false,
  loading: () => null,
})

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Values />
      <Services />
      <Benefits />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
