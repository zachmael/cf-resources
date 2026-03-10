import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ESG Readiness Assessment Quiz | Council Fire Resources',
  description: 'Take our free 10-question ESG readiness quiz to assess your organization\'s sustainability maturity. Get personalized recommendations for ESG reporting, climate risk, and compliance.',
  alternates: { canonical: 'https://resources.councilfire.org/tools/esg-readiness' },
  openGraph: {
    title: 'ESG Readiness Assessment Quiz | Council Fire Resources',
    description: 'Assess your organization\'s ESG maturity in 5 minutes. Get a personalized action plan.',
    url: 'https://resources.councilfire.org/tools/esg-readiness',
    type: 'website',
    siteName: 'Council Fire Resources',
  },
  twitter: {
    card: 'summary',
    title: 'ESG Readiness Assessment Quiz',
    description: 'Free 10-question assessment with personalized recommendations.',
  },
};

export default function EsgReadinessLayout({ children }: { children: React.ReactNode }) {
  return children;
}
