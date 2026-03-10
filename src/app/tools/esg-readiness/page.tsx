import Link from 'next/link';
import Script from 'next/script';
import EsgQuiz from './EsgQuiz';

export default function ESGReadinessPage() {
  return (
    <>
      <Script id="esg-readiness-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebApplication', name: 'ESG Readiness Assessment',
        description: 'Assess your organization\'s ESG readiness with a 10-question quiz.',
        url: 'https://resources.councilfire.org/tools/esg-readiness', applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      })}} />
      <div className="min-h-screen bg-brand-50 dark:bg-[#1a1a1a] py-16 px-4">
        <div className="mx-auto max-w-2xl">
          <Link href="/tools" className="text-sm text-teal-600 hover:underline mb-6 inline-block">← All Tools</Link>
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-brand-800 dark:text-white mb-2">ESG Readiness Assessment</h1>
          <p className="text-brand-500 dark:text-gray-400 mb-6">10 yes/no questions to gauge your organization&apos;s sustainability maturity.</p>

          <div className="bg-white dark:bg-[#222] rounded-2xl border border-brand-200 dark:border-white/10 p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-800 dark:text-white mb-3">What you&apos;ll learn</h2>
            <ul className="space-y-2 text-sm text-brand-600 dark:text-gray-300">
              <li className="flex items-start gap-2"><span>📊</span><span>Your overall ESG maturity level — from Beginner to Leader</span></li>
              <li className="flex items-start gap-2"><span>🎯</span><span>Which areas of sustainability you&apos;re strong in and where gaps exist</span></li>
              <li className="flex items-start gap-2"><span>📚</span><span>Personalized resource recommendations based on your score</span></li>
              <li className="flex items-start gap-2"><span>🗺️</span><span>A clear next-step action plan tailored to your maturity level</span></li>
            </ul>
          </div>

          <EsgQuiz />
        </div>
      </div>
    </>
  );
}
