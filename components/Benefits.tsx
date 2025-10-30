'use client'

import { motion } from 'framer-motion'

export default function Benefits() {
  const benefitsGroups = [
    {
      title: 'Para Arquitectos y Pequeñas Empresas',
      subtitle: 'Optimiza tu cronograma y presupuesto',
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-300',
      benefits: [
        'Asesoría experta que garantiza la compra exacta',
        'Eliminamos sobrecostos por desperdicio',
        'Construye más rápido, gasta menos',
        'Crédito flexible para empresas',
        'Descuentos por volumen',
      ],
    },
    {
      title: 'Para Dueños de Casa (Autoconstrucción)',
      subtitle: 'Confianza y seguridad en cada paso',
      color: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-300',
      benefits: [
        'No necesitas ser un experto en construcción',
        'Asesoría paso a paso desde el inicio',
        'Compra con total confianza',
        'Inversión sólida y segura',
        'Mejores precios de Hidalgo',
      ],
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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1], // Spring physics
      },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Beneficios Adaptados a Ti
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Soluciones personalizadas según tu tipo de proyecto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {benefitsGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.15 }}
              viewport={{ once: true }}
              className={`p-8 rounded-xl bg-gradient-to-br ${group.color} border-2 ${group.borderColor}`}
            >
              <h3 className="text-2xl font-bold text-primary-dark mb-2">
                {group.title}
              </h3>
              <p className="text-lg text-gray-700 mb-8 font-semibold">
                {group.subtitle}
              </p>

              <motion.ul
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {group.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <span className="flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-accent-orange"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-800 leading-relaxed">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
