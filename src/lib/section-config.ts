export interface SectionConfig {
  key: string;
  title: string;
  singular: string;
  description: string;
  h1Prefix?: string;
}

export const sections: Record<string, SectionConfig> = {
  compare: {
    key: 'compare',
    title: 'Comparisons',
    singular: 'Comparison',
    description: 'Side-by-side comparisons of sustainability frameworks, standards, and approaches.',
  },
  locations: {
    key: 'locations',
    title: 'Locations',
    singular: 'Location',
    description: 'Climate risks, regulations, and sustainability opportunities by region.',
  },
  for: {
    key: 'for',
    title: 'For You',
    singular: 'Role',
    description: 'Sustainability resources tailored to your role and responsibilities.',
  },
  guides: {
    key: 'guides',
    title: 'Guides & Frameworks',
    singular: 'Guide',
    description: 'Step-by-step guides for sustainability frameworks, standards, and compliance.',
  },
  industries: {
    key: 'industries',
    title: 'Industries',
    singular: 'Industry',
    description: 'Industry-specific sustainability challenges, regulations, and opportunities.',
  },
  'how-to': {
    key: 'how-to',
    title: 'How To',
    singular: 'How To',
    description: 'Practical, step-by-step guides for sustainability professionals — from reporting and target-setting to strategy development.',
  },
  regulations: {
    key: 'regulations',
    title: 'Regulations',
    singular: 'Regulation',
    description: 'Expert guides to sustainability regulations worldwide — requirements, timelines, compliance steps, and penalties.',
  },
};
