import Link from "next/link";
import { notFound } from "next/navigation";
import PageIntro from "@/components/PageIntro";
import { services } from "@/lib/site";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageIntro eyebrow={service.eyebrow} title={service.title} description={service.description} actionLabel="Talk through your needs" />
      <section className="detail-layout section-shell">
        <div className="detail-copy"><span className="eyebrow">A CLEARER WAY FORWARD</span><h2>Start with the outcome you need.</h2><p>{service.detail}</p><p>We work alongside your team, share what we learn, and keep the process grounded in the real context of your business and your people.</p></div>
        <aside className="detail-aside"><span className="eyebrow">HOW WE CAN HELP</span><ul>{service.points.map((point) => <li key={point}>{point}</li>)}</ul></aside>
      </section>
      <section className="cta-strip"><p>Good work starts with the right question.</p><Link className="button button-light" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}