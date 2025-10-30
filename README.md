# 🏗️ Preincoh - Landing Page Profesional

[![Next.js 15](https://img.shields.io/badge/Next.js-15.5.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=flat-square)](LICENSE)

> Landing page moderna y profesional para **Preincoh** - Prefabricados e Insumos para la Construcción de Hidalgo.

**[→ Ver Demo en Vivo](#despliegue-en-vercel)** | **[→ Documentación](#-documentación)** | **[→ Inicio Rápido](#-inicio-rápido)**

---

## ✨ Características Principales

### 🎯 Diseño Moderno
- ✅ **Next.js 15** con App Router optimizado
- ✅ **TypeScript** para seguridad de tipos
- ✅ **Tailwind CSS 3.4** con dark mode
- ✅ **Responsive design** mobile-first
- ✅ **Framer Motion** para animaciones suaves (37.5% más rápidas)
- ✅ **Heroicons** para iconografía profesional

### 📱 Experiencia de Usuario
- ✅ Modo oscuro/claro automático
- ✅ Animaciones optimizadas (0.5s timing)
- ✅ Formulario de contacto con validación
- ✅ Botón flotante de WhatsApp integrado
- ✅ Scroll suave y transiciones elegantes

### ♿ Accesibilidad
- ✅ WCAG 2.1 AA compliant
- ✅ Color contrast ratio ≥4.5:1
- ✅ Touch targets ≥44px
- ✅ ARIA labels completos
- ✅ Keyboard navigation soportada

### ⚡ Performance
- ✅ **Lighthouse Score**: 95+ en todas las métricas
- ✅ Core Web Vitals optimizados
- ✅ Imágenes optimizadas (WebP, responsive)
- ✅ CSS/JS minificado y tree-shaked
- ✅ Build size: 42.8 KB (main)

### 🔒 Seguridad
- ✅ Headers HTTP seguridad configurados
- ✅ Validación de formularios con Zod
- ✅ Variables de entorno protegidas
- ✅ CSRF protection
- ✅ XSS mitigation

---

## 🎨 Secciones

| Sección | Descripción |
|---------|-------------|
| **Hero** | Presentación principal con CTA y logo animado |
| **Valores** | Pilares de marca: Confianza, Eficiencia, Tradición |
| **Servicios** | 6 servicios con asesoría gratuita destacada |
| **Beneficios** | Ventajas segmentadas por tipo de cliente |
| **Contacto** | Formulario validado con feedback en tiempo real |
| **Footer** | Información de contacto e iconos de redes sociales |

---

## 🚀 Inicio Rápido

### Requisitos
- **Node.js** 18.17+ ([descargar](https://nodejs.org/))
- **npm** 9+, **yarn** 3+, o **pnpm** 8+

### Instalación (5 minutos)

```bash
# 1. Clonar/descargar proyecto
cd preincoh

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local

# 4. Ejecutar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## ⚙️ Configuración

### Variables de Entorno

Copia `.env.example` a `.env.local` y configura:

```env
# Email (Gmail SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tu-email@gmail.com
SMTP_PASSWORD=tu-contraseña-app
ADMIN_EMAIL=admin@preincoh.mx

# WhatsApp
WHATSAPP_NUMBER=527712416450
```

### Email con Gmail

1. Habilita **Verificación en Dos Pasos** en tu cuenta Google
2. Ve a [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Selecciona "Mail" y "Windows" (o tu SO)
4. Copia la contraseña generada en `SMTP_PASSWORD`

### WhatsApp

Número configurado: **+52 (771) 241-6450**

Edita en `components/WhatsAppButton.tsx` si necesitas cambiar.

---

## 📁 Estructura del Proyecto

```
preincoh/
├── app/                          # Next.js App Router
│   ├── api/
│   │   └── contact/route.ts      # API de emails
│   ├── globals.css               # Estilos globales
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Página inicio
│
├── components/                   # Componentes React
│   ├── Hero.tsx                  # Sección principal
│   ├── Values.tsx                # Pilares marca
│   ├── Services.tsx              # Servicios
│   ├── Benefits.tsx              # Beneficios
│   ├── ContactForm.tsx           # Formulario
│   ├── Footer.tsx                # Pie página
│   ├── ThemeToggle.tsx           # Dark mode
│   └── WhatsAppButton.tsx        # CTA WhatsApp
│
├── public/                       # Assets estáticos
│   ├── logopreincoh.png          # Logo principal
│   ├── favicon.ico               # Favicon
│   ├── hero-background.svg       # Fondo hero
│   ├── section-divider.svg       # Divisor secciones
│   └── services-pattern.svg      # Patrón servicios
│
├── config/                       # Configuración
│   ├── .eslintrc.json            # ESLint rules
│   └── .mcp.json                 # MCP config
│
├── docs/                         # Documentación
│   ├── guides/                   # Guías de desarrollo
│   ├── design/                   # Especificaciones diseño
│   ├── technical/                # Detalles técnicos
│   ├── deployment/               # Guías despliegue
│   └── PROJECT_STRUCTURE.md      # Estructura completa
│
├── scripts/                      # Utilidades desarrollo
│   ├── verify-improvements.js    # Verificación QA
│   ├── test-lighthouse.js        # Auditoría Lighthouse
│   ├── capture-screenshots.js    # Captura pantallas
│   ├── remove_background.py      # Procesamiento logo
│   └── README.md                 # Guía scripts
│
├── package.json                  # Dependencias
├── tsconfig.json                 # TypeScript config
├── next.config.ts                # Next.js config
├── tailwind.config.ts            # Tailwind config
├── postcss.config.mjs            # PostCSS config
├── vercel.json                   # Vercel config
├── .env.example                  # Ejemplo variables
├── .gitignore                    # Archivos ignorados
└── README.md                     # Este archivo
```

Para ver estructura completa: [docs/PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md)

---

## 📦 Comandos Disponibles

```bash
# Desarrollo
npm run dev              # Dev server (localhost:3000)
npm run build            # Build producción
npm start                # Prod server

# Validación
npm run lint             # ESLint
npm run type-check       # TypeScript check
npm run build            # Full build check

# Utilidades
node scripts/verify-improvements.js      # Verificación QA
node scripts/test-lighthouse.js          # Auditoría Lighthouse
node scripts/capture-screenshots.js      # Captura pantallas
python scripts/remove_background.py      # Procesamiento logo
```

---

## 🎨 Personalización

### Colores de Marca

Edita `tailwind.config.ts`:

```typescript
colors: {
  'primary-dark': '#003366',      // Azul marino
  'accent-orange': '#FF6600',     // Naranja brillante
  'secondary-gray': '#E6E6E6',    // Gris claro
}
```

### Tipografía

Edita `app/globals.css` para cambiar fonts. Actualmente usa:
- **Headings**: Poppins (800, 700, 600)
- **Body**: Inter (400, 500)

### Contenido

| Elemento | Archivo |
|----------|---------|
| Textos principales | `components/*.tsx` |
| Contacto | `components/Footer.tsx` |
| WhatsApp | `components/WhatsAppButton.tsx` |
| Servicios | `components/Services.tsx` |

---

## 🚀 Despliegue en Vercel

### Opción 1: Automático desde GitHub

1. Push código a GitHub
2. Ir a [vercel.com](https://vercel.com)
3. Importar proyecto desde GitHub
4. Agregar variables de entorno
5. Click en "Deploy"

### Opción 2: Manual

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Configurar variables en Vercel dashboard:
# SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, ADMIN_EMAIL
```

### Variables en Vercel

Agrega en Vercel dashboard:
- `SMTP_HOST=smtp.gmail.com`
- `SMTP_PORT=587`
- `SMTP_SECURE=false`
- `SMTP_USER=tu-email@gmail.com`
- `SMTP_PASSWORD=tu-app-password`
- `ADMIN_EMAIL=admin@preincoh.mx`

---

## 📚 Documentación

| Documento | Descripción |
|-----------|-------------|
| [START_HERE.md](docs/START_HERE.md) | Guía de inicio rápido |
| [DEVELOPMENT.md](docs/guides/DEVELOPMENT.md) | Desarrollo local |
| [PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md) | Estructura completa |
| [DESIGN_IMPROVEMENTS_SUMMARY.md](docs/design/DESIGN_IMPROVEMENTS_SUMMARY.md) | Mejoras diseño v1.1.0 |
| [DEPLOYMENT.md](docs/deployment/DEPLOYMENT.md) | Instrucciones despliegue |
| [FINAL_ORGANIZATION.md](FINAL_ORGANIZATION.md) | Organización final |
| [scripts/README.md](scripts/README.md) | Guía de scripts |

---

## 🧪 Testing & QA

### Verificación Local

```bash
# Verificar mejoras implementadas
node scripts/verify-improvements.js

# Auditoría Lighthouse (requiere dev server)
npm run dev
# En otra terminal:
node scripts/test-lighthouse.js

# Captura pantallas
node scripts/capture-screenshots.js
```

### Checklist Despliegue

- [ ] `npm run build` - Sin errores
- [ ] `npm run lint` - Sin warnings
- [ ] Responsive design - Probado en 3+ tamaños
- [ ] Dark mode - Funciona correctamente
- [ ] Formulario - Envía emails correctamente
- [ ] WhatsApp - Se abre correctamente
- [ ] Variables de entorno - Configuradas en Vercel

---

## 🔍 Troubleshooting

### Formulario no envía emails
```bash
# 1. Verifica credenciales en .env.local
cat .env.local

# 2. Prueba conexión SMTP
npm run dev
# Revisa console para errores

# 3. Verifica Gmail app password
# Debe tener 16 caracteres sin espacios
```

### WhatsApp no abre
```
✓ Número debe estar en formato: +52XXXXXXXXXX
✓ Sin paréntesis ni guiones
✓ Verifica que el navegador soporte enlaces wa.me
```

### Estilos no se aplican
```bash
# Limpia caché Next.js
rm -rf .next

# Reinstala dependencias
npm install

# Reinicia servidor
npm run dev
```

### Build falla
```bash
# Verifica TypeScript
npm run type-check

# Reinstala dependencias
rm -rf node_modules package-lock.json
npm install
```

---

## 📊 Métricas de Proyecto

### v1.1.0 (Design Improvements)
- ✅ Animaciones 37.5% más rápidas (0.8s → 0.5s)
- ✅ 9 iconos profesionales implementados
- ✅ WCAG 2.1 AA accesibilidad
- ✅ Responsive mejorado (1→2→3 columnas)
- ✅ Build: 12.8 segundos
- ✅ Bundle: 42.8 KB main
- ✅ Verificaciones: 23/23 PASADAS

### Build Stats
```
Route                        Size    First Load JS
/                          42.8 kB       180 kB
/_not-found                 990 B       103 kB
/api/contact                123 B       102 kB

First Load JS shared       102 kB
Chunks                     ~101 kB
Other                     ~2 kB
```

---

## 🛠️ Tech Stack

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| **Next.js** | 15.5.6 | Framework React |
| **React** | 19 | UI Library |
| **TypeScript** | 5.x | Type Safety |
| **Tailwind CSS** | 3.4 | Styling |
| **Framer Motion** | 11 | Animations |
| **Heroicons** | 2.2 | Icons |
| **React Hook Form** | 7 | Form Management |
| **Zod** | 3 | Validation |
| **Nodemailer** | 6 | Email |
| **Vercel** | Cloud | Hosting |

---

## 🤝 Contribución

Para sugerencias o mejoras:
1. Crea una rama: `git checkout -b feature/tu-mejora`
2. Commit cambios: `git commit -m "Add: tu mejora"`
3. Push rama: `git push origin feature/tu-mejora`
4. Abre Pull Request

---

## 📝 Licencia

© 2025 Preincoh - Todos los derechos reservados.

---

## 📞 Contacto & Soporte

| Contacto | Detalles |
|----------|----------|
| **Email** | preincoh@gmail.com |
| **WhatsApp** | +52 (771) 241-6450 |
| **Teléfono** | +52 (771) 241-6450 |
| **Ubicación** | Hidalgo, México |

---

## 🎯 Roadmap Futuro

- [ ] Blog/artículos
- [ ] Galería de proyectos
- [ ] Certificaciones
- [ ] Testimonios clientes
- [ ] Calculadora de presupuestos
- [ ] Sistema de tickets
- [ ] Integración con WhatsApp Business

---

## 📈 Changelog

### v1.1.0 - Design Improvements (Oct 30, 2025)
- ✨ Sistema de iconos profesional (Heroicons)
- ✨ Animaciones optimizadas
- ✨ Accesibilidad mejorada (WCAG AA)
- ✨ Responsive design mejorado
- ✨ Documentación completa
- 🔧 Proyecto reorganizado
- 🔧 .gitignore optimizado

### v1.0.0 - Inicial (Oct 2024)
- 🎨 Landing page completa
- 📧 Formulario de contacto
- 💬 WhatsApp integration
- 🌙 Dark mode

---

## ✅ Checklist Desarrollo

- [x] Estructura Next.js 15
- [x] TypeScript configurado
- [x] Tailwind CSS con dark mode
- [x] Componentes principales (6)
- [x] Formulario de contacto
- [x] WhatsApp integration
- [x] Dark mode toggle
- [x] Iconografía profesional
- [x] Animaciones optimizadas
- [x] Accesibilidad WCAG AA
- [x] Responsive design
- [x] Email funcional
- [x] SEO optimizado
- [x] Documentación completa
- [x] Projeto organizado

--

<div align="center">

**Hecho con ❤️ para construir mejores proyectos en Hidalgo**

[↑ Volver al inicio](#-preincoh---landing-page-profesional)

</div>
