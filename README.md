# Miwah Styles — Next.js website

Responsive Next.js + React + TypeScript website for Miwah Styles.

## Stack
- Next.js 15 / React 19 / TypeScript
- Motion for React (`motion/react`) reveal component
- CSS design tokens and responsive layouts
- Playfair Display + DM Sans

## Run locally
1. Install Node.js 20.9+.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:3000.

## Included assets
- `public/images/miwah-styles-logo.webp` — supplied logo artwork.
- `public/images/miwah-founder.jpg` — supplied founder photograph.
- `public/videos/miwah-portfolio.mp4` — supplied portfolio video.
- `public/images/service-*.webp` — AI-generated illustrative service category images, not client results.

## SEO, AEO and GEO
- Nigerian English locale (`en-NG`), descriptive page title and meta description.
- Open Graph and large-image social metadata.
- Semantic headings, descriptive image alt text, crawlable navigation and FAQ content.
- `HairSalon`, `WebSite`, `FAQPage` and individual `Service` JSON-LD structured data.
- Five crawlable, internally linked service landing pages with unique titles, descriptions, canonical paths and service-specific content.
- Dynamic `app/sitemap.ts` and `app/robots.ts` routes, including explicit access for major AI/search crawlers.
- `public/llms.txt` provides a concise, factual business and service summary for AI systems that choose to consume it; it is supplemental and does not guarantee AI citations.
- Canonical URLs and sitemap host use `NEXT_PUBLIC_SITE_URL`, with Vercel production/deployment URL fallbacks. Set `NEXT_PUBLIC_SITE_URL` to the final production origin in Vercel before launch.
- Lagos service area and WhatsApp contact details are explicit; no street address or map pin is fabricated.

## Content integrity
- The service catalogue and founder bio are based on the supplied project brief.
- WhatsApp number and TikTok handle are from the brief.
- Prices remain quote-based because no confirmed rates were supplied.
- No testimonials have been invented. Add only customer-approved, genuine feedback before publishing a testimonial section.
- Turnaround is described as confirmed per booking because the brief did not provide a fixed range.
- Hobbies are omitted pending Miwah's details.

## Before production
- Confirm prices, turnaround policy, booking arrangements and final service list with Miwah.
- Obtain customer-approved testimonials and permissions for any client images/videos.
- Confirm whether the generated service illustrations are acceptable for the brand.
- Set `NEXT_PUBLIC_SITE_URL` in Vercel to the exact production origin (including https://) so canonical URLs and sitemap point to the production domain rather than a preview deployment.
- Run `npm install`, `npm run lint` and `npm run build` in an environment with package registry access.

## Animation system

The site uses Motion for React (`motion`) through `components/reveal.tsx`:
- Hero copy and founder portrait enter on initial load.
- Content sections reveal as they enter the viewport.
- Service, audience, pricing, reasons and FAQ items use staggered reveals.
- Service and audience cards have restrained hover lift and image zoom effects.
- The hero pink orbit has a slow breathing animation.
- `useReducedMotion` and the CSS `prefers-reduced-motion` media query reduce or disable movement for visitors who request less motion.

Animations are intentionally subtle and do not require a Framer project or Framer account. They are part of the Next.js source and travel with this ZIP.


## Build and device-test status (17 November 2026)

- ZIP archive integrity: verified.
- Source and static responsive CSS: reviewed. Breakpoints are defined for desktop/tablet (900px) and mobile (650px).
- Production build: not completed in this environment because npm could not resolve `registry.npmjs.org` (`EAI_AGAIN`), so project dependencies could not be installed.
- Live mobile/desktop browser testing: pending a successful dependency install and running deployment. No screenshot or visual pass is claimed.

To complete verification in an environment with npm registry access, run `npm install`, `npm run build`, then `npm run start` and test at mobile (390px), tablet (768px), and desktop (1440px) widths.
