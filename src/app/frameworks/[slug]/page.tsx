import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import SectionPage from '@/components/SectionPage';
import { renderMDX } from '@/lib/mdx';
import { getContentBySlug, getContentSlugs } from '@/lib/content';

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getContentSlugs('frameworks').map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getContentBySlug('frameworks', params.slug);
  if (!item) return {};
  const lu = (item.meta.lastUpdated as string) || new Date().toISOString().split('T')[0]; return { title: item.meta.title, description: item.meta.description, alternates: { canonical: `/frameworks/${params.slug}` }, other: { 'last-modified': lu } };
}

export default async function FrameworkPage({ params }: Props) {
  const item = getContentBySlug('frameworks', params.slug);
  if (!item) notFound();
  const rendered = await renderMDX(item.content);
  return <SectionPage meta={item.meta} rendered={rendered} rawContent={item.content} section="frameworks" sectionLabel="Frameworks" sectionHref="/frameworks" />;
}
