import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { absoluteUrl, site, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tsenta",
  description:
    "Why Agnay Srivastava and Pulkit Gupta built Tsenta, the transparent job-search agent backed by Y Combinator.",
  alternates: { canonical: "/tsenta" },
  openGraph: {
    url: "/tsenta",
    title: "Tsenta | Job hunting, on autopilot",
    description:
      "The story behind the transparent job-search agent Agnay and Pulkit built after 3,000+ manual applications.",
    images: [
      {
        url: "/images/tsenta-dashboard.webp",
        width: 1800,
        height: 1064,
        alt: "Tsenta job search and application dashboard",
      },
    ],
  },
};

const steps = [
  {
    title: "Find",
    copy: "Watch career pages and surface roles that match the person, not just a keyword.",
  },
  {
    title: "Prepare",
    copy: "Tailor the resume and application to the role while keeping every change reviewable.",
  },
  {
    title: "Apply",
    copy: "Navigate the form, answer the questions, and submit only with the control the user chooses.",
  },
  {
    title: "Track",
    copy: "Connect the reply to the right application so the job search becomes a readable pipeline.",
  },
];

export default function TsentaPage() {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Tsenta",
    url: site.social.tsenta,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Job Search Automation",
    operatingSystem: "Web, iOS, Android, macOS, Windows, Linux",
    description:
      "A transparent AI agent that finds matching jobs, prepares applications, submits forms, and tracks replies.",
    image: absoluteUrl("/images/tsenta-dashboard.webp"),
    creator: {
      "@type": "Organization",
      name: "Tsenta",
      url: site.social.tsenta,
      founder: [
        {
          "@type": "Person",
          name: "Agnay Srivastava",
          url: siteUrl,
        },
        {
          "@type": "Person",
          name: "Pulkit Gupta",
        },
      ],
    },
  };

  return (
    <main id="main">
      <JsonLd data={softwareJsonLd} />

      <header className="page-hero tsenta-hero">
        <div className="shell page-hero-grid">
          <div>
            <p className="section-kicker">Tsenta · YC S26</p>
            <h1>We got tired of applying. So we made the browser do it.</h1>
          </div>
          <div>
            <p className="page-hero-copy">
              Tsenta finds matching jobs, prepares each application, submits
              it, and tracks the reply. The person stays in control.
            </p>
            <div className="actions">
              <a className="button button-primary" href={site.social.tsenta}>
                Try Tsenta <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href={site.social.yc}>
                YC profile <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="case-visual">
        <div className="shell">
          <figure className="product-shot product-shot-flat">
            <div className="window-bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <p>the application queue</p>
            </div>
            <Image
              src="/images/tsenta-dashboard.webp"
              alt="Tsenta dashboard with matched roles and controls for reviewing applications"
              width={1800}
              height={1064}
              priority
              sizes="(max-width: 900px) 94vw, 82vw"
            />
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="shell story-grid">
          <blockquote className="story-quote">
            “The alternative was another weekend lost to Workday.”
          </blockquote>
          <div className="long-copy">
            <p className="lead-copy">
              Tsenta began as founder frustration, not a market map.
            </p>
            <p>
              Pulkit and I were international students applying into a brutal
              market. Between us, we had sent more than 3,000 applications. We
              knew the ritual: find the role late, reshape the same resume, make
              another Workday account, and type the same facts again.
            </p>
            <p>
              We started building the precursor to Tsenta in 2025 from our
              Rose-Hulman dorm. The early product automated the form, but it
              also taught us the harder lesson: nobody wants a black box
              touching their career.
            </p>
            <p>
              We threw away months of work and rebuilt the experience around
              visibility, approval, and control. That version became Tsenta and
              joined Y Combinator&apos;s Summer 2026 batch.
            </p>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="shell split-heading">
          <div>
            <p className="section-kicker">The loop</p>
            <h2>Find. Prepare. Apply. Track.</h2>
          </div>
          <p>
            One agent across the whole search, with a visible handoff at every
            decision that matters.
          </p>
        </div>
        <ol className="shell process-list">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="trust-section">
        <div className="shell trust-grid">
          <p className="section-kicker">What changed everything</p>
          <blockquote>
            Trust is not a feature when software acts on your career.
            <strong> It is the product.</strong>
          </blockquote>
          <p>
            That means showing the resume changes, the form answers, and the
            submission state. Review it, edit it, pause it, or let it run.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell closing-grid">
          <div>
            <p className="section-kicker">Still building</p>
            <h2>Make the process disappear, without hiding what happened.</h2>
          </div>
          <div>
            <p>
              That is the bar for Tsenta and the broader thesis I am writing
              about: agents should earn delegation through clear, controllable
              work.
            </p>
            <div className="actions">
              <a className="button button-primary" href={site.social.tsenta}>
                Visit Tsenta
              </a>
              <Link className="text-link" href="/writing">
                Read the blog <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
