import nodemailer from 'nodemailer';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NOTIFY_TO = 'adolfo.romero@friaai.com';

// Limites de largo por campo: sin esto, cualquiera podia mandar textos
// enormes y llenar el buzon o gastar cuota del SMTP.
const MAX = { name: 100, company: 150, email: 200, phone: 40, route: 500 };

// Escapa texto antes de meterlo al HTML del correo. Este correo te llega a ti
// desde la propia cuenta de FRIA, asi que un visitante que escribiera HTML en
// el formulario (ej. un enlace falso de "inicia sesion") lo veria entre
// contenido en el que confias. Escapado, todo se muestra como texto literal.
function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Solo acepta texto: si alguien manda un objeto o arreglo en el JSON, antes
// esto tronaba con error 500 sin controlar.
function cleanText(value) {
  return typeof value === 'string' ? value.trim() : '';
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body || {};
  const name = cleanText(body.name);
  const company = cleanText(body.company);
  const email = cleanText(body.email);
  const phone = cleanText(body.phone);
  const route = cleanText(body.route);
  const lang = body.lang === 'en' ? 'en' : 'es';

  if (!name || !company || !route || !email || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Faltan campos requeridos o el correo no es válido.' });
  }

  if (
    name.length > MAX.name || company.length > MAX.company || email.length > MAX.email ||
    phone.length > MAX.phone || route.length > MAX.route
  ) {
    return res.status(400).json({ error: 'Alguno de los campos es demasiado largo.' });
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
      <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
      <p><strong>Empresa:</strong> ${escapeHtml(company)}</p>
      <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
      <p><strong>Teléfono:</strong> ${phone ? escapeHtml(phone) : '—'}</p>
      <p><strong>Ruta que más cotizan:</strong> ${escapeHtml(route)}</p>
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
