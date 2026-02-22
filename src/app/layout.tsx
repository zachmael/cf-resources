import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { organizationSchema } from '@/lib/schema';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://resources.councilfire.org'),
  title: {
    default: 'Council Fire Resources — Sustainability Knowledge Hub',
    template: '%s | Council Fire Resources',
  },
  description: 'Expert sustainability resources: glossary terms, framework guides, industry insights, and compliance tools from Council Fire.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Council Fire Resources',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white text-brand-900">
        <JsonLd data={organizationSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
