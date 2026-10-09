import Link from "next/link";
import Image from "next/image";
import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "About Hansraj Surti | Founder, Talent Intelligence & Workforce Strategy",
  description: "Meet Hansraj Surti, founder of DeyuktiLabs. 20 years in Talent Acquisition and recruitment, including 13 years with a product-focused IT organisation.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="FOUNDER, DEYUKTILABS" title="Hansraj Surti" description="Founder | Talent Intelligence & Workforce Strategy" />
      <section className="about-founder section-shell">
        <div className="about-founder-portrait">
          <Image
            src="/images/Hansraj%20Surti.jpg"
            alt="Hansraj Surti at the South Asia Summit in Mumbai"
            fill
            priority
            sizes="(max-width: 780px) 70vw, (max-width: 1050px) 28vw, 22vw"
          />
        </div>
        <div className="about-founder-heading"><span className="eyebrow">EXPERIENCE, APPLIED</span><h2>Business understanding first. Talent systems that work in practice.</h2></div>
        <div className="about-founder-copy">
          <p>20 years in Talent Acquisition and recruitment, including 13 years with a product-focused IT organisation, now building DeyuktiLabs to help businesses solve hiring challenges through talent intelligence, strategic recruitment and AI-enabled workforce solutions.</p>
          <div className="about-tenure" aria-label="Experience highlights">
            <div><strong>20</strong><span>years in Talent Acquisition and recruitment</span></div>
            <div><strong>13</strong><span>years with a product-focused IT organisation</span></div>
          </div>
        </div>
      </section>
      <section className="about-capabilities">
        <div className="section-shell">
          <div className="about-capabilities-heading"><span className="eyebrow">WHERE EXPERIENCE MEETS EXECUTION</span><h2>Talent work shaped by the business behind the brief.</h2></div>
          <ul className="about-capability-list">
            <li><span>01</span><h3>Business understanding</h3></li>
            <li><span>02</span><h3>Talent Acquisition experience</h3></li>
            <li><span>03</span><h3>Technology hiring</h3></li>
            <li><span>04</span><h3>Leadership hiring</h3></li>
            <li><span>05</span><h3>Talent intelligence</h3></li>
            <li><span>06</span><h3>Workforce thinking</h3></li>
            <li><span>07</span><h3>Practical recruitment execution</h3></li>
          </ul>
        </div>
      </section>
      <section className="cta-strip"><p>Put talent intelligence and workforce strategy to work.</p><Link className="button button-light" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}