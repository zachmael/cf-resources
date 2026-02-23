import Breadcrumb from './Breadcrumb';
import FAQ from './FAQ';
import CTA from './CTA';
import RelatedSidebar from './RelatedSidebar';
import JsonLd from './JsonLd';
import { breadcrumbSchema, articleSchema, faqSchema } from '@/lib/schema';
import { type ContentMeta } from '@/lib/content';
import { type ReactElement } from 'react';

const sectionHeroImages: Record<string, string> = {
  compare: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop',
  locations: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop',
  guides: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=400&fit=crop',
  industries: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop',
  for: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=400&fit=crop',
};
const defaultSectionHero = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=400&fit=crop';

interface Props {
  meta: ContentMeta;
  rendered: ReactElement;
  section: string;
  sectionLabel: string;
  sectionHref: string;
}

export default function SectionPage({ meta, rendered, section, sectionLabel, sectionHref }: Props) {
  const faqs = (meta.faqs as { question: string; answer: string }[]) || [];
  const relatedPages = (meta.relatedPages as string[]) || [];
  const heroImage = sectionHeroImages[section] || defaultSectionHero;

  const schemas = [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: sectionLabel, url: sectionHref },
      { name: meta.title, url: `/${section}/${meta.slug}` },
    ]),
    articleSchema(meta.title, meta.description, `/${section}/${meta.slug}`, meta.lastUpdated as string),
    ...(faqs.length ? [faqSchema(faqs)] : []),
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[280px] flex items-end">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/60 to-brand-900/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10 w-full">
          <JsonLd data={schemas} />
          <Breadcrumb items={[{ label: sectionLabel, href: sectionHref }, { label: meta.title }]} />
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-sm font-semibold text-amber-300 uppercase tracking-wider">{sectionLabel}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            {meta.title}
          </h1>
          {meta.description && (
            <p className="mt-4 text-lg text-white/70 max-w-2xl leading-relaxed">{meta.description}</p>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-14">
          <article>
            <div className="prose">{rendered}</div>
            {faqs.length > 0 && <FAQ items={faqs} />}
            <CTA topic={meta.title} />
          </article>

          <aside className="mt-10 lg:mt-0 space-y-6 lg:sticky lg:top-24 lg:self-start">
            {relatedPages.length > 0 && (
              <RelatedSidebar
                items={relatedPages.map((p) => ({
                  title: p,
                  href: `/${section}/${p.toLowerCase().replace(/[\s()]+/g, '-')}`,
                }))}
              />
            )}
          </aside>
        </div>
      </div>
    </>
  );
}
