/**
 * Calculate reading time for content.
 * ~200 words per minute for technical content.
 */
export function estimateReadingTime(content: string): number {
  const text = content
    .replace(/---[\s\S]*?---/, '') // Remove frontmatter
    .replace(/[#*_\[\]()>`|]/g, '') // Remove markdown syntax
    .replace(/\n+/g, ' ')
    .trim();
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}
