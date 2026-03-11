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
  'carbon-strategy': {
    title: 'Building a Carbon Strategy',
    description: 'From understanding your carbon footprint to setting science-based targets — a complete path to decarbonization.',
    steps: [
      { title: 'Carbon Footprint Basics', href: '/glossary/carbon-footprint', description: 'Learn what a carbon footprint is and why accurate measurement is the foundation of any climate strategy.' },
      { title: 'GHG Protocol Explained', href: '/frameworks/ghg-protocol', description: 'Understand the global standard for measuring and managing greenhouse gas emissions across Scope 1, 2, and 3.' },
      { title: 'Estimate Your Footprint', href: '/tools/carbon-estimator', description: 'Use our free tool to get a ballpark estimate of your organization\'s emissions.' },
      { title: 'Science-Based Targets', href: '/frameworks/sbti-science-based-targets', description: 'Learn how the SBTi framework helps companies set emissions reduction targets aligned with climate science.' },
      { title: 'How to Reduce Scope 3 Emissions', href: '/how-to/how-to-reduce-scope-3-emissions', description: 'Tackle the hardest part of decarbonization — your value chain emissions.' },
      { title: 'Scope 3 Worksheet', href: '/resources/scope-3-emissions-worksheet', description: 'Download our free worksheet to map emissions across all 15 GHG Protocol categories.' },
      { title: 'Get Expert Support', href: 'https://www.councilfire.org/contact', description: 'Council Fire helps organizations build credible, actionable carbon strategies.' },
    ],
  },
  'sustainable-supply-chains': {
    title: 'Sustainable Supply Chain Essentials',
    description: 'Learn how to assess, improve, and report on sustainability across your value chain.',
    steps: [
      { title: 'Sustainable Supply Chain Basics', href: '/glossary/sustainable-supply-chain', description: 'Understand what makes a supply chain sustainable and why it matters for your business.' },
      { title: 'Supply Chain Due Diligence', href: '/glossary/supply-chain-due-diligence', description: 'Learn about the growing legal requirements for supply chain transparency and human rights due diligence.' },
      { title: 'Circular Economy vs Linear Economy', href: '/compare/circular-economy-vs-linear-economy', description: 'Compare two fundamentally different approaches to resource use and waste.' },
      { title: 'How to Conduct a Supplier Assessment', href: '/how-to/how-to-conduct-a-sustainability-supplier-assessment', description: 'A practical guide to evaluating your suppliers on ESG criteria.' },
      { title: 'Build a Sustainable Supply Chain', href: '/guides/sustainable-supply-chain-guide', description: 'A comprehensive guide to transforming your supply chain for long-term resilience.' },
      { title: 'Work with Council Fire', href: 'https://www.councilfire.org/contact', description: 'Our team can help you build supply chain sustainability into your core operations.' },
    ],
  },
  'biodiversity-and-nature': {
    title: 'Biodiversity & Nature for Business',
    description: 'Understand your organization\'s relationship with nature and the emerging frameworks for nature-related disclosure.',
    steps: [
      { title: 'What is Biodiversity?', href: '/glossary/biodiversity', description: 'Start with the fundamentals — what biodiversity means and why it underpins the global economy.' },
      { title: 'Nature-Based Solutions', href: '/glossary/nature-based-solutions', description: 'Learn how working with nature can address climate, water, and community challenges simultaneously.' },
      { title: 'TNFD Framework', href: '/frameworks/tnfd-framework', description: 'Understand the Taskforce on Nature-related Financial Disclosures and how it parallels TCFD.' },
      { title: 'Biodiversity Net Gain vs Offsets', href: '/compare/biodiversity-net-gain-vs-biodiversity-offsets', description: 'Compare two approaches to managing your organization\'s impact on nature.' },
      { title: 'Natural Capital Accounting', href: '/glossary/natural-capital-accounting', description: 'Learn how organizations are measuring and valuing their dependence on natural systems.' },
      { title: 'Get Expert Support', href: 'https://www.councilfire.org/contact', description: 'Council Fire helps organizations develop nature-positive strategies aligned with global frameworks.' },
    ],
  },
  'b-corp-journey': {
    title: 'The B Corp Journey',
    description: 'Everything you need to know about B Corp certification — from understanding the standard to preparing your application.',
    steps: [
      { title: 'What is B Corp Certification?', href: '/glossary/b-corp-certification', description: 'Learn about the rigorous standard that verifies businesses balancing purpose and profit.' },
      { title: 'B Corp vs Benefit Corporation', href: '/compare/b-corp-vs-benefit-corporation', description: 'Understand the difference between B Corp certification and benefit corporation legal status.' },
      { title: 'Stakeholder Capitalism Explained', href: '/glossary/stakeholder-capitalism', description: 'Explore the governance philosophy that underpins the B Corp movement.' },
      { title: 'How to Become a B Corp', href: '/how-to/how-to-become-a-certified-b-corp', description: 'A step-by-step guide to the B Impact Assessment and certification process.' },
      { title: 'ESG Readiness Check', href: '/tools/esg-readiness', description: 'Take our free assessment to gauge your organization\'s sustainability baseline.' },
      { title: 'Work with Council Fire', href: 'https://www.councilfire.org/contact', description: 'As a certified B Corp ourselves, we can guide you through every step of the journey.' },
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
        <LearningTrack title={track.title} description={track.description} steps={track.steps} trackSlug={params.slug} />
      </div>
    </div>
  );
}
