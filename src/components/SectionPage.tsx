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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <JsonLd data={schemas} />
      <Breadcrumb items={[{ label: sectionLabel, href: sectionHref }, { label: meta.title }]} />

      <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-12">
        <article>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-brand-900 dark:text-brand-50 mb-6">
            {meta.title}
          </h1>
          <div className="prose">{rendered}</div>
          {faqs.length > 0 && <FAQ items={faqs} />}
          <CTA topic={meta.title} />
        </article>

        <aside className="mt-10 lg:mt-0 space-y-6">
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
  );
}
