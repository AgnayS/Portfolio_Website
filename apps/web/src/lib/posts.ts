import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/writing");

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedAt?: string;
  tags: string[];
  published: boolean;
  readingMinutes: number;
  content: string;
};

function parsePost(filename: string): Post {
  const raw = fs.readFileSync(path.join(postsDirectory, filename), "utf8");
  const { data, content } = matter(raw);
  const slug = filename.replace(/\.mdx$/, "");

  if (
    typeof data.title !== "string" ||
    typeof data.description !== "string" ||
    typeof data.date !== "string" ||
    Number.isNaN(Date.parse(data.date))
  ) {
    throw new Error(
      `${filename} needs a string title, description, and valid ISO date.`,
    );
  }

  if (data.updatedAt && Number.isNaN(Date.parse(data.updatedAt))) {
    throw new Error(`${filename} has an invalid updatedAt date.`);
  }

  const words = content.trim().split(/\s+/).filter(Boolean).length;

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    updatedAt: typeof data.updatedAt === "string" ? data.updatedAt : undefined,
    tags: Array.isArray(data.tags)
      ? data.tags.filter((tag): tag is string => typeof tag === "string")
      : [],
    published: data.published !== false,
    readingMinutes: Math.max(1, Math.ceil(words / 220)),
    content,
  };
}

export function getPosts({ includeDrafts = false } = {}) {
  if (!fs.existsSync(postsDirectory)) {
    throw new Error(`Writing directory not found: ${postsDirectory}`);
  }

  const posts = fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".mdx"))
    .map(parsePost)
    .filter((post) => includeDrafts || post.published)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  if (new Set(posts.map((post) => post.slug)).size !== posts.length) {
    throw new Error("Writing slugs must be unique.");
  }

  return posts;
}

export function getPost(slug: string) {
  return getPosts().find((post) => post.slug === slug) ?? null;
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}
