'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Servicios', href: '#servicios' },
        { name: 'Contacto', href: '#contacto' },
    ]

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className={`mx-auto px-4 md:px-12 transition-all duration-300 ${isScrolled ? 'max-w-7xl' : 'max-w-[1400px]'
                    }`}>
                    <div className={`relative rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled
                        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border border-white/20'
                        : 'bg-transparent'
                        }`}>

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 relative z-50">
                            <div className={`relative transition-all duration-300 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'
                                }`}>
                                <Image
                                    src="/logopreincoh.png"
                                    alt="Preincoh Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-primary-dark dark:text-white' : 'text-primary-dark dark:text-white'
                                }`}>
                                Preincoh
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-text-primary hover:text-accent-orange transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-orange transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                            <div className="pl-4 border-l border-gray-200 dark:border-gray-700">
                                <ThemeToggle />
                            </div>
                        </nav>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center gap-4 md:hidden">
                            <ThemeToggle />
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <XMarkIcon className="w-6 h-6" />
                                ) : (
                                    <Bars3Icon className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white dark:bg-gray-950 pt-24 px-6 md:hidden"
                    >
                        <nav className="flex flex-col gap-6 items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-bold text-primary-dark dark:text-white hover:text-accent-orange transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
