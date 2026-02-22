import type { Metadata } from 'next';
import SectionIndex from '@/components/SectionIndex';
import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Locations — Climate Risk by Region',
  description: 'Climate risks, regulations, and sustainability opportunities by region.',
};

export default function LocationsIndex() {
  return <SectionIndex title="Locations" description="Climate risks, local regulations, and sustainability opportunities by region." section="locations" items={getAllContent('locations')} breadcrumbLabel="Locations" />;
}
