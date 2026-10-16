import Link from "next/link";
import Image from "next/image";
import { contactEmail, siteUrl } from "@/lib/site";

export const metadata = {
  title: { absolute: "Talent Intelligence & Workforce Strategy | Deyukti Labs" },
  description: "DeyuktiLabs helps growing businesses solve hiring and workforce challenges through strategic talent acquisition, talent intelligence, and AI-enabled HR solutions.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Talent Intelligence & Workforce Strategy | Deyukti Labs",
    description: "Strategic talent acquisition, talent intelligence, and AI-enabled HR solutions for growing businesses.",
    url: "/",
    type: "website",
  },
  twitter: {
    title: "Talent Intelligence & Workforce Strategy | Deyukti Labs",
    description: "Strategic talent acquisition, talent intelligence, and AI-enabled HR solutions for growing businesses.",
  },
};

const pillars = [
  {
    key: "acquisition",
    number: "01",
    label: "TALENT ACQUISITION",
    title: "Find the people who can move the business forward.",
    services: ["Leadership Hiring", "Specialist Hiring", "Technology Hiring", "Executive Search", "Passive Talent Search", "Recruitment Delivery", "Talent Mapping"],
  },
  {
    key: "intelligence",
    number: "02",
    label: "TALENT INTELLIGENCE",
    title: "Know the talent market before you make the hiring decision.",
    callout: "DeyuktiLabs is not simply forwarding CVs.",
    services: ["JD Intelligence", "CV Screening & Scoring", "Talent Market Mapping", "Candidate Benchmarking", "Competitor Talent Mapping", "Search Strategy", "Talent Availability Intelligence"],
  },
  {
    key: "automation",
    number: "03",
    label: "HR AI AUTOMATION",
    title: "Build a hiring system that becomes faster and smarter over time.",
    services: ["Recruitment Workflow Automation", "Candidate Communication Automation", "CV Screening Automation", "Hiring Dashboards", "HR Workflow Automation", "AI-assisted Recruitment Processes"],
  },
];

const heroPathways = [
  { number: "01", title: "Hire Talent", text: "Leadership, specialist and technology hiring.", href: "/services/talent-acquisition", link: "Explore Talent Acquisition" },
  { number: "02", title: "Understand Your Talent Market", text: "Turn hiring requirements into actionable talent intelligence.", href: "/services/talent-intelligence", link: "Explore Talent Intelligence" },
  { number: "03", title: "Automate HR Workflows", text: "Build smarter, faster and more scalable recruitment workflows.", href: "/services/hr-ai-automation", link: "Explore HR AI Automation" },
];

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Deyukti Labs",
    url: siteUrl,
    description: "Recruitment consulting, talent intelligence, and responsible HR AI automation for organizations hiring in Mumbai.",
    email: contactEmail,
    areaServed: { "@type": "City", name: "Mumbai" },
    knowsAbout: ["Recruitment consulting", "Talent acquisition", "Talent intelligence", "HR automation"],
  };
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <span className="eyebrow">TALENT INTELLIGENCE <span className="hero-label-separator" aria-hidden="true">•</span> WORKFORCE STRATEGY</span>
          <h1><span>Build the Right Team.</span><span className="hero-heading-accent">Build the System Behind It.</span></h1>
          <p>DeyuktiLabs helps growing businesses solve critical hiring and workforce challenges through strategic talent acquisition, talent intelligence and AI-enabled HR solutions.</p>
        </div>
        <div className="hero-actions">
  <Link className="button button-primary" href="/contact">
    Discuss a Hiring Requirement
    <span aria-hidden="true">↗</span>
  </Link>
  <Link className="text-link" href="/services">
    Explore Our Services
    <span aria-hidden="true">→</span>
  </Link>
</div>
        <div className="hero-pathways" aria-label="Explore our core services">
          {heroPathways.map((pathway) => (
            <article className="hero-pathway" key={pathway.number}>
              <span className="hero-pathway-number">{pathway.number}</span>
              <h2>{pathway.title}</h2>
              <p>{pathway.text}</p>
              <Link className="hero-pathway-link" href={pathway.href}>{pathway.link} <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
        <div className="hero-visual">
          <Image src="/images/futuristic-recruitment.png" alt="Talent team reviewing hiring pipelines and workforce insights on a shared dashboard" fill priority sizes="(max-width: 880px) 100vw, 42vw" />
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }} />
      </section>

      <section className="services-section section-shell">
        <div className="pillar-section-heading">
          <div><span className="eyebrow">WHAT WE DO</span><h2>Three Ways We Help Businesses Build Better Talent Systems</h2><p>From finding the right people to understanding the market and improving the system behind hiring.</p></div>
          <Link className="text-link" href="/services">See all services <span aria-hidden="true">→</span></Link>
        </div>
        <div className="pillar-list">
          {pillars.map((pillar) => (
            <article className={`pillar pillar--${pillar.key}`} key={pillar.number}>
              <div className="pillar-heading"><span className="pillar-number">{pillar.number}</span><span className="eyebrow">{pillar.label}</span></div>
              <h3>{pillar.title}</h3>
              {pillar.callout && <p className="pillar-callout">{pillar.callout}</p>}
              <ul className="pillar-services">
                {pillar.services.map((service) => <li key={service}>{service}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="framework-band">
        <div className="framework-mark" aria-hidden="true"><span className="framework-mark-word">PARTNER</span><span className="framework-mark-type">FRAMEWORK</span></div>
        <div><span className="eyebrow">HOW WE WORK</span><h2>Good outcomes are built together.</h2><p>Our PARTNER Framework™ keeps every engagement grounded in clarity, shared ownership, and progress you can see.</p></div>
        <Link className="button button-light" href="/how-we-work/partner-framework">Meet the framework <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="home-opportunities">
        <div className="home-opportunities-inner section-shell">
          <div><span className="eyebrow">SELECTED ACTIVE MANDATES</span><h2>Explore opportunities being actively worked on by DeyuktiLabs.</h2><p>Public mandates are shared selectively as details are approved. Not every active search is listed publicly.</p></div>
          <Link className="text-link" href="/talent-opportunities">Explore Talent Opportunities <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="home-talent-intelligence section-shell">
        <div className="home-talent-copy">
          <span className="eyebrow">TALENT INTELLIGENCE</span>
          <h2>Understand your talent market before you make the hiring decision.</h2>
          <p>Bring market context, talent availability, and search strategy into the conversation before the brief becomes a hiring decision.</p>
          <div className="home-talent-actions">
            <Link className="button button-primary" href="/services/talent-intelligence">Understand Your Talent Market <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/insights">Explore Hiring Market Intelligence <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="home-talent-mark" aria-hidden="true"><span>BEFORE</span><strong>the decision</strong><span>KNOW THE MARKET</span></div>
      </section>

      <section className="home-career-lab">
        <div className="home-career-inner section-shell">
          <div><span className="eyebrow">CAREER LAB · FOR PROFESSIONALS &amp; JOB SEEKERS</span><h2>Practical career intelligence from the other side of the hiring table.</h2><p>Smart Job Search is coming soon, with career tips and resources to help professionals search, apply, and interview smarter.</p></div>
          <Link className="text-link" href="/career-lab">Explore Career Lab <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="home-credibility section-shell">
        <div className="home-founder-portrait"><Image src="/images/Hansraj%20Surti.jpg" alt="Hansraj Surti at the South Asia Summit in Mumbai" fill sizes="(max-width: 780px) 40vw, 160px" /></div>
        <div className="home-credibility-copy"><Link className="home-credibility-link" href="/about"><span className="eyebrow">FOUNDER, DEYUKTILABS</span><h2>Hansraj Surti <span aria-hidden="true">↗</span></h2></Link><p>Talent Intelligence &amp; Workforce Strategy</p></div>
        <div className="home-credibility-stats"><div><strong>20</strong><span>years in Talent Acquisition and recruitment</span></div><div><strong>13</strong><span>years with a product-focused IT organisation</span></div></div>
      </section>

      <section className="home-bottom section-shell">
        <div><span className="eyebrow">TALENT INTELLIGENCE &amp; WORKFORCE STRATEGY</span><h2>Make your next people decision a considered one.</h2></div>
        <Link className="button button-primary" href="/contact">Let&apos;s Talk <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}