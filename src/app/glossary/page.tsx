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
      <section className="relative overflow-hidden bg-brand-50 border-b border-brand-100">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-brand-100 opacity-60" />
        <div className="absolute -bottom-16 -left-16 w-[250px] h-[250px] rounded-full bg-brand-100 opacity-40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-14">
          <Breadcrumb items={[{ label: 'Glossary' }]} />
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Glossary</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-brand-800 tracking-tight">Sustainability<br className="hidden sm:block" /> Glossary</h1>
          <p className="mt-4 text-lg text-brand-500 max-w-2xl leading-relaxed">
            Clear definitions for the terms shaping sustainability strategy, ESG reporting, and climate policy.
          </p>
        </div>
      </section>

      <GlossaryClient items={serialized} />
    </>
  );
}
