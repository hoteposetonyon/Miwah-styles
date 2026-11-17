import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import { absoluteUrl, whatsappUrl } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };
function getService(slug: string) { return services.find((service) => service.slug === slug); }
export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  const canonical = absoluteUrl(`/services/${service.slug}`);
  return {
    title: service.title, description: service.description,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: { type: "website", locale: "en_NG", title: `${service.title} | Miwah Styles`, description: service.description, images: [{ url: service.image, alt: service.alt }] }
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const message = encodeURIComponent(`Hello Miwah Styles, I'd like to enquire about ${service.short.toLowerCase()}. Please let me know what you need to assess my wig and provide a quotation.`);
  const bookingUrl = `${whatsappUrl.split("?")[0]}?text=${message}`;
  const canonical = absoluteUrl(`/services/${service.slug}`);
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service", name: service.title,
    serviceType: service.short, description: service.description,
    provider: { "@type": "HairSalon", name: "Miwah Styles", telephone: "+2349137253481",
      areaServed: { "@type": "City", name: "Lagos" }, ...(absoluteUrl("/") ? { url: absoluteUrl("/") } : {}) },
    areaServed: { "@type": "City", name: "Lagos", containedInPlace: { "@type": "Country", name: "Nigeria" } },
    ...(canonical ? { url: canonical } : {})
  };
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <header className="site-header">
      <a className="brand" href="/" aria-label="Miwah Styles home"><Image src="/images/miwah-styles-logo.webp" alt="Miwah Styles" width={120} height={120} priority /></a>
      <nav aria-label="Main navigation"><a href="/#about">About</a><a href="/#services">Services</a><a href="/#gallery">Gallery</a><a href="/#faq">FAQs</a></nav>
      <a className="button button-small" href={bookingUrl} target="_blank" rel="noreferrer">Enquire on WhatsApp <span>↗</span></a>
    </header>
    <section className="service-landing-hero dark-section">
      <div className="service-landing-copy">
        <p className="eyebrow">MIWAH STYLES · LAGOS, NIGERIA</p>
        <p className="service-breadcrumb"><a href="/">Home</a> / <a href="/#services">Services</a> / {service.short}</p>
        <h1>{service.title.replace(" in Lagos", "")} <em>in Lagos.</em></h1>
        <p className="hero-description">{service.intro}</p>
        <div className="hero-actions"><a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Enquire about this service <span>↗</span></a><a className="text-link light-link" href="/#services">Explore all services <span>↓</span></a></div>
      </div>
      <div className="service-landing-image"><Image src={service.image} alt={service.alt} fill priority sizes="(max-width: 800px) 90vw, 42vw" /></div>
    </section>
    <section className="service-detail section-shell">
      <div><p className="eyebrow pink-eyebrow">A PERSONAL APPROACH</p><h2>Thoughtful work.<br /><em>A finish that feels like you.</em></h2><p>{service.description}</p><p>Every wig is different. The right approach depends on its fibre, condition, length, density and the finish you have in mind. Share clear photos when you enquire so Miwah can assess the work and advise on the next step.</p></div>
      <div className="service-detail-list"><h3>What you can enquire about</h3><ul>{service.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><a className="text-link" href={bookingUrl} target="_blank" rel="noreferrer">{service.cta} ↗</a></div>
    </section>
    <section className="service-cta dark-section"><p className="eyebrow">LET'S TALK ABOUT YOUR WIG</p><h2>Ready for a <em>refresh?</em></h2><p>Send Miwah Styles a message and a clear photo of your wig. You’ll receive guidance on the suitable service, quotation and expected turnaround before confirming.</p><a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Start your enquiry <span>↗</span></a></section>
    <section className="related-services section-shell"><p className="eyebrow pink-eyebrow">EXPLORE MORE</p><h2>Other ways we can help</h2><div className="related-service-links">{related.map((item) => <a href={`/services/${item.slug}`} key={item.slug}><span>{item.short}</span><span aria-hidden="true">↗</span></a>)}</div></section>
    <footer className="site-footer"><a href="/">Miwah Styles</a><span>Revived · Refined · Remarkable</span><a href="/#booking">Contact & booking ↗</a></footer>
  </main>;
}
