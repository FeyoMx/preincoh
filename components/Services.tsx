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
    <section className="py-24 md:py-32 bg-surface-off-white relative" id="servicios">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-accent-orange font-bold tracking-wider uppercase text-sm mb-3 block">
            Nuestras Soluciones
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
            Servicios Integrales
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Soluciones completas en prefabricados e insumos para construcción, diseñadas para maximizar la eficiencia de tu obra.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                className={`group relative p-8 rounded-2xl transition-all duration-300 flex flex-col h-full ${isHighlight
                    ? 'bg-white border-2 border-accent-orange shadow-orange'
                    : 'bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-orange-100'
                  }`}
              >
                {/* Highlight Badge */}
                {isHighlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-orange text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg z-20">
                    <SparklesIcon className="w-4 h-4" aria-hidden="true" />
                    Más Popular
                  </div>
                )}

                {/* Icon Container */}
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${isHighlight
                        ? 'bg-orange-50 text-accent-orange'
                        : 'bg-blue-50 text-primary-dark group-hover:bg-orange-50 group-hover:text-accent-orange'
                      }`}
                  >
                    <IconComponent
                      className="w-8 h-8"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-primary-dark group-hover:text-accent-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Learn More Link (Implicit) */}
                <div className={`mt-auto pt-6 border-t ${isHighlight ? 'border-orange-100' : 'border-gray-100'}`}>
                  <span className={`text-sm font-semibold flex items-center gap-2 ${isHighlight ? 'text-accent-orange' : 'text-primary-dark group-hover:text-accent-orange'
                    } transition-colors`}>
                    Saber más
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
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
          className="mt-20 text-center"
        >
          <div className="inline-block p-1 rounded-2xl bg-white shadow-lg border border-gray-100">
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 btn btn-primary text-lg px-10 py-4 rounded-xl"
            >
              <SparklesIcon className="w-6 h-6" aria-hidden="true" />
              Solicita tu Asesoría Gratuita
            </a>
          </div>
          <p className="mt-4 text-sm text-text-muted">
            Respuesta en menos de 24 horas
          </p>
        </motion.div>
      </div>
    </section>
  )
}
