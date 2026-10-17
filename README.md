# Dr Azren — Laman Web Rasmi

Laman web peribadi & portfolio profesional **Dr Fakrul Azren (Dr Azren)** — doktor, penceramah, penulis dan advokasi kesihatan mental.

> **Bicara Jiwa. Sebarkan Ilmu. Bina Harapan.**

Satu halaman sinematik (Bahasa Melayu) yang merangkumi: hero interaktif, Kenali Saya, Pencapaian (Forum Intelektual Diraja UTM 2026, No. 1 Top Bestseller PBAKL 2026, dinding media TV/radio/podcast, institusi ceramah), garis masa perjalanan, galeri program, pameran buku 3D, jemputan ceramah, booth saringan, konsultasi, latihan pernafasan, kolaborasi dan hab media sosial.

---

## Tech stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) + React 19 + TypeScript |
| Styling | Tailwind CSS 3 (brand tokens in `tailwind.config.ts`) |
| Motion | Framer Motion (scroll-driven reveals, parallax, 3D tilt, lightbox swipe) + Lenis smooth scroll |
| 3D | Pure CSS 3D (book, cards) — no WebGL, so it stays light on mobile |
| Output | **Static export** → `out/` (host anywhere, no server needed) |

First-load JS ≈ 194 kB. Images are pre-optimised to responsive WebP (480/960/1600) and lazy-loaded.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build

```bash
npm run build        # static site in ./out
npm start            # preview ./out on http://localhost:3000
npm run typecheck
```

## Deploy

The site is a static folder (`out/`), so any static host works.

**Vercel (recommended, zero config)**
1. Import the GitHub repo at vercel.com → *Add New Project*.
2. Framework preset: Next.js. Build command `npm run build`, output is detected automatically.
3. Add your custom domain. The production URL used in SEO/sitemap is detected automatically; to force one, set `NEXT_PUBLIC_SITE_URL=https://www.your-domain.com`.

**Netlify / Cloudflare Pages**
- Build command: `npm run build` · Publish directory: `out`
- Environment variable: `NEXT_PUBLIC_SITE_URL=https://www.your-domain.com`

**cPanel / any web hosting**
- Run `NEXT_PUBLIC_SITE_URL=https://www.your-domain.com npm run build` and upload the *contents* of `out/` to `public_html`.

**GitHub Pages (project page at `/<repo>`)**
- Build with `NEXT_PUBLIC_BASE_PATH=/website NEXT_PUBLIC_SITE_URL=https://<user>.github.io/website npm run build` and publish `out/`.

> ⚠️ Always set `NEXT_PUBLIC_SITE_URL` to the real domain for production builds outside Vercel — it is used for the canonical URL, Open Graph image, structured data and `sitemap.xml`.

## Editing content

**Almost everything lives in one file: [`src/content/site.ts`](src/content/site.ts).**
See **[CONTENT-GUIDE.md](CONTENT-GUIDE.md)** (Bahasa Melayu) for step-by-step instructions on adding events, photos, media appearances, achievements and links. Photos still needed are listed in **[PHOTO-UPLOADS.md](PHOTO-UPLOADS.md)**.

## Project structure

```
src/
  app/                 layout (SEO metadata, JSON-LD), page, sitemap, robots, favicon
  content/site.ts      ← ALL editable content & links
  components/
    sections/          Hero, About, Achievements (UTM forum, bestseller, media wall, speaking wall),
                       Journey, Gallery (+ lightbox), BookShowcase, Speaking, Booth,
                       Consultation, Breathe, Collaboration, Social
    ui/                Picture, Reveal, SplitWords, Magnetic, CtaButton, Marquee, Stickers, Icons
    Nav, QuickDock, Intro, Footer, providers/MotionPrefs
  lib/                 asset paths, hooks (pointer parallax, intro timing)
assets/originals/      original photos (source for the optimiser)
scripts/optimize_images.py   → public/images/*.webp + og-image.jpg
```

## Accessibility & motion

- Respects the OS **prefers-reduced-motion** setting; visitors can also switch on **“Kurangkan animasi”** in the menu (remembered per browser). Heavy motion, smooth scrolling, marquees and the intro are disabled in that mode.
- The intro is short (~2.5 s), skippable (“Langkau”), shown once per session, and is CSS-driven so it can never block the page.
- Skip-link, semantic landmarks/headings, keyboard-navigable menu and lightbox (Esc / ← →), visible focus rings, `aria-pressed` filters, `aria-live` breathing guide.
- All booking/purchase CTAs open the official external systems in a new tab — no health data is collected on this site.

## Content integrity rules

- Source of truth: *CV Dr Azren, October 2026*. No invented awards, testimonials, ratings, attendance figures or follower counts.
- Dr Azren is described as **Doktor Perubatan (Amalan Am, Psikiatri & Kesihatan Mental)** — not “Pakar/Consultant Psychiatrist”.
- The UTM Royal Intellectual Forum is presented as a panel invitation only — not a royal award or endorsement.
- “No. 1 Top Bestseller” is always qualified with **PBAKL 2026**.
- Gallery tiles without a genuine photo show a styled poster labelled “Foto akan dikemas kini” — never an AI-generated or stock substitute.
