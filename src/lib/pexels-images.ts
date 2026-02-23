/**
 * Pexels image library for inline content images.
 * All images are free to use via Pexels license.
 * Using direct Pexels URLs with auto=compress for performance.
 */

// Location-specific images keyed by slug or keyword
export const locationImages: Record<string, string[]> = {
  // Coastal / flooding
  'miami': [
    'https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2363901/pexels-photo-2363901.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'new-york': [
    'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'boston': [
    'https://images.pexels.com/photos/2871736/pexels-photo-2871736.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1125268/pexels-photo-1125268.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'san-francisco': [
    'https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'seattle': [
    'https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2539077/pexels-photo-2539077.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'los-angeles': [
    'https://images.pexels.com/photos/2263683/pexels-photo-2263683.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1162268/pexels-photo-1162268.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'chicago': [
    'https://images.pexels.com/photos/1823681/pexels-photo-1823681.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1769370/pexels-photo-1769370.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'houston': [
    'https://images.pexels.com/photos/3584437/pexels-photo-3584437.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'default-coastal': [
    'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'default-inland': [
    'https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/417023/pexels-photo-417023.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
};

// Topic-based images for different content sections
export const topicImages: Record<string, string[]> = {
  'climate-resilience': [
    'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1198507/pexels-photo-1198507.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'flooding': [
    'https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1739855/pexels-photo-1739855.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'ocean': [
    'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'renewable-energy': [
    'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'forest': [
    'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/338936/pexels-photo-338936.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'agriculture': [
    'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'business': [
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'infrastructure': [
    'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'water': [
    'https://images.pexels.com/photos/1089932/pexels-photo-1089932.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2406395/pexels-photo-2406395.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'community': [
    'https://images.pexels.com/photos/1559027615/pexels-photo-1559027615.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'supply-chain': [
    'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'biodiversity': [
    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
};

// Industry-specific images
export const industryImages: Record<string, string> = {
  'manufacturing': 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
  'real-estate': 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
  'financial-services': 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=800',
  'healthcare': 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=800',
  'energy': 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
  'transportation': 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800',
  'food-and-beverage': 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=800',
  'technology': 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
  'government': 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=800',
  'construction': 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
  'retail': 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=800',
  'hospitality': 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
  'agriculture': 'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=800',
  'mining': 'https://images.pexels.com/photos/2101137/pexels-photo-2101137.jpeg?auto=compress&cs=tinysrgb&w=800',
  'telecommunications': 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
};

/**
 * Get images for a location page based on the slug.
 */
export function getLocationImages(slug: string): string[] {
  // Try exact city match first
  for (const [key, imgs] of Object.entries(locationImages)) {
    if (slug.includes(key)) return imgs;
  }
  // Coastal states/cities get ocean images
  const coastal = ['fl', 'ca', 'nc', 'sc', 'va', 'md', 'la', 'tx', 'hi', 'pr', 'ri', 'ma', 'nj', 'ct', 'de', 'al', 'ms', 'ga', 'or', 'wa', 'ak', 'me'];
  if (coastal.some(s => slug.endsWith(`-${s}`) || slug === s)) {
    return locationImages['default-coastal'];
  }
  return locationImages['default-inland'];
}

/**
 * Get a topic image based on section and slug keywords.
 */
export function getTopicImage(section: string, slug: string): string {
  const s = slug.toLowerCase();
  if (s.includes('ocean') || s.includes('marine') || s.includes('fish') || s.includes('coral') || s.includes('blue')) return topicImages['ocean'][0];
  if (s.includes('water') || s.includes('storm') || s.includes('flood')) return topicImages['water'][0];
  if (s.includes('forest') || s.includes('deforest') || s.includes('tree') || s.includes('mangrove')) return topicImages['forest'][0];
  if (s.includes('energy') || s.includes('carbon') || s.includes('emission') || s.includes('renewable') || s.includes('solar') || s.includes('wind')) return topicImages['renewable-energy'][0];
  if (s.includes('supply') || s.includes('chain') || s.includes('procurement')) return topicImages['supply-chain'][0];
  if (s.includes('bio') || s.includes('species') || s.includes('habitat') || s.includes('eco')) return topicImages['biodiversity'][0];
  if (s.includes('communit') || s.includes('social') || s.includes('justice') || s.includes('just')) return topicImages['community'][0];
  if (s.includes('agri') || s.includes('farm') || s.includes('soil') || s.includes('food')) return topicImages['agriculture'][0];
  if (s.includes('infra') || s.includes('build') || s.includes('urban')) return topicImages['infrastructure'][0];
  if (section === 'industries') return industryImages[s] || topicImages['business'][0];
  return topicImages['business'][0];
}
