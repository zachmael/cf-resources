import type { Metadata } from 'next';
import SectionIndex from '@/components/SectionIndex';
import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'For You — Role-Based Sustainability Resources',
  description: 'Sustainability resources tailored to your role and responsibilities.',
};

export default function ForIndex() {
  return <SectionIndex title="For You" description="Sustainability resources tailored to your role — whether you're a CFO, sustainability officer, or board member." section="for" items={getAllContent('for')} breadcrumbLabel="For You" />;
}
