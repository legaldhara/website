import Link from "next/link";

const serviceFamilies = [
  {
    number: "01",
    title: "Protect your identity",
    description: "Secure the name, logo and creative work your customers recognise.",
    services: ["Trademark registration", "Copyright registration", "Trademark objection"],
    href: "/services/trademark-registration",
  },
  {
    number: "02",
    title: "Start your business",
    description: "Choose the right structure and complete the registrations needed to begin.",
    services: ["Private limited company", "LLP registration", "Sole proprietorship"],
    href: "/services/pvt-ltd",
  },
  {
    number: "03",
    title: "Stay compliant",
    description: "Keep tax registrations, returns and recurring obligations organised.",
    services: ["GST registration", "Income tax return", "Annual compliance"],
    href: "/services/gst-registration",
  },
  {
    number: "04",
    title: "Put agreements in writing",
    description: "Create practical legal documents for work, property and partnerships.",
    services: ["Business agreements", "Legal notice", "Property documents"],
    href: "/services/documentation",
  },
];

export default function ServiceFamilies() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-5 border-b border-ink pb-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <h2 id="services-heading" className="max-w-xl font-serif text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">
            Legal work, arranged around your business.
          </h2>
          <p className="max-w-xl text-lg leading-8 text-secondary-text md:justify-self-end">
            Begin with the outcome you need. We help identify the filing, documents and next action without making you decode legal terminology.
          </p>
        </div>

        <div>
          {serviceFamilies.map((family) => (
            <article key={family.number} className="group grid gap-5 border-b border-ledger-border py-8 transition-colors hover:bg-warm-paper/70 md:grid-cols-[5rem_0.8fr_1fr_auto] md:items-center md:px-4">
              <span className="font-serif text-2xl text-legal-gold">{family.number}</span>
              <div>
                <h3 className="font-serif text-2xl font-semibold tracking-[-0.025em] text-ink">{family.title}</h3>
                <p className="mt-2 max-w-md leading-7 text-secondary-text">{family.description}</p>
              </div>
              <ul className="grid gap-2 text-sm font-medium text-main-text sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                {family.services.map((service) => <li key={service}>{service}</li>)}
              </ul>
              <Link href={family.href} className="inline-flex items-center gap-2 font-semibold text-ink underline decoration-legal-gold decoration-2 underline-offset-4 md:justify-self-end">
                View services <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
