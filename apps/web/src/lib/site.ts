export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://agnaysrivastava.com";

export const site = {
  name: "Agnay Srivastava",
  title: "Agnay Srivastava | Co-founder & CEO of Tsenta (YC S26)",
  description:
    "Agnay Srivastava is the co-founder and CEO of Tsenta (YC S26), building cost-effective AI agents that make people more capable.",
  social: {
    tsenta: "https://tsenta.com",
    yc: "https://www.ycombinator.com/companies/tsenta",
    linkedin: "https://www.linkedin.com/in/agnay/",
    github: "https://github.com/AgnayS",
    x: "https://x.com/AgnaySrivastava",
    instagram: "https://www.instagram.com/agnaysr/",
  },
} as const;

export const selectedBuilds = [
  {
    year: "Now",
    title: "Tsenta",
    description:
      "A transparent job-search agent that finds matching roles, tailors each application, submits it, and keeps people in control.",
    href: "/tsenta",
    note: "YC S26",
  },
  {
    year: "2025",
    title: "Atlas",
    description:
      "A context layer for AI tools, built at HackGT 12 and winner of the CedarOS and Mastra productivity sponsor tracks.",
    href: "https://devpost.com/software/atlas-tlfpkz",
    note: "HackGT winner",
  },
  {
    year: "2024",
    title: "RoseDine",
    description:
      "A faster, friendlier way to navigate college dining, with meal recommendations, nutrition data, and a very overqualified home server.",
    href: "https://rosedine.com",
    note: "100+ weekly users",
  },
  {
    year: "2023",
    title: "Unicycle",
    description:
      "A hand-built 16-bit processor, custom instruction set, and assembler written to understand the machine below the software.",
    href: "https://github.com/AgnayS/Unicycle",
    note: "Verilog",
  },
] as const;

export const experience = [
  {
    period: "2023 · Paytm",
    title: "Slow software charges everyone.",
    detail:
      "A movie-ticketing app taught me how tiny bits of product friction become expensive at scale.",
  },
  {
    period: "2024 · GrapheneAI",
    title: "AI is only useful after the demo.",
    detail:
      "I worked on LLM traffic, scoring, and observability so the system could survive contact with actual users.",
  },
  {
    period: "2024 · Rose-Hulman Ventures",
    title: "Give experts their attention back.",
    detail:
      "I automated terabytes of spinal-imaging work so researchers could spend more time on the surgery problem.",
  },
  {
    period: "2025 · VIAVI",
    title: "$27/hour. No return offer.",
    detail:
      "I built systems software, learned a lot, and got no return offer. That plot twist pushed my own job-search problem into Tsenta.",
  },
  {
    period: "Now · Tsenta",
    title: "The job search became the product.",
    detail:
      "Pulkit and I built the tool we needed ourselves, then rebuilt it around transparency, control, and a price normal people can afford.",
  },
] as const;

export const press = [
  {
    source: "Y Combinator",
    title: "Tsenta company profile",
    href: site.social.yc,
  },
  {
    source: "Rose-Hulman",
    title: "Student startup earns a place in Y Combinator",
    href: "https://www.rose-hulman.edu/news/2026/rose-hulman-student-startup-earns-spot-at-y-combinator-accelerator-500k-in-funding.html",
  },
  {
    source: "YourStory",
    title: "Making job applications faster, smarter, and less manual",
    href: "https://yourstory.com/2026/06/tsenta-wants-to-make-job-applications-faster-smarter-less-manual",
  },
  {
    source: "Moneycontrol",
    title: "From 3,000 applications to an AI job-search company",
    href: "https://www.moneycontrol.com/news/trends/applied-to-3-000-jobs-got-10-interviews-indian-founders-build-ai-to-fix-hiring-raise-rs-5-crore-13961381.html",
  },
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}
