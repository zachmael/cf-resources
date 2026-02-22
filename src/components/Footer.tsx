import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-brand-200 dark:border-brand-800 bg-brand-50 dark:bg-brand-950 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-heading font-bold text-brand-800 dark:text-brand-200 text-lg">A Council Fire Resource</p>
            <p className="mt-2 text-sm text-brand-600 dark:text-brand-400">
              Sustainability knowledge for professionals navigating climate risk, ESG reporting, and the clean energy transition.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-800 dark:text-brand-200 mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/glossary" className="text-brand-600 dark:text-brand-400 hover:text-forest-600 dark:hover:text-forest-400 transition-colors">Glossary</Link></li>
              <li><Link href="/compare" className="text-brand-600 dark:text-brand-400 hover:text-forest-600 dark:hover:text-forest-400 transition-colors">Comparisons</Link></li>
              <li><Link href="/guides" className="text-brand-600 dark:text-brand-400 hover:text-forest-600 dark:hover:text-forest-400 transition-colors">Guides</Link></li>
              <li><Link href="/industries" className="text-brand-600 dark:text-brand-400 hover:text-forest-600 dark:hover:text-forest-400 transition-colors">Industries</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-brand-800 dark:text-brand-200 mb-3">Council Fire</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://councilfire.org" className="text-brand-600 dark:text-brand-400 hover:text-forest-600 dark:hover:text-forest-400 transition-colors">councilfire.org</a></li>
              <li><a href="https://councilfire.org/about" className="text-brand-600 dark:text-brand-400 hover:text-forest-600 dark:hover:text-forest-400 transition-colors">About Us</a></li>
              <li><a href="https://councilfire.org/contact" className="text-brand-600 dark:text-brand-400 hover:text-forest-600 dark:hover:text-forest-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-brand-200 dark:border-brand-800 text-center text-sm text-brand-500 dark:text-brand-500">
          © {new Date().getFullYear()} Council Fire. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
