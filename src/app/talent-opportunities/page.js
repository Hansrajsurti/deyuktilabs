import Link from "next/link";
import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "Talent Opportunities | Selected Active Mandates",
  description: "Explore current opportunities being actively worked on by DeyuktiLabs. Review selected active mandates and express interest confidentially.",
  alternates: { canonical: "/talent-opportunities" },
};

const opportunities = [];

function OpportunityCard({ opportunity }) {
  const interestHref = `/contact?intent=talent&opportunity=${encodeURIComponent(opportunity.id)}`;

  return (
    <article className="opportunity-card">
      <div className="opportunity-card-heading">
        <span className="eyebrow">ACTIVE MANDATE</span>
        <span className="opportunity-status">{opportunity.status}</span>
      </div>
      <h3>{opportunity.position}</h3>
      <dl className="opportunity-facts">
        <div><dt>Location</dt><dd>{opportunity.location}</dd></div>
        <div><dt>Experience</dt><dd>{opportunity.experience}</dd></div>
        <div><dt>Industry / Domain</dt><dd>{opportunity.industryDomain}</dd></div>
        <div><dt>Work Model</dt><dd>{opportunity.workModel}</dd></div>
        <div><dt>Employment Type</dt><dd>{opportunity.employmentType}</dd></div>
      </dl>
      <div className="opportunity-requirements">
        <h4>Key Requirements</h4>
        <ul>{opportunity.keyRequirements.map((requirement) => <li key={requirement}>{requirement}</li>)}</ul>
      </div>
      <Link className="button button-primary opportunity-apply" href={interestHref} aria-label={`Apply or express interest for ${opportunity.position}`}>
        Apply / Express Interest <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}

export default function TalentOpportunitiesPage() {
  return (
    <>
      <PageIntro eyebrow="CAREER OPPORTUNITIES" title="Talent Opportunities" description="Explore current opportunities being actively worked on by DeyuktiLabs." />
      <section id="selected-active-mandates" className="opportunity-list-section section-shell">
        <div className="opportunities-heading">
          <span className="eyebrow">CURRENT SEARCHES</span>
          <h2>Selected Active Mandates</h2>
        </div>
        {opportunities.length > 0 ? (
          <div className="opportunity-grid">
            {opportunities.map((opportunity) => <OpportunityCard key={opportunity.id} opportunity={opportunity} />)}
          </div>
        ) : (
          <div className="opportunity-empty" role="status">
            <span className="opportunity-empty-mark" aria-hidden="true">+</span>
            <div>
              <h3>No public mandates listed right now</h3>
              <p>The mandates featured here represent a select portfolio of premium leadership and career opportunities. For a confidential conversation about opportunities aligned with your aspirations, connect with us.</p>
            </div>
            <Link className="button button-primary" href="/contact?intent=talent">Submit CV. Discover your market worth. <span aria-hidden="true">↗</span></Link>
          </div>
        )}
      </section>
    </>
  );
}