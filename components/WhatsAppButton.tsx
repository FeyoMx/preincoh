'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  const whatsappNumber = '527712416450'
  const message = 'Hola Preincoh, me gustaría solicitar una asesoría gratuita para mi proyecto.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-8 right-8 z-40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 group"
          title="Chatea con nosotros en WhatsApp"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.445 0-2.848-.487-3.964-1.408l-.285-.184H2.752l.924 3.35c-.645 1.728-.99 3.649-.99 5.627 0 5.514 4.486 10 10 10 2.684 0 5.214-.993 7.21-2.817l.204.13h2.42l-.924-3.35c.645-1.728.99-3.649.99-5.627 0-5.514-4.486-10-10-10z" />
          </svg>
        </Link>
      </motion.div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-20 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg whitespace-nowrap text-sm font-semibold"
      >
        Chatea con nosotros
        <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900" />
      </motion.div>
    </motion.div>
  )
}
