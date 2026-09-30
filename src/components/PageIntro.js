import Link from "next/link";

export default function PageIntro({ eyebrow, title, description, actionLabel, actionHref = "/contact" }) {
  return (
    <section className="page-intro">
      <div className="page-intro-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {actionLabel && <Link className="button button-primary" href={actionHref}>{actionLabel}<span aria-hidden="true">↗</span></Link>}
      </div>
      <div className="intro-index" aria-hidden="true"><span>DL</span><span>PEOPLE<br />&amp; POSSIBILITY</span></div>
    </section>
  );
}