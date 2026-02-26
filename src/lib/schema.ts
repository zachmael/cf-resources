const BASE_URL = 'https://resources.councilfire.org';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Council Fire',
    url: 'https://councilfire.org',
    logo: 'https://councilfire.org/logo.png',
    sameAs: ['https://www.linkedin.com/company/councilfire'],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

export function definedTermSchema(term: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term,
    description,
    url: `${BASE_URL}${url}`,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'Council Fire Sustainability Glossary',
      url: `${BASE_URL}/glossary`,
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function howToSchema(title: string, description: string, url: string, steps: { name: string; text: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    url: `${BASE_URL}${url}`,
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
    author: organizationSchema(),
    publisher: organizationSchema(),
  };
}

export function articleSchema(title: string, description: string, url: string, dateModified?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${BASE_URL}${url}`,
    author: organizationSchema(),
    publisher: organizationSchema(),
    ...(dateModified && { dateModified }),
  };
}
