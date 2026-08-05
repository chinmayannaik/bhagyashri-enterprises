# Bhagyashri Crane Service - Website

Production-ready, mobile-first, SEO-optimized marketing site for **Bhagyashri Crane Service**, Bhatkal, Karnataka. Built to generate phone calls.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (subtle animations)

## Features

- 8 pages: Home, About, Crane Services, Vehicle Towing, Gallery, Areas We Serve, Contact, Privacy Policy
- Floating **Call / WhatsApp / Directions** buttons + sticky mobile call bar
- Click-to-call, click-to-WhatsApp, copy phone number, image lightbox gallery, FAQ accordion, quote form (opens WhatsApp), loading skeletons
- Full SEO: per-page metadata, OpenGraph + Twitter, JSON-LD (LocalBusiness / Organization / Breadcrumb / Service / FAQ), `sitemap.xml`, `robots.txt`, canonical URLs, PWA manifest
- Optimized real business images via `next/image` (AVIF/WebP, lazy loading)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## Configuration

All business details (name, phones, email, WhatsApp, address, service areas) live in **`src/lib/site.ts`**.
Before going live, set the real domain in `SITE_URL` (same file) so canonical URLs, sitemap and structured data point to the correct address.

Marketing copy, service lists and FAQs live in **`src/data/content.ts`**.

## Images

Real business photos are in `public/images/`. Swap them there (keep the same filenames) to update the site.

## Deployment

Deploy to **Vercel** (recommended) or any Node host. On Vercel: import the repo, no config needed. Add your custom domain and update `SITE_URL`.
