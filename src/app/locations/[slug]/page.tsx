import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import SectionPage from '@/components/SectionPage';
import { renderMDX } from '@/lib/mdx';
import { getContentBySlug, getContentSlugs } from '@/lib/content';

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getContentSlugs('locations').map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getContentBySlug('locations', params.slug);
  if (!item) return {};
  return { title: item.meta.title, description: item.meta.description, alternates: { canonical: `/locations/${params.slug}` } };
}

export default async function LocationPage({ params }: Props) {
  const item = getContentBySlug('locations', params.slug);
  if (!item) notFound();
  const rendered = await renderMDX(item.content);
  return <SectionPage meta={item.meta} rendered={rendered} section="locations" sectionLabel="Locations" sectionHref="/locations" />;
}
