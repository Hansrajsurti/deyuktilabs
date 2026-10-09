import PageIntro from "@/components/PageIntro";
import Link from "next/link";
import { businessPhone, contactEmails } from "@/lib/site";

export const metadata = {
  title: "Contact | Let's Talk",
  description: "Talk directly with Hansraj Surti about a hiring requirement, talent intelligence, workforce strategy, or HR AI automation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const founderEmail = contactEmails.founder;

  return (
    <>
      <PageIntro eyebrow="CONTACT" title="Let&apos;s Talk" description="Talk directly with Hansraj Surti about a business challenge, hiring need, or workforce strategy." />
      <section className="contact-hub section-shell">
        <div className="contact-founder">
          <div>
            <span className="eyebrow">FOUNDER / DIRECT BUSINESS COMMUNICATION</span>
            <h2>Hansraj Surti</h2>
            <p>Founder | Talent Intelligence &amp; Workforce Strategy</p>
            <div className="contact-direct-channels">
              <a className="contact-direct-email" href={`mailto:${founderEmail}`}>{founderEmail}</a>
              <a className="contact-direct-email" href={`tel:${businessPhone}`}>+91 8169307179</a>
            </div>
          </div>
          <a className="button button-light" href={`mailto:${founderEmail}?subject=${encodeURIComponent("Let's Talk with DeyuktiLabs")}`}>Let&apos;s Talk <span aria-hidden="true">↗</span></a>
        </div>
        <div className="contact-routes">
          <article className="contact-route">
            <span className="eyebrow">FOR EMPLOYERS</span>
            <h3>Have a Hiring Requirement?</h3>
            <p>Share the role, business context, or hiring challenge you are working through.</p>
            <a href={`mailto:${founderEmail}?subject=${encodeURIComponent("Hiring Requirement | DeyuktiLabs")}`}>Discuss a hiring requirement <span aria-hidden="true">↗</span></a>
          </article>
          <article className="contact-route">
            <span className="eyebrow">FOR CANDIDATES</span>
            <h3>Explore Talent Opportunities</h3>
            <p>Review selected active mandates and express interest in a relevant opportunity.</p>
            <Link href="/talent-opportunities">Explore Talent Opportunities <span aria-hidden="true">↗</span></Link>
          </article>
          <article className="contact-route">
            <span className="eyebrow">FOR TALENT LEADERS</span>
            <h3>Understand Your Talent Market</h3>
            <p>See how talent intelligence can clarify availability, competition, and search strategy.</p>
            <Link href="/services/talent-intelligence">Understand Your Talent Market <span aria-hidden="true">↗</span></Link>
          </article>
          <article className="contact-route">
            <span className="eyebrow">FOR PEOPLE OPERATIONS</span>
            <h3>Explore HR AI Automation</h3>
            <p>Discuss practical ways to improve hiring workflows with responsible AI-enabled solutions.</p>
            <Link href="/services/hr-ai-automation">Explore HR AI Automation <span aria-hidden="true">↗</span></Link>
          </article>
        </div>
      </section>
    </>
  );
}