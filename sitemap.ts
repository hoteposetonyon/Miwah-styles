import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

// NEXT_PUBLIC_SITE_URL should be set to the canonical production origin.
// Vercel production URL environment variables are used when available.
export default function sitemap(): MetadataRoute.Sitemap {
  const home = absoluteUrl("/");
  if (!home) return [];

  const updated = new Date();
  return [
    { url: home, lastModified: updated, changeFrequency: "monthly", priority: 1 },
    ...services.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`)!,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
