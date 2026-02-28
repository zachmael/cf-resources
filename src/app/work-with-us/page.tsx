import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work With Us — Council Fire Sustainability Consulting',
  description: 'Turn sustainability knowledge into action. Council Fire offers ESG strategy, climate resilience planning, and sustainability consulting with 20+ years of experience.',
  openGraph: {
    title: 'Work With Us — Council Fire',
    description: 'Decades of ESG strategy, climate resilience, and sustainability consulting experience. Book a free consultation.',
    type: 'website',
  },
};

const services = [
  { icon: '📊', title: 'ESG Reporting & Disclosure', desc: 'Navigate CSRD, SEC climate rules, GRI, and ISSB with confidence. We help you build disclosure processes that satisfy regulators and investors.', href: '/frameworks' },
  { icon: '🌍', title: 'Climate Risk & Resilience Planning', desc: 'Identify physical and transition risks, build adaptation strategies, and future-proof your operations against climate uncertainty.', href: '/guides' },
  { icon: '🧭', title: 'Sustainability Strategy Development', desc: 'Define your sustainability vision, set science-based targets, and create a roadmap that aligns with your business objectives.', href: '/glossary' },
  { icon: '🤝', title: 'Stakeholder Engagement & Storytelling', desc: 'Craft compelling sustainability narratives that resonate with investors, customers, employees, and communities.', href: '/for' },
  { icon: '🔗', title: 'Supply Chain Sustainability', desc: 'Map your value chain impacts, manage Scope 3 emissions, and build supplier engagement programs that drive real change.', href: '/how-to' },
  { icon: '🌿', title: 'Nature & Biodiversity Strategy', desc: 'Assess nature-related dependencies and impacts, align with TNFD, and integrate biodiversity into your sustainability approach.', href: '/regulations' },
];

const faqs = [
  { q: 'What does a typical engagement look like?', a: 'Every engagement starts with a discovery call to understand your goals. From there, we scope a custom project — whether that\'s a 4-week assessment, a multi-month strategy build, or ongoing advisory support.' },
  { q: 'How long do projects usually take?', a: 'Quick assessments take 4–6 weeks. Strategy development typically runs 3–6 months. Ongoing advisory relationships are structured in annual cycles. We\'ll give you a clear timeline upfront.' },
  { q: 'What size organizations do you work with?', a: 'We work with Fortune 500 companies, mid-market firms, municipalities, foundations, NGOs, and federal agencies. If sustainability matters to your organization, we can help.' },
  { q: 'How is Council Fire different from other sustainability consultants?', a: 'We combine deep technical expertise with practical execution. We\'re a certified B Corp, Best for the World honoree, and we\'ve been doing this for over 20 years — before ESG was a buzzword.' },
  { q: 'What does it cost?', a: 'Project fees depend on scope, complexity, and duration. We offer a free initial consultation to understand your needs and provide a transparent proposal. No surprises.' },
];

const caseStudies = [
  { title: 'Port Authority Sustainability Strategy', desc: 'Developed a comprehensive sustainability strategy that identified $125M in savings through efficiency and resilience improvements.', tag: 'Infrastructure', href: '/case-studies' },
  { title: 'Fortune 500 CSRD Readiness', desc: 'Guided a multinational corporation through double materiality assessment and ESRS gap analysis ahead of EU reporting deadlines.', tag: 'Corporate', href: '/case-studies' },
  { title: 'Municipal Climate Action Plan', desc: 'Partnered with a major city to develop a science-based climate action plan with community engagement at its core.', tag: 'Government', href: '/case-studies' },
];

export default function WorkWithUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[550px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=800&fit=crop"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-900/80 to-brand-900/50" />
        </div>
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-48 -left-24 w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-sm font-medium text-white/90 mb-8">
            <Image src="/logo-icon.png" alt="" width={400} height={364} className="h-4 w-auto" />
            Council Fire Consulting
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading text-white leading-[1.05] tracking-tight max-w-4xl">
            Turn Sustainability Knowledge Into Action
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
            You&apos;ve done the research. Council Fire helps you execute — with decades of experience in ESG strategy, climate resilience, and sustainability consulting.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://www.councilfire.org/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#258193] px-6 py-3 text-sm font-bold text-white hover:bg-[#1e6b7a] transition-colors shadow-lg"
            >
              Book a Free Consultation
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
            >
              See how we help
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-white dark:bg-[#111] border-b border-brand-200 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-brand-800 dark:text-white tracking-tight">How We Work</h2>
            <p className="mt-4 text-lg text-brand-500 dark:text-gray-400 max-w-xl mx-auto">A proven approach that turns complexity into clarity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Understand', desc: 'We start by learning your goals, challenges, and current state. No cookie-cutter assessments — just deep listening and sharp questions.', color: 'teal' },
              { step: '02', title: 'Strategize', desc: 'We design a custom roadmap based on your industry, maturity level, and ambitions. Every recommendation is grounded in what actually works.', color: 'amber' },
              { step: '03', title: 'Execute', desc: 'Our team works alongside yours to deliver measurable results. We don\'t hand off a deck and disappear — we stay until the work is done.', color: 'teal' },
            ].map((item) => (
              <div key={item.step} className="relative rounded-2xl border border-brand-200 dark:border-white/10 bg-brand-50 dark:bg-[#1a1a1a] p-8">
                <span className={`text-5xl font-extrabold font-heading ${item.color === 'teal' ? 'text-teal-500/20' : 'text-amber-500/20'}`}>{item.step}</span>
                <h3 className="mt-4 text-xl font-bold font-heading text-brand-800 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-brand-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-brand-50 dark:bg-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-brand-800 dark:text-white tracking-tight">What We Help With</h2>
          <p className="mt-4 text-lg text-brand-500 dark:text-gray-400 max-w-xl">End-to-end sustainability consulting, from strategy to execution.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group rounded-2xl bg-white dark:bg-[#222] border border-brand-200 dark:border-white/10 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-3xl">{s.icon}</span>
                <h3 className="mt-4 text-lg font-bold font-heading text-brand-800 dark:text-white group-hover:text-teal-600 transition-colors">{s.title}</h3>
                <p className="mt-2 text-sm text-brand-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-teal-600 dark:text-teal-400">
                  Explore resources
                  <svg className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1518173946687-a4c52f2e0c80?w=1200&h=600&fit=crop"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-teal-800/90" />
        </div>
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-white/5" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-sm font-medium text-white/80 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Trusted Partners
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">Trusted by organizations committed to sustainability</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '20+', label: 'Years of Experience' },
              { value: 'B Corp', label: 'Certified' },
              { value: '$125M', label: 'Saved for One Client' },
              { value: 'Best for the World', label: 'B Corp Honoree' },
            ].map((stat) => (
              <div key={stat.label} className="text-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-6">
                <div className="text-3xl font-extrabold font-heading text-white">{stat.value}</div>
                <div className="mt-2 text-sm text-teal-100/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <blockquote className="text-xl md:text-2xl font-heading font-bold text-white/90 italic max-w-2xl mx-auto">
              &ldquo;Saved a port authority $125M through sustainability-driven strategy&rdquo;
            </blockquote>
            <p className="mt-6 text-sm text-teal-100/60">
              Serving Fortune 500s, municipalities, foundations, NGOs, and federal agencies
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Highlights */}
      <section className="bg-white dark:bg-[#111]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Results</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-brand-800 dark:text-white tracking-tight">Case Study Highlights</h2>
              <p className="mt-3 text-brand-500 dark:text-gray-400 text-lg">Real outcomes from real engagements.</p>
            </div>
            <Link href="/case-studies" className="hidden md:inline-flex items-center gap-3 text-sm font-semibold text-brand-800 dark:text-gray-200 group">
              View all
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 text-white group-hover:bg-teal-600 transition-all group-hover:scale-105">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <Link
                key={cs.title}
                href={cs.href}
                className="group rounded-2xl border border-brand-200 dark:border-white/10 bg-white dark:bg-[#222] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-1.5 bg-gradient-to-r from-[#258193] to-[#E8912D]" />
                <div className="p-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700/50 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-400 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    {cs.tag}
                  </span>
                  <h3 className="text-lg font-bold text-brand-800 dark:text-white group-hover:text-teal-600 transition-colors">{cs.title}</h3>
                  <p className="mt-2 text-sm text-brand-500 dark:text-gray-400 leading-relaxed">{cs.desc}</p>
                  <div className="mt-4 text-sm font-semibold text-teal-600 dark:text-teal-400 flex items-center gap-1">
                    Read more <svg className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-50 dark:bg-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-teal-500" />
              <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-brand-800 dark:text-white tracking-tight">Common Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-brand-200 dark:border-white/10 bg-white dark:bg-[#222] overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-base font-bold text-brand-800 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <svg className="h-5 w-5 shrink-0 text-brand-400 dark:text-gray-500 group-open:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-brand-500 dark:text-gray-400 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=400&fit=crop"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-900/90" />
        </div>
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight">Ready to get started?</h2>
          <p className="mt-5 text-xl text-white/60 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re just beginning your sustainability journey or scaling up existing efforts, we&apos;re here to help.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.councilfire.org/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#258193] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#1e6b7a] transition-colors shadow-lg"
            >
              Book a 15-Minute Call
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a
              href="https://www.councilfire.org/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
            >
              Send us a message
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
          </div>
          <p className="mt-8 text-sm text-white/40">
            Not ready yet?{' '}
            <Link href="/resources" className="text-amber-400 hover:text-amber-300 font-medium underline underline-offset-2 transition-colors">
              Download a free resource
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
