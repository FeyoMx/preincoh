'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppWidget() {
    const [isVisible, setIsVisible] = useState(false)
    const [showTooltip, setShowTooltip] = useState(false)

    useEffect(() => {
        // Show widget after a short delay
        const timer = setTimeout(() => {
            setIsVisible(true)
            // Show tooltip shortly after widget appears
            setTimeout(() => setShowTooltip(true), 1000)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    const phoneNumber = '5217719801417'
    const message = 'Hola Fredd, me interesa cotizar un proyecto con Preincoh.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
                    {/* Tooltip / Persona */}
                    <AnimatePresence>
                        {showTooltip && (
                            <motion.div
                                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="bg-white dark:bg-gray-800 p-4 rounded-2xl rounded-br-none shadow-xl max-w-[250px] relative border border-gray-100 dark:border-gray-700"
                            >
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setShowTooltip(false)
                                    }}
                                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div className="flex items-start gap-3">
                                    <div className="text-2xl">🤖</div>
                                    <div>
                                        <p className="text-sm font-bold text-primary-dark dark:text-white mb-1">
                                            ¡Hola! Soy Fredd
                                        </p>
                                        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                                            Tu asistente virtual de Preincoh. ¿En qué puedo ayudarte hoy?
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* FAB */}
                    <motion.a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-center group relative"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onMouseEnter={() => setShowTooltip(true)}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                    >
                        <FaWhatsapp className="w-8 h-8" />

                        {/* Pulse effect */}
                        <span className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping" />
                    </motion.a>
                </div>
            )}
        </AnimatePresence>
    )
}
