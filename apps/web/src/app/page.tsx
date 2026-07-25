import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { formatDate, getPosts } from "@/lib/posts";
import {
  absoluteUrl,
  selectedBuilds,
  site,
  siteUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: site.title,
    description: site.description,
  },
};

export default function HomePage() {
  const posts = getPosts().slice(0, 3);

  const profileJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: site.title,
        description: site.description,
        mainEntity: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: site.name,
        url: siteUrl,
        image: absoluteUrl("/images/agnay-headshot.webp"),
        jobTitle: "Co-founder and CEO of Tsenta",
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Rose-Hulman Institute of Technology",
          url: "https://www.rose-hulman.edu",
        },
        worksFor: {
          "@type": "Organization",
          name: "Tsenta",
          url: site.social.tsenta,
        },
        sameAs: [
          site.social.tsenta,
          site.social.yc,
          site.social.linkedin,
          site.social.github,
          site.social.x,
          site.social.instagram,
        ],
        knowsAbout: [
          "AI agents",
          "browser automation",
          "software systems",
          "product engineering",
          "startups",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: site.name,
        description: site.description,
        publisher: { "@id": `${siteUrl}/#person` },
      },
    ],
  };

  return (
    <main id="main">
      <JsonLd data={profileJsonLd} />

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              Agnay Srivastava ·{" "}
              <a href={site.social.yc}>Co-founder &amp; CEO, Tsenta (S26)</a>
            </p>
            <h1>
              <span className="sr-only">
                AI agents should make people more capable by solving problems
                they have actually lived.
              </span>
              <span className="headline-rotator" aria-hidden="true">
                <span>AI should make one person wildly more capable.</span>
                <span>I build what my friends and I wish existed.</span>
                <span>Useful software should save more than it costs.</span>
                <span>Codex built this site. I maintain none of it.</span>
              </span>
            </h1>
            <p className="hero-lede">
              Agents should help one person do far more without spending far
              more. I start with problems I or people close to me have actually
              felt, then build the simplest useful way out. Right now, that is
              Tsenta.
            </p>
            <div className="actions">
              <Link className="button button-primary" href="/tsenta">
                See what I&apos;m building
                <span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link" href="/writing">
                Read the blog <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="portrait-stage">
            <div className="portrait-shape" aria-hidden="true" />
            <Image
              className="portrait portrait-main"
              src="/images/agnay.png"
              alt="Agnay Srivastava looking to the side against a bright geometric background"
              width={460}
              height={460}
              priority
              sizes="(max-width: 900px) 72vw, 38vw"
            />
            <Image
              className="portrait-memory portrait-memory-team"
              src="/images/agnay-pulkit-sf.webp"
              alt="Agnay Srivastava and Pulkit Gupta in San Francisco with the Golden Gate Bridge behind them"
              width={500}
              height={340}
              sizes="(max-width: 900px) 48vw, 20vw"
            />
            <Image
              className="portrait-memory portrait-memory-yc"
              src="/images/tsenta-yc.webp"
              alt="Agnay Srivastava and Pulkit Gupta standing behind the Y Combinator sign"
              width={500}
              height={375}
              sizes="(max-width: 900px) 42vw, 17vw"
            />
            <p className="portrait-note portrait-note-top">YC S26</p>
          </div>
        </div>
      </section>

      <section className="statement-band" aria-label="Working principle">
        <div className="shell statement-grid">
          <p className="statement-number" aria-hidden="true">
            01
          </p>
          <p>
            AI is a force multiplier.
            <span> The win is more capable people.</span>
          </p>
        </div>
      </section>

      <section className="origin-section">
        <div className="shell origin-grid">
          <div>
            <p className="section-kicker">Work experience, unredacted</p>
            <p className="origin-rate">
              <strong>$27</strong>
              <span>/ hour</span>
            </p>
          </div>
          <div className="origin-copy">
            <h2>Great internship. No return offer. Better problem.</h2>
            <p>
              In summer 2025, VIAVI paid me to build systems software. I
              learned a lot. I did not get the return offer. So I stopped
              treating the job hunt as a rite of passage and started treating
              it as a product problem. That turn became Tsenta.
            </p>
            <Link className="text-link" href="/about">
              See the unredacted résumé <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section tsenta-feature" id="tsenta">
        <div className="shell">
          <div className="feature-heading">
            <p className="section-kicker">Building now</p>
            <h2>Job hunting, on autopilot.</h2>
            <p>
              Pulkit and I applied to more than 3,000 jobs by hand. Tsenta is
              the agent we wished existed: it finds the role, prepares the
              application, submits it, and keeps every step visible.
            </p>
            <div className="actions">
              <Link className="button button-light" href="/tsenta">
                The Tsenta story
              </Link>
              <a className="text-link text-link-light" href={site.social.tsenta}>
                Visit tsenta.com <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <figure className="product-shot">
            <div className="window-bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <p>tsenta.com</p>
            </div>
            <Image
              src="/images/tsenta-dashboard.webp"
              alt="Tsenta dashboard showing matched jobs and application controls"
              width={1800}
              height={1064}
              sizes="(max-width: 900px) 94vw, 82vw"
            />
            <figcaption>
              Transparent by design. You can review, edit, pause, or watch the
              agent work.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section builds-section">
        <div className="shell split-heading">
          <div>
            <p className="section-kicker">Selected builds</p>
            <h2>A habit of making the thing.</h2>
          </div>
          <p>
            From a processor and a cafeteria app to an agent that applies for
            jobs. Different scale, same instinct.
          </p>
        </div>
        <div className="shell build-list">
          {selectedBuilds.map((build, index) => (
            <a className="build-row" href={build.href} key={build.title}>
              <span className="build-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="build-title">
                <strong>{build.title}</strong>
                <small>{build.note}</small>
              </span>
              <span className="build-description">{build.description}</span>
              <span className="build-year">{build.year}</span>
              <span className="build-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="section writing-section">
        <div className="shell split-heading">
          <div>
            <p className="section-kicker">Blog</p>
            <h2>What I&apos;m learning in public.</h2>
          </div>
          <Link className="text-link" href="/writing">
            View the blog <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="shell post-list">
          {posts.map((post) => (
            <article className="post-row" key={post.slug}>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <div>
                <h3>
                  <Link href={`/writing/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.description}</p>
              </div>
              <p className="read-time">{post.readingMinutes} min read</p>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}
