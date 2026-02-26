/**
 * Cross-linking system for internal resource pages.
 * Generates "Explore More Resources" links across sections
 * and "Related in this section" links within sections.
 */

import { getAllContent, type ContentItem } from './content';

interface CrossLink {
  title: string;
  href: string;
  section: string;
  sectionLabel: string;
}

const sectionLabels: Record<string, string> = {
  glossary: 'Glossary',
  compare: 'Comparison',
  locations: 'Location',
  guides: 'Guide',
  industries: 'Industry',
  for: 'For You',
};

const SECTIONS = ['glossary', 'compare', 'locations', 'guides', 'industries', 'for'];

// Extract keywords from title and description
function extractKeywords(title: string, description: string): string[] {
  const stop = new Set(['the', 'a', 'an', 'in', 'of', 'for', 'and', 'or', 'to', 'is', 'vs', 'key', 'differences', 'explained', 'what', 'how', 'why', 'your', 'you', 'are', 'its', 'it', 'by', 'on', 'at', 'with', 'from', 'that', 'this', 'be', 'as', 'do', 'not', 'all', 'has', 'have', 'their', 'our', 'can', 'will', 'more', 'into', 'between', 'about']);
  const text = `${title} ${description}`.toLowerCase();
  const words = text.replace(/[^a-z0-9\s-]/g, '').split(/\s+/).filter(w => w.length > 2 && !stop.has(w));
  // Also extract bigrams
  const bigrams: string[] = [];
  for (let i = 0; i < words.length - 1; i++) {
    bigrams.push(`${words[i]} ${words[i + 1]}`);
  }
  return [...new Set([...words, ...bigrams])];
}

function computeRelevance(kw1: string[], kw2: string[]): number {
  const set2 = new Set(kw2);
  let score = 0;
  for (const kw of kw1) {
    if (set2.has(kw)) {
      score += kw.includes(' ') ? 3 : 1; // bigrams worth more
    }
  }
  return score;
}

let cachedIndex: { item: ContentItem; section: string; keywords: string[] }[] | null = null;

function getIndex() {
  if (cachedIndex) return cachedIndex;
  cachedIndex = [];
  for (const section of SECTIONS) {
    for (const item of getAllContent(section)) {
      cachedIndex.push({
        item,
        section,
        keywords: extractKeywords(item.meta.title, item.meta.description || ''),
      });
    }
  }
  return cachedIndex;
}

/**
 * Get cross-section links for a page (Improvement #1).
 * Returns pages from OTHER sections that are relevant.
 */
export function getCrossSectionLinks(
  currentSection: string,
  currentSlug: string,
  title: string,
  description: string,
  maxResults = 6,
): CrossLink[] {
  const myKeywords = extractKeywords(title, description);
  const index = getIndex();

  const scored = index
    .filter(e => !(e.section === currentSection && e.item.meta.slug === currentSlug))
    .filter(e => e.section !== currentSection) // cross-section only
    .map(e => ({
      ...e,
      score: computeRelevance(myKeywords, e.keywords),
    }))
    .filter(e => e.score >= 2)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults);

  return scored.map(e => ({
    title: e.item.meta.title,
    href: `/${e.section}/${e.item.meta.slug}`,
    section: e.section,
    sectionLabel: sectionLabels[e.section] || e.section,
  }));
}

/**
 * Get same-section related pages (Improvement #6).
 * Returns pages from the SAME section that are related.
 */
export function getSameSectionLinks(
  section: string,
  currentSlug: string,
  title: string,
  description: string,
  maxResults = 4,
): CrossLink[] {
  const myKeywords = extractKeywords(title, description);
  const index = getIndex();

  const scored = index
    .filter(e => e.section === section && e.item.meta.slug !== currentSlug)
    .map(e => ({
      ...e,
      score: computeRelevance(myKeywords, e.keywords),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults);

  return scored.map(e => ({
    title: e.item.meta.title,
    href: `/${e.section}/${e.item.meta.slug}`,
    section: e.section,
    sectionLabel: sectionLabels[e.section] || e.section,
  }));
}
