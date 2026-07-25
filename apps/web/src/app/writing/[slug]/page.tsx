import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { JsonLd } from "@/components/json-ld";
import { formatDate, getPost, getPosts } from "@/lib/posts";
import { absoluteUrl, site, siteUrl } from "@/lib/site";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const canonical = `/writing/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: site.name, url: siteUrl }],
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updatedAt ?? post.date,
      authors: [siteUrl],
      tags: post.tags,
      images: [
        {
          url: `${canonical}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${canonical}/opengraph-image`],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const canonical = absoluteUrl(`/writing/${post.slug}`);
  const postJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    url: canonical,
    mainEntityOfPage: canonical,
    image: absoluteUrl(`/writing/${post.slug}/opengraph-image`),
    author: {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: site.name,
      url: siteUrl,
    },
    publisher: {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: site.name,
    },
    keywords: post.tags.join(", "),
  };

  const { content } = await compileMDX({
    source: post.content,
    options: {
      parseFrontmatter: false,
      mdxOptions: { remarkPlugins: [remarkGfm] },
    },
  });

  return (
    <main id="main">
      <JsonLd data={postJsonLd} />
      <article>
        <header className="post-shell post-header">
          <Link className="back-link" href="/writing">
            ← All blog posts
          </Link>
          <div className="post-meta">
            <span>By {site.name}</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>{post.readingMinutes} min read</span>
          </div>
          <h1>{post.title}</h1>
          <p className="post-deck">{post.description}</p>
        </header>
        <div className="post-shell prose">{content}</div>
      </article>
    </main>
  );
}
