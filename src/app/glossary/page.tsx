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
      <section className="relative overflow-hidden min-h-[300px] flex items-end">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600&h=800&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/60 to-brand-900/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-14 w-full">
          <Breadcrumb items={[{ label: 'Glossary' }]} />
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-sm font-semibold text-amber-300 uppercase tracking-wider">Glossary</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight">Sustainability<br className="hidden sm:block" /> Glossary</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl leading-relaxed">
            Clear definitions for the terms shaping sustainability strategy, ESG reporting, and climate policy.
          </p>
        </div>
      </section>

      <GlossaryClient items={serialized} />
    </>
  );
}
