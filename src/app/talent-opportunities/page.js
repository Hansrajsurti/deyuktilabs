import Link from "next/link";
import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "Talent Opportunities | Selected Active Mandates",
  description: "View selected active talent mandates with Deyukti Labs and contact our team confidentially about a relevant opportunity.",
  alternates: { canonical: "/talent-opportunities" },
};

export default function TalentOpportunitiesPage() {
  return (
    <>
      <PageIntro eyebrow="SELECTED ACTIVE MANDATES" title="Your next opportunity could start here." description="We work with people making considered career moves. Explore current mandates and reach out in confidence if one feels aligned with your experience." />
      <section className="opportunities section-shell">
        <div className="opportunity-note"><span className="eyebrow">CURRENT SEARCHES</span><h2>Mandates are shared selectively.</h2><p>Some searches are confidential, and roles change as our clients make decisions. For the most current opportunities, introduce yourself to our team and tell us what kind of work you are looking for.</p><Link className="button button-primary" href="/contact">Connect confidentially <span aria-hidden="true">↗</span></Link></div>
        <div className="opportunity-side"><span className="opportunity-number">01</span><p>Thoughtful conversations.<br />A clear next step.</p></div>
      </section>
    </>
  );
}