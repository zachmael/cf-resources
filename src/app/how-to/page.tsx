import type { Metadata } from 'next';
import SectionIndex from '@/components/SectionIndex';
import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'How-To Guides for Sustainability Professionals',
  description: 'Practical, step-by-step guides for sustainability professionals — from writing reports and measuring emissions to setting targets and building strategies.',
  alternates: { canonical: '/how-to' },
};

export default function HowToIndex() {
  return <SectionIndex title="How-To Guides" description="Practical, step-by-step guides for sustainability professionals — actionable advice from experienced consultants." section="how-to" items={getAllContent('how-to')} breadcrumbLabel="How To" />;
}
