import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-brand-500 dark:text-brand-400">
        <li>
          <Link href="/" className="hover:text-forest-600 dark:hover:text-forest-400 transition-colors">Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span aria-hidden="true">›</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-forest-600 dark:hover:text-forest-400 transition-colors">{item.label}</Link>
            ) : (
              <span className="text-brand-800 dark:text-brand-200 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
