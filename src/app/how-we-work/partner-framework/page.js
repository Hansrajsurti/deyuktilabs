import Link from "next/link";
import PartnerFrameworkLetters from "@/components/PartnerFrameworkLetters";

export const metadata = {
  title: "PARTNER Framework™ | How Deyukti Labs Works",
  description: "The Deyukti Labs PARTNER Framework™ solves talent and workforce challenges, from understanding the business problem to building repeatable talent systems.",
  alternates: { canonical: "/how-we-work/partner-framework" },
};

export default function PartnerFrameworkPage() {
  return (
    <>
      <section className="partner-hero">
        <div className="partner-hero-copy">
          <span className="eyebrow">THE DEYUKTILABS METHOD</span>
          <h1>The PARTNER Framework<sup>™</sup></h1>
          <p>Our approach to solving talent and workforce challenges — from understanding the business problem to building repeatable talent systems.</p>
          <Link className="button button-light" href="/contact">Put it to work <span aria-hidden="true">↗</span></Link>
        </div>
        <PartnerFrameworkLetters />
      </section>
      <section className="cta-strip"><p>Good partnerships are built in the work.</p><Link className="button button-light" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}