import Link from "next/link";

export default function HomeClosingCta() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-xl bg-ink px-6 py-12 text-white sm:px-10 lg:grid-cols-[1fr_auto] lg:items-end lg:px-14 lg:py-14">
        <div>
          <h2 className="max-w-3xl font-serif text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Start with the right filing, not another search.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#C8C8C8]">Share what your business needs. We will help you understand the service, documents and next step.</p>
        </div>
        <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-md bg-legal-gold px-7 py-3 font-semibold text-ink transition-colors hover:bg-[#D0A64F]">
          Talk to an expert
        </Link>
      </div>
    </section>
  );
}
