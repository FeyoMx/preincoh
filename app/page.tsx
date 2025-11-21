import Hero from '@/components/Hero'
import Values from '@/components/Values'
import Services from '@/components/Services'
import Benefits from '@/components/Benefits'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Values />
      <Services />
      <Benefits />
      <ContactForm />
      <Footer />
    </main>
  )
}
