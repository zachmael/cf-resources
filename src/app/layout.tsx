import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import { organizationSchema } from '@/lib/schema';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://resources.councilfire.org'),
  title: {
    default: 'Sustainability & Climate Resilience Resources | Council Fire',
    template: '%s | Council Fire Resources',
  },
  description: 'Free sustainability resources from Council Fire: 300+ expert guides on ESG reporting, climate resilience, carbon strategy, and environmental compliance. Glossary, framework comparisons, and city-level climate data.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Council Fire Resources',
    title: 'Sustainability & Climate Resilience Resources | Council Fire',
    description: 'Free sustainability resources from Council Fire: 300+ expert guides on ESG reporting, climate resilience, carbon strategy, and environmental compliance.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sustainability & Climate Resilience Resources | Council Fire',
    description: 'Free sustainability resources from Council Fire: 300+ expert guides on ESG, climate resilience, and environmental compliance.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white dark:bg-[#111] text-brand-900 dark:text-gray-100">
        <JsonLd data={organizationSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
