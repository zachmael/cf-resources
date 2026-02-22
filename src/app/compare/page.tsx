import type { Metadata } from 'next';
import SectionIndex from '@/components/SectionIndex';
import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Sustainability Comparisons',
  description: 'Side-by-side comparisons of sustainability frameworks, standards, and approaches.',
};

export default function CompareIndex() {
  return <SectionIndex title="Comparisons" description="Side-by-side breakdowns to help you choose the right framework, standard, or approach." section="compare" items={getAllContent('compare')} breadcrumbLabel="Comparisons" />;
}
