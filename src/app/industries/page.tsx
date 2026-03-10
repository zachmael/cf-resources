import type { Metadata } from 'next';
import SectionIndex from '@/components/SectionIndex';
import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Industries — Sector-Specific Sustainability',
  description: 'Industry-specific sustainability challenges, regulations, and opportunities.',
  openGraph: { title: 'Industries — Sector-Specific Sustainability', description: 'Industry-specific sustainability challenges, regulations, and opportunities.', url: 'https://resources.councilfire.org/industries', type: 'website', siteName: 'Council Fire Resources' },
  twitter: { card: 'summary', title: 'Industries — Sector-Specific Sustainability', description: 'Industry-specific sustainability challenges, regulations, and opportunities.' },
};

export default function IndustriesIndex() {
  return <SectionIndex title="Industries" description="Sector-specific sustainability challenges, key regulations, and opportunities for competitive advantage." section="industries" items={getAllContent('industries')} breadcrumbLabel="Industries" />;
}
