'use client'

import { motion } from 'framer-motion'
import { ShieldCheckIcon, BoltIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'

export default function Values() {
  const values = [
    {
      title: 'Confianza',
      description: 'Asesoría experta que reduce el riesgo de errores y asegura la mejor inversión para tu proyecto.',
      icon: ShieldCheckIcon,
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600',
      hoverGradient: 'hover:from-blue-100 hover:to-blue-200',
    },
    {
      title: 'Eficiencia',
      description: 'Procesos rápidos y precios competitivos que optimizan tu tiempo y presupuesto.',
      icon: BoltIcon,
      color: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-200',
      iconColor: 'text-accent-orange',
      hoverGradient: 'hover:from-orange-100 hover:to-orange-200',
    },
    {
      title: 'Tradición Hidalguense',
      description: 'Conocimiento profundo de las necesidades locales y compromiso con la calidad regional.',
      icon: BuildingOffice2Icon,
      color: 'from-gray-50 to-gray-100',
      borderColor: 'border-gray-200',
      iconColor: 'text-primary-dark',
      hoverGradient: 'hover:from-gray-100 hover:to-gray-200',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        ease: [0.34, 1.56, 0.64, 1], // Spring physics
      },
    },
  }

  return (
    <section className="py-24 md:py-32 bg-white" id="valores">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Nuestros Pilares
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Tres valores fundamentales que guían nuestro compromiso con tus proyectos
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                className={`group p-8 rounded-xl border-2 ${value.borderColor} bg-gradient-to-br ${value.color} ${value.hoverGradient} backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <div className="mb-6 flex items-center justify-center">
                  <div className={`p-4 rounded-2xl bg-white/80 shadow-md group-hover:shadow-xl transition-all duration-300 ${value.iconColor}`}>
                    <IconComponent
                      className="w-12 h-12"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
