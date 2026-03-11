import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export interface ContentMeta {
  slug: string;
  title: string;
  description: string;
  category?: string;
  relatedTerms?: string[];
  relatedPages?: string[];
  lastUpdated?: string;
  [key: string]: unknown;
}

export interface ContentItem {
  meta: ContentMeta;
  content: string;
}

export function getContentSlugs(section: string): string[] {
  const dir = path.join(contentDir, section);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getContentBySlug(section: string, slug: string): ContentItem | null {
  const filePath = path.join(contentDir, section, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return {
    meta: { slug, ...data } as ContentMeta,
    content,
  };
}

export function getAllContent(section: string): ContentItem[] {
  return getContentSlugs(section)
    .map((slug) => getContentBySlug(section, slug)!)
    .filter(Boolean)
    .sort((a, b) => a.meta.title.localeCompare(b.meta.title));
}

export function getAllContentForSearch(): { title: string; slug: string; section: string; description: string }[] {
  const sections = ['glossary', 'compare', 'locations', 'for', 'guides', 'industries', 'regulations', 'how-to', 'case-studies', 'frameworks'];
  const items: { title: string; slug: string; section: string; description: string }[] = [];
  for (const section of sections) {
    for (const item of getAllContent(section)) {
      items.push({
        title: item.meta.title,
        slug: item.meta.slug,
        section,
        description: item.meta.description || '',
      });
    }
  }
  return items;
}

// Cache for slug→title lookups (built once at build time)
let _slugTitleMap: Map<string, string> | null = null;

/**
 * Build a map of "section/slug" → title for all content across all sections.
 * Also maps plain "slug" → title for glossary terms.
 */
function getSlugTitleMap(): Map<string, string> {
  if (_slugTitleMap) return _slugTitleMap;
  const sections = ['glossary', 'compare', 'locations', 'for', 'guides', 'industries', 'regulations', 'how-to', 'case-studies', 'frameworks'];
  const map = new Map<string, string>();
  for (const section of sections) {
    for (const item of getAllContent(section)) {
      // Cross-section key: "frameworks/gri-standards" → "GRI Standards"
      map.set(`${section}/${item.meta.slug}`, item.meta.title);
      // Plain slug key (may collide across sections, last write wins — fine for fallback)
      map.set(item.meta.slug, item.meta.title);
    }
  }
  _slugTitleMap = map;
  return map;
}

/**
 * Resolve a related page reference to { title, href }.
 * Handles both cross-section ("frameworks/gri-standards") and same-section ("sustainable-finance") formats.
 */
export function resolveRelatedPage(ref: string, currentSection: string): { title: string; href: string } {
  const map = getSlugTitleMap();

  // Normalize: convert title-cased refs like "CSRD" or "Scope 3 Emissions" to slug form
  const slugified = ref.toLowerCase().replace(/[\s()]+/g, '-');

  if (ref.includes('/')) {
    // Cross-section ref like "frameworks/gri-standards"
    const title = map.get(ref) || map.get(slugified) || slugToFallbackTitle(ref.split('/').pop() || ref);
    const href = `/${slugified}`;
    return { title, href };
  }

  // Same-section ref like "sustainable-finance" or title-cased "Double Materiality"
  const sectionKey = `${currentSection}/${ref}`;
  const sectionKeySlug = `${currentSection}/${slugified}`;
  const title = map.get(sectionKey) || map.get(sectionKeySlug) || map.get(ref) || map.get(slugified) || slugToFallbackTitle(ref);
  return { title, href: `/${currentSection}/${slugified}` };
}

/** Convert a slug to a human-readable fallback title (e.g. "gri-standards" → "Gri Standards") */
function slugToFallbackTitle(slug: string): string {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
