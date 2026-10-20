# Veytrix — AI Automation Studio

A responsive single-page React + Vite + Tailwind CSS website. No backend, database, or API keys.

## Requirements
Node.js 20.19+ or 22.12+ recommended for Vite 7.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. In Vercel, choose Add New > Project, import the repository.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy, then go to Project > Settings > Domains and add `veytrix.shop` and optionally `www.veytrix.shop`.
5. Follow the **exact** DNS records Vercel displays. In Spaceship Advanced DNS, change only web-related A/CNAME records as needed. Preserve Spacemail MX, SPF, DKIM and SRV records. Do not change nameservers unless deliberately moving DNS management.
6. Wait for DNS propagation and HTTPS certificate issuance, then verify website and email both work.

## Edit
- Main text, sections and links: `src/App.jsx`
- Styles and responsive layout: `src/index.css`
- Page title, SEO and favicon: `index.html`
- Avatar artwork: `public/logo.png`

Contact buttons use `mailto:` and require an installed/configured mail client. The workflow graphic is illustrative, not a functioning AI backend.

Avoid adding fabricated customer testimonials, employee counts, claims of production deployments, or unverifiable metrics.
