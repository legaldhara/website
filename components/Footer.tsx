import Link from "next/link";

import { LegalDharaBrand } from "@/components/brand/LegalDharaBrand";

const serviceGroups = [
  {
    title: "Trademark & intellectual property",
    links: [
      ["Trademark registration", "/services/trademark-registration"],
      ["Trademark search", "/services/trademark-search"],
      ["Trademark objection", "/services/tm-objection"],
      ["Trademark renewal", "/services/trademark-renewal"],
      ["Copyright registration", "/services/copyright-registration"],
    ],
  },
  {
    title: "Business registrations",
    links: [
      ["Private limited company", "/services/pvt-ltd"],
      ["Limited liability partnership", "/services/llp"],
      ["Partnership firm", "/services/partnership-firm"],
      ["Sole proprietorship", "/services/sole-proprietorship"],
      ["Startup India", "/services/startup-india-registration"],
    ],
  },
  {
    title: "Tax & compliance",
    links: [
      ["GST registration", "/services/gst-registration"],
      ["GST filing", "/services/gst-filing"],
      ["Income tax filing", "/services/itr-filing"],
      ["FSSAI registration", "/services/fssai-registration"],
      ["ISO registration", "/services/iso-registration"],
    ],
  },
] as const;

const companyLinks = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
] as const;

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-[0.9fr_1.6fr] lg:gap-20">
          <div>
            <LegalDharaBrand inverse priority />
            <p className="mt-6 max-w-sm leading-7 text-[#B8B8B8]">
              Practical legal, tax and compliance support for businesses across India.
            </p>
            <address className="mt-8 not-italic text-sm leading-6 text-[#B8B8B8]">
              7th Floor, Rajani Bhawan<br />
              Opposite High Court, M.G. Road<br />
              Indore, Madhya Pradesh
            </address>
            <Link href="/contact" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-legal-gold px-5 py-2.5 font-semibold text-ink transition-colors hover:bg-[#D0A64F]">
              Talk to an expert
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {serviceGroups.map((group) => (
              <details key={group.title} className="border-b border-white/15 pb-4 sm:border-0 sm:pb-0" open>
                <summary className="cursor-pointer list-none pr-6 text-sm font-bold leading-6 text-white marker:content-none sm:cursor-default">
                  {group.title}
                </summary>
                <ul className="mt-4 space-y-3">
                  {group.links.map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} className="text-sm leading-6 text-[#B8B8B8] transition-colors hover:text-legal-gold">{label}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}

            <div>
              <h2 className="text-sm font-bold leading-6">Company</h2>
              <ul className="mt-4 space-y-3">
                {companyLinks.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-sm leading-6 text-[#B8B8B8] transition-colors hover:text-legal-gold">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-xs text-[#939393] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Legal Dhara. All rights reserved.</p>
          <nav aria-label="Legal policies" className="flex flex-wrap gap-x-6 gap-y-3">
            <Link href="/terms" className="hover:text-white">Terms of service</Link>
            <Link href="/privacy" className="hover:text-white">Privacy policy</Link>
            <Link href="/refund" className="hover:text-white">Refund policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
