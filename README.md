# Agnay Srivastava

Personal site and writing home for Agnay Srivastava, co-founder and CEO of Tsenta (YC S26).

## Run locally

Requires [Bun](https://bun.sh/) 1.3.14 or newer.

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Check the site

```bash
bun check
bun audit
```

`bun check` runs the content test, TypeScript, and a production build.

## Publish a post

Add an `.mdx` file to `apps/web/content/writing`:

```mdx
---
title: "A useful title"
description: "A concise summary for search and social previews."
date: "2026-07-24"
updatedAt: "2026-07-24"
tags:
  - agents
  - building
---

Write the post here.
```

The filename becomes the URL slug. For example, `trust-is-the-product.mdx` becomes `/writing/trust-is-the-product`. `updatedAt` is optional.

## Structure

```text
apps/web/
  content/writing/        MDX posts
  public/images/          Optimized source images
  scripts/                Small content integrity test
  src/app/                Next.js routes and SEO endpoints
  src/components/         Shared site shell
  src/lib/                Site facts and post loading
```

Set `NEXT_PUBLIC_SITE_URL` to the production origin in the deployment environment. The default is `https://agnaysrivastava.com`.

See [SITE_REPORT.md](./SITE_REPORT.md) for the content and SEO decisions, and [DESIGN.md](./DESIGN.md) for the visual system.
