'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, HeartIcon } from '@heroicons/react/24/solid'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1], // Spring physics
      },
    },
  }

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, url: 'https://facebook.com/preincoh', color: '#1877F2' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/preincoh', color: '#E4405F' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/527712416450', color: '#25D366' },
  ]

  return (
    <footer className="bg-primary-dark text-white py-16">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Información de la Empresa */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-blue-900 to-orange-600 rounded-lg">
                <Image
                  src="/logopreincoh.png"
                  alt="Preincoh"
                  width={40}
                  height={40}
                  className="mix-blend-lighten"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">PREINCOH</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Prefabricados e Insumos para la Construcción de Hidalgo.
            </p>
          </motion.div>

          {/* Enlaces Rápidos */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#servicios" className="text-gray-400 hover:text-accent-orange transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#valores" className="text-gray-400 hover:text-accent-orange transition-colors">
                  Nuestros Valores
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-400 hover:text-accent-orange transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Información de Contacto */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="tel:+527712416450" className="flex items-center gap-2 hover:text-accent-orange transition-colors">
                  <PhoneIcon className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  +52 (771) 241-6450
                </a>
              </li>
              <li>
                <a href="mailto:preincoh@gmail.com" className="flex items-center gap-2 hover:text-accent-orange transition-colors">
                  <EnvelopeIcon className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  preincoh@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPinIcon className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                Hidalgo, México
              </li>
            </ul>
          </motion.div>

          {/* Redes Sociales */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-4">Síguenos</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 flex items-center justify-center rounded-full hover:shadow-lg transition-all duration-300 text-white"
                    style={{ backgroundColor: social.color }}
                    title={social.name}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gray-700 mb-8" />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={itemVariants} className="text-gray-400 text-sm">
            © {currentYear} Preincoh. Todos los derechos reservados.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-accent-orange transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-accent-orange transition-colors">
              Términos de Servicio
            </a>
          </motion.div>
        </motion.div>

        {/* Made with love */}
        <motion.p
          variants={itemVariants}
          className="text-center text-gray-500 text-xs mt-8 flex items-center justify-center gap-1.5"
        >
          Hecho con <HeartIcon className="w-3.5 h-3.5 text-red-500" aria-hidden="true" /> para construir mejores proyectos en Hidalgo
        </motion.p>
      </div>
    </footer>
  )
}
