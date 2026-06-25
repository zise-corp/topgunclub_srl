# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js, port 3000)
npm run build    # Production build
npm run lint     # ESLint via next lint
```

No test suite is configured.

## Architecture

Next.js 15 (App Router) site for **Top Gun Club SRL** — an indoor shooting range in Cochabamba, Bolivia. React 19, TypeScript, no CSS framework (plain CSS via `globals.css`).

### Key directories

- `app/` — pages using App Router. Each route has its own `page.tsx` with `export const metadata` for SEO. Routes: `/`, `/cursos`, `/eventos`, `/catalogo`, `/galeria`, `/contacto`.
- `components/` — all UI components. No subdirectory structure.
- `hooks/` — `useReveal.ts` drives the scroll-reveal animation system.
- `lib/site.ts` — single source of truth for contact info (`WA_PHONE`, `PHONE_DISPLAY`), social links (`SOCIALS`), `waLink()` helper, and `NAV_ITEMS` nav config.
- `lib/cloudinary.ts` — Cloudinary config and `getCloudinaryImage()` helper. Cloud name comes from `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`.

### Scroll-reveal pattern

Elements get the CSS class `reveal` to animate in on scroll. `RevealObserver` (a client component that renders null) is placed at the top of each page to activate the `useReveal` hook, which sets up the IntersectionObserver. This pattern is used on every page.

### Styling

Pure CSS in `globals.css` using CSS custom properties. Design tokens are defined in `:root`: colors (`--green`, `--bg`, `--surface`, etc.), typography (`--ff-display` = Barlow Condensed, `--ff-body` = Barlow), and layout (`--maxw: 1240px`, `--nav-h: 76px`). No Tailwind, no CSS modules — styles are colocated in `globals.css`.

### Images

All images are hosted on Cloudinary (`res.cloudinary.com/dj5yikcc4`). `next.config.ts` allowlists this hostname for `next/image`. The `next-cloudinary` package is also available for advanced transforms.

### Environment variables

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Create `.env.local` with these values for local development.
