import Image from "next/image";
import { HeroEntrance, MotionImageFrame, Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { absoluteUrl } from "@/lib/site";

const services = [
  { title: "Styling & finishing", slug: "wig-styling-lagos", text: "Curl setting, silky pressing, body waves, bob shaping, layering, blowouts and polished finishing.", image: "/images/service-styling.webp", alt: "Glossy black wavy wig styled into voluminous curls" },
  { title: "Revamping & restoration", slug: "wig-revamping-restoration-lagos", text: "Deep washing, conditioning, detangling, reshaping and bringing tired or matted wigs back to life.", image: "/images/service-care.webp", alt: "Hands carefully washing and conditioning a curly wig" },
  { title: "Lace & construction", slug: "lace-customization-lagos", text: "Lace bleaching, plucking, tinting, replacement, repair, customization and cap adjustments.", image: "/images/service-lace.webp", alt: "Close-up lace frontal customization and hairline detailing" },
  { title: "Colour transformations", slug: "wig-colouring-lagos", text: "Custom colour, ombré, highlights, blonde and burgundy tones, toning and colour correction.", image: "/images/service-colour.webp", alt: "Burgundy and black wavy wig colour transformation" },
  { title: "Installation & care", slug: "wig-installation-care-lagos", text: "Glueless or glued installation, edge styling, baby hairs and wig maintenance sessions.", image: "/images/service-care.webp", alt: "Professional wig washing and care" }
];

const audiences = [
  { title: "The Student", text: "Affordable, low-maintenance looks that keep up with lectures, exams and weekends." },
  { title: "The Professional", text: "Polished, camera-ready styles for the boardroom, newsroom or studio." },
  { title: "The Homemaker", text: "Effortless looks that help you feel like yourself, whatever your day holds." }
];

const reasons = ["Fast delivery, with timing confirmed before you commit.", "Individual attention and careful handling for every wig.", "Trend-aware styling, from bouncy curls to sleek bobs.", "Packages designed around different lifestyles and budgets.", "A tailored finish shaped around your style and occasion."];

const faqs = [
  { q: "What is Miwah Styles?", a: "Miwah Styles is a Lagos-based wig styling and revamping brand led by Miwah. Services include wig styling, restoration, lace customization, colour work, installation and maintenance." },
  { q: "What wig services can I book?", a: "You can enquire about curl setting, pressing, bob cuts, layering, washing and conditioning, detangling, lace work, wig construction, custom colouring, installation and wig care." },
  { q: "How much does wig styling or revamping cost?", a: "Pricing depends on the wig's condition, length, density, requested service and desired finish. Send a clear photo of your wig on WhatsApp to request a personalised quotation. No unconfirmed price list is published here." },
  { q: "How long does a wig service take?", a: "Turnaround depends on the wig and the work required. Miwah Styles confirms the expected collection or delivery time before you commit to the booking." },
  { q: "How do I book an appointment?", a: "Message Miwah Styles on WhatsApp at 0913 725 3481, describe the service you need and send a photo of your wig. Your date, quotation and delivery details can then be confirmed." },
  { q: "Where is Miwah Styles based?", a: "Miwah Styles is based in Lagos, Nigeria. Contact the business directly on WhatsApp to confirm service and collection arrangements." }
];

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Miwah Styles",
  description: "Lagos-based wig styling, revamping, restoration, lace customization, colour transformation, installation and wig care.",
  slogan: "Revived, Refined & Remarkable",
  telephone: "+2349137253481",
  image: [absoluteUrl("/images/miwah-styles-logo.webp") ?? "/images/miwah-styles-logo.webp", absoluteUrl("/images/miwah-founder.jpg") ?? "/images/miwah-founder.jpg"],
  ...(absoluteUrl("/") ? { url: absoluteUrl("/"), "@id": `${absoluteUrl("/")}#business` } : {}),
  areaServed: { "@type": "City", name: "Lagos", containedInPlace: { "@type": "Country", name: "Nigeria" } },
  sameAs: ["https://www.tiktok.com/@miwah_styles"],
  priceRange: "Quote-based",
  knowsAbout: ["Wig styling", "Wig revamping", "Wig restoration", "Lace customization", "Wig colouring", "Wig installation", "Wig maintenance"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wig styling and care services",
    itemListElement: services.map((service) => ({
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: [{
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service.title, description: service.text }
      }]
    }))
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Miwah Styles",
  description: "Wig styling, revamping and transformations in Lagos, Nigeria.",
  inLanguage: "en-NG",
  ...(absoluteUrl("/") ? { url: absoluteUrl("/") } : {})
};

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function Home() {
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <header className="site-header"><a className="brand" href="#home" aria-label="Miwah Styles home"><Image src="/images/miwah-styles-logo.webp" alt="Miwah Styles — Revived, Refined & Remarkable" width={120} height={120} priority /></a><nav aria-label="Main navigation"><a href="#about">About</a><a href="#services">Services</a><a href="#gallery">Gallery</a><a href="#pricing">Pricing</a><a href="#faq">FAQs</a></nav><details className="mobile-menu"><summary aria-label="Open navigation menu">☰</summary><div className="mobile-menu-panel"><a href="#about">About</a><a href="#services">Services</a><a href="#gallery">Gallery</a><a href="#pricing">Pricing</a><a href="#faq">FAQs</a><a href="#booking">Contact & booking</a></div></details><a className="button button-small" href="#booking">Book a session <span>↗</span></a></header>

    <section className="hero dark-section" id="home"><HeroEntrance className="hero-copy"><p className="eyebrow">LAGOS WIG STYLING & TRANSFORMATIONS</p><h1>Your hair.<br/><em>Your confidence.</em><br/>Your signature.</h1><p className="hero-description">Wig styling, revamping and transformations tailored to you. Every wig deserves care. Every client deserves to feel remarkable.</p><div className="hero-actions"><a className="button" href="#booking">Book your session <span>↗</span></a><a className="text-link light-link" href="#gallery">Explore transformations <span>↓</span></a></div><div className="hero-stats"><div><strong>2+</strong><span>Years of experience</span></div><div><strong>100+</strong><span>Clients served</span></div></div></HeroEntrance><MotionImageFrame className="hero-image-wrap"><Image src="/images/miwah-founder.jpg" alt="Miwah, founder and lead stylist of Miwah Styles" fill priority sizes="(max-width: 800px) 90vw, 48vw" className="hero-image"/><div className="image-note">FOUNDER & LEAD STYLIST</div><div className="pink-orbit"/></MotionImageFrame><div className="hero-bottomline"><span>MIWAH STYLES</span><span>REVIVED · REFINED · REMARKABLE</span></div></section>

    <section className="intro section-shell" id="about"><Reveal><p className="eyebrow pink-eyebrow">MEET THE FOUNDER</p><div className="intro-grid"><h2>Beauty is personal.<br/><em>Your style should be too.</em></h2><div><p>Hi, I’m Miwah, the founder and lead stylist behind Miwah Styles. I specialise in wig styling and revamping: I restyle, restore and transform wigs into polished, confident looks tailored to each client.</p><p>Beyond the studio, I host events and serve in student leadership. Communication, creativity and service shape how I work with every client.</p><a className="text-link" href="#booking">Let's create your look <span>↗</span></a></div></div></Reveal></section>

    <section className="services section-shell soft-section" id="services"><Reveal><div className="section-heading"><div><p className="eyebrow pink-eyebrow">WHAT WE DO</p><h2>Care in every detail.<br/><em>Style in every strand.</em></h2></div><p>From a simple refresh to a complete transformation, find the service that brings your vision to life.</p></div><StaggerGroup className="service-grid" delay={0.09}>{services.map((service, i) => <StaggerItem className="service-card-motion" key={service.title}><article className="service-card"><div className="service-image"><Image src={service.image} alt={service.alt} fill sizes="(max-width: 650px) 90vw, (max-width: 1000px) 45vw, 30vw"/></div><span className="service-number">0{i + 1}</span><h3>{service.title}</h3><p>{service.text}</p><a href={`/services/${service.slug}`} aria-label={`Learn about ${service.title}`}>Explore this service <span>↗</span></a></article></StaggerItem>)}</StaggerGroup><p className="image-disclaimer">Service visuals are illustrative brand imagery. The portfolio gallery below features Miwah Styles' supplied work.</p></Reveal></section>

    <section className="audience section-shell"><Reveal><p className="eyebrow pink-eyebrow">MADE FOR YOUR LIFE</p><h2>Whatever your day looks like,<br/><em>show up as your best self.</em></h2><StaggerGroup className="audience-grid" delay={0.12}>{audiences.map((item, i) => <StaggerItem key={item.title}><article className="audience-card"><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article></StaggerItem>)}</StaggerGroup></Reveal></section>

    <section className="gallery dark-section" id="gallery"><Reveal><div className="section-heading"><div><p className="eyebrow">THE TRANSFORMATIONS</p><h2>Real work.<br/><em>Remarkable results.</em></h2></div><p>Explore a glimpse of the care, creativity and finishing behind Miwah Styles.</p></div><div className="video-frame"><video controls playsInline preload="metadata" poster="/images/service-styling.webp"><source src="/videos/miwah-portfolio.mp4" type="video/mp4"/>Your browser does not support embedded video.</video><span className="video-caption">MIWAH STYLES · SUPPLIED PORTFOLIO VIDEO</span></div></Reveal></section>

    <section className="pricing section-shell soft-section" id="pricing"><Reveal><p className="eyebrow pink-eyebrow">A LOOK THAT FITS YOUR LIFE</p><div className="section-heading"><h2>Thoughtful care.<br/><em>Clear quotations.</em></h2><p>Every wig is different. Pricing is tailored to its condition, length, density and the finish you want.</p></div><StaggerGroup className="pricing-grid" delay={0.12}><StaggerItem><article className="price-card"><span className="price-label">01 · REFRESH</span><h3>Essential Styling</h3><p>For curl setting, pressing, shaping and a fresh finished look.</p><strong>Personalised quote</strong><a className="text-link" href="#booking">Enquire on WhatsApp ↗</a></article></StaggerItem><StaggerItem><article className="price-card featured-price"><span className="price-label">02 · RESTORE</span><h3>Revive & Restore</h3><p>For washing, conditioning, detangling, repair and restyling.</p><strong>Personalised quote</strong><a className="text-link" href="#booking">Enquire on WhatsApp ↗</a></article></StaggerItem><StaggerItem><article className="price-card"><span className="price-label">03 · TRANSFORM</span><h3>Complete Transformation</h3><p>For customization, colour work, cutting and more involved styling.</p><strong>Personalised quote</strong><a className="text-link" href="#booking">Enquire on WhatsApp ↗</a></article></StaggerItem></StaggerGroup><p className="pricing-note">No prices have been published because Miwah's confirmed rates were not included in the project brief. Send a wig photo for an individual quotation.</p></Reveal></section>

    <section className="why section-shell" id="why-us"><Reveal><p className="eyebrow pink-eyebrow">THE MIWAH STYLES DIFFERENCE</p><div className="why-grid"><h2>More than a style.<br/><em>It’s how you show up.</em></h2><StaggerGroup className="reason-list" delay={0.1}>{reasons.map((reason, i) => <StaggerItem className="reason-motion" key={reason}><div className="reason"><span>0{i + 1}</span><p>{reason}</p></div></StaggerItem>)}</StaggerGroup></div></Reveal></section>

    <section className="faq section-shell soft-section" id="faq"><Reveal><p className="eyebrow pink-eyebrow">GOOD TO KNOW</p><div className="section-heading"><h2>Your questions,<br/><em>answered.</em></h2><p>Helpful information about services, quotations and booking with Miwah Styles.</p></div><StaggerGroup className="faq-list" delay={0.07}>{faqs.map((faq) => <StaggerItem key={faq.q}><details className="faq-item"><summary>{faq.q}<span>+</span></summary><p>{faq.a}</p></details></StaggerItem>)}</StaggerGroup></Reveal></section>

    <section className="booking dark-section" id="booking"><Reveal><p className="eyebrow">YOUR NEXT LOOK STARTS HERE</p><h2>Ready to feel<br/><em>remarkable?</em></h2><p>Send a photo of your wig and tell us the look you have in mind. Miwah Styles will help you with the next steps and a personalised quotation.</p><a className="button" href="https://wa.me/2349137253481?text=Hello%20Miwah%20Styles%2C%20I%27d%20like%20to%20make%20an%20enquiry." target="_blank" rel="noreferrer">Chat on WhatsApp <span>↗</span></a><small>WhatsApp · 0913 725 3481</small></Reveal></section>

    <footer className="footer"><Image src="/images/miwah-styles-logo.webp" alt="Miwah Styles official logo" width={104} height={104}/><p>Revived, Refined & Remarkable.</p><div><a href="https://www.tiktok.com/@miwah_styles" target="_blank" rel="noreferrer">TikTok @miwah_styles ↗</a><a href="#home">Back to top ↑</a></div><small>© {new Date().getFullYear()} Miwah Styles. All rights reserved.</small></footer>
  </main>;
}
