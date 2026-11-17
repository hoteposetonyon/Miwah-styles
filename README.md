# Miwah Styles — Next.js website

Responsive Next.js + React + TypeScript website for Miwah Styles.

## Stack
- Next.js 15 / React 19 / TypeScript
- Motion for React (`motion/react`) reveal component
- CSS design tokens and responsive layouts
- Playfair Display + DM Sans

## Project structure
- `app/layout.tsx`, `app/page.tsx`, `app/globals.css` — root layout, homepage and global styles.
- `app/robots.ts`, `app/sitemap.ts` — crawler rules and XML sitemap.
- `app/services/[slug]/page.tsx` — five statically generated, SEO-ready service landing pages.
- `components/reveal.tsx` — reusable Motion reveal and stagger components.
- `lib/services.ts`, `lib/site.ts` — service catalogue and canonical/WhatsApp helpers.
- `public/images/` — supplied logo, founder photo and service illustrations.
- `public/videos/miwah-portfolio.mp4` — supplied portfolio video.
- `public/llms.txt` — concise factual business and service summary for AI systems that choose to consume it.

## Run locally
1. Install Node.js 20.9+.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:3000.

## SEO, AEO and GEO
- Nigerian English locale (`en-NG`), descriptive page title and meta description.
- Open Graph and large-image social metadata.
- Semantic headings, descriptive image alt text, crawlable navigation and FAQ content.
- `HairSalon`, `WebSite`, `FAQPage` and individual `Service` JSON-LD structured data.
- Five crawlable, internally linked service landing pages with unique titles, descriptions, canonical paths and service-specific content.
- Dynamic sitemap and robots routes, including explicit access for major AI/search crawlers.
- Canonical URLs and sitemap host use `NEXT_PUBLIC_SITE_URL`, with Vercel production/deployment URL fallbacks. Set `NEXT_PUBLIC_SITE_URL` to the final production origin in Vercel before launch.
- Lagos service area and WhatsApp contact details are explicit; no street address or map pin is fabricated.

## Content integrity
- Service catalogue and founder bio are based on the supplied project brief.
- WhatsApp number and TikTok handle are from the brief.
- Prices remain quote-based because no confirmed rates were supplied.
- No testimonials have been invented. Add only customer-approved, genuine feedback before publishing.
- Turnaround is confirmed per booking because the brief did not provide a fixed range.
- Service-category images are illustrative and are not represented as actual customer results.

## Before production
- Confirm prices, turnaround policy, booking arrangements and final service list with Miwah.
- Obtain customer-approved testimonials and permissions for client images/videos.
- Confirm whether illustrative service images are acceptable for the brand.
- Set `NEXT_PUBLIC_SITE_URL` in Vercel to the exact production origin.
- Run `npm install`, `npm run lint` and `npm run build` with package registry access; test mobile (390px), tablet (768px) and desktop (1440px).

## Animation system
Motion for React (`motion`) is used through `components/reveal.tsx`. Hero content enters on load; sections and card groups reveal on scroll; cards use restrained hover effects; reduced-motion preferences are respected. No Framer project or account is required.
