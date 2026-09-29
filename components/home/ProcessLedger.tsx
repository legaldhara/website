const processSteps = [
  { title: "Choose the service", description: "Tell us the outcome you need or speak with an expert to identify the right filing." },
  { title: "Verify requirements", description: "Receive a precise checklist and share the necessary information and documents." },
  { title: "Prepare and file", description: "Your assigned team reviews the details, prepares the application and submits it." },
  { title: "Track progress", description: "Follow updates and respond quickly if an authority needs clarification." },
];

export default function ProcessLedger() {
  return (
    <section className="bg-charcoal py-20 text-white sm:py-24" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <h2 id="process-heading" className="font-serif text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">How your filing moves</h2>
          <p className="mt-5 text-lg leading-8 text-[#BCBCBC]">A defined sequence replaces scattered calls, unclear requirements and last-minute document requests.</p>
        </div>
        <ol className="mt-14 grid border-y border-white/15 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.title} className="relative border-b border-white/15 py-8 md:px-7 md:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
              <span className="font-serif text-3xl text-legal-gold">0{index + 1}</span>
              <h3 className="mt-8 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#BCBCBC]">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
