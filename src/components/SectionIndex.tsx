import Link from 'next/link';
import Breadcrumb from './Breadcrumb';
import { type ContentItem } from '@/lib/content';

interface Props {
  title: string;
  description: string;
  section: string;
  items: ContentItem[];
  breadcrumbLabel: string;
}

export default function SectionIndex({ title, description, section, items, breadcrumbLabel }: Props) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[{ label: breadcrumbLabel }]} />
      <h1 className="text-4xl font-bold font-heading text-brand-900 dark:text-brand-50 mb-4">{title}</h1>
      <p className="text-lg text-brand-600 dark:text-brand-400 mb-8 max-w-3xl">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Link key={item.meta.slug} href={`/${section}/${item.meta.slug}`}
            className="block rounded-lg border border-brand-200 dark:border-brand-700 p-5 hover:border-forest-400 dark:hover:border-forest-600 hover:shadow transition-all">
            <h2 className="font-semibold text-brand-800 dark:text-brand-200">{item.meta.title}</h2>
            <p className="text-sm text-brand-500 dark:text-brand-400 mt-1 line-clamp-2">{item.meta.description}</p>
          </Link>
        ))}
        {items.length === 0 && <p className="text-brand-500 dark:text-brand-400 col-span-full">Content coming soon.</p>}
      </div>
    </div>
  );
}
