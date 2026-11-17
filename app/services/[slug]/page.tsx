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
  const serviceFaqs = [
    { question: `What does ${service.short.toLowerCase()} include?`, answer: `You can enquire about ${service.details.join(", ").toLowerCase()}. The suitable work is confirmed after Miwah assesses your wig and the finish you want.` },
    { question: `Can you work on my particular wig?`, answer: "That depends on the wig's fibre, construction and current condition. Send clear photos on WhatsApp so Miwah can assess it before confirming what is suitable." },
    { question: `How much does this service cost?`, answer: "Pricing depends on the wig, its condition and the work requested. Miwah Styles provides a personalised quotation after reviewing the details; no unconfirmed fixed price is advertised." },
    { question: `How do I book ${service.short.toLowerCase()}?`, answer: "Use the WhatsApp enquiry link on this page. Include clear photos of your wig, describe the result you want and ask for an assessment, quotation and expected turnaround before confirming." }
  ];
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/#services") },
      { "@type": "ListItem", position: 3, name: service.short, ...(canonical ? { item: canonical } : {}) }
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: serviceFaqs.map((faq) => ({
      "@type": "Question", name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };
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
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
    <section className="service-faqs section-shell">
      <p className="eyebrow pink-eyebrow">GOOD TO KNOW</p>
      <h2>Questions about {service.short.toLowerCase()}?</h2>
      <div className="service-faq-list">{serviceFaqs.map((faq) => <details className="faq-item" key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
      <a className="text-link" href={bookingUrl} target="_blank" rel="noreferrer">Still have a question? Message Miwah Styles ↗</a>
    </section>
    <section className="related-services section-shell"><p className="eyebrow pink-eyebrow">EXPLORE MORE</p><h2>Other ways we can help</h2><div className="related-service-links">{related.map((item) => <a href={`/services/${item.slug}`} key={item.slug}><span>{item.short}</span><span aria-hidden="true">↗</span></a>)}</div></section>
    <footer className="site-footer"><a href="/">Miwah Styles</a><span>Revived · Refined · Remarkable</span><a href="/#booking">Contact & booking ↗</a></footer>
  </main>;
}
