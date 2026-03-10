import Link from 'next/link';
import Script from 'next/script';
import CsrdQuiz from './CsrdQuiz';

export default function CSRDCheckerPage() {
  return (
    <>
      <Script id="csrd-checker-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebApplication', name: 'CSRD Applicability Checker',
        description: 'Check whether the EU Corporate Sustainability Reporting Directive applies to your organization.',
        url: 'https://resources.councilfire.org/tools/csrd-checker', applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      })}} />
      <div className="min-h-screen bg-brand-50 dark:bg-[#1a1a1a] py-16 px-4">
        <div className="mx-auto max-w-2xl">
          <Link href="/tools" className="text-sm text-teal-600 hover:underline mb-6 inline-block">← All Tools</Link>
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-brand-800 dark:text-white mb-2">CSRD Applicability Checker</h1>
          <p className="text-brand-500 dark:text-gray-400 mb-6">Answer 4 quick questions to find out if the EU Corporate Sustainability Reporting Directive applies to your organization.</p>

          <div className="bg-white dark:bg-[#222] rounded-2xl border border-brand-200 dark:border-white/10 p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-800 dark:text-white mb-3">What you&apos;ll learn</h2>
            <ul className="space-y-2 text-sm text-brand-600 dark:text-gray-300">
              <li className="flex items-start gap-2"><span>🇪🇺</span><span>Whether the CSRD applies to your organization based on size, revenue, and EU presence</span></li>
              <li className="flex items-start gap-2"><span>📅</span><span>Which reporting wave you fall under and when compliance is required</span></li>
              <li className="flex items-start gap-2"><span>📋</span><span>Recommended next steps and resources to prepare for compliance</span></li>
            </ul>
          </div>

          <CsrdQuiz />
        </div>
      </div>
    </>
  );
}
