'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline'

const contactSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Por favor ingresa un email válido'),
  telefono: z.string().min(10, 'El teléfono debe tener al menos 10 dígitos'),
  empresa: z.string().optional(),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  tipoCliente: z.enum(['arquitecto', 'autoconstruccion', 'otra'], {
    errorMap: () => ({ message: 'Selecciona un tipo de cliente' }),
  }),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses = "w-full px-4 py-3.5 min-h-[50px] bg-surface-off-white border border-gray-200 rounded-xl focus:bg-white focus:border-accent-orange focus:ring-4 focus:ring-orange-100 transition-all duration-300 outline-none text-text-primary placeholder:text-text-muted"
  const errorInputClasses = "border-red-300 focus:border-red-500 focus:ring-red-100 bg-red-50/30"
  const labelClasses = "block text-sm font-semibold text-text-primary mb-2 ml-1"

  return (
    <section className="py-24 md:py-32 bg-surface-light relative overflow-hidden" id="contacto">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full mix-blend-multiply filter blur-[80px] opacity-40" />
      <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-orange-50/50 rounded-full mix-blend-multiply filter blur-[60px] opacity-40" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-accent-orange font-bold tracking-wider uppercase text-sm mb-3 block">
              Contáctanos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              Solicita tu Asesoría Gratuita
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              ¿Tienes un proyecto en mente? Nuestro equipo de expertos está listo para ayudarte a hacerlo realidad.
            </p>
          </div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-dark to-accent-orange" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nombre */}
              <div className="md:col-span-2">
                <label htmlFor="nombre" className={labelClasses}>
                  Nombre Completo <span className="text-accent-orange">*</span>
                </label>
                <input
                  id="nombre"
                  type="text"
                  {...register('nombre')}
                  className={`${inputClasses} ${errors.nombre ? errorInputClasses : ''}`}
                  placeholder="Tu nombre completo"
                  aria-invalid={errors.nombre ? 'true' : 'false'}
                />
                {errors.nombre && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1.5 font-medium animate-fade-in">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.nombre.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Correo Electrónico <span className="text-accent-orange">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className={`${inputClasses} ${errors.email ? errorInputClasses : ''}`}
                  placeholder="tu@email.com"
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1.5 font-medium animate-fade-in">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Teléfono */}
              <div>
                <label htmlFor="telefono" className={labelClasses}>
                  Teléfono <span className="text-accent-orange">*</span>
                </label>
                <input
                  id="telefono"
                  type="tel"
                  {...register('telefono')}
                  className={`${inputClasses} ${errors.telefono ? errorInputClasses : ''}`}
                  placeholder="+52 (771) 123 4567"
                  aria-invalid={errors.telefono ? 'true' : 'false'}
                />
                {errors.telefono && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1.5 font-medium animate-fade-in">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.telefono.message}
                  </p>
                )}
              </div>

              {/* Empresa */}
              <div className="md:col-span-2">
                <label htmlFor="empresa" className={labelClasses}>
                  Empresa o Proyecto
                </label>
                <input
                  id="empresa"
                  type="text"
                  {...register('empresa')}
                  className={inputClasses}
                  placeholder="Nombre de tu empresa o proyecto (opcional)"
                />
              </div>

              {/* Tipo de Cliente */}
              <div className="md:col-span-2">
                <label htmlFor="tipoCliente" className={labelClasses}>
                  ¿Cuál es tu perfil? <span className="text-accent-orange">*</span>
                </label>
                <div className="relative">
                  <select
                    id="tipoCliente"
                    {...register('tipoCliente')}
                    className={`${inputClasses} ${errors.tipoCliente ? errorInputClasses : ''} appearance-none cursor-pointer`}
                    aria-invalid={errors.tipoCliente ? 'true' : 'false'}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="arquitecto">Arquitecto / Empresa Constructora</option>
                    <option value="autoconstruccion">Autoconstrucción / Dueño de Casa</option>
                    <option value="otra">Otro</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-text-muted">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {errors.tipoCliente && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1.5 font-medium animate-fade-in">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.tipoCliente.message}
                  </p>
                )}
              </div>

              {/* Mensaje */}
              <div className="md:col-span-2">
                <label htmlFor="mensaje" className={labelClasses}>
                  ¿Cuéntanos sobre tu proyecto? <span className="text-accent-orange">*</span>
                </label>
                <textarea
                  id="mensaje"
                  {...register('mensaje')}
                  rows={4}
                  className={`${inputClasses} resize-none`}
                  placeholder="Describe brevemente tu proyecto, necesidades y presupuesto..."
                  aria-invalid={errors.mensaje ? 'true' : 'false'}
                />
                {errors.mensaje && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1.5 font-medium animate-fade-in">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.mensaje.message}
                  </p>
                )}
              </div>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl flex items-center gap-3"
                role="alert"
              >
                <CheckCircleIcon className="w-6 h-6 flex-shrink-0 text-green-600" />
                <span className="font-medium">
                  ¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.
                </span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl flex items-center gap-3"
                role="alert"
              >
                <ExclamationCircleIcon className="w-6 h-6 flex-shrink-0 text-red-600" />
                <span className="font-medium">
                  Error al enviar el mensaje. Por favor intenta de nuevo.
                </span>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
              className="w-full btn btn-primary text-lg py-4 rounded-xl disabled:opacity-70 disabled:cursor-not-allowed shadow-orange hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 mt-4"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <PaperAirplaneIcon className="w-5 h-5" />
                  Enviar Solicitud
                </>
              )}
            </motion.button>

            <p className="text-sm text-text-muted text-center mt-4">
              Tus datos están seguros. Respondemos en menos de 24 horas hábiles.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
