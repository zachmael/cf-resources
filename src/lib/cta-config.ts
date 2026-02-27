export interface CTACopy {
  headline: string;
  body: string;
  button: string;
}

const sectionCTA: Record<string, CTACopy> = {
  regulations: {
    headline: 'Need compliance support?',
    body: 'Navigating [topic] requirements is complex. Council Fire\u2019s regulatory experts can guide your compliance strategy.',
    button: 'Get Compliance Help',
  },
  'how-to': {
    headline: 'Want our team to handle this?',
    body: 'Why DIY when Council Fire\u2019s consultants can execute [topic] for you \u2014 faster and with decades of experience.',
    button: 'Let\u2019s Talk',
  },
  industries: {
    headline: 'We work with [topic] leaders',
    body: 'Council Fire has deep experience helping organizations in your sector achieve sustainability goals.',
    button: 'See Our Work',
  },
  for: {
    headline: 'Built for [topic] like you',
    body: 'Council Fire helps sustainability leaders like you turn complex challenges into strategic advantages.',
    button: 'Talk to an Expert',
  },
  glossary: {
    headline: 'Go deeper than definitions',
    body: 'Understanding [topic] is just the start. Council Fire helps you put sustainability knowledge into action.',
    button: 'Work With Us',
  },
  guides: {
    headline: 'Need hands-on guidance?',
    body: 'This guide covers the basics \u2014 Council Fire\u2019s team can help you implement [topic] with confidence.',
    button: 'Get Expert Help',
  },
  compare: {
    headline: 'Not sure which path to take?',
    body: 'Choosing the right framework matters. Council Fire can help you evaluate options and build the right strategy.',
    button: 'Get a Recommendation',
  },
  locations: {
    headline: 'Operating in [topic]?',
    body: 'Council Fire understands the local regulatory landscape and climate risks specific to your region.',
    button: 'Talk to Our Team',
  },
};

const defaultCTA: CTACopy = {
  headline: 'Need help with [topic]?',
  body: 'Council Fire\u2019s consultants bring decades of hands-on experience. Let\u2019s talk about your goals.',
  button: 'Work With Us',
};

export function getCTACopy(section?: string, topic?: string): CTACopy {
  const base = (section && sectionCTA[section]) || defaultCTA;
  const t = topic || 'this';
  return {
    headline: base.headline.replace(/\[topic\]/g, t),
    body: base.body.replace(/\[topic\]/g, t),
    button: base.button,
  };
}
