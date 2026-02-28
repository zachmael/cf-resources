export interface LeadMagnet {
  title: string;
  description: string;
  href: string;
  icon: string;
}

const LEAD_MAGNETS: Record<string, LeadMagnet> = {
  csrd: {
    title: 'CSRD Readiness Checklist',
    description: 'Assess your organization\'s readiness for EU sustainability reporting.',
    href: '/resources/csrd-readiness-checklist',
    icon: '📋',
  },
  scope3: {
    title: 'Scope 3 Emissions Worksheet',
    description: 'Map and measure your full value chain carbon footprint.',
    href: '/resources/scope-3-emissions-worksheet',
    icon: '🌍',
  },
  materiality: {
    title: 'Materiality Assessment Template',
    description: 'Identify and prioritize the ESG topics that matter most.',
    href: '/resources/materiality-assessment-template',
    icon: '🎯',
  },
};

const KEYWORD_MAP: [RegExp, string][] = [
  [/csrd|esrs|eu\s+reporting|european\s+sustainability|corporate\s+sustainability\s+reporting|esg\s+reporting|compliance|directive/i, 'csrd'],
  [/scope\s*3|emissions?|carbon\s+footprint|ghg|greenhouse|net[\s-]zero|decarboni[sz]/i, 'scope3'],
  [/materiality|stakeholder\s+engagement|double\s+materiality|esg\s+strategy|material\s+topic/i, 'materiality'],
];

export function getRelevantLeadMagnet(section: string, slug: string, title: string): LeadMagnet | null {
  const text = `${section} ${slug} ${title}`.toLowerCase();

  // Don't show banner on the lead magnet pages themselves
  if (slug === 'csrd-readiness-checklist' || slug === 'scope-3-emissions-worksheet' || slug === 'materiality-assessment-template') {
    return null;
  }

  for (const [pattern, key] of KEYWORD_MAP) {
    if (pattern.test(text)) {
      return LEAD_MAGNETS[key];
    }
  }

  // Default fallback: CSRD checklist (most broadly applicable)
  return LEAD_MAGNETS.csrd;
}
