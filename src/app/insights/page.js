import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import { linkedinDestinations } from "@/lib/site";

export const metadata = {
  title: "Insights on Talent, Hiring & HR Automation",
  description: "Explore Hiring Market Intelligence, Career Intelligence, and TA Weekly from Deyukti Labs, with original LinkedIn content from Hansraj Surti.",
  alternates: { canonical: "/insights" },
};

const channels = [
  {
    number: "01",
    key: "market",
    title: "Hiring Market Intelligence",
    audience: ["Hiring Managers", "Founders", "CHROs", "Business Leaders"],
    topics: ["Hiring market trends", "GCC hiring", "Talent availability", "Technology hiring", "Workforce strategy", "Talent economics", "Hiring demand"],
    description: "Signals and context for leaders making decisions about where, when, and how to hire.",
    link: "View Hansraj Surti's LinkedIn post",
    href: linkedinDestinations.posts,
  },
  {
    number: "02",
    key: "career",
    title: "Career Intelligence",
    audience: ["Job seekers", "Professionals", "Senior candidates"],
    topics: ["Career strategy", "Job search", "CV positioning", "LinkedIn", "Interviews", "Recruiter communication", "CTC / career decisions"],
    description: "Practical perspective to help professionals make informed, well-positioned career moves.",
    link: "View the Talent Thoughts announcement post",
    href: linkedinDestinations.newsletter,
  },
  {
    number: "03",
    key: "weekly",
    title: "TA Weekly",
    audience: ["TA professionals", "Recruiters", "HR professionals", "Recruitment leaders"],
    topics: ["Hiring news", "Recruitment trends", "Market shifts", "TA observations", "Practical practitioner takeaways"],
    description: "Weekly videos with useful observations for people doing the work of talent acquisition.",
    link: "Watch Hansraj Surti's TA intro video on LinkedIn",
    href: linkedinDestinations.videoIntro,
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageIntro eyebrow="THE DEYUKTILABS POINT OF VIEW" title="Insights for better talent decisions." description="A curated hub for Hansraj Surti's thinking on talent markets, career choices, and the work of talent acquisition. Follow each link to the original on LinkedIn." />
      <section className="insights-hub section-shell" aria-label="Insights channels">
        <div className="insights-hub-heading">
          <span className="eyebrow">THREE EDITORIAL CHANNELS</span>
          <p>Built for the people shaping hiring, careers, and recruitment practice.</p>
        </div>
        <div className="insight-channels">
          {channels.map((channel) => (
            <article id={`${channel.key === "market" ? "hiring-market-intelligence" : channel.key === "career" ? "career-intelligence" : "ta-weekly"}`} className={`insight-channel insight-channel--${channel.key}`} key={channel.number}>
              <div className="insight-channel-topline"><span>{channel.number}</span><span className="eyebrow">INSIGHTS</span></div>
              <h2>{channel.title}</h2>
              <p className="insight-channel-description">{channel.description}</p>
              <div className="insight-channel-audience">
                <span className="eyebrow">FOR</span>
                <ul>{channel.audience.map((person) => <li key={person}>{person}</li>)}</ul>
              </div>
              <div className="insight-channel-topics">
                <span className="eyebrow">COVERING</span>
                <p>{channel.topics.join(" · ")}</p>
              </div>
              <a className="insight-channel-link" href={channel.href} target="_blank" rel="noopener noreferrer">
                {channel.link} <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>
      <section className="cta-strip"><p>Have a question you would like us to explore?</p><Link className="button button-light" href="/contact">Share it with us <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}