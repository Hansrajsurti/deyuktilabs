import Link from "next/link";
import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "About Deyukti Labs | People Decisions for What Comes Next",
  description: "Deyukti Labs brings talent expertise, market intelligence, and practical HR technology together to help organizations make better people decisions.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="ABOUT DEYUKTI LABS" title="People are the point of progress." description="Deyukti Labs exists to help organizations make better people decisions, whether that means finding the right talent, seeing the market clearly, or making HR work more effectively." actionLabel="Meet the team" actionHref="/contact" />
      <section className="about-story section-shell"><div><span className="eyebrow">OUR POINT OF VIEW</span><h2>Technology can move work forward. People give it direction.</h2></div><div className="about-prose"><p>Organizations are navigating changing skills, tighter talent markets, and new possibilities in AI. The answer is not another disconnected tool or a hiring process that treats people like profiles.</p><p>We bring talent acquisition, talent intelligence, and HR automation into one practical conversation. That means listening closely, using evidence with care, and helping teams act on what they learn.</p><p>Our work is shaped by a simple belief: better outcomes follow when people understand the decision, have a voice in it, and know what happens next.</p></div></section>
      <section className="about-values"><div className="section-shell values-inner"><span className="eyebrow">WHAT GUIDES US</span><div className="values-line"><span>Clarity</span><span>Care</span><span>Curiosity</span><span>Accountability</span></div></div></section>
      <section className="cta-strip"><p>Let&apos;s make the next people decision count.</p><Link className="button button-light" href="/contact">Get to know us <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}