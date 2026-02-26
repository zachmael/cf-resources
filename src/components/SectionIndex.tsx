import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from './Breadcrumb';
import { type ContentItem } from '@/lib/content';
import { getTopicImage, getLocationImages, industryImages } from '@/lib/pexels-images';
import { estimateReadingTime } from '@/lib/reading-time';

const sectionHeroImages: Record<string, string> = {
  compare: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=800&fit=crop',
  locations: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=800&fit=crop',
  guides: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&h=800&fit=crop',
  industries: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=800&fit=crop',
  for: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=800&fit=crop',
  'how-to': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=800&fit=crop',
  regulations: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=800&fit=crop',
};
const defaultSectionHero = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=800&fit=crop';

function getCardImage(section: string, slug: string): string {
  if (section === 'locations') {
    return getLocationImages(slug)[0];
  }
  if (section === 'industries' && industryImages[slug]) {
    return industryImages[slug];
  }
  return getTopicImage(section, slug);
}

interface Props {
  title: string;
  description: string;
  section: string;
  items: ContentItem[];
  breadcrumbLabel: string;
}

export default function SectionIndex({ title, description, section, items, breadcrumbLabel }: Props) {
  const heroImage = sectionHeroImages[section] || defaultSectionHero;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[300px] flex items-end">
        <div className="absolute inset-0">
          <Image src={heroImage} alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/60 to-brand-900/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-14 w-full">
          <Breadcrumb items={[{ label: breadcrumbLabel }]} />
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-sm font-semibold text-amber-300 uppercase tracking-wider">{breadcrumbLabel}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight">{title}</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl leading-relaxed">{description}</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 bg-white dark:bg-[#111]">
        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => {
              const cardImg = getCardImage(section, item.meta.slug);
              return (
                <Link
                  key={item.meta.slug}
                  href={`/${section}/${item.meta.slug}`}
                  className="group relative rounded-2xl overflow-hidden bg-white dark:bg-white/5 border border-brand-200 dark:border-white/10 hover:border-teal-400 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${i * 0.04}s`, animationFillMode: 'both' }}
                >
                  {/* Card image */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={cardImg}
                      alt={item.meta.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    {item.meta.category && (
                      <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 text-xs font-bold text-white bg-teal-500/90 backdrop-blur-sm rounded-full px-3 py-1 uppercase tracking-wide">
                        <span className="w-1 h-1 rounded-full bg-white/80" />
                        {item.meta.category}
                      </span>
                    )}
                  </div>

                  {/* Card content */}
                  <div className="p-5">
                    <h2 className="font-bold text-brand-800 dark:text-gray-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug">
                      {item.meta.title}
                    </h2>
                    <p className="text-sm text-brand-500 dark:text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                      {item.meta.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-semibold text-teal-500 group-hover:text-teal-600 transition-colors uppercase tracking-wide">
                        {item.content ? `${estimateReadingTime(item.content)} min read` : 'Read more'}
                      </span>
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-50 dark:bg-white/10 text-brand-400 dark:text-gray-400 group-hover:bg-teal-500 group-hover:text-white transition-all">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="w-20 h-20 rounded-full bg-brand-50 dark:bg-white/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🚧</span>
            </div>
            <h2 className="text-3xl font-extrabold font-heading text-brand-800 dark:text-white">Coming Soon</h2>
            <p className="mt-3 text-brand-500 dark:text-gray-400 max-w-md mx-auto text-lg">We&apos;re building this section. Check back soon for expert-curated content.</p>
            <Link href="/" className="mt-8 group inline-flex items-center gap-3 text-sm font-semibold text-brand-800 dark:text-gray-200">
              Back to Home
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500 text-white group-hover:bg-teal-600 transition-all">
                <svg className="h-3.5 w-3.5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
