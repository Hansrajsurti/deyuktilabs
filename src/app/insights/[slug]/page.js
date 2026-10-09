import Link from "next/link";
import { notFound } from "next/navigation";
import PageIntro from "@/components/PageIntro";
import { insightArticles } from "@/lib/site";

export function generateStaticParams() {
  return insightArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: { type: "article" },
  };
}

export default async function InsightArticlePage({ params }) {
  const { slug } = await params;
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <>
      <PageIntro eyebrow={`${article.category} · ${article.readTime}`} title={article.title} description={article.summary} />
      <article className="insight-detail section-shell">
        <div className="insight-detail-copy">{article.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <aside className="insight-detail-aside"><span className="eyebrow">KEEP EXPLORING</span><h2>People decisions deserve a clear point of view.</h2><p>Explore how Deyukti Labs brings talent expertise and practical technology together.</p><Link className="text-link" href="/services">Explore our services <span aria-hidden="true">↗</span></Link></aside>
      </article>
      <section className="cta-strip"><p>Put a thoughtful next step in motion.</p><Link className="button button-light" href="/contact">Talk with our team <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}