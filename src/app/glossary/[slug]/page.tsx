import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import DefinitionBox from '@/components/DefinitionBox';
import RelatedSidebar from '@/components/RelatedSidebar';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
import { renderMDX } from '@/lib/mdx';
import { getContentBySlug, getContentSlugs } from '@/lib/content';
import { breadcrumbSchema, definedTermSchema, faqSchema } from '@/lib/schema';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getContentSlugs('glossary').map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getContentBySlug('glossary', params.slug);
  if (!item) return {};
  return {
    title: `What is ${item.meta.title}?`,
    description: item.meta.description,
    openGraph: {
      title: `What is ${item.meta.title}?`,
      description: item.meta.description,
      url: `/glossary/${params.slug}`,
      type: 'article',
    },
    alternates: { canonical: `/glossary/${params.slug}` },
  };
}

export default async function GlossaryPage({ params }: Props) {
  const item = getContentBySlug('glossary', params.slug);
  if (!item) notFound();

  const { meta, content } = item;
  const faqs = (meta.faqs as { question: string; answer: string }[]) || [];
  const relatedTerms = (meta.relatedTerms as string[]) || [];
  const rendered = await renderMDX(content);

  const schemas = [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Glossary', url: '/glossary' },
      { name: meta.title, url: `/glossary/${meta.slug}` },
    ]),
    definedTermSchema(meta.title, meta.description, `/glossary/${meta.slug}`),
    ...(faqs.length ? [faqSchema(faqs)] : []),
  ];

  return (
    <>
      {/* Hero area */}
      <section className="relative overflow-hidden bg-brand-50 border-b border-brand-100">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-brand-100 opacity-60" />
        <div className="absolute -bottom-16 -left-16 w-[200px] h-[200px] rounded-full bg-brand-100 opacity-40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-14">
          <JsonLd data={schemas} />
          <Breadcrumb items={[{ label: 'Glossary', href: '/glossary' }, { label: meta.title }]} />
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Definition</span>
          </div>
          {meta.category && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-semibold text-amber-700 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              {meta.category as string}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-brand-800 tracking-tight">
            What is {meta.title}?
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-14">
          <article>
            {typeof meta.definition === 'string' && <DefinitionBox>{meta.definition}</DefinitionBox>}

            <div className="prose mt-8">{rendered}</div>

            {faqs.length > 0 && <FAQ items={faqs} />}

            <CTA topic={meta.title} />
          </article>

          <aside className="mt-10 lg:mt-0 space-y-6 lg:sticky lg:top-24 lg:self-start">
            {relatedTerms.length > 0 && (
              <RelatedSidebar
                title="Related Terms"
                items={relatedTerms.map((t) => ({
                  title: t,
                  href: `/glossary/${t.toLowerCase().replace(/[\s()]+/g, '-')}`,
                }))}
              />
            )}
            {meta.lastUpdated && (
              <p className="text-xs text-brand-400 pl-1">Last updated: {meta.lastUpdated as string}</p>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}
