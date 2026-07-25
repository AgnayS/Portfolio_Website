import { getPosts } from "@/lib/posts";
import { absoluteUrl, site } from "@/lib/site";

export function GET() {
  const writing = getPosts()
    .map(
      (post) =>
        `- [${post.title}](${absoluteUrl(`/writing/${post.slug}`)}): ${post.description}`,
    )
    .join("\n");

  const content = `# Agnay Srivastava

> Co-founder and CEO of Tsenta (Y Combinator S26), building cost-effective AI agents that make people more capable.

## Primary pages

- [Home](${absoluteUrl("/")})
- [About](${absoluteUrl("/about")})
- [Tsenta story](${absoluteUrl("/tsenta")})
- [Blog](${absoluteUrl("/writing")})

## Current work

Agnay Srivastava and Pulkit Gupta built Tsenta after applying to more than 3,000 jobs manually. Tsenta finds matching roles, prepares applications, submits forms, and tracks replies while keeping the user in control.

## Blog

${writing}

## Verified profiles

- [Tsenta](${site.social.tsenta})
- [Y Combinator](${site.social.yc})
- [LinkedIn](${site.social.linkedin})
- [GitHub](${site.social.github})
- [X](${site.social.x})
- [Instagram](${site.social.instagram})
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "X-Robots-Tag": "noindex, follow",
    },
  });
}
