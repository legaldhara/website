export interface NavigationLink {
  label: string;
  href: string;
}

export interface NavigationCategory {
  label: string;
  links: NavigationLink[];
}

export interface NavigationGroup {
  label: string;
  categories: NavigationCategory[];
}

export const navigationGroups: NavigationGroup[] = [
  {
    label: "Trademark & IP",
    categories: [
      {
        label: "Trademark",
        links: [
          { label: "Trademark registration", href: "/services/trademark-registration" },
          { label: "Trademark search", href: "/services/trademark-search" },
          { label: "Respond to objection", href: "/services/tm-objection" },
          { label: "Renewal", href: "/services/trademark-renewal" },
          { label: "International trademark", href: "/services/international-trademark" },
          { label: "Class finder", href: "/services/trademark-class-finder" },
        ],
      },
      {
        label: "Copyright, patent & design",
        links: [
          { label: "Copyright registration", href: "/services/copyright-registration" },
          { label: "Copyright music", href: "/services/copyright-music" },
          { label: "Patent search", href: "/services/patent-search" },
          { label: "Patent registration", href: "/services/patent-registration" },
          { label: "Design registration", href: "/services/design-registration" },
        ],
      },
    ],
  },
  {
    label: "Business",
    categories: [
      {
        label: "Company registration",
        links: [
          { label: "Private limited company", href: "/services/pvt-ltd" },
          { label: "Limited liability partnership", href: "/services/llp" },
          { label: "One person company", href: "/services/opc" },
          { label: "Sole proprietorship", href: "/services/sole-proprietorship" },
          { label: "Partnership firm", href: "/services/partnership-firm" },
          { label: "Startup India", href: "/services/startup-india-registration" },
        ],
      },
      {
        label: "Licences & certification",
        links: [
          { label: "FSSAI registration", href: "/services/fssai-registration" },
          { label: "ISO registration", href: "/services/iso-registration" },
          { label: "Nidhi company", href: "/services/nidhi-company" },
        ],
      },
    ],
  },
  {
    label: "Tax & compliance",
    categories: [
      {
        label: "GST",
        links: [
          { label: "GST registration", href: "/services/gst-registration" },
          { label: "GST filing", href: "/services/gst-filing" },
          { label: "GST cancellation", href: "/services/gst-cancellation" },
        ],
      },
      {
        label: "Income tax",
        links: [
          { label: "Income tax filing", href: "/services/itr-filing" },
          { label: "Tax planning", href: "/services/tax-planning" },
        ],
      },
    ],
  },
  {
    label: "Documents",
    categories: [
      {
        label: "Legal documents",
        links: [
          { label: "Legal notice", href: "/services/documentation" },
          { label: "Rental agreement", href: "/services/documentation" },
          { label: "Power of attorney", href: "/services/documentation" },
          { label: "Affidavit", href: "/services/documentation" },
        ],
      },
      {
        label: "Business contracts",
        links: [
          { label: "Non-disclosure agreement", href: "/services/documentation" },
          { label: "Founders agreement", href: "/services/documentation" },
          { label: "Vendor agreement", href: "/services/documentation" },
          { label: "Memorandum of understanding", href: "/services/documentation" },
        ],
      },
    ],
  },
];
