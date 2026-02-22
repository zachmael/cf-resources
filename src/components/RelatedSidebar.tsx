import Link from 'next/link';

interface RelatedItem {
  title: string;
  href: string;
  section?: string;
}

export default function RelatedSidebar({ items, title = 'Related Resources' }: { items: RelatedItem[]; title?: string }) {
  if (!items.length) return null;

  return (
    <aside className="rounded-2xl border border-brand-200 bg-white p-6 shadow-sm">
      <h3 className="font-heading font-semibold text-brand-800 mb-4 text-sm uppercase tracking-wider">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="inline-flex items-center rounded-full bg-brand-50 border border-brand-200 px-3.5 py-1.5 text-sm text-brand-700 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-700 transition-all"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </aside>
  );
}
