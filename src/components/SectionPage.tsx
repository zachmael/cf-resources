import Image from 'next/image';
import Breadcrumb from './Breadcrumb';
import FAQ from './FAQ';
import CTA from './CTA';
import InlineCTA from './InlineCTA';
import RelatedSidebar from './RelatedSidebar';
import ExploreMoreResources from './ExploreMoreResources';
import JsonLd from './JsonLd';
import { breadcrumbSchema, articleSchema, faqSchema, howToSchema } from '@/lib/schema';
import { type ContentMeta } from '@/lib/content';
import ProgressBar from './ProgressBar';
import { estimateReadingTime } from '@/lib/reading-time';
import { type ReactElement } from 'react';
import { getLocationImages, getTopicImage } from '@/lib/pexels-images';
import { getCrossSectionLinks, getSameSectionLinks } from '@/lib/cross-links';

const sectionHeroImages: Record<string, string> = {
  compare: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop',
  locations: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop',
  guides: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=400&fit=crop',
  industries: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop',
  for: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=400&fit=crop',
  'how-to': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=400&fit=crop',
  regulations: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=400&fit=crop',
};
const defaultSectionHero = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=400&fit=crop';

const BUILD_DATE = new Date().toISOString().split('T')[0];

interface Props {
  meta: ContentMeta;
  rendered: ReactElement;
  section: string;
  sectionLabel: string;
  sectionHref: string;
  rawContent?: string;
}

export default function SectionPage({ meta, rendered, section, sectionLabel, sectionHref, rawContent }: Props) {
  const readingTime = rawContent ? estimateReadingTime(rawContent) : null;
  const faqs = (meta.faqs as { question: string; answer: string }[]) || [];
  const relatedPages = (meta.relatedPages as string[]) || [];
  const heroImage = getTopicImage(section, meta.slug) || sectionHeroImages[section] || defaultSectionHero;
  const inlineImages = section === 'locations'
    ? getLocationImages(meta.slug)
    : [getTopicImage(section, meta.slug)];

  const lastUpdated = (meta.lastUpdated as string) || BUILD_DATE;
  const crossLinks = getCrossSectionLinks(section, meta.slug, meta.title, meta.description || '');
  const sameLinks = getSameSectionLinks(section, meta.slug, meta.title, meta.description || '');

  // Extract HowTo steps from content headings for how-to section
  const howToSteps: { name: string; text: string }[] = [];
  if (section === 'how-to' && rawContent) {
    const headingRegex = /^#{2,3}\s+(?:step\s*\d+[:.]\s*)?(.+)/gim;
    const sections = rawContent.split(/^#{2,3}\s+/m).slice(1);
    let match;
    let idx = 0;
    const headingMatches: string[] = [];
    const re2 = /^#{2,3}\s+(.+)/gm;
    while ((match = re2.exec(rawContent)) !== null) headingMatches.push(match[1].trim());
    headingMatches.forEach((heading, i) => {
      if (sections[i]) {
        const text = sections[i].split(/^#{2,3}\s+/m)[0].replace(/\n/g, ' ').trim().slice(0, 300);
        if (text) howToSteps.push({ name: heading, text });
      }
    });
  }

  const schemas = [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: sectionLabel, url: sectionHref },
      { name: meta.title, url: `/${section}/${meta.slug}` },
    ]),
    articleSchema(meta.title, meta.description, `/${section}/${meta.slug}`, lastUpdated),
    ...(faqs.length ? [faqSchema(faqs)] : []),
    ...(howToSteps.length ? [howToSchema(meta.title, meta.description, `/${section}/${meta.slug}`, howToSteps)] : []),
  ];

  return (
    <>
      <ProgressBar />
      {/* Last-modified meta tag */}
      <meta name="last-modified" content={lastUpdated} />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[280px] flex items-end">
        <div className="absolute inset-0">
          <Image src={heroImage} alt="" fill className="object-cover" priority />
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
            {/* Freshness signal */}
            <p className="text-xs text-brand-400 dark:text-gray-500 mb-6">
              Last updated: <time dateTime={lastUpdated}>{new Date(lastUpdated + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              {readingTime && <> · {readingTime} min read</>}
            </p>

            <div className="prose">{rendered}</div>

            {/* Inline CTA mid-article */}
            <InlineCTA topic={meta.title} />

            {/* Inline images */}
            {inlineImages.length > 0 && (
              <div className={`my-10 ${inlineImages.length > 1 ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : ''}`}>
                {inlineImages.map((img, i) => (
                  <figure key={i} className="rounded-2xl overflow-hidden shadow-lg">
                    <div className="relative h-64 md:h-72">
                      <Image
                        src={img}
                        alt={`${meta.title} — sustainability in practice`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </figure>
                ))}
              </div>
            )}

            {faqs.length > 0 && <FAQ items={faqs} />}

            {/* Cross-links and same-section links */}
            <ExploreMoreResources crossLinks={crossLinks} sameLinks={sameLinks} />

            <CTA topic={meta.title} />
          </article>

          <aside className="mt-10 lg:mt-0 space-y-6 lg:sticky lg:top-24 lg:self-start">
            <RelatedSidebar
              items={relatedPages.map((p) => ({
                title: p,
                href: `/${section}/${p.toLowerCase().replace(/[\s()]+/g, '-')}`,
              }))}
            />
            {/* Sidebar freshness */}
            <p className="text-xs text-brand-400 dark:text-gray-500 pl-1">Last updated: {lastUpdated}</p>
          </aside>
        </div>
      </div>
    </>
  );
}
