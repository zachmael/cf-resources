const WPM = 200;

/** Estimate reading time in minutes from raw text/markdown content */
export function estimateReadingTime(content: string): number {
  const text = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/^---[\s\S]*?---/m, '')
    .replace(/<[^>]+>/g, '')
    .replace(/[#*_\[\]()>`~|]/g, '')
    .trim();
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WPM));
}
