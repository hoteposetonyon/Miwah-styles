import Image 

    <section className="why section-shell" id="why-us"><Reveal><p className="eyebrow pink-eyebrow">WHY CLIENTS CHOOSE MIWAH</p><div className="why-grid"><h2>More than a style.<br/><em>It’s how you show up.</em></h2><StaggerGroup className="reason-list" delay={0.1}>{reasons.map((reason, i) => <StaggerItem className="reason-motion" key={reason}><div className="reason"><span>0{i + 1}</span><p>{reason}</p></div></StaggerItem>)}</StaggerGroup></div></Reveal></section>

    <section className="faq section-shell soft-section" id="faq"><Reveal><p className="eyebrow pink-eyebrow">GOOD TO KNOW</p><div className="section-heading"><h2>Your questions,<br/><em>answered.</em></h2><p>Helpful information about services, quotations and booking with Miwah Styles.</p></div><StaggerGroup className="faq-list" delay={0.07}>{faqs.map((faq) => <StaggerItem key={faq.q}><details className="faq-item"><summary>{faq.q}<span>+</span></summary><p>{faq.a}</p></details></StaggerItem>)}</StaggerGroup></Reveal></section>

    <section className="booking dark-section" id="booking"><Reveal><p className="eyebrow">YOUR NEXT LOOK STARTS HERE</p><h2>Ready to feel<br/><em>remarkable?</em></h2><p>Send a photo of your wig and tell us the look you have in mind. Miwah Styles will help you with the next steps and a personalised quotation.</p><a className="button" href="https://wa.me/2349137253481?text=Hello%20Miwah%20Styles%2C%20I%27d%20like%20to%20make%20an%20enquiry." target="_blank" rel="noreferrer">Chat on WhatsApp <span>↗</span></a><small>WhatsApp · 0913 725 3481</small></Reveal></section>

    <footer className="footer"><Image src="/images/miwah-styles-logo.webp" alt="Miwah Styles official logo" width={104} height={104}/><p>Revived, Refined & Remarkable.</p><div><a href="https://www.tiktok.com/@miwah_styles" target="_blank" rel="noreferrer">TikTok @miwah_styles ↗</a><a href="#home">Back to top ↑</a></div><small>© {new Date().getFullYear()} Miwah Styles. All rights reserved.</small></footer>
  </main>;
}
