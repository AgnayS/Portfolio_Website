---
name: Agnay Srivastava
description: A bright, candid field desk for a founder building agents that do real work.
colors:
  field-paper: "oklch(97% 0.018 82)"
  field-paper-deep: "oklch(92% 0.032 82)"
  working-ink: "oklch(20% 0.035 255)"
  pencil-muted: "oklch(45% 0.04 255)"
  rule-line: "oklch(82% 0.03 82)"
  signal-coral: "oklch(69% 0.205 36)"
  signal-coral-dark: "oklch(62% 0.21 34)"
  system-blue: "oklch(48% 0.18 258)"
  system-blue-dark: "oklch(39% 0.15 258)"
  marker-acid: "oklch(86% 0.16 112)"
  clean-white: "oklch(99% 0.006 82)"
typography:
  display:
    fontFamily: "Geologica, Arial, sans-serif"
    fontSize: "clamp(4rem, 8.8vw, 8rem)"
    fontWeight: 760
    lineHeight: 0.86
    letterSpacing: "-0.075em"
  headline:
    fontFamily: "Geologica, Arial, sans-serif"
    fontSize: "clamp(3rem, 6vw, 6rem)"
    fontWeight: 720
    lineHeight: 0.94
    letterSpacing: "-0.06em"
  title:
    fontFamily: "Geologica, Arial, sans-serif"
    fontSize: "clamp(1.45rem, 3vw, 2.15rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Geologica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Geologica, Arial, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 690
    lineHeight: 1.2
    letterSpacing: "0.11em"
rounded:
  sm: "0.45rem"
  md: "1rem"
  lg: "1.75rem"
spacing:
  compact: "0.75rem"
  control: "1.25rem"
  block: "2.25rem"
  section: "clamp(5.5rem, 11vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.working-ink}"
    textColor: "{colors.clean-white}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.82rem 1.15rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.system-blue}"
    textColor: "{colors.clean-white}"
  button-light:
    backgroundColor: "{colors.clean-white}"
    textColor: "{colors.system-blue-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.82rem 1.15rem"
    height: "3.25rem"
  button-light-hover:
    backgroundColor: "{colors.marker-acid}"
    textColor: "{colors.system-blue-dark}"
---

# Design System: Agnay Srivastava

## 1. Overview

**Creative North Star: "The Builder's Field Desk"**

This site should feel like the working surface of a founder who ships: bright daylight, marked-up notes, a live product window, and decisions left visible. It is candid, restless, and precise. The large type carries conviction while compact supporting copy keeps the pace fast.

Color blocks and hard-edged artifacts create the energy. The system explicitly rejects the old cosmic 3D portfolio, generic AI founder aesthetics, default shadcn dashboards, resume dumps, and editorial-magazine affectations. Motion is responsive feedback, never spectacle.

**Key Characteristics:**

- Oversized, tightly set statements with short reading paths.
- Warm paper neutrals interrupted by decisive coral, blue, and acid fields.
- Flat surfaces with hard offset shadows only where an object should feel handled.
- Semantic, server-rendered content that stays useful without client-side JavaScript.
- Wide layouts that collapse into one clear mobile reading column.

## 2. Colors

The palette feels sunlit and physical: warm paper, dense blue-black ink, and three high-energy signals used in large, confident fields.

### Primary

- **Working Ink**: The default text, footer field, borders, and strongest button background.
- **System Blue**: The Tsenta product field and primary hover response.

### Secondary

- **Signal Coral**: Founder portrait geometry, about callout surfaces, and emphasis with human warmth.
- **Signal Coral Dark**: Reserved for a deeper coral state when the base coral needs separation.

### Tertiary

- **Marker Acid**: Selection color, annotations, highlighted words, and light-button hover. It behaves like a physical highlighter, not a general background.

### Neutral

- **Field Paper**: The default page canvas.
- **Field Paper Deep**: Alternate sections that need separation without elevation.
- **Clean White**: High-contrast copy and controls on saturated or dark fields.
- **Pencil Muted**: Supporting copy, metadata, and quiet navigation.
- **Rule Line**: One-pixel dividers and list boundaries.

### Named Rules

**The Printed Signal Rule.** Coral, blue, and acid must appear as clear fields or marks. Never soften them into gradients or translucent glows.

**The Ink First Rule.** Working Ink carries the interface. Accent colors clarify hierarchy; they never compete equally on every surface.

## 3. Typography

**Display Font:** Geologica (with Arial and sans-serif fallback)
**Body Font:** Geologica (with Arial and sans-serif fallback)

**Character:** One variable sans family keeps the product and personal voice connected. Tight, heavy headlines feel direct; calmer body settings remain easy to read.

### Hierarchy

- **Display** (760, `clamp(4rem, 8.8vw, 8rem)`, 0.86): Home hero statements only.
- **Headline** (720, `clamp(3rem, 6vw, 6rem)`, 0.94): Page heroes and major section claims.
- **Title** (700, `clamp(1.45rem, 3vw, 2.15rem)`, 1.1): Article and project titles.
- **Body** (400, `1rem`, 1.6): General copy, with long-form prose capped near 68 characters.
- **Label** (690, `0.78rem`, `0.11em`, uppercase): Eyebrows, section kickers, and compact metadata.

### Named Rules

**The One Voice Rule.** Do not introduce a second font for novelty. Contrast comes from scale, weight, color, and spacing.

**The Short Shout Rule.** Display type must stay concise. If a headline needs more than roughly twelve words, move the explanation into body copy.

## 4. Elevation

The system is flat by default. Depth comes from color adjacency, one-pixel rules, and layout. Hard offset shadows make only a few physical artifacts, such as the product window and portrait card, feel lifted from the desk.

### Shadow Vocabulary

- **Product Window** (`12px 14px 0 var(--ink)`): The featured Tsenta interface on a saturated field.
- **Portrait Card** (`9px 10px 0 var(--ink)`): The about-page photo artifact.
- **Memory Photo** (`6px 7px 0 var(--ink)`): Small founder photos layered into the home portrait collage.
- **Pinned Note** (`4px 4px 0 var(--ink)`): Small annotations attached to the founder portrait.

### Named Rules

**The Physical Object Rule.** Shadows are solid ink offsets with no blur. If an element is not meant to feel like a printed card, photograph, or browser window, it stays flat.

## 5. Components

Components should feel tactile and decisive, with compact radii, visible focus, and no ornamental chrome.

### Buttons

- **Shape:** Gently cut corners (`0.45rem`) and a minimum height of `3.25rem`.
- **Primary:** Working Ink on Clean White, with `0.82rem 1.15rem` padding.
- **Hover / Focus:** Lift by `3px`, shift to System Blue, and retain the global `3px` Signal Coral focus outline with `4px` offset.
- **Light:** Clean White on System Blue Dark, shifting to Marker Acid on hover.

### Cards / Containers

- **Corner Style:** Small or medium radius only (`0.45rem` or `1rem`).
- **Background:** Use Field Paper, Field Paper Deep, or a committed color field.
- **Shadow Strategy:** Flat unless the container is a physical artifact defined in Elevation.
- **Border:** One-pixel rules for lists; two-pixel Working Ink borders for product and portrait artifacts.
- **Internal Padding:** Compact and responsive, typically `1rem` to `2.25rem`.

### Navigation

- **Style:** A plain, full-width paper bar with one bottom rule. The full name is the wordmark; no badge or emblem competes with it.
- **States:** Pencil Muted links become Working Ink on hover; keyboard focus always uses the global coral outline.
- **Mobile:** Keep the full name and the same links visible in one row. No menu JavaScript is needed.

### Project Rows

- **Style:** Projects are full-width rows, not repeated cards. Each row pairs an index, project, concrete description, date, and outbound arrow.
- **State:** The whole row becomes Marker Acid and tightens inward on hover.

### Product Window

- **Style:** A two-pixel ink frame, medium radius, acid browser bar, and real product capture.
- **State:** It remains static. The product is the evidence, so decorative animation is prohibited.

### Founder Collage

- **Style:** One bright portrait anchors two smaller, slightly rotated founder photos from the current Tsenta chapter.
- **State:** The collage remains static. Hard borders and offset shadows create the physical layering.
- **Source:** Use owned or first-party public images and keep descriptive alternative text on every photo.

## 6. Do's and Don'ts

### Do:

- **Do** lead with Tsenta and the work happening now.
- **Do** use large Geologica headlines with aggressive tracking only for short, high-confidence statements.
- **Do** use Signal Coral, System Blue, and Marker Acid as solid, intentional fields.
- **Do** preserve semantic HTML, visible keyboard focus, AA contrast, useful alternative text, and reduced-motion behavior.
- **Do** keep blog layouts quiet, narrow, and readable while reusing the same type and color tokens.
- **Do** use real product captures and verified public facts as evidence.

### Don't:

- **Don't** recreate the old cosmic 3D portfolio, technology icon clouds, animated skill cards, or tutorial-template visuals.
- **Don't** use generic AI founder styling: black backgrounds, purple gradients, glass panels, glowing orbs, or vague claims about changing the world.
- **Don't** turn the site into a default shadcn dashboard disguised as a portfolio.
- **Don't** add resume dumps, fake testimonials, vanity metrics, or unverified impact claims.
- **Don't** use editorial-magazine affectations that make a builder look like a fashion publication.
- **Don't** add blurred ambient shadows, gradient text, hidden mobile navigation, or animation that delays reading.
