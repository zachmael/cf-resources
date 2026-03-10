import type { Metadata } from 'next';
import SectionIndex from '@/components/SectionIndex';
import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Sustainability Guides & Frameworks',
  description: 'Step-by-step guides for sustainability frameworks, standards, and compliance.',
  openGraph: { title: 'Sustainability Guides & Frameworks', description: 'Step-by-step guides for sustainability frameworks, standards, and compliance.', url: 'https://resources.councilfire.org/guides', type: 'website', siteName: 'Council Fire Resources' },
  twitter: { card: 'summary', title: 'Sustainability Guides & Frameworks', description: 'Step-by-step guides for sustainability frameworks, standards, and compliance.' },
};

export default function GuidesIndex() {
  return <SectionIndex title="Guides & Frameworks" description="Step-by-step guides for navigating sustainability frameworks, standards, and compliance requirements." section="guides" items={getAllContent('guides')} breadcrumbLabel="Guides" />;
}
