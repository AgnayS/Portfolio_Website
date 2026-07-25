import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { formatDate, getPosts } from "@/lib/posts";
import { site, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Agnay Srivastava's blog on building Tsenta, trustworthy AI agents, browser automation, and startup engineering.",
  alternates: { canonical: "/writing" },
  openGraph: {
    url: "/writing",
    title: "Agnay Srivastava's blog",
    description:
      "Notes on building Tsenta, trustworthy agents, browser automation, and startup engineering.",
  },
};

export default function WritingPage() {
  const posts = getPosts();
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteUrl}/writing#blog`,
    url: `${siteUrl}/writing`,
    name: `${site.name}'s blog`,
    description: metadata.description,
    author: { "@id": `${siteUrl}/#person` },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${siteUrl}/writing/${post.slug}`,
      datePublished: post.date,
    })),
  };

  return (
    <main id="main">
      <JsonLd data={blogJsonLd} />

      <header className="page-hero writing-hero">
        <div className="shell page-hero-grid">
          <div>
            <p className="section-kicker">Blog</p>
            <h1>Notes from the build.</h1>
          </div>
          <p className="page-hero-copy">
            Tsenta, browser agents, product trust, infrastructure, and the
            mistakes worth writing down before I repeat them.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="shell writing-index">
          {posts.length ? (
            posts.map((post, index) => (
              <article className="writing-card" key={post.slug}>
                <p className="writing-number">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <p className="post-meta">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>{post.readingMinutes} min read</span>
                  </p>
                  <h2>
                    <Link href={`/writing/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p>{post.description}</p>
                  {post.tags.length > 0 && (
                    <ul className="tag-list" aria-label="Topics">
                      {post.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <Link
                  className="writing-arrow"
                  href={`/writing/${post.slug}`}
                  aria-label={`Read ${post.title}`}
                >
                  ↗
                </Link>
              </article>
            ))
          ) : (
            <p className="empty-state">The first note is on its way.</p>
          )}
        </div>
      </section>
    </main>
  );
}
