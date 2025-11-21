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
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Smooth cubic bezier
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-surface-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-100/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob" />
      <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/grid.svg')] opacity-[0.03]" />

      <motion.div
        className="container-custom relative z-10 py-20 md:py-32 lg:py-40"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Content */}
          <motion.div className="flex flex-col justify-center space-y-8" variants={itemVariants}>
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 w-fit">
              <span className="flex h-2.5 w-2.5 rounded-full bg-accent-orange animate-pulse" />
              <span className="text-sm font-bold text-accent-orange uppercase tracking-wider">
                Líderes en Hidalgo
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight"
            >
              <span className="text-primary-dark">
                Solidez con la
              </span>
              <br />
              <span className="text-gradient">
                eficiencia que necesitas
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-lg font-medium"
            >
              Prefabricados e Insumos para la Construcción. Calidad certificada, entrega puntual y asesoría experta para tu obra.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5 pt-4"
            >
              <Link
                href="#contacto"
                className="btn btn-primary animate-pulse-soft text-lg min-h-[56px] px-8"
              >
                Solicita Asesoría Gratuita
              </Link>
              <Link
                href="#servicios"
                className="btn btn-outline text-lg min-h-[56px] px-8"
              >
                Ver Catálogo
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-8 pt-8 border-t border-gray-100"
            >
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary-dark">+500</p>
                <p className="text-sm font-medium text-text-muted uppercase tracking-wide">Proyectos</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary-dark">15+</p>
                <p className="text-sm font-medium text-text-muted uppercase tracking-wide">Años Exp.</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary-dark">100%</p>
                <p className="text-sm font-medium text-text-muted uppercase tracking-wide">Garantía</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Logo & Visual */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 to-orange-100/30 rounded-full filter blur-3xl transform scale-110" />

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="glass-panel w-full max-w-lg p-12 rounded-3xl relative z-10"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/5 to-primary-dark/5 rounded-2xl blur-xl" />
                <Image
                  src="/logopreincoh.png"
                  alt="Preincoh Logo - Prefabricados e Insumos para la Construcción de Hidalgo"
                  width={600}
                  height={600}
                  priority
                  className="logo-image w-full h-auto relative z-10 drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer"
      >
        <span className="text-xs font-bold tracking-widest text-text-muted uppercase">Descubre Más</span>
        <ChevronDownIcon className="w-6 h-6 text-accent-orange" />
      </motion.div>
    </section>
  )
}
