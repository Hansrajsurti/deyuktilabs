import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import { services } from "@/lib/site";

export const metadata = {
  title: "Talent Acquisition, Talent Intelligence & HR AI Services",
  description: "Explore Deyukti Labs services: talent acquisition, talent intelligence, and responsible AI automation for HR and people operations.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="OUR SERVICES" title="People strategy, made practical." description="Whether you are building a team, planning for change, or improving how HR works, we bring focused expertise to the decision in front of you." actionLabel="Discuss a challenge" />
      <section className="service-directory section-shell">
        {services.map((service, index) => (
          <article className="service-row" key={service.slug}>
            <span className="service-index">0{index + 1}</span>
            <div><span className="eyebrow">{service.eyebrow}</span><h2>{service.title}</h2><p>{service.description}</p><Link className="text-link" href={`/services/${service.slug}`}>Explore this service <span aria-hidden="true">↗</span></Link></div>
            <span className="service-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </section>
    </>
  );
}