// This is a placeholder for your actual data fetching logic.
// In a real application, this data might come from a CMS, database, or API.

export type ServiceDetail = {
  introductoryText: string // New: For the very first section
  whatIsTrademark: string // Updated: Detailed definition
  trademarkAct1999: string // New: Details about the act
  keyFeatures: { title: string; description: string }[] // For the hero section's left side
  whyRegisterDetailed: { title: string; description: string }[] // Updated: More detailed reasons for registration
  whoCanApply: string[]
  typesOfTrademarks: { title: string; description: string; example?: string }[]
  trademarkClasses: { description: string; examples: string[] }
  trademarkSearch: string
  requiredDocuments: {
    initialDetails: string[]
    documentTypes: { type: string; documents: string[] }[]
  }
  processSteps: { title: string; description: string }[]
  trademarkSymbols: { symbol: string; name: string; description: string }[]
  ipComparison: {
    category: string
    protection: string
    duration: string
    application: string
    requirements: string
    enforcement: string
    example: string
  }[]
  howWeAssist: { title: string; description: string }[]
  faq?: { question: string; answer: string }[]
  // New field for commonly filed trademarks section
  commonlyFiledTrademarks?: {
    title: string
    imageQuery: string // Used for placeholder image generation
    description: string
  }[]
}

export type Service = {
  name: string
  href: string
  description: string // This will be used for the main hero tagline
  icon: string // Corresponds to IconName in icon-map.ts
  price: string
  timeline: string
  zeroServiceCharges: boolean // Highlight zero service charges
  details: ServiceDetail
}

export const services: Service[] = [
  {
    name: "Trademark Registration  ",
    href: "/services/trademark-registration",
    description: "Register your trademark with expert assistance and ensure complete legal protection for your brand.", // Updated description for the main hero tagline
    icon: "Trademark", // Example icon name
    price: "Starting from $299",
    timeline: "7-10 Business Days",
    zeroServiceCharges: true, // Set to true to highlight
    details: {
      introductoryText:
        "Trademark registration is the process of securing exclusive legal rights to your brand name, logo, or symbol. In India, trademark registration is governed under the Trade Marks Act, 1999, allowing you to defend and exclusively use your intellectual property in the marketplace. The trademark application process involves submitting Form TM-A to the Trademark Office and selecting the correct class for your goods or services. This ensures that your brand is appropriately protected. Upon registration, you can use the ® symbol, signifying that your trademark is legally recognized.\n\nAt LegalDhara, we simplify the trademark registration process, offering expert guidance through trademark searches, addressing any oppositions, and assisting with renewals. Our experienced trademark attorneys help secure your trademark certificate and ensure your intellectual property is safeguarded, laying a solid legal foundation for your brand’s identity.",
      whatIsTrademark:
        "A trademark is a type of intellectual property that includes a word, phrase, symbol, design, or combination of these elements, used to identify and distinguish the goods or services of one entity from others. Under the Trade Marks Act, 1999, a trademark can also encompass the shape of goods, packaging, or color combinations, provided it can be graphically represented and is capable of differentiating one product or service from another.",
      trademarkAct1999:
        "The Trademarks Act of 1999 outlines the rules and regulations for registration, assignment, and trademark protection. The Indian Trademarks Act, 1999 is administered by the Controller General of Patents, Designs, and Trademarks under the Ministry of Commerce and Industry of the government of India.",
      keyFeatures: [
        {
          title: "Legal Protection",
          description: "Complete legal protection for your brand name and logo.",
        },
        {
          title: "Quick Processing",
          description: "12-18 months processing time with regular updates.",
        },
        {
          title: "Expert Support",
          description: "Dedicated legal experts handling your application.",
        },
        {
          title: "Complete Documentation",
          description: "All paperwork and documentation handled professionally.",
        },
      ],
      whyRegisterDetailed: [
        {
          title: "Official Public Record",
          description:
            "Registering your trademark with the trademark registry establishes an official public record of your ownership through publications in the trademark journal.",
        },
        {
          title: "Brand Distinction",
          description: "It distinguishes your brand from competitors, boosting recognition.",
        },
        {
          title: "Builds Customer Trust",
          description: "As registered trademarks are associated with quality, it builds customer trust.",
        },
        {
          title: "Increases Business Value",
          description: "Increases the business value, attracting investors and partners.",
        },
        {
          title: "Protects Against Counterfeiting",
          description: "Protects against counterfeiting and imitation.",
        },
        {
          title: "Licensing Opportunities",
          description: "Allows you to license your trademark to others.",
        },
        {
          title: "Boosts Credibility",
          description: "Lets you use the ® symbol, boosting brand credibility.",
        },
        {
          title: "Valuable Asset",
          description: "Becomes a valuable, marketable business asset.",
        },
      ],
      whoCanApply: [
        "Individuals",
        "Joint owners of a company",
        "Proprietorship firms",
        "Partnership firms (with a maximum of ten partners)",
        "Limited Liability Partnerships (LLPs)",
        "Indian companies",
        "Foreign companies",
        "Trusts",
        "Societies",
      ],
      typesOfTrademarks: [
        {
          title: "Product Mark",
          description:
            "Identifies and distinguishes goods rather than services. This includes brand names, logos, or symbols.",
          example: "The best example is ‘Nestle.’",
        },
        {
          title: "Service Mark",
          description:
            "These marks outline services provided by a company. Brand names or logos identifying a service are called service marks.",
          example: "For example ‘United Airlines’, ‘Fly the Friendly Skies’, the logo of a world map.",
        },
        {
          title: "Certification Mark",
          description: "This indicates that a product or service meets specific standards.",
          example: "The best example will be the ISI (Indian Standard Institute) mark and the FSSAI mark.",
        },
        {
          title: "Collective Mark",
          description: "Used by a group or association to identify goods and services from its members.",
          example: "Example: CII (Confederation of Indian Industry).",
        },
        {
          title: "Shape Mark",
          description: "Protects the distinctive shape of a product or its packaging.",
          example: "Example: Coca-Cola bottle, Fanta bottle.",
        },
        {
          title: "Pattern Mark",
          description: "Protects distinctive patterns or designs used on products or packaging.",
          example: "Example: The distinctive pattern on a brand's packaging.",
        },
        {
          title: "Sound Mark",
          description: "Protects a distinctive sound identifying a brand.",
          example: "An example is Yahoo's yodel, the theme song of the National Stock Exchange.",
        },
        {
          title: "Symbol Mark",
          description: "Protects unique visual symbols identifying a product or service.",
        },
        {
          title: "Color Mark",
          description: "Protect specific colors or color combinations.",
          example: "Example: Tiffany blue.",
        },
        {
          title: "Motion Mark",
          description: "Protects animated graphics or short videos.",
          example: "Example: Paramount Pictures logo.",
        },
      ],
      trademarkClasses: {
        description:
          "Trademark classes are a critical aspect of the registration process, as they categorize goods and services into 45 distinct classes. To register trademark India, you should carefully select the appropriate class because it determines the validity of your trademark registration online or trade name registration concerning your business's products or services. If your company operates across various areas falling into different classes, it's crucial to ensure that you apply for a trademark under all the relevant classes.",
        examples: [
          "Class 9: Encompassing computer software and electronics",
          "Class 25: Covering clothing",
          "Class 35: About business management and advertising",
          "Class 41: Related to education and entertainment",
        ],
      },
      trademarkSearch:
        "Before apply trademark India, conducting a comprehensive trademark search is of paramount importance. This step is critical to safeguard the integrity and exclusivity of your brand. An online trademark search entails furnishing the brand name and the relevant class for scrutiny. This meticulous search aids in identifying pre-existing trademarks in the market, enabling the assessment of potential conflicts and, ultimately, ensuring the protection of your brand. LegalDhara provides online trademark search tools and support to facilitate this pivotal process, assisting you in making informed decisions regarding your trademark or brand name registration.",
      requiredDocuments: {
        initialDetails: [
          "Applicant's Name: The name of the individual, company, or entity applying for the brand trademark registration.",
          "Business Type: Specify the type of business entity, such as sole proprietorship, partnership, private limited company, etc.",
          "Business Objectives: Provide a brief description of your business objectives or activities.",
          "Brand/Logo/Slogan Name: Clearly mention the name, logo, or slogan that you intend to trademark.",
          "Registration Address: Furnish the official address of the entity applying for the trademark.",
        ],
        documentTypes: [
          {
            type: "Individuals",
            documents: ["PAN card", "Aadhar card"],
          },
          {
            type: "Proprietorship",
            documents: ["GST certificate", "PAN card", "Aadhar card"],
          },
          {
            type: "Company",
            documents: [
              "Incorporation certificate",
              "Company PAN card",
              "MSME Certificate (if applicable)",
              "Logo (if applicable)",
            ],
          },
          {
            type: "Partnership Firms",
            documents: [
              "Partnership deed",
              "Partnership PAN card",
              "MSME registration certificate",
              "Logo (if applicable)",
            ],
          },
          {
            type: "Limited Liability Partnerships (LLPs)",
            documents: ["LLP deed", "Incorporation certificate", "LLP PAN card", "Logo (if applicable)"],
          },
          {
            type: "Trusts",
            documents: ["Trust deed", "Trust PAN card", "Logo (if applicable)"],
          },
        ],
      },
      processSteps: [
        {
          title: "The Vienna Codification Process",
          description:
            "The Vienna Classification, also called the Vienna Codification, is an international system that categorizes the figurative elements of trademarks. After filing the trademark registration application, the Trademark Registrar will apply the Vienna classification to the trademark's figurative elements.",
        },
        {
          title: "Trademark Examination",
          description:
            "After completing the Vienna Codification, the trademark registration application will be assigned to a Trademark Registrar's officer. The officer will assess the application for accuracy and generate a trademark examination report. Based on this report, the officer can accept the application, allow it for trademark journal publication, or raise objections to the registration process. In the event of objections, the applicant can address the concerns before the Trademark Officer. If the officer finds the justifications satisfactory, the trademark will be approved for publication in the Trademark Journal.",
        },
        {
          title: "Trademark Journal Publication",
          description:
            "Once the Trademark Registrar accepts the application, the trademark will be published in the Trademark journal. This journal, published weekly, contains details of all trademarks the Registrar receives. Members of the public have the opportunity to raise objections if they believe the trademark registration could harm their interests. If no objections are submitted within 90 days of publication, the trademark will be registered within 12 weeks.",
        },
        {
          title: "Trademark Hearing",
          description:
            "A Trademark Hearing Officer will schedule a hearing if a third party objects to the application. Both the applicant and the opposing party have the chance to present their arguments. Based on the hearings and evidence, the Trademark Hearing Officer will decide whether to accept or reject the application of brand registration in India.",
        },
        {
          title: "Trademark Registration",
          description:
            "In cases where no objections or oppositions are raised, the trademark registration certificate will be prepared and issued. A trademark is officially considered registered when the Trademark Registration Certificate is issued, granting the owner exclusive rights to the mark. For example, a logo trademark registration will be approved if it doesn't receive any objection or opposition. At this point, the ® symbol can be added to the logo or trademark.",
        },
        {
          title: "Trademark Objection",
          description:
            "Trademark objections are typically one of the initial stages in the trademark registration process. Instead of outright denial, the Registrar seeks valid reasons or explanations regarding the trademark's registrability.",
        },
        {
          title: "Trademark Opposition",
          description:
            "Trademark opposition occurs when a third party files an objection against register trademark. The Registry accepts oppositions from any natural or legal person, including individuals, businesses, partnership firms, and trusts.",
        },
        {
          title: "Trademark Renewal",
          description:
            "It is important to register trademark. But it is important to know that it remains valid for ten years from the filing date. To ensure the continued protection of your trademark, it is imperative to renew it every ten years. This continual renewal of your brand name registration secures your marks from misuse or exploitation.",
        },
      ],
      trademarkSymbols: [
        {
          symbol: "™",
          name: "Trademark (™)",
          description: "Used to indicate that a mark is being claimed as a trademark, but it is not yet registered.",
        },
        {
          symbol: "®",
          name: "Registered Trademark (®)",
          description:
            "Used only after a trademark has been officially registered with the intellectual property office.",
        },
        {
          symbol: "℠",
          name: "Service Mark (℠)",
          description: "Similar to ™, but specifically used for services rather than goods.",
        },
      ],
      ipComparison: [
        {
          category: "Trademark",
          protection: "Protects brand names, logos, and slogans.",
          duration: "Renewable indefinitely.",
          application: "Approved by the USPTO.",
          requirements: "Must be unique and distinctive.",
          enforcement: "Enforced through legal action.",
          example: "Nike's Swoosh logo.",
        },
        {
          category: "Copyright",
          protection: "Protects creative works of authorship.",
          duration: "Valid for the author's life + a set period.",
          application: "Approved by the U.S. Copyright Office.",
          requirements: "Must be original and fixed in a medium.",
          enforcement: "Enforced through legal action.",
          example: "‘To Kill a Mockingbird’ by Harper Lee.",
        },
        {
          category: "Patent",
          protection: "Protects new inventions or discoveries.",
          duration: "Typically 20 years from filing.",
          application: "Approved by the USPTO.",
          requirements: "Must be novel and non-obvious.",
          enforcement: "Enforced through legal action.",
          example: "Alexander Graham Bell's first telephone patent.",
        },
      ],
      howWeAssist: [
        {
          title: "Trademark Search",
          description:
            "Please start the process by providing us with essential information about your desired trademark and industry. Our experts will thoroughly search the trademark database to determine its availability. Once we identify an available brand, we move on to the next step, that is, to register trademark.",
        },
        {
          title: "Class Selection and Document Collection",
          description:
            "Our professional experts will guide you in selecting the appropriate class or classes that comprehensively cover all aspects of your business. Concurrently, you can begin uploading the documents required for the online trademark registration.",
        },
        {
          title: "Trademark Application Filing",
          description:
            "Upon receiving your documents, our expert team will verify their accuracy and completeness. We then complete the trademark application form on your behalf, ensuring all required documents are submitted correctly. Throughout this process, we maintain transparency and keep you informed, monitoring notifications from the Trademark Registry until the trademark or brand name registration is completed. Congratulations! Once the application is submitted, you can start using the ™ symbol.",
        },
        {
          title: "Trademark Objection (if applicable)",
          description:
            "In cases where the trademark examiner raises questions about your application, you may receive a trademark objection notice. Our experts can aid you in crafting a robust response and submitting the necessary documents and evidence. We keep you informed about the status of your application and help you navigate any oppositions or hearings. After successful registration, LegalDhara can help with trademark renewal, trademark assignment, licensing, and any other post-registration services you may require.",
        },
      ],
      faq: [
        {
          question: "What is a Trademark?",
          answer:
            "Following the Indian Trademarks Act of 1999 (Section 2(zb)), a trademark is a distinctive marker that distinguishes products or services from competitors in the market. It encompasses various elements such as symbols, designs, expressions, or any identifiable feature linked to a specific brand. Remarkably, trademarks are open to ownership by individuals, corporations, or legal entities, making them accessible to a broad spectrum of entities and individuals alike.",
        },
        {
          question: "Why is Trademark Registration Important?",
          answer:
            "Trademark registration provides legal protection for your brand, giving you exclusive rights to use it for your goods or services. It helps prevent others from using a similar mark that could confuse consumers, and it enhances your brand's value.",
        },
        {
          question: "How long does the trademark registration process take?",
          answer:
            "The timeline can vary depending on the jurisdiction and complexity, but typically it takes 7-10 business days for initial filing and several months (e.g., 6-12 months) for full registration, assuming no objections.",
        },
        {
          question: "What happens after my trademark is registered?",
          answer:
            "Once registered, your trademark is protected for a specific period (usually 10 years, renewable). You gain exclusive rights and can take legal action against infringers. We also offer post-registration monitoring services.",
        },
      ],
      commonlyFiledTrademarks: [
        {
          title: "Brand Name",
          imageQuery: "Nike brand name logo",
          description: "Business name for your brand identity",
        },
        {
          title: "Brand name + Logo",
          imageQuery: "Nike brand name and logo",
          description: "Name + Graphic representation of brand",
        },
        {
          title: "Logo",
          imageQuery: "Nike swoosh logo",
          description: "Graphic representation of your brand",
        },
        {
          title: "Slogan",
          imageQuery: "Just do it slogan",
          description: "Your brand's catchy tagline",
        },
      ],
    },
  },
  // Add other services here if needed
]

export const allServicesData = [
  {
    mainCategory: "Trademark & IP",
    mainIcon: "Shield",
    categories: [
      {
        title: "Trademark",
        icon: "Scale",
        services: [
          {
            name: "Trademark Registration  ",
            href: "/services/trademark-registration",
            description: "Secure your brand identity with official trademark registration.",
            price: "₹0",
            timeline: "2-5 Days",
            icon: "Stamp"
          },
          {
            name: "Trademark Search ",
            href: "/services/trademark-search",
            description: "Check if your brand name is available and avoid legal issues.",
            price: "₹0",
            timeline: "1-2 Days",
            icon: "Search"
          },
          {
            name: "Respond to TM Objection  ",
            href: "/services/tm-objection",
            description: "Professional response to objections raised by the registrar.",
            price: "₹0",
            timeline: "2-4 Days",
            icon: "FileWarning"
          },
          
          {
  name: "Trademark Rectification",
  href: "/services/trademark-rectification",
  description: "Rectify errors or remove wrongful entries from the trademark register with expert assistance.",
  price: "₹0",
  timeline: "3-5 Days",
  icon: "FileEdit"
},
{
  name: "Well-Known Trademark",
  href: "/services/wellknown-trademark",
  description: "Apply for recognition of your brand as a well-known trademark under Indian law.",
  price: "₹0",
  timeline: "5-7 Days",
  icon: "Award"
},
{
  name: "Trademark Opposition",
  href: "/services/trademark-opposition",
  description: "File or respond to a trademark opposition to protect your brand’s identity and rights.",
  price: "₹0",
  timeline: "4-6 Days",
  icon: "ShieldAlert"
}
,
          {
            name: "Trademark Renewal  ",
            href: "/services/trademark-renewal",
            description: "Renew your trademark before it expires.",
            price: "₹0",
            timeline: "3-5 Days",
            icon: "RefreshCw"
          },
          {
            name: "Trademark Assignment  ",
            href: "/services/trademark-assignment",
            description: "Transfer your trademark rights legally.",
            price: "₹0",
            timeline: "5-7 Days",
            icon: "ArrowRightLeft"
          },
          {
            name: "International Trademark  ",
            href: "/services/international-trademark",
            description: "Protect your brand internationally with WIPO filing.",
            price: "₹0",
            timeline: "15-20 Days",
            icon: "Globe"
          },
          {
            name: "Trademark Class Finder",
            href: "/services/trademark-class-finder",
            description: "Find the right class for your business activity.",
            price: "Free",
            timeline: "Instant",
            icon: "SearchCheck"
          }
        ]
      },
      {
        title: "Copyright",
        icon: "Copyright",
        services: [
          {
            name: "Copyright Registration  ",
            href: "/services/copyright-registration",
            description: "Protect your original work legally under copyright law.",
            price: "₹0",
            timeline: "15-30 Days",
            icon: "PenLine"
          },
          {
            name: "Copyright Music  ",
            href: "/services/copyright-music",
            description: "Register your original music compositions and sound recordings.",
            price: "₹0",
            timeline: "15-30 Days",
            icon: "Music"
          },
          {
  name: "Literary Work",
  href: "/services/copyright-registration",
  description: "Copyright registration for books, fiction, non-fiction, poetry, articles, and written content.",
  price: "₹0",
  timeline: "4-6 Days",
  icon: "BookOpenText"
},
{
  name: "Software / Website",
  href: "/services/copyright-registration",
  description: "Protect your code, website, mobile apps, and games with software copyright registration.",
  price: "₹0",
  timeline: "4-6 Days",
  icon: "Code"
},
{
  name: "Visual / Performing Art / Drama",
  href: "/services/copyright-registration",
  description: "Register 2D & 3D artworks, paintings, photos, scripts, and performance-based creations.",
  price: "₹0",
  timeline: "4-6 Days",
  icon: "Palette"
},
{
  name: "Motion Picture",
  href: "/services/copyright-registration",
  description: "Copyright your videos, films, documentaries, TV shows, and animated works with ease.",
  price: "₹0",
  timeline: "4-6 Days",
  icon: "Film"
}

        ]
      },
      {
        title: "Patent",
        icon: "Lightbulb",
        services: [
          {
            name: "Patent Search  ",
            href: "/services/indian-patent-search",
            description: "Ensure your invention is unique before filing.",
            price: "₹0",
            timeline: "3-5 Days",
            icon: "SearchCheck"
          },
          {
            name: "Provisional Patent Application  ",
            href: "/services/provisional-patent",
            description: "Get a quick initial filing to secure your invention date.",
            price: "₹0",
            timeline: "7-10 Days",
            icon: "ClipboardEdit"
          },
          {
            name: "Patent Registration  ",
            href: "/services/patent-registration",
            description: "Complete patent filing with government approval.",
            price: "₹0",
            timeline: "20-40 Days",
            icon: "ClipboardCheck"
          }
        ]
      },
      {
        title: "Design",
        icon: "Palette",
        services: [
          {
            name: "Logo Design  ",
            href: "/services/logo-design",
            description: "Custom logo design for your brand.",
            price: "₹0",
            timeline: "3-5 Days",
            icon: "Image"
          },
          {
            name: "Design Registration  ",
            href: "/services/design-registration",
            description: "Protect your visual product design legally.",
            price: "₹0",
            timeline: "7-10 Days",
            icon: "Layout"
          }
        ]
      }
    ]
  },
  {
    mainCategory: "Registrations",
    mainIcon: "Building",
    categories: [
      {
        title: "Company Registration",
        icon: "Building",
        services: [
          {
            name: "Private Limited Company  ",
            href: "/services/pvt-ltd",
            description: "Incorporate a Pvt Ltd company with legal compliance.",
            price: "₹0",
            timeline: "7-10 Days",
            icon: "Briefcase"
          },
          {
            name: "Limited Liability Partnership  ",
            href: "/services/llp",
            description: "Register your LLP to enjoy flexibility and protection.",
            price: "₹0",
            timeline: "7 Days",
            icon: "Users"
          },
          {
            name: "One Person Company  ",
            href: "/services/opc",
            description: "Start your own business with limited liability.",
            price: "₹0",
            timeline: "5-7 Days",
            icon: "User"
          },
          {
            name: "Sole Proprietorship  ",
            href: "/services/sole-proprietorship",
            description: "Simplest way to start your business.",
            price: "₹0",
            timeline: "2-3 Days",
            icon: "UserCircle"
          },
          {
            name: "Startup India Registration  ",
            href: "/services/startup-india-registration",
            description: "Simplest way to start your business.",
            price: "₹0",
            timeline: "2-3 Days",
            icon: "UserCircle"
          },
          {
            name: "Partnership Firm  ",
            href: "/services/partnership-firm",
            description: "Simplest way to start your business.",
            price: "₹0",
            timeline: "2-3 Days",
            icon: "UserCircle"
          },
          {
            name: "Nidhi Company  ",
            href: "/services/nidhi-company",
            description: "Simplest way to start your business.",
            price: "₹0",
            timeline: "2-3 Days",
            icon: "UserCircle"
          }
        ]
      },
      {
        title: "FSSAI",
        icon: "FileText",
        services: [
          {
            name: "FSSAI Registration  ",
            href: "/services/fssai-registration",
            description: "Food license registration under FSSAI.",
            price: "₹0",
            timeline: "3-5 Days",
            icon: "Utensils"
          },
          {
  name: "FSSAI State License",
  href: "/services/fssai-state-license",
  description: "Get your FSSAI State License for medium-sized food businesses operating within a single state.",
  price: "₹0",
  timeline: "3-5 Days",
  icon: "Utensils"
},
{
  name: "FSSAI Central License",
  href: "/services/fssai-central-license",
  description: "Apply for an FSSAI Central License for large-scale food businesses or operations across multiple states.",
  price: "₹0",
  timeline: "5-7 Days",
  icon: "Building2"
}

        ]
      },
      {
        title: "ISO",
        icon: "Shield",
        services: [
          {
            name: "ISO Registration  ",
            href: "/services/iso-registration",
            description: "Get ISO certification for your business standards.",
            price: "₹0",
            timeline: "5-7 Days",
            icon: "Award"
          },
          {
  name: "ISO IAF Certification",
  href: "/services/iso-registration",
  description: "Obtain an IAF-accredited ISO certificate recognized internationally for quality and compliance.",
  price: "₹0",
  timeline: "5-7 Days",
  icon: "Globe"
},{
  name: "ISO Non-IAF Certification",
  href: "/services/iso-registration",
  description: "Get a Non-IAF ISO certificate quickly to showcase your business standards and boost credibility.",
  price: "₹0",
  timeline: "2-3 Days",
  icon: "FileBadge"
}


        ]
      }
    ]
  },
  {
    mainCategory: "Taxation",
    mainIcon: "Calculator",
    categories: [
      {
        title: "GST",
        icon: "Calculator",
        services: [
          {
            name: "GST Registration  ",
            href: "/services/gst-registration",
            description: "Apply for GST number for your business.",
            price: "₹0",
            timeline: "2-4 Days",
            icon: "ClipboardPlus"
          },
          {
            name: "GST Filing  ",
            href: "/services/gst-filing",
            description: "Monthly or quarterly GST returns filing.",
            price: "₹0/month",
            timeline: "Monthly",
            icon: "FileText"
          },
          {
            name: "GST Cancellation and Revocation  ",
            href: "/services/gst-cancellation",
            description: "Cancel or revive your GST number.",
            price: "₹0",
            timeline: "2-4 Days",
            icon: "Ban"
          }
        ]
      },
      {
        title: "ITR",
        icon: "FileText",
        services: [
          {
            name: "Income Tax Filing  ",
            href: "/services/itr-filing",
            description: "File your ITR for salaried or business income.",
            price: "₹0",
            timeline: "1-2 Days",
            icon: "FileSignature"
          },
          {
            name: "Tax Planning  ",
            href: "/services/tax-planning",
            description: "Plan your taxes to reduce liability.",
            price: "₹0",
            timeline: "Consultation Based",
            icon: "CalendarCheck"
          }
        ]
      }
    ]
  }
];


export function findServiceByHref(href: string): Service | undefined {
  return services.find((service) => service.href === href)
}

export function getAllServices(): Service[] {
  return services
}
