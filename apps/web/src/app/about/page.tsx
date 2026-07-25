import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { experience, press, site, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Agnay Srivastava is a builder from Mumbai and co-founder and CEO of Tsenta (YC S26), working on cost-effective AI agents in San Francisco.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About Agnay Srivastava",
    description:
      "Builder from Mumbai, Rose-Hulman graduate, and co-founder and CEO of Tsenta (YC S26).",
  },
};

export default function AboutPage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: site.name,
    url: siteUrl,
    jobTitle: "Co-founder and CEO of Tsenta",
    sameAs: [
      site.social.tsenta,
      site.social.yc,
      site.social.linkedin,
      site.social.github,
      site.social.x,
      site.social.instagram,
    ],
  };

  return (
    <main id="main">
      <JsonLd data={personJsonLd} />

      <header className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <p className="section-kicker">About</p>
            <h1>I make software for things people stopped questioning.</h1>
          </div>
          <p className="page-hero-copy">
            I&apos;m Agnay, a builder from Mumbai now working on Tsenta in San
            Francisco. I like ambitious products, boring infrastructure, and
            deleting repetitive work.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="shell bio-grid">
          <figure className="about-portrait">
            <Image
              src="/images/agnay-headshot.webp"
              alt="Agnay Srivastava smiling against a light background"
              width={400}
              height={400}
              priority
              sizes="(max-width: 900px) 88vw, 34vw"
            />
            <figcaption>Mumbai → Terre Haute → San Francisco</figcaption>
          </figure>
          <div className="long-copy">
            <p>
              I graduated magna cum laude in Computer Science from Rose-Hulman
              in 2026. Along the way I worked across systems, MLOps, medical
              imaging, and product engineering. The useful throughline was not
              a particular stack. It was learning how to make software survive
              contact with real people and real constraints.
            </p>
            <p>
              Tsenta started with a problem my co-founder Pulkit and I knew too
              well. Between us, we had applied to more than 3,000 jobs. We were
              losing weekends to the same fields, the same accounts, and the
              same uncertainty about what happened after submit.
            </p>
            <p>
              We built the first version for ourselves in 2025, rebuilt it
              around trust and control, and joined Y Combinator&apos;s Summer
              2026 batch. Today I&apos;m focused on agents that can do meaningful
              work without turning the person using them into a passenger.
            </p>
            <p>
              That is still my filter. I want problems that I have felt myself,
              or that someone close enough to text me at midnight has felt.
              Lived frustration is a better product brief than a trend report.
            </p>
            <p>
              Away from Tsenta, there is usually an overbuilt home server, an
              Arch Linux machine, a side project, or a barbell nearby.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="shell content-grid">
          <div>
            <p className="section-kicker">Work experience, unredacted</p>
            <h2>The résumé leaves out the useful part.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <div className="timeline-item" key={item.title}>
                <time>{item.period}</time>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell content-grid">
          <h2>Operating principles.</h2>
          <ol className="principle-list">
            <li>
              <span>01</span>
              <div>
                <h3>Build for a memory of yourself.</h3>
                <p>
                  Or build for someone close enough to call when it breaks. The
                  sharpest product judgment starts with a problem you have
                  actually lived.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Trust is part of the architecture.</h3>
                <p>
                  If software acts on someone&apos;s career, money, or identity,
                  visibility and control are core behavior.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Useful beats impressive.</h3>
                <p>
                  A small thing that works every day matters more than a demo
                  built to win one room.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section press-section">
        <div className="shell content-grid">
          <h2>Elsewhere.</h2>
          <div className="link-list">
            {press.map((item) => (
              <a href={item.href} key={item.source}>
                <small>{item.source}</small>
                <strong>{item.title}</strong>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
