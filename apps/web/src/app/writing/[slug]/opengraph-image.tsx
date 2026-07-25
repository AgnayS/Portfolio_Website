import { ImageResponse } from "next/og";
import { getPost, getPosts } from "@/lib/posts";

export const alt = "Agnay Srivastava's blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export default async function PostOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#d7ed65",
          color: "#182234",
          padding: "56px 64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          <span>Agnay Srivastava</span>
          <span>Field notes</span>
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 1040,
            fontSize: post && post.title.length > 48 ? 74 : 92,
            fontWeight: 800,
            letterSpacing: "-5px",
            lineHeight: 0.96,
          }}
        >
          {post?.title ?? "Agnay Srivastava's blog"}
        </div>
        <div
          style={{
            display: "flex",
            width: 240,
            height: 16,
            background: "#f06c48",
            border: "3px solid #182234",
          }}
        />
      </div>
    ),
    size,
  );
}
