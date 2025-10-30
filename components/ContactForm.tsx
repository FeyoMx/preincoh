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

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white" id="contacto">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
              Solicita tu Asesoría Gratuita
            </h2>
            <p className="text-xl text-gray-700">
              Contacta con nuestro equipo de expertos ahora mismo
            </p>
          </div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-white p-8 md:p-10 rounded-2xl border-2 border-gray-200 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Nombre */}
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-semibold text-primary-dark mb-2"
              >
                Nombre Completo <span className="text-accent-orange">*</span>
              </label>
              <input
                id="nombre"
                type="text"
                {...register('nombre')}
                className={`w-full px-4 py-3 md:py-3.5 min-h-[44px] border-2 rounded-lg transition-all duration-200 ${
                  errors.nombre
                    ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                    : 'border-gray-300 focus:border-accent-orange focus:ring-2 focus:ring-orange-200'
                } focus:outline-none`}
                placeholder="Tu nombre"
                aria-describedby={errors.nombre ? 'nombre-error' : undefined}
                aria-invalid={errors.nombre ? 'true' : 'false'}
              />
              {errors.nombre && (
                <p id="nombre-error" className="text-red-500 text-sm mt-1.5 flex items-center gap-1">
                  <ExclamationCircleIcon className="w-4 h-4" aria-hidden="true" />
                  {errors.nombre.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-primary-dark mb-2"
              >
                Correo Electrónico <span className="text-accent-orange">*</span>
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className={`w-full px-4 py-3 md:py-3.5 min-h-[44px] border-2 rounded-lg transition-all duration-200 ${
                  errors.email
                    ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                    : 'border-gray-300 focus:border-accent-orange focus:ring-2 focus:ring-orange-200'
                } focus:outline-none`}
                placeholder="tu@email.com"
                aria-describedby={errors.email ? 'email-error' : undefined}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-sm mt-1.5 flex items-center gap-1">
                  <ExclamationCircleIcon className="w-4 h-4" aria-hidden="true" />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Teléfono */}
            <div>
              <label
                htmlFor="telefono"
                className="block text-sm font-semibold text-primary-dark mb-2"
              >
                Teléfono <span className="text-accent-orange">*</span>
              </label>
              <input
                id="telefono"
                type="tel"
                {...register('telefono')}
                className={`w-full px-4 py-3 md:py-3.5 min-h-[44px] border-2 rounded-lg transition-all duration-200 ${
                  errors.telefono
                    ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                    : 'border-gray-300 focus:border-accent-orange focus:ring-2 focus:ring-orange-200'
                } focus:outline-none`}
                placeholder="+52 (771) 123 4567"
                aria-describedby={errors.telefono ? 'telefono-error' : undefined}
                aria-invalid={errors.telefono ? 'true' : 'false'}
              />
              {errors.telefono && (
                <p id="telefono-error" className="text-red-500 text-sm mt-1.5 flex items-center gap-1">
                  <ExclamationCircleIcon className="w-4 h-4" aria-hidden="true" />
                  {errors.telefono.message}
                </p>
              )}
            </div>

            {/* Empresa */}
            <div>
              <label
                htmlFor="empresa"
                className="block text-sm font-semibold text-primary-dark mb-2"
              >
                Empresa o Proyecto
              </label>
              <input
                id="empresa"
                type="text"
                {...register('empresa')}
                className="w-full px-4 py-3 md:py-3.5 min-h-[44px] border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent-orange focus:ring-2 focus:ring-orange-200 transition-all duration-200"
                placeholder="Nombre de tu empresa o proyecto (opcional)"
              />
            </div>

            {/* Tipo de Cliente */}
            <div>
              <label
                htmlFor="tipoCliente"
                className="block text-sm font-semibold text-primary-dark mb-2"
              >
                ¿Cuál es tu perfil? <span className="text-accent-orange">*</span>
              </label>
              <select
                id="tipoCliente"
                {...register('tipoCliente')}
                className={`w-full px-4 py-3 md:py-3.5 min-h-[44px] border-2 rounded-lg transition-all duration-200 ${
                  errors.tipoCliente
                    ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                    : 'border-gray-300 focus:border-accent-orange focus:ring-2 focus:ring-orange-200'
                } focus:outline-none`}
                aria-describedby={errors.tipoCliente ? 'tipoCliente-error' : undefined}
                aria-invalid={errors.tipoCliente ? 'true' : 'false'}
              >
                <option value="">Selecciona una opción</option>
                <option value="arquitecto">Arquitecto / Empresa Constructora</option>
                <option value="autoconstruccion">Autoconstrucción / Dueño de Casa</option>
                <option value="otra">Otro</option>
              </select>
              {errors.tipoCliente && (
                <p id="tipoCliente-error" className="text-red-500 text-sm mt-1.5 flex items-center gap-1">
                  <ExclamationCircleIcon className="w-4 h-4" aria-hidden="true" />
                  {errors.tipoCliente.message}
                </p>
              )}
            </div>

            {/* Mensaje */}
            <div>
              <label
                htmlFor="mensaje"
                className="block text-sm font-semibold text-primary-dark mb-2"
              >
                ¿Cuéntanos sobre tu proyecto? <span className="text-accent-orange">*</span>
              </label>
              <textarea
                id="mensaje"
                {...register('mensaje')}
                rows={5}
                className={`w-full px-4 py-3 md:py-3.5 border-2 rounded-lg transition-all duration-200 resize-none ${
                  errors.mensaje
                    ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                    : 'border-gray-300 focus:border-accent-orange focus:ring-2 focus:ring-orange-200'
                } focus:outline-none`}
                placeholder="Describe brevemente tu proyecto, necesidades y presupuesto..."
                aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
                aria-invalid={errors.mensaje ? 'true' : 'false'}
              />
              {errors.mensaje && (
                <p id="mensaje-error" className="text-red-500 text-sm mt-1.5 flex items-center gap-1">
                  <ExclamationCircleIcon className="w-4 h-4" aria-hidden="true" />
                  {errors.mensaje.message}
                </p>
              )}
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-50 border-2 border-green-300 text-green-800 rounded-lg flex items-center gap-3"
                role="alert"
                aria-live="polite"
              >
                <CheckCircleIcon className="w-6 h-6 flex-shrink-0" aria-hidden="true" />
                <span className="font-medium">
                  ¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.
                </span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-50 border-2 border-red-300 text-red-800 rounded-lg flex items-center gap-3"
                role="alert"
                aria-live="polite"
              >
                <ExclamationCircleIcon className="w-6 h-6 flex-shrink-0" aria-hidden="true" />
                <span className="font-medium">
                  Error al enviar el mensaje. Por favor intenta de nuevo.
                </span>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full btn btn-primary font-semibold py-4 min-h-[50px] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 text-base md:text-lg shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                  Enviando...
                </>
              ) : (
                <>
                  <PaperAirplaneIcon className="w-5 h-5" aria-hidden="true" />
                  Enviar Solicitud de Asesoría
                </>
              )}
            </motion.button>

            <p className="text-sm text-gray-600 text-center">
              Nos comprometemos a responder en menos de 24 horas hábiles.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
