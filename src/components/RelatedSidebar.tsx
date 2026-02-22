import Link from 'next/link';

interface RelatedItem {
  title: string;
  href: string;
  section?: string;
}

export default function RelatedSidebar({ items, title = 'Related Resources' }: { items: RelatedItem[]; title?: string }) {
  if (!items.length) return null;

  return (
    <aside className="rounded-xl border border-brand-200 bg-brand-50 p-6 shadow-sm">
      <h3 className="font-heading font-semibold text-brand-800 mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block text-sm text-brand-600 hover:text-teal-500 transition-colors"
            >
              {item.title}
              {item.section && (
                <span className="ml-1 text-xs text-brand-400">({item.section})</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
