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
  const sections = ['glossary', 'compare', 'locations', 'for', 'guides', 'industries'];
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
