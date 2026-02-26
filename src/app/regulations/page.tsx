import type { Metadata } from 'next';
import SectionIndex from '@/components/SectionIndex';
import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Sustainability Regulations & Mandates',
  description: 'Detailed breakdowns of key sustainability regulations, disclosure mandates, and compliance requirements worldwide.',
};

export default function RegulationsIndex() {
  return <SectionIndex title="Regulations & Mandates" description="Detailed breakdowns of sustainability regulations, disclosure mandates, and compliance requirements affecting businesses worldwide." section="regulations" items={getAllContent('regulations')} breadcrumbLabel="Regulations" />;
}
