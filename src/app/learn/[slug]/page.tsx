import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import LearningTrack, { type TrackStep } from '@/components/LearningTrack';

interface Track {
  title: string;
  description: string;
  steps: TrackStep[];
}

const tracks: Record<string, Track> = {
  'new-to-esg': {
    title: 'New to ESG Reporting? Start Here',
    description: 'A beginner-friendly guided path through the essentials of ESG reporting — from understanding key terms to assessing your own readiness.',
    steps: [
      { title: 'Understand ESG Reporting', href: '/glossary/esg-reporting', description: 'Learn what ESG reporting is and why it matters for businesses today.' },
      { title: 'Compare GRI vs ISSB', href: '/compare/gri-vs-issb', description: 'Understand the differences between the two most important reporting frameworks.' },
      { title: 'How to Implement ESG Reporting', href: '/how-to/how-to-implement-esg-reporting', description: 'A practical guide to getting started with ESG reporting at your organization.' },
      { title: 'Check Your ESG Readiness', href: '/tools/esg-readiness', description: 'Take our 10-question quiz to see where you stand.' },
      { title: 'Talk to Council Fire', href: 'https://www.councilfire.org/contact', description: 'Ready for expert guidance? Our team can help you build a reporting program.' },
    ],
  },
  'csrd-compliance': {
    title: 'CSRD Compliance Roadmap',
    description: 'A step-by-step path to understanding and preparing for the EU Corporate Sustainability Reporting Directive.',
    steps: [
      { title: 'CSRD Regulation Overview', href: '/regulations/csrd-corporate-sustainability-reporting-directive', description: 'Understand the scope, timeline, and requirements of the CSRD.' },
      { title: 'What is Double Materiality?', href: '/glossary/double-materiality', description: 'Learn the core concept behind CSRD\'s reporting approach.' },
      { title: 'How to Write a CSRD Report', href: '/how-to/how-to-write-a-csrd-compliant-report', description: 'Step-by-step guidance on creating a compliant sustainability report.' },
      { title: 'Conduct a Materiality Assessment', href: '/how-to/how-to-conduct-a-materiality-assessment', description: 'Learn how to identify and prioritize your material ESG topics.' },
      { title: 'CSRD Compliance Guide', href: '/guides/csrd-compliance-guide', description: 'A comprehensive guide covering all aspects of CSRD preparation.' },
      { title: 'Get Expert Help', href: 'https://www.councilfire.org/contact', description: 'Council Fire\'s consultants specialize in CSRD readiness and implementation.' },
    ],
  },
  'climate-risk': {
    title: 'Understanding Climate Risk',
    description: 'Learn how to identify, assess, and manage climate-related risks and opportunities for your organization.',
    steps: [
      { title: 'Climate Resilience Explained', href: '/glossary/climate-resilience', description: 'Understand what climate resilience means and why it matters for business.' },
      { title: 'Climate Risk Disclosure', href: '/glossary/climate-risk-disclosure', description: 'Learn about the frameworks and expectations around climate risk transparency.' },
      { title: 'How to Assess Climate Risks', href: '/how-to/how-to-conduct-a-climate-risk-assessment', description: 'A practical guide to identifying and evaluating climate risks.' },
      { title: 'Create a Climate Action Plan', href: '/how-to/how-to-create-a-climate-action-plan', description: 'Turn your risk assessment into actionable climate strategy.' },
      { title: 'Work with Council Fire', href: 'https://www.councilfire.org/contact', description: 'Our team can help you build a comprehensive climate risk management program.' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(tracks).map(slug => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const track = tracks[params.slug];
  if (!track) return {};
  return { title: `${track.title} | Council Fire Resources`, description: track.description };
}

export default function TrackPage({ params }: { params: { slug: string } }) {
  const track = tracks[params.slug];
  if (!track) notFound();

  return (
    <div className="min-h-screen bg-brand-50 dark:bg-[#1a1a1a] py-16 px-4">
      <div className="mx-auto max-w-2xl">
        <Link href="/learn" className="text-sm text-teal-600 hover:underline mb-6 inline-block">← All Learning Tracks</Link>
        <LearningTrack title={track.title} description={track.description} steps={track.steps} />
      </div>
    </div>
  );
}
