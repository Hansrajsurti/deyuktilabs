import Link from "next/link";
import { contactEmail, siteUrl } from "@/lib/site";

export const metadata = {
  title: { absolute: "Recruitment Consultant in Mumbai | Deyukti Labs" },
  description: "Looking for a recruitment consultant in Mumbai? Deyukti Labs helps employers hire leaders and specialists through focused search, talent insight, and clear communication.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Recruitment Consultant in Mumbai | Deyukti Labs",
    description: "Focused recruitment, talent insight, and clear candidate communication for employers hiring in Mumbai.",
    url: "/",
    type: "website",
  },
  twitter: {
    title: "Recruitment Consultant in Mumbai | Deyukti Labs",
    description: "Focused recruitment, talent insight, and clear candidate communication for employers hiring in Mumbai.",
  },
};

const pillars = [
  { number: "01", title: "Find the right people", text: "Focused search for leaders and specialists who can make a meaningful difference.", href: "/services/talent-acquisition", link: "Explore talent acquisition" },
  { number: "02", title: "See the talent landscape", text: "Market insight that helps your team make confident, well-timed people decisions.", href: "/services/talent-intelligence", link: "Explore talent intelligence" },
  { number: "03", title: "Make work flow better", text: "Practical HR automation that gives people more room for work that needs a human touch.", href: "/services/hr-ai-automation", link: "Explore HR AI automation" },
];

const faqs = [
  {
    question: "What does a recruitment consultant in Mumbai do?",
    answer: "A recruitment consultant helps employers define a role, identify relevant talent, assess candidates against agreed criteria, and manage a clear hiring process. Deyukti Labs focuses on leadership and specialist searches.",
  },
  {
    question: "How can Deyukti Labs help my company hire in Mumbai?",
    answer: "We start by understanding the role and business outcome, then support the search with role definition, talent market mapping, candidate engagement, structured assessment, and offer support.",
  },
  {
    question: "What kinds of roles does Deyukti Labs recruit for?",
    answer: "Our talent acquisition work focuses on leadership and specialist roles. Share the role scope and capabilities you need so we can discuss whether the search is a fit.",
  },
  {
    question: "Which industries does Deyukti Labs specialize in?",
    answer: "We do not publish an industry-specialty list. We scope each search around the role, capabilities required, and the organization’s context. Contact us with your brief to discuss fit.",
  },
  {
    question: "Do you support executive and leadership hiring?",
    answer: "Yes. Deyukti Labs supports leadership searches as well as specialist hiring, with the search approach shaped around the role and its expected outcomes.",
  },
  {
    question: "What is your recruitment process?",
    answer: "We align on the role and success criteria, map the relevant talent market, engage candidates, assess them against the brief, and support the offer and transition stages.",
  },
  {
    question: "How long does recruitment take in Mumbai?",
    answer: "There is no single timeline for every search. Timing depends on the role, talent availability, interview process, and decision pace. We discuss realistic milestones when the brief is agreed.",
  },
  {
    question: "How much does a recruitment consultant charge?",
    answer: "Deyukti Labs does not publish standard recruitment fees on this website. Contact us with the role details to discuss the commercial terms for a specific search.",
  },
  {
    question: "How do you assess candidates?",
    answer: "We use structured assessment against criteria agreed for the role, considering relevant experience and the capabilities needed for the work. The approach is tailored to the search brief.",
  },
  {
    question: "Can you provide talent mapping before we open a role?",
    answer: "Yes. Our talent intelligence service can map relevant talent and market context to help your team test role assumptions and make more informed hiring plans.",
  },
  {
    question: "Can candidates contact Deyukti Labs about opportunities?",
    answer: "Yes. Candidates can contact our team about a selected active mandate or introduce themselves through the Contact page. Current searches may be confidential and are shared selectively.",
  },
  {
    question: "Does Deyukti Labs offer HR AI automation as well as recruitment?",
    answer: "Yes. Alongside talent acquisition and talent intelligence, we help teams assess HR workflows and consider practical automation with human judgment and responsible data practices in the loop.",
  },
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
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> TALENT, MADE THOUGHTFUL</span>
          <h1>Recruitment consultant<br />in Mumbai for your next<br /><em>great hire.</em></h1>
          <p>Looking for a recruitment consultant in Mumbai? Deyukti Labs helps employers hire leaders and specialists through focused search, talent insight, and clear candidate communication.</p>
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }} />
      </section>

      <section className="intro-band">
        <span className="eyebrow">RECRUITMENT CONSULTANT IN MUMBAI</span>
        <p>Hiring in Mumbai starts with a clear brief, realistic market expectations, and thoughtful candidate conversations. We bring <strong>human insight</strong> and <strong>clear intent</strong> to each search.</p>
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

      <section className="faq-section section-shell">
        <div className="section-heading">
          <div><span className="eyebrow">STRAIGHT ANSWERS</span><h2>Recruitment consultant in Mumbai: FAQs</h2></div>
        </div>
        <div className="faq-list">
          {faqs.map(({ question, answer }) => (
            <details className="faq-item" key={question}>
              <summary>{question}<span aria-hidden="true" /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      </section>

      <section className="home-bottom section-shell">
        <div><span className="eyebrow">LET&apos;S BEGIN WITH A CONVERSATION</span><h2>Make your next people decision a considered one.</h2></div>
        <Link className="button button-primary" href="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}