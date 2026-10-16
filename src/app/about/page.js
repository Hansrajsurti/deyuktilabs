import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Hansraj Surti | Founder, Talent Intelligence & Workforce Strategy",
  description:
    "Meet Hansraj Surti, founder of DeyuktiLabs. 20 years in Talent Acquisition and recruitment, including 13 years with a product-focused IT organisation.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-hero-copy">
            <span className="eyebrow">FOUNDER, DEYUKTILABS</span>
            <h1>Hansraj Surti</h1>
            <h2>Talent Intelligence &amp; Workforce Strategy</h2>
            <p>
              20 years in Talent Acquisition and recruitment, including
              13 years with a product-focused IT organisation, now
              building DeyuktiLabs to help businesses solve hiring
              challenges through talent intelligence, strategic
              recruitment and AI-enabled workforce solutions.
            </p>
          </div>

          <div className="about-hero-headshot">
            <Image
              src="/images/Latest%20LinkedIn%20HeadShot%20Feb26.png"
              alt="Professional headshot of Hansraj Surti, founder of DeyuktiLabs"
              fill
              priority
              sizes="(max-width: 780px) 70vw, 240px"
            />
          </div>

          <div className="about-hero-mark" aria-label="DeyuktiLabs">
            <strong>DL</strong>
            <span>DEYUKTILABS</span>
          </div>
        </div>
      </section>

      <section className="about-feature-row section-shell">
        <div className="about-feature-photo">
          <Image
            src="/images/Hansraj%20Surti.jpg"
            alt="Hansraj Surti at the South Asia Summit in Mumbai"
            fill
            sizes="(max-width: 780px) 90vw, 240px"
          />
        </div>

<div className="about-feature-video">
  <video
    controls
    preload="metadata"
    playsInline
    aria-label="Introduction video from Hansraj Surti"
  >
    <source
      src="/images/LinkedIn%20Intro%20LinkedIn.mp4"
      type="video/mp4"
    />
    Your browser does not support HTML video.
  </video>
</div>  

        <div className="about-feature-message">
          <span className="eyebrow">EXPERIENCE, APPLIED</span>
          <h2>
            Business understanding first. Talent systems that work in
            practice.
          </h2>
        </div>
      </section>

      <section className="about-capabilities">
        <div className="section-shell">
          <div className="about-capabilities-heading">
            <span className="eyebrow">WHERE EXPERIENCE MEETS EXECUTION</span>
            <h2>Talent work shaped by the business behind the brief.</h2>
          </div>

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

      <section className="cta-strip">
        <p>Put talent intelligence and workforce strategy to work.</p>
        <Link className="button button-light" href="/contact">
          Discuss a Requirement <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}