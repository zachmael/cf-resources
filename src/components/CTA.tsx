export default function CTA({ topic }: { topic: string }) {
  return (
    <section className="mt-16 relative overflow-hidden rounded-2xl shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="relative p-10 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-white">Need help with {topic}?</h2>
        <p className="mt-3 text-teal-100 text-lg max-w-xl leading-relaxed">
          Our team brings decades of sustainability consulting experience. Let&apos;s talk about how Council Fire can support your goals.
        </p>
        <a
          href="https://www.councilfire.org/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white text-teal-600 font-semibold px-7 py-3.5 hover:bg-teal-50 transition-colors shadow-md"
        >
          Get in Touch
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </div>
    </section>
  );
}
