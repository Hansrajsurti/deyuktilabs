import PageIntro from "@/components/PageIntro";
import { contactEmail } from "@/lib/site";

export const metadata = {
  title: "Contact Deyukti Labs | Start a Conversation",
  description: "Talk with Deyukti Labs about talent acquisition, talent intelligence, HR AI automation, or your next career opportunity.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="CONTACT" title="Tell us what you are working through." description="A hiring challenge, a question about your talent market, or an HR process ready for a rethink: we would be glad to hear the context." />
      <section className="contact-layout section-shell">
        <div className="contact-primary"><span className="eyebrow">START HERE</span><h2>A useful first conversation can make the next step clearer.</h2><p>Share a little about your team and what you would like to change. We will follow up to understand the brief and see whether we are the right partner.</p><a className="button button-primary" href={`mailto:${contactEmail}?subject=Let%27s%20talk%20with%20Deyukti%20Labs`}>Email our team <span aria-hidden="true">↗</span></a></div>
        <aside className="contact-aside"><span className="eyebrow">GET IN TOUCH</span><a href={`mailto:${contactEmail}`}>{contactEmail}</a><span className="eyebrow contact-secondary">FOR CANDIDATES</span><p>Interested in a selected active mandate? Introduce yourself and mention the role or kind of opportunity you have in mind.</p></aside>
      </section>
    </>
  );
}