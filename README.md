# Council Fire Resources — Programmatic SEO Site

A Next.js 14 static site for **resources.councilfire.org** — Council Fire's sustainability knowledge hub.

## Architecture

- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** with custom earth-tone/forest/brand color palette
- **MDX content** parsed via `gray-matter` + `next-mdx-remote`
- **Static Site Generation** — all pages pre-rendered at build time
- **Dark/light mode** with system preference detection
- **Fuse.js** client-side fuzzy search across all content

## Content Sections

| Section | Route | Content Dir | Description |
|---------|-------|-------------|-------------|
| Glossary | `/glossary/[slug]` | `content/glossary/` | Sustainability terms & definitions |
| Comparisons | `/compare/[slug]` | `content/compare/` | Side-by-side framework comparisons |
| Locations | `/locations/[slug]` | `content/locations/` | Regional climate risk & regulations |
| Personas | `/for/[slug]` | `content/for/` | Role-based resource guides |
| Guides | `/guides/[slug]` | `content/guides/` | Framework & compliance guides |
| Industries | `/industries/[slug]` | `content/industries/` | Sector-specific sustainability |

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Production build + sitemap generation
npm start          # Serve production build
```

## Authoring Content

Create an `.mdx` file in the appropriate `content/` subdirectory:

```mdx
---
title: "Your Term Here"
description: "A one-sentence description for SEO meta tags."
category: "Reporting & Disclosure"
definition: "A 1-2 sentence definition shown in the highlighted box."
relatedTerms:
  - "Related Term 1"
  - "Related Term 2"
faqs:
  - question: "What is this?"
    answer: "This is the answer."
lastUpdated: "2025-01-15"
---

## Why It Matters

Your content here...

## How It Works

More content...

## Council Fire's Perspective

Brief section linking to CF services...
```

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✅ | Page title / term name |
| `description` | ✅ | SEO meta description |
| `category` | ❌ | Category for filtering |
| `definition` | ❌ | Quick definition (glossary) |
| `relatedTerms` | ❌ | Related glossary slugs |
| `relatedPages` | ❌ | Related pages in same section |
| `faqs` | ❌ | Array of {question, answer} |
| `lastUpdated` | ❌ | ISO date string |

## SEO Features

- **JSON-LD** structured data on every page (Organization, BreadcrumbList, DefinedTerm, FAQPage, Article)
- **Open Graph + Twitter Card** meta tags
- **Canonical URLs** on all pages
- **Auto-generated sitemap.xml** via `next-sitemap`
- **robots.txt** allowing all crawlers
- **Semantic HTML** with proper heading hierarchy

## Deployment

### Vercel (recommended)
```bash
npx vercel
```

### Docker
```bash
docker build -t cf-resources .
docker run -p 3000:3000 cf-resources
```

### Static Export
Change `next.config.js` output to `'export'` for fully static hosting (Netlify, S3, etc.).

## Color Palette

- **Brand** — Olive/sage greens (`brand-50` through `brand-950`)
- **Earth** — Warm browns and tans (`earth-50` through `earth-950`)
- **Forest** — Deep greens for accents and CTAs (`forest-50` through `forest-950`)

## License

Proprietary — Council Fire © 2025
