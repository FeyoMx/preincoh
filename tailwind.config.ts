import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: 'var(--primary-dark)',
          light: 'var(--primary-light)',
          DEFAULT: 'var(--primary-dark)',
        },
        accent: {
          orange: 'var(--accent-orange)',
          'orange-dark': 'var(--accent-orange-dark)',
          'orange-light': 'var(--accent-orange-light)',
          DEFAULT: 'var(--accent-orange)',
        },
        surface: {
          light: 'var(--surface-light)',
          'off-white': 'var(--surface-off-white)',
          dark: 'var(--surface-dark)',
          darker: 'var(--surface-darker)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          light: 'var(--text-light)',
          muted: 'var(--text-muted)',
        }
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['Monaco', 'Courier New', 'monospace'],
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        orange: 'var(--shadow-orange)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'blob': 'blob 20s infinite',
        'pulse-soft': 'pulse-soft 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(255, 102, 0, 0.4)' },
          '50%': { transform: 'scale(1.02)', boxShadow: '0 0 0 10px rgba(255, 102, 0, 0)' },
        }
      },
    },
  },
  plugins: [],
}
export default config
