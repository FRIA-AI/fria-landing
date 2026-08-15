import nodemailer from 'nodemailer';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NOTIFY_TO = 'adolfo.romero@friaai.com';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, company, email, phone, route, lang } = req.body || {};

  if (!name?.trim() || !company?.trim() || !route?.trim() || !email?.trim() || !EMAIL_RE.test(email.trim())) {
    return res.status(400).json({ error: 'Faltan campos requeridos o el correo no es válido.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const subject = lang === 'en' ? 'Demo request — FRIA' : 'Solicitud de demo — FRIA';
    const html = `
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Empresa:</strong> ${company}</p>
      <p><strong>Correo:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone || '—'}</p>
      <p><strong>Ruta que más cotizan:</strong> ${route}</p>
    `;

    await transporter.sendMail({
      from: `"FRIA — Landing" <${process.env.SMTP_USER}>`,
      to: NOTIFY_TO,
      replyTo: email,
      subject,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('Error enviando solicitud de demo:', e);
    return res.status(500).json({ error: 'No se pudo enviar el correo.' });
  }
}
