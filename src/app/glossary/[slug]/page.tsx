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

const categoryHeroImages: Record<string, string> = {
  'ESG Reporting': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&h=500&fit=crop',
  'Carbon & Energy': 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1400&h=500&fit=crop',
  'Climate Resilience': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1400&h=500&fit=crop',
  'Governance': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&h=500&fit=crop',
  'Supply Chain': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&h=500&fit=crop',
  'Biodiversity': 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1400&h=500&fit=crop',
  'Water & Infrastructure': 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1400&h=500&fit=crop',
  'Social Impact': 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1400&h=500&fit=crop',
};
const categoryMidImages: Record<string, string> = {
  'ESG Reporting': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
  'Carbon & Energy': 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=450&fit=crop',
  'Climate Resilience': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=450&fit=crop',
  'Governance': 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=450&fit=crop',
  'Supply Chain': 'https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&h=450&fit=crop',
  'Biodiversity': 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=450&fit=crop',
  'Water & Infrastructure': 'https://images.unsplash.com/photo-1468413253725-0d5181091126?w=800&h=450&fit=crop',
  'Social Impact': 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&h=450&fit=crop',
};
const defaultHeroImage = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&h=500&fit=crop';
const defaultMidImage = 'https://images.unsplash.com/photo-1500829243541-74b677fecc30?w=800&h=450&fit=crop';

export default async function GlossaryPage({ params }: Props) {
  const item = getContentBySlug('glossary', params.slug);
  if (!item) notFound();

  const { meta, content } = item;
  const faqs = (meta.faqs as { question: string; answer: string }[]) || [];
  const relatedTerms = (meta.relatedTerms as string[]) || [];
  const rendered = await renderMDX(content);
  const heroImage = categoryHeroImages[meta.category as string] || defaultHeroImage;
  const midImage = categoryMidImages[meta.category as string] || defaultMidImage;

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
      <section className="relative overflow-hidden min-h-[280px] flex items-end">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/60 to-brand-900/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10 w-full">
          <JsonLd data={schemas} />
          <Breadcrumb items={[{ label: 'Glossary', href: '/glossary' }, { label: meta.title }]} />
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span className="text-sm font-semibold text-teal-300 uppercase tracking-wider">Definition</span>
          </div>
          {meta.category && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 px-3 py-1 text-xs font-semibold text-amber-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              {meta.category as string}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            What is {meta.title}?
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-14">
          <article>
            {typeof meta.definition === 'string' && <DefinitionBox>{meta.definition}</DefinitionBox>}

            <div className="prose mt-8">{rendered}</div>

            {/* Mid-article image */}
            <figure className="my-10 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={midImage}
                alt={`${meta.title} — sustainability in practice`}
                className="w-full h-64 md:h-80 object-cover"
                loading="lazy"
              />
              <figcaption className="bg-brand-50 px-4 py-3 text-sm text-brand-500 italic">
                Council Fire helps organizations navigate {(meta.category as string || 'sustainability').toLowerCase()} challenges with practical, expert-driven strategies.
              </figcaption>
            </figure>

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
