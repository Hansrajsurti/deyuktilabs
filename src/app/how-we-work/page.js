import Link from "next/link";
import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "How We Work | A Clear, Collaborative Talent Process",
  description: "Learn how Deyukti Labs partners with your team through clear goals, thoughtful research, and shared ownership of outcomes.",
  alternates: { canonical: "/how-we-work" },
};

const stages = [
  ["01", "Listen", "Understand the business context, the people involved, and the outcome that matters."],
  ["02", "Align", "Agree on the brief, decision criteria, timing, and how we will work together."],
  ["03", "Explore", "Bring research, conversations, and relevant evidence into the open."],
  ["04", "Act", "Turn insight into a considered decision and a clear next step."],
  ["05", "Learn", "Reflect on what worked and carry that learning into what comes next."],
];

export default function HowWeWorkPage() {
  return (
    <>
      <PageIntro eyebrow="HOW WE WORK" title="A good partnership makes the work better." description="The best outcomes come from clear expectations, honest conversations, and a team that stays connected from the first question to the final decision." actionLabel="Meet the PARTNER Framework™" actionHref="/how-we-work/partner-framework" />
      <section className="process-section section-shell"><div className="section-heading"><div><span className="eyebrow">OUR APPROACH</span><h2>Thoughtful at every step.</h2></div></div><div className="process-list">{stages.map(([number, title, text]) => <article className="process-step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="cta-strip"><p>Shared understanding creates better momentum.</p><Link className="button button-light" href="/contact">Work with us <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}