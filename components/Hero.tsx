'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <motion.div
        className="container-custom relative z-10 py-16 md:py-24 lg:py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div className="flex flex-col justify-center space-y-6" variants={itemVariants}>
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-accent-orange animate-pulse" />
              <span className="text-sm font-semibold text-accent-orange uppercase tracking-wider">
                Bienvenido a Preincoh
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-gradient">
                Solidez con la eficiencia
              </span>
              <br />
              <span className="text-primary-dark">
                que tu proyecto necesita
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg"
            >
              Prefabricados e Insumos para la Construcción de Hidalgo.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="#contacto"
                className="btn btn-primary ripple min-h-[44px] text-base md:text-lg"
              >
                Solicita Asesoría Gratuita
              </Link>
              <Link
                href="#servicios"
                className="btn btn-outline min-h-[44px] text-base md:text-lg"
              >
                Conoce Nuestros Servicios
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 pt-8 border-t border-gray-200"
            >
              <div>
                <p className="text-2xl md:text-3xl font-bold text-gradient">+500</p>
                <p className="text-sm text-gray-600">Proyectos Exitosos</p>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div>
                <p className="text-2xl md:text-3xl font-bold text-gradient">100%</p>
                <p className="text-sm text-gray-600">Satisfacción Garantizada</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Logo */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full max-w-md p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-orange-50 shadow-2xl backdrop-blur-sm backdrop-filter"
              style={{
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/20 to-primary-dark/20 rounded-2xl blur-2xl" />
                <Image
                  src="/logopreincoh.png"
                  alt="Preincoh Logo - Prefabricados e Insumos para la Construcción de Hidalgo"
                  width={500}
                  height={500}
                  priority
                  className="logo-image w-full h-auto mix-blend-multiply relative z-10"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex"
        role="button"
        aria-label="Desplázate hacia abajo para ver más contenido"
      >
        <div className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <span className="text-sm text-gray-600 font-medium">Desplázate para conocer más</span>
          <ChevronDownIcon className="w-6 h-6 text-accent-orange" aria-hidden="true" />
        </div>
      </motion.div>
    </section>
  )
}
