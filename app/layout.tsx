import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/site";

const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  alternates: { canonical: "/" },
  title: { default: "Miwah Styles | Wig Styling & Revamping in Lagos", template: "%s | Miwah Styles" },
  description: "Miwah Styles is a Lagos-based wig styling and revamping brand. Explore wig styling, restoration, lace customization, colour transformations, installation and care. Request a personalised WhatsApp quote.",
  keywords: ["Miwah Styles", "wig styling Lagos", "wig revamping Lagos", "wig restoration Nigeria", "lace customization Lagos", "wig installation Lagos", "wig care Nigeria"],
  applicationName: "Miwah Styles",
  category: "beauty and personal care",
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Miwah Styles",
    title: "Miwah Styles | Revived, Refined & Remarkable",
    description: "Wig styling, revamping and transformations in Lagos, Nigeria. Find your signature look with Miwah Styles.",
    images: [{ url: "/images/miwah-founder.jpg", width: 1152, height: 1536, alt: "Miwah, founder of Miwah Styles" }]
  },
  twitter: { card: "summary_large_image", title: "Miwah Styles | Wig Styling & Revamping", description: "Wig styling and transformations in Lagos, Nigeria.", images: ["/images/miwah-founder.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en-NG"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
