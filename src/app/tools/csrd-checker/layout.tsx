import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CSRD Applicability Checker | Council Fire Resources',
  description: 'Check whether the EU Corporate Sustainability Reporting Directive (CSRD) applies to your organization. Answer a few quick questions to find out your compliance obligations.',
  alternates: { canonical: 'https://resources.councilfire.org/tools/csrd-checker' },
  openGraph: {
    title: 'CSRD Applicability Checker | Council Fire Resources',
    description: 'Find out if CSRD applies to your organization in under 2 minutes.',
    url: 'https://resources.councilfire.org/tools/csrd-checker',
    type: 'website',
    siteName: 'Council Fire Resources',
  },
  twitter: {
    card: 'summary',
    title: 'CSRD Applicability Checker',
    description: 'Quick assessment to determine your CSRD compliance obligations.',
  },
};

export default function CsrdCheckerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
