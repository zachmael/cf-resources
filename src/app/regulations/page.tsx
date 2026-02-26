import type { Metadata } from 'next';
import SectionIndex from '@/components/SectionIndex';
import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Sustainability Regulations & Compliance Guides',
  description: 'Expert guides to sustainability regulations worldwide — CSRD, SEC climate rule, EU Taxonomy, and more. Requirements, timelines, and compliance steps.',
  alternates: { canonical: '/regulations' },
};

export default function RegulationsIndex() {
  return <SectionIndex title="Regulations" description="Expert guides to sustainability regulations worldwide — requirements, timelines, compliance steps, and penalties." section="regulations" items={getAllContent('regulations')} breadcrumbLabel="Regulations" />;
}
