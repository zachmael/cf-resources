import type { Metadata } from 'next';
import SectionIndex from '@/components/SectionIndex';
import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Sustainability Case Studies',
  description: 'Real-world examples of sustainability strategy, ESG integration, and climate resilience projects across industries and sectors.',
  openGraph: { title: 'Sustainability Case Studies', description: 'Real-world examples of sustainability strategy, ESG integration, and climate resilience projects across industries and sectors.', url: 'https://resources.councilfire.org/case-studies', type: 'website', siteName: 'Council Fire Resources' },
  twitter: { card: 'summary', title: 'Sustainability Case Studies', description: 'Real-world examples of sustainability strategy, ESG integration, and climate resilience projects across industries and sectors.' },
};

export default function CaseStudiesIndex() {
  return <SectionIndex title="Case Studies" description="Anonymized but realistic examples of sustainability strategy, ESG integration, climate resilience, and environmental compliance work across sectors." section="case-studies" items={getAllContent('case-studies')} breadcrumbLabel="Case Studies" />;
}
