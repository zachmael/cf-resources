import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carbon Footprint Estimator | Council Fire Resources',
  description: 'Estimate your organization\'s carbon footprint with our free calculator. Get a quick Scope 1, 2, and 3 emissions estimate and actionable reduction recommendations.',
  alternates: { canonical: 'https://resources.councilfire.org/tools/carbon-estimator' },
  openGraph: {
    title: 'Carbon Footprint Estimator | Council Fire Resources',
    description: 'Estimate your organizational carbon footprint in minutes.',
    url: 'https://resources.councilfire.org/tools/carbon-estimator',
    type: 'website',
    siteName: 'Council Fire Resources',
  },
  twitter: {
    card: 'summary',
    title: 'Carbon Footprint Estimator',
    description: 'Free organizational carbon footprint calculator with reduction tips.',
  },
};

export default function CarbonEstimatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
