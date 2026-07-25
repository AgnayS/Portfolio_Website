import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["/", "/about", "/tsenta", "/writing"].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : 0.8,
  }));

  const posts = getPosts().map((post) => ({
    url: absoluteUrl(`/writing/${post.slug}`),
    lastModified: new Date(post.updatedAt ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...posts];
}
