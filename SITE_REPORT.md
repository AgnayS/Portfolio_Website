# Portfolio rebuild report

## Outcome

The former Vite portfolio has been replaced with a small Next.js workspace built around the person Agnay is now: co-founder and CEO of Tsenta, a Y Combinator S26 company, with a first-class place to publish.

The old site carried 22.2 MiB of tracked files, dominated by two 3D scenes, dozens of textures, technology icons, and animation libraries. The new public asset set is 372 KiB: two optimized portraits, two current founder photos, and one real Tsenta product capture. Direct dependencies fell from 21 to 10, including development dependencies.

The replacement is intentionally not a component-library showcase. It uses React, Next.js, native CSS, and MDX. There is no Three.js, animation runtime, Tailwind, shadcn, icon package, CMS, analytics SDK, or contact-form service.

## Information architecture

### Home

1. **Current identity:** Agnay as the co-founder and CEO of Tsenta, with rotating statements about leverage, lived problems, useful economics, and the zero-maintenance Codex build.
2. **Working principle:** AI as a force multiplier for people.
3. **Work experience, unredacted:** The owner-supplied $27/hour VIAVI story and the missing return offer that pushed the job-search problem into Tsenta.
4. **Tsenta feature:** The main company story, the founders' lived problem, and a real product capture.
5. **Selected builds:** Four projects that show a pattern of shipping across products and systems, not a cloud of technologies.
6. **Latest blog posts:** A live feed from versioned MDX posts.
7. **Contact:** A direct 30-minute Cal link plus LinkedIn, GitHub, X, and Instagram.

### `/tsenta`

A focused founder case study rather than a second marketing landing page:

- Why 3,000-plus manual applications created the company.
- Why the first automation-first product was not good enough.
- The Find, Prepare, Apply, Track loop.
- The decision to make visibility and control part of the product architecture.
- Direct paths to Tsenta and its Y Combinator profile.

### `/about`

- A short personal narrative.
- A compressed, selective timeline.
- Three operating principles.
- Verified first-party and press links.

This is not a copied resume. The page keeps only details that explain how Agnay builds now.

### `/writing` (labeled Blog)

- A minimal index with dates, summaries, tags, and reading time.
- Static, server-rendered MDX article pages.
- The first post explains the reason for replacing the old portfolio and establishes the themes for future writing.

## Content direction

The main editorial territory should stay close to firsthand work:

- Browser agents and the reliability problems behind them.
- Product trust, human control, and visible automation.
- Decisions and discarded systems from building Tsenta.
- Startup infrastructure that mattered earlier or later than expected.
- The economics of software that performs real work.
- Occasional personal notes about learning, building, and moving from Mumbai to Indiana to San Francisco.

The strongest future sections are earned by real material:

- **`/now`:** Add when a short quarterly update can be maintained.
- **Talks and interviews:** Add after three or more useful appearances exist.
- **A small lab notebook:** Add when experiments are frequent enough to differ from essays.
- **Email subscription:** Add when writing has a repeat cadence and an audience asking for it.

I would not add a skills cloud, testimonial carousel, generic services section, public phone number, contact form, or vanity-stat strip. Those would make the site longer without making Agnay more legible.

## Public facts used

The copy uses facts with a clear public source:

- Agnay Srivastava is the co-founder and CEO of Tsenta, in Y Combinator's Summer 2026 batch.
- Tsenta is based in San Francisco and was founded by Agnay Srivastava and Pulkit Gupta.
- The founders applied to more than 3,000 jobs between them before building the product.
- The precursor was started in 2025; the site avoids making a disputed claim about Tsenta's formal founding date.
- Agnay graduated from Rose-Hulman Institute of Technology in 2026 with a B.S. in Computer Science, magna cum laude.
- The selected project and experience notes are limited to public, attributable claims.

The $27/hour rate, missing VIAVI return offer, and its role in the Tsenta origin story come directly from Agnay's instructions for this site. They are treated as owner-supplied first-person facts, not employer claims.

Primary profile links:

- [Y Combinator: Tsenta](https://www.ycombinator.com/companies/tsenta)
- [LinkedIn: Agnay Srivastava](https://www.linkedin.com/in/agnay/)
- [GitHub: AgnayS](https://github.com/AgnayS)
- [X: Agnay Srivastava](https://x.com/AgnaySrivastava)
- [Instagram: Agnay Srivastava](https://www.instagram.com/agnaysr/)
- [Tsenta](https://tsenta.com)

Supporting coverage:

- [Rose-Hulman: Student startup earns a place in Y Combinator](https://www.rose-hulman.edu/news/2026/rose-hulman-student-startup-earns-spot-at-y-combinator-accelerator-500k-in-funding.html)
- [YourStory: Making job applications faster, smarter, and less manual](https://yourstory.com/2026/06/tsenta-wants-to-make-job-applications-faster-smarter-less-manual)
- [Moneycontrol: From 3,000 applications to an AI job-search company](https://www.moneycontrol.com/news/trends/applied-to-3-000-jobs-got-10-interviews-indian-founders-build-ai-to-fix-hiring-raise-rs-5-crore-13961381.html)

The updated headshot was downloaded from Agnay's current LinkedIn profile. The two founder photos in the home collage come from Tsenta's public Y Combinator company page and are stored locally rather than hotlinked.

## Claims deliberately excluded

- Volatile user, application, or integration counts.
- Pricing and plan details.
- Stale impact metrics without a durable first-party source.
- A private phone number or personal email found in old material.
- Generic claims that Tsenta is the first, best, or most advanced product.
- Quotes presented as customer testimonials without verifiable attribution.

These can be added later from a maintained source of truth. They should not be frozen into a personal site from search snippets or old decks.

## Design direction

The creative direction is **The Builder's Field Desk**: warm paper, dense working ink, bright marker colors, hard-edged product artifacts, unusually large rotating statements, and a layered founder-photo collage. It should feel like decisions being made in daylight, not an AI company floating in space.

The system uses one variable family, Geologica, to connect product and personal writing. Coral provides human energy, blue belongs to Tsenta, and acid acts like a physical annotation. Most surfaces are flat. Hard offset shadows are reserved for the portrait, pinned notes, and the product window.

The design intentionally rejects:

- The previous cosmic 3D scene and animated technology inventory.
- Black and purple AI gradients, glass panels, glowing orbs, and vague future-speak.
- Default shadcn cards arranged into a portfolio.
- A fashion-editorial treatment that overwhelms the work.

The full token and component specification is in `DESIGN.md`.

## SEO and publishing implementation

The useful production patterns from `autojobs-landing` were carried over and simplified for a personal site:

- Next.js Metadata API with a production `metadataBase`.
- A unique title, description, canonical URL, and social metadata for every route.
- ProfilePage, Person, WebSite, SoftwareApplication, and BlogPosting structured data.
- JSON-LD output escaped before injection.
- Static MDX generation with validated frontmatter and duplicate-slug protection.
- Per-post Open Graph images.
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, and `llms.txt`.
- Semantic server-rendered content that does not require client-side JavaScript.
- Security headers for content sniffing, framing, referrers, camera, microphone, and geolocation.

Patterns that were intentionally not copied:

- Marketing analytics and ad pixels.
- Keyword meta tags.
- Sitemap sharding for a site with a handful of routes.
- Duplicate schema graphs and FAQ schema without an FAQ.
- Large crawler allowlists.
- `ai.txt`, `humans.txt`, or a second full-content LLM feed.
- A CMS before Git-based publishing becomes painful.
- An RSS feed the owner does not want to maintain or promote.

## Architecture

The root is a Bun workspace, and the site lives in `apps/web`. This is enough structure to add a second app or a genuinely shared package later without paying for Turborepo configuration today.

The canonical commands are:

```bash
bun install
bun dev
bun check
bun audit
```

`bun check` runs the MDX integrity test, TypeScript, and the production build. The package manager is pinned in `package.json`, and `bun.lock` is committed for reproducibility.

## Owner review

Three items deserve a quick human read before launch:

1. Read the first post in your own voice and change any line you would not naturally say.
2. Replace the GitHub portrait later if you have a higher-resolution image you like more.

None of these block the implementation or deployment.
