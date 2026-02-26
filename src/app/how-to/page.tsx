import type { Metadata } from 'next';
import SectionIndex from '@/components/SectionIndex';
import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'How-To Guides for Sustainability Professionals',
  description: 'Practical, step-by-step how-to guides for sustainability reporting, emissions measurement, climate strategy, and ESG compliance.',
};

export default function HowToIndex() {
  return <SectionIndex title="How-To Guides" description="Practical, step-by-step guides for sustainability reporting, emissions measurement, climate strategy, and ESG compliance." section="how-to" items={getAllContent('how-to')} breadcrumbLabel="How-To" />;
}
