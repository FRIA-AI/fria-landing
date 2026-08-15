# FRIA — Landing page

Sitio público de marketing de FRIA. React + Vite, 6 rutas reales via React Router, bilingüe (ES/EN) y con dos temas (claro/oscuro, claro por default).

Reconstruido a partir del handoff de diseño en Claude Design — colores, tipografía y copy son fieles al archivo original (`FRIA-Landing_dc.html` + `README.md` del handoff).

## Correr en local

```bash
npm install
npm run dev
```

## Variables de entorno

Copia `.env.example` a `.env` y llena:

- `VITE_APP_URL` — URL real de la app de FRIA (botón "Entrar a FRIA" en todo el sitio).
- `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` — credenciales para que el formulario de Demo mande el correo real (puedes reutilizar el mismo Gmail App Password que ya usa fria-dashboard).

## Deploy

Proyecto de Vercel independiente del dashboard (`fria-dashboard`). Para conectar el dominio `friaai.com`:

1. Importa este repo como un proyecto nuevo en Vercel.
2. Agrega las variables de entorno de arriba en Settings → Environment Variables.
3. En Settings → Domains, agrega `friaai.com` y sigue las instrucciones de DNS que te dé Vercel.

## Estructura

- `src/pages/` — las 6 páginas (Home, QueEs, ComoFunciona, Metricas, InteligenciaDeMercado, Demo).
- `src/components/Layout.jsx` — nav, banda de cierre CTA y footer, compartidos por todas las páginas.
- `src/i18n.js` — todo el copy en español e inglés.
- `src/theme.js` — los tokens de color de ambos temas.
- `src/responsive.css` — variables responsivas (breakpoints en 900px y 560px).
- `api/demo-request.js` — endpoint de Vercel que manda el correo real del formulario de Demo.
