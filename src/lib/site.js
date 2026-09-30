export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://deyuktilabs.com").replace(/\/$/, "");
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@deyuktilabs.com";

export const navigation = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Talent Acquisition", href: "/services/talent-acquisition" },
      { label: "Talent Intelligence", href: "/services/talent-intelligence" },
      { label: "HR AI Automation", href: "/services/hr-ai-automation" },
    ],
  },
  {
    label: "How We Work",
    href: "/how-we-work",
    children: [{ label: "PARTNER Framework™", href: "/how-we-work/partner-framework" }],
  },
  {
    label: "Talent Opportunities",
    href: "/talent-opportunities",
    children: [{ label: "Selected active mandates", href: "/talent-opportunities" }],
  },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    slug: "talent-acquisition",
    title: "Talent Acquisition",
    eyebrow: "Recruiting with intention",
    description:
      "Find the people who can move your business forward. We bring focused search, thoughtful assessment, and clear communication to every hire.",
    detail:
      "From a critical leadership appointment to a hard-to-find specialist, our search work starts with the outcomes the role needs to create. We align on the brief, map the relevant market, engage candidates with care, and keep decisions moving with useful, candid feedback.",
    points: ["Executive and specialist search", "Role definition and market mapping", "Structured candidate assessment", "Offer support and transition planning"],
  },
  {
    slug: "talent-intelligence",
    title: "Talent Intelligence",
    eyebrow: "Make the market more legible",
    description:
      "Replace guesswork with a sharper view of the talent landscape, so your team can make informed hiring and workforce decisions.",
    detail:
      "A sound talent strategy depends on understanding who is available, what motivates them, and how the market is changing. We turn research into practical insight your leadership team can use to shape roles, set expectations, and plan the next move.",
    points: ["Talent market and competitor mapping", "Skills and capability insights", "Compensation and candidate expectations", "Workforce planning support"],
  },
  {
    slug: "hr-ai-automation",
    title: "HR AI Automation",
    eyebrow: "More human work, less busywork",
    description:
      "Apply AI and automation thoughtfully to repetitive people operations, with human judgment and responsible data practices in the loop.",
    detail:
      "The best HR automation makes routine work easier without making people feel like a process. We help teams identify high-friction workflows, design practical automations, and introduce AI where it can support better service while keeping sensitive decisions accountable to people.",
    points: ["HR workflow and readiness assessment", "Responsible AI use-case design", "People operations automation", "Adoption, governance, and measurement"],
  },
];

export const serviceRoutes = services.map(({ slug }) => `/services/${slug}`);

export const insightArticles = [
  {
    slug: "hiring-brief-starts-with-the-work",
    category: "Hiring strategy",
    title: "A better hiring brief starts with the work, not the wish list",
    summary: "A practical way to turn an ambitious role description into a search candidates can understand and a team can assess.",
    readTime: "6 min read",
    content: [
      "When a role is difficult to fill, the first instinct is often to add more requirements. Another credential, another adjacent skill, another year of experience. The brief gets longer, but the decision does not get clearer. Strong candidates may opt out because they cannot see what matters most, while interviewers assess different versions of the job.",
      "Start instead with the work. What must this person make possible in their first year? Which problems will they own, and which relationships will help them succeed? Separate the capabilities that are essential on day one from the skills a good hire can learn. That distinction gives candidates a more honest picture and gives the hiring team a usable set of criteria.",
      "A useful brief also names the context: why the role exists now, how decisions get made, and what support is available. Share the trade-offs openly. If pace matters more than process-building, say so. If the team needs someone to create structure, make that explicit. Specific context attracts better-informed interest than a broad list of adjectives.",
      "Before the search begins, ask each interviewer to describe what strong evidence would look like. Agreeing on that evidence helps conversations stay consistent and makes feedback easier to compare. The result is not simply a shorter job description. It is a shared understanding of the work, communicated clearly enough for the right people to recognize themselves in it.",
    ],
  },
  {
    slug: "what-a-talent-map-should-help-decide",
    category: "Talent intelligence",
    title: "What a talent map should help you decide",
    summary: "Useful market research does more than name potential candidates. It gives leaders a clearer next decision.",
    readTime: "5 min read",
    content: [
      "A list of names is not yet talent intelligence. Without context, a map can make a market look more straightforward than it is: people may have moved roles, their experience may not match the brief, or the assumptions behind the search may be too narrow. Research becomes useful when it helps a team choose what to do next.",
      "Begin by agreeing on the decision the map should inform. Are you testing whether a role is realistically scoped? Comparing locations? Understanding which skills are concentrated in a particular sector? Each question needs a different view of the market. A clear question keeps research focused and gives stakeholders a way to judge whether the findings are relevant.",
      "Then look for patterns, not just profiles. Where does relevant experience tend to develop? Which parts of the brief appear together, and which are rarely found in one person? What do compensation expectations, mobility, or candidate motivations suggest about timing? These signals can help leaders adjust a role, explore a different talent pool, or prepare for a longer search.",
      "A good talent map makes its limits visible. It explains how information was gathered, when it was checked, and what should not be inferred from it. Used this way, market research is not a static directory. It is a grounded input to workforce planning and hiring decisions that can be revisited as conditions change.",
    ],
  },
  {
    slug: "where-ai-can-help-hr",
    category: "Responsible AI",
    title: "Where AI can help HR, and where judgment must stay human",
    summary: "A grounded starting point for evaluating automation across the employee experience.",
    readTime: "7 min read",
    content: [
      "HR teams often carry a heavy load of repeatable coordination: answering routine questions, moving information between systems, and preparing standard communications. These tasks can be frustrating for employees and time-consuming for HR. Automation and carefully chosen AI tools may reduce that friction, but starting with the technology can obscure the problem worth solving.",
      "Map the workflow first. Where do people wait? Which steps involve re-entering information or chasing status? Which questions come up repeatedly? A suitable automation should make a clear task faster or more consistent, while keeping the experience understandable to the person using it. If the process itself is confusing, automating it may only make confusion happen sooner.",
      "People-related decisions need particular care. Hiring, performance, accommodations, and employee relations can carry significant consequences. AI may help organize information or draft routine material, but it should not quietly become the decision-maker. Keep a qualified person accountable, give people a way to correct errors, and explain how information is used.",
      "Before expanding a tool, decide how you will evaluate it. Measure whether the workflow improved for employees and HR, check for uneven outcomes, and revisit privacy and access controls. Responsible HR automation is not about removing people from the process. It is about giving them more time and better information for the parts of the work that depend on trust and judgment.",
    ],
  },
];

export const insightRoutes = insightArticles.map(({ slug }) => `/insights/${slug}`);