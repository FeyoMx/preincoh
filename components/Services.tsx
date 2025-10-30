'use client'

import { motion } from 'framer-motion'
import {
  SparklesIcon as SparklesOutlineIcon,
  TruckIcon,
  CreditCardIcon,
  DocumentCheckIcon,
  LifebuoyIcon,
  WrenchIcon,
} from '@heroicons/react/24/outline'
import { SparklesIcon } from '@heroicons/react/24/solid'

export default function Services() {
  const services = [
    {
      title: 'Asesoría Gratuita',
      description: 'Consulta con nuestros expertos de forma completamente gratuita. Te guiaremos para elegir los materiales exactos que necesitas.',
      icon: SparklesOutlineIcon,
      highlight: true,
    },
    {
      title: 'Entrega Rápida',
      description: 'Entregas confiables y a tiempo. Contamos con logística propia para garantizar puntualidad.',
      icon: TruckIcon,
    },
    {
      title: 'Opciones de Financiamiento',
      description: 'Los mejores precios en Hidalgo con opciones de pago flexible y financiamiento disponible.',
      icon: CreditCardIcon,
    },
    {
      title: 'Consultoría Especializada',
      description: 'Asesoramiento técnico en prefabricados y materiales para optimizar tu proyecto de construcción.',
      icon: DocumentCheckIcon,
    },
    {
      title: 'Soporte Continuo',
      description: 'Acompañamiento desde la cotización hasta la entrega. Estamos contigo en cada etapa del proyecto.',
      icon: LifebuoyIcon,
    },
    {
      title: 'Instalación y Montaje',
      description: 'Servicio de instalación profesional para garantizar la correcta colocación de prefabricados.',
      icon: WrenchIcon,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  }

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white" id="servicios">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Soluciones completas en prefabricados e insumos para construcción
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isHighlight = service.highlight

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: isHighlight ? 1.03 : 1.02,
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                className={`group relative p-8 rounded-xl border-2 transition-all duration-300 ${
                  isHighlight
                    ? 'col-span-1 sm:col-span-2 lg:col-span-1 lg:row-span-1 border-accent-orange bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50 shadow-xl hover:shadow-2xl'
                    : 'border-gray-200 bg-white hover:border-gray-300 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Highlight Badge */}
                {isHighlight && (
                  <div className="absolute -top-3 -right-3 bg-accent-orange text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                    <SparklesIcon className="w-4 h-4" aria-hidden="true" />
                    Destacado
                  </div>
                )}

                {/* Icon Container */}
                <div className="mb-6 flex items-center justify-center">
                  <div
                    className={`p-4 rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300 ${
                      isHighlight
                        ? 'bg-accent-orange text-white'
                        : 'bg-gray-50 text-primary-dark group-hover:bg-gray-100'
                    }`}
                  >
                    <IconComponent
                      className={`${isHighlight ? 'w-14 h-14' : 'w-12 h-12'}`}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3
                  className={`text-xl font-bold mb-3 text-center ${
                    isHighlight ? 'text-accent-orange text-2xl' : 'text-primary-dark'
                  }`}
                >
                  {service.title}
                </h3>
                <p className={`leading-relaxed text-center ${
                  isHighlight ? 'text-gray-800 text-base' : 'text-gray-700'
                }`}>
                  {service.description}
                </p>

                {/* Highlight Footer */}
                {isHighlight && (
                  <div className="mt-6 pt-6 border-t-2 border-orange-200">
                    <p className="text-sm font-semibold text-accent-orange text-center uppercase tracking-wide">
                      100% Sin Costo - Contáctanos Ahora
                    </p>
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 btn btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl min-h-[56px]"
          >
            <SparklesIcon className="w-6 h-6" aria-hidden="true" />
            Solicita tu Asesoría Gratuita
          </a>
        </motion.div>
      </div>
    </section>
  )
}
