export const siteName = "Miwah Styles";

function normaliseUrl(value?: string) {
  if (!value) return undefined;
  const trimmed = value.trim().replace(/\/+$/, "");
  if (!trimmed) return undefined;
  return trimmed.startsWith("http://") || trimmed.startsWith("https://")
    ? trimmed
    : `https://${trimmed}`;
}

// Set NEXT_PUBLIC_SITE_URL to the production origin, e.g. https://your-domain.com.
// Vercel's production URL is used as a fallback when available.
export const siteUrl =
  normaliseUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
  normaliseUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  normaliseUrl(process.env.VERCEL_URL);

export function absoluteUrl(path = "/") {
  if (!siteUrl) return undefined;
  return new URL(path, `${siteUrl}/`).toString();
}

export const whatsappUrl =
  "https://wa.me/2349137253481?text=" +
  encodeURIComponent("Hello Miwah Styles, I'd like to enquire about your wig services.");
