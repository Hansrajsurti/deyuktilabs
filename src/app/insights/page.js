import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import { insightArticles } from "@/lib/site";

export const metadata = {
  title: "Insights on Talent, Hiring & HR Automation",
  description: "Practical perspectives from Deyukti Labs on talent acquisition, talent intelligence, responsible AI, and better people decisions.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageIntro eyebrow="INSIGHTS" title="Useful thinking for people decisions." description="Perspectives on finding talent, understanding the market, and making technology work for people. Clear ideas for the questions leaders are already asking." />
      <section className="insights-grid section-shell">{insightArticles.map((article, index) => <article className={`insight-article${index === 0 ? " insight-featured" : ""}`} key={article.slug}><span className="eyebrow">{article.category}</span><span className="insight-number">0{index + 1}</span><h2><Link href={`/insights/${article.slug}`}>{article.title}</Link></h2><p>{article.summary}</p><div className="insight-meta"><span>{article.readTime}</span><Link href={`/insights/${article.slug}`}>Read insight <span aria-hidden="true">↗</span></Link></div></article>)}</section>
      <section className="cta-strip"><p>Have a question you would like us to explore?</p><Link className="button button-light" href="/contact">Share it with us <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}