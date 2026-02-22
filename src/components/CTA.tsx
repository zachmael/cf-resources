export default function CTA({ topic }: { topic: string }) {
  return (
    <section className="mt-12 rounded-xl bg-teal-500 p-8 text-white">
      <h2 className="text-2xl font-semibold font-heading">Need help with {topic}?</h2>
      <p className="mt-2 text-teal-100">
        Our team brings decades of sustainability consulting experience. Let&apos;s talk about how Council Fire can support your goals.
      </p>
      <a
        href="https://www.councilfire.org/contact"
        className="mt-4 inline-block rounded-lg bg-white text-teal-600 font-semibold px-6 py-3 hover:bg-teal-50 transition-colors"
      >
        Get in Touch →
      </a>
    </section>
  );
}
