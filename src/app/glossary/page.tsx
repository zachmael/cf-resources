import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { getAllContent } from '@/lib/content';
import GlossaryClient from './GlossaryClient';

export const metadata: Metadata = {
  title: 'Sustainability Glossary',
  description: 'A comprehensive glossary of sustainability, ESG, and climate terminology — explained by consultants, for professionals.',
};

export default function GlossaryIndex() {
  const items = getAllContent('glossary');
  const serialized = items.map((i) => ({
    slug: i.meta.slug,
    title: i.meta.title,
    description: i.meta.description,
    category: i.meta.category || null,
  }));

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white border-b border-brand-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-12">
          <Breadcrumb items={[{ label: 'Glossary' }]} />
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-brand-800 tracking-tight">Sustainability Glossary</h1>
          <p className="mt-4 text-lg text-brand-500 max-w-2xl leading-relaxed">
            Clear definitions for the terms shaping sustainability strategy, ESG reporting, and climate policy.
          </p>
        </div>
      </section>

      <GlossaryClient items={serialized} />
    </>
  );
}
