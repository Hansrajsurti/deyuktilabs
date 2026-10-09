import PageIntro from "@/components/PageIntro";
import { contactEmail } from "@/lib/site";

export const metadata = {
  title: "Career Lab | Practical Career Intelligence",
  description: "Practical career intelligence from the other side of the hiring table for professionals and job seekers.",
  alternates: { canonical: "/career-lab" },
};

const careerTips = [
  {
    number: "01",
    title: "Search with a clear target.",
    text: "Choose the role scope, level, and work you want to do before widening your applications.",
  },
  {
    number: "02",
    title: "Make your evidence easy to find.",
    text: "Lead your CV with relevant outcomes and examples that match the role, not a long list of duties.",
  },
  {
    number: "03",
    title: "Prepare for a two-way interview.",
    text: "Bring specific examples, and ask how success, priorities, and decisions work in the role.",
  },
];

const futureResources = [
  "Job search trackers",
  "CV checklists",
  "Interview checklists",
  "Recruiter outreach templates",
  "Career tools",
];

export default function CareerLabPage() {
  const notificationHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Notify me about Smart Job Search")}&body=${encodeURIComponent("Please notify me when the Smart Job Search mini-course is available.")}`;

  return (
    <>
      <PageIntro
        eyebrow="FOR PROFESSIONALS & JOB SEEKERS"
        title="Career Lab"
        description="Practical career intelligence from the other side of the hiring table."
      />
      <section className="career-lab-positioning section-shell">
        <span className="eyebrow">A DEDICATED CAREER RESOURCE</span>
        <p>Career Lab is a focused resource for professionals and job seekers, alongside DeyuktiLabs&apos; work in talent and workforce strategy.</p>
      </section>
      <section className="career-course-wrap section-shell">
        <article className="career-course" id="smart-job-search">
          <div className="career-course-content">
            <div className="career-course-heading">
              <span className="eyebrow">RECRUITER-LED MINI-COURSE</span>
              <span className="career-course-status">Coming Soon</span>
            </div>
            <h2>Smart Job Search</h2>
            <h3>Navigate the Job Market Smarter.</h3>
            <p>A future recruiter-led mini-course teaching professionals how to search, apply and interview smarter.</p>
          </div>
          <div className="career-course-action">
            <a className="button button-primary" href={notificationHref}>Get Notified <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      </section>
      <section className="career-lab-modules section-shell" aria-label="Career Lab resources">
        <section className="career-module career-module--video" id="video-learning">
          <div className="career-module-heading"><span className="career-module-number">01</span><span className="eyebrow">LEARN</span></div>
          <h2>Video Learning</h2>
          <p>Recorded career videos will be added here as they become available.</p>
          <span className="career-module-status">In development</span>
        </section>
        <section className="career-module career-module--tips" id="career-tips">
          <div className="career-module-heading"><span className="career-module-number">02</span><span className="eyebrow">PRACTICE</span></div>
          <h2>Career Tips &amp; Tactics</h2>
          <div className="career-tips-list">
            {careerTips.map((tip) => (
              <article className="career-tip" key={tip.number}>
                <span>{tip.number}</span>
                <div><h3>{tip.title}</h3><p>{tip.text}</p></div>
              </article>
            ))}
          </div>
        </section>
        <section className="career-module career-module--webinars" id="webinars">
          <div className="career-module-heading"><span className="career-module-number">03</span><span className="eyebrow">JOIN LIVE</span></div>
          <h2>Webinars</h2>
          <p>Future live webinars and masterclasses will be announced here.</p>
          <span className="career-module-status">Planned</span>
        </section>
        <section className="career-module career-module--resources" id="career-resources">
          <div className="career-module-heading"><span className="career-module-number">04</span><span className="eyebrow">TOOLS FOR YOUR NEXT MOVE</span></div>
          <h2>Career Resources</h2>
          <p>Practical tools are planned for the Career Lab resource library.</p>
          <ul className="career-resource-list">
            {futureResources.map((resource) => <li key={resource}>{resource}</li>)}
          </ul>
          <span className="career-module-status">Planned</span>
        </section>
      </section>
    </>
  );
}
