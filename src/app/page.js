import Link from "next/link";
import { contactEmail, siteUrl } from "@/lib/site";

const pillars = [
  { number: "01", title: "Find the right people", text: "Focused search for leaders and specialists who can make a meaningful difference.", href: "/services/talent-acquisition", link: "Explore talent acquisition" },
  { number: "02", title: "See the talent landscape", text: "Market insight that helps your team make confident, well-timed people decisions.", href: "/services/talent-intelligence", link: "Explore talent intelligence" },
  { number: "03", title: "Make work flow better", text: "Practical HR automation that gives people more room for work that needs a human touch.", href: "/services/hr-ai-automation", link: "Explore HR AI automation" },
];

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Deyukti Labs",
    url: siteUrl,
    description: "Talent acquisition, talent intelligence, and responsible HR AI automation.",
    email: contactEmail,
  };

  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> TALENT, MADE THOUGHTFUL</span>
          <h1>Build the team<br />your next chapter <em>needs.</em></h1>
          <p>Deyukti Labs helps ambitious organizations find exceptional people, understand the talent market, and make people operations work better.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">Talk to our team <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/services">Explore our services <span aria-hidden="true">→</span></Link>
          </div>
          <div className="hero-note"><span className="note-line" />People first. Evidence led. Built for what&apos;s next.</div>
        </div>
        <div className="hero-visual">
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1500&q=85" alt="Colleagues sharing ideas around a table" />
          <div className="visual-caption"><span>THE RIGHT PEOPLE</span><span>CHANGE THE PICTURE <b>↗</b></span></div>
          <div className="visual-stamp" aria-hidden="true"><span>PEOPLE</span><strong>+</strong><span>POSSIBILITY</span></div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </section>

      <section className="intro-band">
        <span className="eyebrow">A PEOPLE PARTNER FOR THE PACE OF CHANGE</span>
        <p>Great work happens when <strong>human insight</strong> meets <strong>clear intent.</strong> We bring both to the moments that shape your team.</p>
      </section>

      <section className="services-section section-shell">
        <div className="section-heading">
          <div><span className="eyebrow">WHAT WE DO</span><h2>Three ways to move<br />your people agenda forward.</h2></div>
          <Link className="text-link" href="/services">See all services <span aria-hidden="true">→</span></Link>
        </div>
        <div className="pillar-list">
          {pillars.map((pillar) => (
            <article className="pillar" key={pillar.number}>
              <span className="pillar-number">{pillar.number}</span>
              <div><h3>{pillar.title}</h3><p>{pillar.text}</p><Link className="text-link" href={pillar.href}>{pillar.link} <span aria-hidden="true">↗</span></Link></div>
              <span className="pillar-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="framework-band">
        <div className="framework-mark" aria-hidden="true">P<span>.</span></div>
        <div><span className="eyebrow">HOW WE WORK</span><h2>Good outcomes are built together.</h2><p>Our PARTNER Framework™ keeps every engagement grounded in clarity, shared ownership, and progress you can see.</p></div>
        <Link className="button button-light" href="/how-we-work/partner-framework">Meet the framework <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="home-bottom section-shell">
        <div><span className="eyebrow">LET&apos;S BEGIN WITH A CONVERSATION</span><h2>Make your next people decision a considered one.</h2></div>
        <Link className="button button-primary" href="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}