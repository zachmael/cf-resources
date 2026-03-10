import type { Metadata } from 'next';
import SectionIndex from '@/components/SectionIndex';
import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Sustainability Frameworks & Standards',
  description: 'Deep dives into major sustainability frameworks, reporting standards, and certification programs — GRI, ISSB, TCFD, SBTi, and more.',
  openGraph: { title: 'Sustainability Frameworks & Standards', description: 'Deep dives into major sustainability frameworks, reporting standards, and certification programs — GRI, ISSB, TCFD, SBTi, and more.', url: 'https://resources.councilfire.org/frameworks', type: 'website', siteName: 'Council Fire Resources' },
  twitter: { card: 'summary', title: 'Sustainability Frameworks & Standards', description: 'Deep dives into major sustainability frameworks, reporting standards, and certification programs — GRI, ISSB, TCFD, SBTi, and more.' },
};

export default function FrameworksIndex() {
  return <SectionIndex title="Frameworks & Standards" description="Comprehensive guides to the sustainability frameworks, reporting standards, and certification programs shaping corporate disclosure and environmental strategy." section="frameworks" items={getAllContent('frameworks')} breadcrumbLabel="Frameworks" />;
}
