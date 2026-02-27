import type { Metadata } from 'next';
import SectionIndex from '@/components/SectionIndex';
import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Sustainability Case Studies | Council Fire',
  description: 'Real-world examples of sustainability strategy, ESG integration, and climate resilience projects across industries and sectors.',
};

export default function CaseStudiesIndex() {
  return <SectionIndex title="Case Studies" description="Anonymized but realistic examples of sustainability strategy, ESG integration, climate resilience, and environmental compliance work across sectors." section="case-studies" items={getAllContent('case-studies')} breadcrumbLabel="Case Studies" />;
}
