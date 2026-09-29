const reasons = [
  { title: "Requirements made clear", description: "You receive a service-specific checklist before work begins." },
  { title: "Expert support", description: "A legal or compliance professional guides the application through each stage." },
  { title: "A visible record", description: "Documents, payments and progress stay connected to your account." },
];

export default function TrustPanel() {
  return (
    <section className="bg-warm-paper py-20 sm:py-24" aria-labelledby="trust-heading">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
        <div>
          <h2 id="trust-heading" className="font-serif text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">Why Legal Dhara</h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-secondary-text">Legal work feels manageable when responsibilities, documents and progress are visible from the start.</p>
        </div>
        <div className="border-t border-ink">
          {reasons.map((reason, index) => (
            <article key={reason.title} className="grid gap-3 border-b border-ledger-border py-7 sm:grid-cols-[3rem_0.8fr_1fr] sm:gap-6">
              <span className="font-serif text-xl text-legal-gold">0{index + 1}</span>
              <h3 className="text-lg font-semibold text-ink">{reason.title}</h3>
              <p className="leading-7 text-secondary-text">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
