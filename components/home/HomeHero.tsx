import Link from "next/link";

const filingStages = [
  { label: "Requirements", detail: "Checked before filing", status: "Ready" },
  { label: "Application", detail: "Prepared by your expert", status: "Next" },
  { label: "Updates", detail: "Shared in one clear timeline", status: "Tracked" },
];

export default function HomeHero() {
  return (
    <section className="border-b border-ledger-border bg-warm-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20 lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-sm font-semibold text-secondary-text">
            <span className="h-px w-9 bg-legal-gold" aria-hidden="true" />
            Registrations, tax and compliance
          </p>
          <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-ink sm:text-6xl lg:text-7xl">
            Your business, legally ready.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-secondary-text sm:text-xl">
            Set up, protect and run your business with guided legal filings, clear requirements and an expert who keeps every step moving.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-legal-gold px-6 py-3 font-semibold text-ink transition-colors hover:bg-[#A77D2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-legal-gold"
            >
              Start with an expert
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-ink px-6 py-3 font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Explore services
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-ledger-border pt-6 text-sm text-secondary-text">
            <span>Clear document checklist</span>
            <span>Expert-guided filing</span>
            <span>Progress updates</span>
          </div>
        </div>

        <div className="relative lg:pl-4">
          <div className="absolute -left-4 top-10 hidden h-[72%] w-px bg-legal-gold lg:block" aria-hidden="true" />
          <div className="rounded-xl border border-ledger-border bg-white p-5 shadow-[0_24px_70px_rgba(17,17,17,0.08)] sm:p-8">
            <div className="flex items-start justify-between gap-6 border-b border-ledger-border pb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-text">Your filing brief</p>
                <h2 className="mt-2 font-serif text-3xl font-semibold tracking-[-0.03em] text-ink">One clear path forward</h2>
              </div>
              <span className="rounded-full bg-[#F4EBD8] px-3 py-1 text-xs font-bold text-[#785711]">Guided</span>
            </div>
            <ol className="divide-y divide-ledger-border">
              {filingStages.map((stage, index) => (
                <li key={stage.label} className="grid grid-cols-[2rem_1fr_auto] items-center gap-3 py-5">
                  <span className="font-serif text-lg font-semibold text-legal-gold">0{index + 1}</span>
                  <span>
                    <span className="block font-semibold text-main-text">{stage.label}</span>
                    <span className="mt-1 block text-sm text-secondary-text">{stage.detail}</span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary-text">{stage.status}</span>
                </li>
              ))}
            </ol>
            <p className="mt-2 border-l-2 border-legal-gold pl-4 text-sm leading-6 text-secondary-text">
              Know what is needed, what happens next and where your application stands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
