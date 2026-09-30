import Link from "next/link";
import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "PARTNER Framework™ | How Deyukti Labs Works",
  description: "The Deyukti Labs PARTNER Framework™ brings purpose, alignment, research, transparency, empathy, and reflection into every engagement.",
  alternates: { canonical: "/how-we-work/partner-framework" },
};

const principles = [
  ["P", "Purpose", "We begin with the business outcome and the people it affects."],
  ["A", "Alignment", "We make success criteria and responsibilities clear from the start."],
  ["R", "Research", "We bring relevant evidence and market context to the conversation."],
  ["T", "Transparency", "We share progress, trade-offs, and feedback openly."],
  ["N", "Nurture", "We treat every candidate and colleague with care and respect."],
  ["E", "Empathy", "We make room for the human context behind every decision."],
  ["R", "Reflect", "We learn from each engagement and use that learning to improve."],
];

export default function PartnerFrameworkPage() {
  return (
    <>
      <PageIntro eyebrow="OUR WORKING PRINCIPLES" title="The PARTNER Framework™" description="A practical framework for doing important people work with clarity, care, and shared ownership." actionLabel="Put it to work" />
      <section className="framework-list section-shell">{principles.map(([letter, title, text]) => <article className="framework-principle" key={`${letter}-${title}`}><span>{letter}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}</section>
      <section className="cta-strip"><p>Good partnerships are built in the work.</p><Link className="button button-light" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}