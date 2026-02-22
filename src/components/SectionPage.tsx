import Breadcrumb from './Breadcrumb';
import FAQ from './FAQ';
import CTA from './CTA';
import RelatedSidebar from './RelatedSidebar';
import JsonLd from './JsonLd';
import { breadcrumbSchema, articleSchema, faqSchema } from '@/lib/schema';
import { type ContentMeta } from '@/lib/content';
import { type ReactElement } from 'react';

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
      <section className="relative overflow-hidden bg-brand-50 border-b border-brand-100">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-brand-100 opacity-60" />
        <div className="absolute -bottom-16 -left-16 w-[200px] h-[200px] rounded-full bg-brand-100 opacity-40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-14">
          <JsonLd data={schemas} />
          <Breadcrumb items={[{ label: sectionLabel, href: sectionHref }, { label: meta.title }]} />
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">{sectionLabel}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-brand-800 tracking-tight">
            {meta.title}
          </h1>
          {meta.description && (
            <p className="mt-4 text-lg text-brand-500 max-w-2xl leading-relaxed">{meta.description}</p>
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
