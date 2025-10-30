import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configurar el transporter de nodemailer
// IMPORTANTE: Reemplazar con tus credenciales reales
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER || 'tu-email@gmail.com',
    pass: process.env.SMTP_PASSWORD || 'tu-contraseña-app',
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { nombre, email, telefono, empresa, mensaje, tipoCliente } = body

    // Validación básica
    if (!nombre || !email || !telefono || !mensaje || !tipoCliente) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Email al cliente
    const clienteMailOptions = {
      from: process.env.SMTP_USER || 'noreply@preincoh.mx',
      to: email,
      subject: '✓ Hemos recibido tu solicitud de asesoría - Preincoh',
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(to right, #003366, #FF6600); color: white; padding: 20px; text-align: center; border-radius: 5px; }
            .content { padding: 20px; background: #f9f9f9; margin: 20px 0; border-radius: 5px; }
            .footer { text-align: center; color: #999; font-size: 12px; }
            .btn { display: inline-block; padding: 10px 20px; background: #FF6600; color: white; text-decoration: none; border-radius: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>¡Gracias por contactarnos!</h1>
            </div>
            <div class="content">
              <p>Hola <strong>${nombre}</strong>,</p>
              <p>Hemos recibido tu solicitud de asesoría gratuita. Tu consulta es importante para nosotros.</p>
              <p><strong>Resumen de tu solicitud:</strong></p>
              <ul>
                <li><strong>Nombre:</strong> ${nombre}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Teléfono:</strong> ${telefono}</li>
                ${empresa ? `<li><strong>Empresa:</strong> ${empresa}</li>` : ''}
                <li><strong>Tipo de cliente:</strong> ${tipoCliente === 'arquitecto' ? 'Arquitecto / Empresa' : 'Autoconstrucción'}</li>
              </ul>
              <p>Nos pondremos en contacto con ti en las próximas 24 horas hábiles a través del teléfono o email que proporcionaste.</p>
              <p style="margin-top: 30px;">
                <a href="https://wa.me/5271234567890" class="btn">Chatea con nosotros en WhatsApp</a>
              </p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Preincoh - Prefabricados e Insumos para la Construcción de Hidalgo</p>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // Email al administrador
    const adminMailOptions = {
      from: process.env.SMTP_USER || 'noreply@preincoh.mx',
      to: process.env.ADMIN_EMAIL || 'admin@preincoh.mx',
      subject: `📩 Nueva solicitud de asesoría - ${nombre}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(to right, #003366, #FF6600); color: white; padding: 20px; text-align: center; border-radius: 5px; }
            .content { padding: 20px; background: #f9f9f9; margin: 20px 0; border-radius: 5px; }
            .footer { text-align: center; color: #999; font-size: 12px; }
            .badge { display: inline-block; padding: 5px 10px; background: #FF6600; color: white; border-radius: 3px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nueva Solicitud de Asesoría</h1>
            </div>
            <div class="content">
              <p><strong>Detalles del cliente:</strong></p>
              <ul>
                <li><strong>Nombre:</strong> ${nombre}</li>
                <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
                <li><strong>Teléfono:</strong> <a href="tel:${telefono}">${telefono}</a></li>
                ${empresa ? `<li><strong>Empresa:</strong> ${empresa}</li>` : ''}
                <li><strong>Tipo de cliente:</strong> <span class="badge">${tipoCliente === 'arquitecto' ? 'ARQUITECTO' : 'AUTOCONSTRUCCIÓN'}</span></li>
              </ul>
              <p><strong>Mensaje del cliente:</strong></p>
              <blockquote style="border-left: 4px solid #FF6600; padding-left: 20px; margin: 20px 0; color: #666;">
                ${mensaje.replace(/\n/g, '<br>')}
              </blockquote>
              <p><strong>Fecha y hora:</strong> ${new Date().toLocaleString('es-MX')}</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Preincoh - Sistema de solicitudes</p>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // Enviar emails
    try {
      await transporter.sendMail(clienteMailOptions)
      await transporter.sendMail(adminMailOptions)
    } catch (emailError) {
      console.error('Error al enviar email:', emailError)
      // No fallar la respuesta si falla el email, pero loguear el error
    }

    return NextResponse.json(
      { message: 'Solicitud recibida correctamente' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error en API de contacto:', error)
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    )
  }
}
