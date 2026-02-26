import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import SectionPage from '@/components/SectionPage';
import JsonLd from '@/components/JsonLd';
import { renderMDX } from '@/lib/mdx';
import { getContentBySlug, getContentSlugs } from '@/lib/content';
import { howToSchema } from '@/lib/schema';

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getContentSlugs('how-to').map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getContentBySlug('how-to', params.slug);
  if (!item) return {};
  const lu = (item.meta.lastUpdated as string) || new Date().toISOString().split('T')[0];
  return {
    title: item.meta.title,
    description: item.meta.description,
    alternates: { canonical: `/how-to/${params.slug}` },
    other: { 'last-modified': lu },
  };
}

/** Extract steps from MDX content — looks for ## Step N: headings */
function extractSteps(content: string): { name: string; text: string }[] {
  const steps: { name: string; text: string }[] = [];
  const stepRegex = /^##\s+Step\s+\d+[:\s]+(.+)$/gm;
  const sections = content.split(/^##\s+Step\s+\d+/m);

  let match;
  let i = 0;
  while ((match = stepRegex.exec(content)) !== null) {
    i++;
    const name = match[1].trim();
    const text = (sections[i] || '').split(/^##/m)[0].replace(/^[:\s]+[^\n]+\n/, '').trim().slice(0, 300);
    steps.push({ name, text });
  }
  return steps;
}

export default async function HowToPage({ params }: Props) {
  const item = getContentBySlug('how-to', params.slug);
  if (!item) notFound();
  const rendered = await renderMDX(item.content);

  const steps = extractSteps(item.content);
  const howToJsonLd = steps.length > 0
    ? howToSchema(item.meta.title, item.meta.description, `/how-to/${params.slug}`, steps)
    : null;

  return (
    <>
      {howToJsonLd && <JsonLd data={howToJsonLd} />}
      <SectionPage meta={item.meta} rendered={rendered} section="how-to" sectionLabel="How To" sectionHref="/how-to" />
    </>
  );
}
