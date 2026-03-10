import Link from 'next/link';
import Script from 'next/script';
import CarbonForm from './CarbonForm';

export default function CarbonEstimatorPage() {
  return (
    <>
      <Script id="carbon-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Carbon Footprint Estimator',
        description: 'Estimate your organization\'s carbon footprint across Scope 1, 2, and 3 emissions.',
        url: 'https://resources.councilfire.org/tools/carbon-estimator', applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      })}} />
      <div className="min-h-screen bg-brand-50 dark:bg-[#1a1a1a] py-16 px-4">
        <div className="mx-auto max-w-2xl">
          <Link href="/tools" className="text-sm text-teal-600 hover:underline mb-6 inline-block">← All Tools</Link>
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-brand-800 dark:text-white mb-2">Carbon Footprint Estimator</h1>
          <p className="text-brand-500 dark:text-gray-400 mb-6">Get a ballpark estimate of your organization&apos;s greenhouse gas emissions.</p>

          <div className="bg-white dark:bg-[#222] rounded-2xl border border-brand-200 dark:border-white/10 p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-800 dark:text-white mb-3">What you&apos;ll learn</h2>
            <ul className="space-y-2 text-sm text-brand-600 dark:text-gray-300">
              <li className="flex items-start gap-2"><span>🏭</span><span>Estimated Scope 1 (direct), Scope 2 (electricity), and Scope 3 (value chain) emissions</span></li>
              <li className="flex items-start gap-2"><span>📊</span><span>Your per-employee carbon intensity compared to industry benchmarks</span></li>
              <li className="flex items-start gap-2"><span>🎯</span><span>Actionable resources for measuring and reducing your carbon footprint</span></li>
            </ul>
          </div>

          <CarbonForm />
        </div>
      </div>
    </>
  );
}
