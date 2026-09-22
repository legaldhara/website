import type { Service } from "@/lib/types"
import { Package,
  Headphones,
  Award,
  Users,
  Beaker,
  Grid,
  Music,
  BadgeCheck,
  Palette,
  PlayCircle,
  Truck,
  Shapes,
  Milk,
 } from "lucide-react";


export const trademarkRegistrationService: Service = {
  name: "Trademark Registration",
  title:'Trademark Registration',
  href: "/services/trademark-registration",
  description: "Register your trademark with expert assistance and ensure complete legal protection for your brand.",
  icon: "Trademark",
  price: "Starting from $299",
  timeline: "7-10 Business Days",
  zeroServiceCharges: true,
  details: {
    introductoryText:
      "Trademark registration grants you exclusive legal rights over your brand name, logo, or symbol. In India, this process is governed by the Trade Marks Act, 1999, which helps you protect and exclusively use your intellectual property in the market. To register a trademark, you need to file Form TM-A with the Trademark Office and choose the appropriate class for your goods or services, ensuring your brand receives the right protection. Once registered, you can legally use the ® symbol to indicate your trademark is officially recognised.\n\nAt our firm, we make trademark registration easy. Our expert team guides you through trademark searches, handles any oppositions, and supports you with renewals. With the assistance of our experienced trademark attorneys, you can secure your trademark certificate confidently, safeguarding your intellectual property and establishing a strong legal identity for your brand.",
    whatIsTrademark:
      "A trademark is a form of intellectual property that can be a word, phrase, symbol, design, or a combination of these elements, used to uniquely identify and distinguish the goods or services of one business from those of others. According to the Trade Marks Act, 1999, a trademark may also include the shape of products, their packaging, or specific color combinations, as long as these can be graphically represented and serve to differentiate one product or service from another.",
    trademarkAct1999:
      "The Trademarks Act of 1999 outlines the rules and regulations for registration, assignment, and trademark protection. The Indian Trademarks Act, 1999 is administered by the Controller General of Patents, Designs, and Trademarks under the Ministry of Commerce and Industry of the government of India.",
    keyFeatures: [
      {
        title: "Legal Protection",
        description: "Complete legal protection for your brand name and logo under the Trade Marks Act, 1999.",
      },
      {
        title: "Quick Processing",
        description: "18-24 months processing time with regular updates and expert handling.",
      },
      {
        title: "Expert Support",
        description: "Dedicated trademark attorneys handling your application from start to finish.",
      },
      {
        title: "Complete Documentation",
        description: "All paperwork, Vienna codification, and documentation handled professionally.",
      },
    ],
    whyRegisterDetailed: [
      {
        title: "Creates Official Public Record",
        description:
          "Registering your trademark with the trademark registry establishes an official public record of your ownership through publications in the trademark journal, providing constructive notice to others and establishing your legal claim.",
      },
      {
        title: "Brand Distinction & Recognition",
        description:
          "It distinguishes your brand from competitors, boosting recognition and helping consumers identify your products and services in the marketplace, creating a unique brand identity.",
      },
      {
        title: "Builds Customer Trust & Credibility",
        description:
          "As registered trademarks are associated with quality and authenticity, it builds customer trust and loyalty. The ® symbol signals legitimacy and professionalism to consumers and business partners.",
      },
      {
        title: "Increases Business Value & Investment Appeal",
        description:
          "Increases the business value significantly, making your company more attractive to investors, partners, and potential buyers. A registered trademark becomes a valuable intangible asset on your balance sheet.",
      },
      {
        title: "Protects Against Counterfeiting & Imitation",
        description:
          "Protects against counterfeiting and imitation by providing strong legal grounds to prevent others from using similar marks that could confuse consumers and damage your brand reputation.",
      },
      {
        title: "Licensing & Revenue Opportunities",
        description:
          "Allows you to license your trademark to others for additional revenue streams, franchise your business model, or use it as collateral for business loans, creating multiple monetization opportunities.",
      },
      {
        title: "Right to Use ® Symbol",
        description:
          "Lets you use the ® symbol legally, boosting brand credibility and serving as a deterrent to potential infringers. This symbol indicates official registration and legal protection.",
      },
      {
        title: "Valuable Long-term Asset",
        description:
          "Becomes a valuable, marketable business asset that can appreciate over time. Unlike other intellectual property, trademarks can be renewed indefinitely every 10 years, creating permanent value.",
      },
      {
        title: "Global Trademark Registration Foundation",
        description:
          "A registered Indian trademark serves as the foundation for international trademark registration under treaties like the Madrid Protocol, facilitating global business expansion and brand protection worldwide.",
      },
      {
        title: "Legal Enforcement Powers",
        description:
          "Registration provides you with strong legal standing to enforce your rights through civil and criminal remedies, including injunctions, damages, seizure of infringing goods, and customs enforcement.",
      },
      {
        title: "Deterrent Effect on Infringers",
        description:
          "The public nature of trademark registration serves as a deterrent to potential infringers and provides clear evidence of your rights in legal proceedings, making enforcement more effective.",
      },
      {
        title: "Customer Attraction & Market Positioning",
        description:
          "Brand registration enhances visibility and credibility, helping your brand stand out in the marketplace and attract more customers by assuring them of authenticity, quality, and professional standards.",
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
      "This type of trademark is affixed to goods or products, aiding in identifying their origin and preserving a company's reputation.",
    example: "Coca-Cola® on beverage bottles, Nestle® on food products.",
    icon: Milk, // Represents Coca-Cola bottle products
  },
  {
    title: "Service Mark",
    description:
      "Used to identify services rather than products, helping differentiate service providers.",
    example: "FedEx® for courier services, United Airlines®.",
    icon: Truck, // Symbolizes logistics or delivery services
  },
  {
    title: "Certification Mark",
    description:
      "Indicates product origin, quality, or standards compliance.",
    example: "ISI mark, FSSAI mark.",
    icon: Award, // Certification / Quality badge
  },
  {
    title: "Collective Mark",
    description:
      "Represents goods/services provided by a group or organization.",
    example: "CII, CA®.",
    icon: Users, // Represents a group or association
  },
  {
    title: "Shape Mark",
    description:
      "Protects the distinctive shape of a product.",
    example: "Coca-Cola® contour bottle, Fanta bottle.",
    icon: Shapes, // Represents 3D product shape
  },
  {
    title: "Pattern Mark",
    description:
      "Protects unique visual patterns used in branding.",
    example: "Louis Vuitton® monogram canvas.",
    icon: Grid, // Symbolizes repeated pattern designs
  },
  {
    title: "Sound Mark",
    description:
      "Protects unique sounds identifying a brand.",
    example: "Nokia® tune, Yahoo’s yodel.",
    icon: Music, // Represents sound/audio
  },
  {
    title: "Symbol Mark",
    description:
      "Protects distinctive visual logos or symbols.",
    example: "Nike Swoosh, Apple logo.",
    icon: BadgeCheck, // Represents logo verification / brand mark
  },
  {
    title: "Color Mark",
    description:
      "Protects distinctive brand colors or combinations.",
    example: "Tiffany blue, Cadbury purple.",
    icon: Palette, // Represents colors
  },
  {
    title: "Motion Mark",
    description:
      "Protects animated brand logos or sequences.",
    example: "Netflix animation, Paramount logo.",
    icon: PlayCircle, // Represents motion / animation
  },
]
,
    trademarkClasses: {
      description:
        "Trademark classes are a critical aspect of the registration process, as they categorize goods and services into 45 distinct classes based on the Nice Classification system. Classes 1-34 cover goods while classes 35-45 cover services. To register a trademark in India, you should carefully select the appropriate class because it determines the validity of your trademark registration concerning your business's products or services. If your company operates across various areas falling into different classes, it's crucial to ensure that you apply for a trademark under all the relevant classes.",
      examples: [
        "Class 9: Computer software, electronics, mobile applications, and digital devices",
        "Class 25: Clothing, footwear, headgear, and fashion accessories",
        "Class 35: Business management, advertising, marketing, and retail services",
        "Class 41: Education, entertainment, training, and cultural activities",
        "Class 42: Technology services, software development, and scientific research",
        "Class 43: Restaurant services, catering, and temporary accommodation",
      ],
      detailedClassification: {
        goods:
          "Classes 1-34 encompass all tangible products including chemicals, pharmaceuticals, machinery, vehicles, textiles, food products, and consumer goods.",
        services:
          "Classes 35-45 cover intangible services including business services, telecommunications, transportation, education, entertainment, and professional services.",
      },
    },
    trademarkSearch:
      "Before applying for trademark registration in India, conducting a comprehensive trademark search is of paramount importance. This step is critical to safeguard the integrity and exclusivity of your brand. An online trademark search entails furnishing the brand name and the relevant class for scrutiny. This meticulous search aids in identifying pre-existing trademarks in the market, enabling the assessment of potential conflicts and, ultimately, ensuring the protection of your brand. Our trademark search tools and expert support facilitate this pivotal process, assisting you in making informed decisions regarding your trademark registration.",
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
        title: "Comprehensive Trademark Search",
        description: "Perform a thorough search on the official website of the Controller General of Patents, Designs & Trademarks (CGPDTM) to ensure your desired trademark is not already registered or in use. This critical step helps identify potential conflicts and saves time and money by preventing costly rejections. Our experts conduct identical mark searches, similar mark analysis, and cross-class reviews.",
        step: 0
      },
      {
        step : 1,
        title: "Choosing the Correct Trademark Class",
        description:
          "Select the appropriate class(es) for your goods or services from the 45 categories under the Nice Classification system. Classes 1-34 cover goods while classes 35-45 cover services. Proper class selection is crucial as it determines the scope of your trademark protection. If your business operates across multiple areas, you may need to apply under several relevant classes.",
      },
      {
        step : 2,
        title: "Prepare and File Application (Form TM-A)",
        description:
          "Access the official trademark registry website, create a user account, and fill out Form TM-A with complete details including applicant information, trademark details, and class of goods or services. A Digital Signature Certificate (DSC) is mandatory for online filing. Ensure all information is accurate and complete to avoid delays.",
      },
      {
        step : 3,
        title: "Upload Required Documents",
        description:
          "Ensure all necessary documents are uploaded in the correct format including identity proof, business registration certificate, clear representation of the mark, and power of attorney if filed through an agent. Documents must be clear, legible, and in the prescribed format.",
      },
      {
        step : 4,
        title: "Pay Application Fees",
        description:
          "Pay the prescribed fees: ₹4,500 per class for individuals, startups, and MSMEs, and ₹9,000 per class for companies and LLPs. Payment can be made online through the trademark portal using various payment methods including net banking, credit/debit cards, and digital wallets.",
      },
      {
        step : 5,
        title: "Application Submission & Receipt",
        description:
          "After payment, submit the application and receive a unique application number for tracking. This number allows you to monitor the progress of your application throughout the registration process. You can start using the ™ symbol once the application is submitted.",
      },
      {
        step : 6,
        title: "Vienna Codification Process",
        description:
          "The Vienna Classification system categorizes the figurative elements of trademarks. After filing, the Trademark Registrar applies Vienna classification to your trademark's figurative elements for proper categorization. This international system helps in systematic organization and search of trademark designs.",
      },
      {
        step : 7,
        title: "Trademark Examination",
        description:
          "The trademark office examines the application for compliance with legal requirements and potential conflicts with existing marks. The examiner generates a detailed examination report and may accept the application, allow it for trademark journal publication, or raise objections to the registration process.",
      },
      {
        step : 8,
        title: "Respond to Objections (if any)",
        description:
          "If objections arise during examination, you must respond within the stipulated period (usually 30 days) with proper justifications and supporting documents. Our experts help craft robust responses to overcome objections and address the examiner's concerns effectively.",
      },
      {
        step : 9,
        title: "Publication in Trademark Journal",
        description:
          "Once the Trademark Registrar accepts the application, the trademark is published in the weekly Trademark Journal for a 4-month opposition period. This journal contains details of all trademarks accepted for registration, allowing third parties to file objections if they believe the registration could harm their interests.",
      },
      {
        step : 10,
        title: "Opposition Handling (if applicable)",
        description:
          "If a third party files an opposition, a Trademark Hearing Officer schedules a hearing where both the applicant and the opposing party present their arguments. The officer decides whether to accept or reject the application based on evidence presented. Our experts represent you in opposition proceedings.",
      },
      {
        step : 11,
        title: "Trademark Registration Certificate",
        description:
          "If no oppositions are filed within 90 days of publication or are resolved in your favor, the trademark is officially registered and a certificate is issued within 12 weeks. You can then legally use the ® symbol and enjoy exclusive rights for 10 years, renewable indefinitely.",
      },
    ],
    postRegistrationProcedures: [
      {
        title: "Trademark Renewal",
        description:
          "Trademark registration remains valid for ten years from the filing date. To ensure continued protection, it must be renewed every ten years via Form TM-R. A grace period of one year is available for renewal, though late fees apply.",
      },
      {
        title: "Trademark Amendments",
        description:
          "Changes in trademark details such as address, name, or other particulars can be made through Form TM-P. It's important to keep your trademark records updated with the Registry.",
      },
      {
        title: "Opposition Handling",
        description:
          "Address any filed oppositions within the legal time frame. Professional representation is crucial during opposition proceedings to protect your trademark rights.",
      },
      {
        title: "Transfers and Assignments",
        description:
          "Trademark transfers or assignments must be recorded with the Registry using Form TM-P. This ensures proper legal transfer of trademark ownership.",
      },
      {
        title: "Trademark Monitoring",
        description:
          "Regular trademark monitoring helps detect potential infringements and unauthorized use of your trademark, allowing for timely enforcement action.",
      },
    ],
    trademarkRectification: {
      purpose: "Correct mistakes or omissions in the trademark register",
      reasons: ["Errors in registration details", "Non-use of trademark", "Breach of registration conditions"],
      procedure: "Submit Form TM-26 with supporting evidence and proper justification",
      whoCanApply: "Any interested party affected by the trademark registration",
      authority: "Trademark Registrar or Intellectual Property Appellate Board (IPAB)",
    },
    trademarkSymbols: [
      {
        symbol: "™",
        name: "Trademark (™)",
        description:
          "Used by brands that have applied for trademark registration and whose application is still pending. It can be used for both goods and services, signalling to others that the mark is claimed and warning against infringement. No legal registration is required to use this symbol.",
        usage: "Can be used during the application process and for unregistered marks being claimed",
        legalStatus: "Provides common law protection but limited legal remedies",
      },
      {
        symbol: "®",
        name: "Registered Trademark (®)",
        description:
          "Indicates that the trademark is officially registered with the Registrar of Trademarks. Unauthorized use of a registered mark can lead to legal action by the trademark owner. This symbol can only be used after official registration is complete.",
        usage: "Only after trademark registration certificate is issued",
        legalStatus: "Provides full legal protection and enforcement rights",
      },
      {
        symbol: "℠",
        name: "Service Mark (℠)",
        description:
          "Used for unregistered service marks. It serves the same purpose as the ™ symbol but applies specifically to services rather than goods. This symbol indicates that the mark is being claimed for service-related businesses.",
        usage: "For service-related businesses with unregistered marks",
        legalStatus: "Similar to ™ symbol, provides common law protection",
      },
    ],
    benefitsOfRegistration: [
      {
        title: "Exclusive Rights & Legal Protection",
        description:
          "Trademark registration grants you the exclusive right to use your mark for specific products and services, preventing unauthorised use and safeguarding your brand identity nationwide.",
      },
      {
        title: "Brand Building & Recognition",
        description:
          "A trademark differentiates your offerings and builds a strong, unique identity. Trademark registration boosts consumer trust, loyalty, and recognition — all vital for long-term brand success.",
      },
      {
        title: "Creation of Valuable Asset",
        description:
          "A registered trademark becomes an intangible business asset that can be sold, licensed, or used as collateral. It protects your investment and increases your brand's market value.",
      },
      {
        title: "Right to Use ® Symbol",
        description:
          "Once your trademark is officially registered, you gain the right to use the ® symbol, which signals authenticity, credibility, and legal protection to consumers and competitors.",
      },
      {
        title: "Protection Against Infringement",
        description:
          "A registered trademark enables you to take legal action against infringement and file trademark opposition in disputes, ensuring your rights remain secure.",
      },
      {
        title: "Long-Term Validity",
        description:
          "Trademark registration lasts for ten years from the filing date, offering long-term security for your brand with the option for unlimited renewals every 10 years.",
      },
      {
        title: "Global Trademark Registration",
        description:
          "International trademark registration is made easier through treaties like the Madrid Protocol, allowing your brand to be protected in multiple countries efficiently.",
      },
      {
        title: "Customer Attraction",
        description:
          "Brand registration enhances visibility and credibility, helping your brand stand out in the marketplace and attract more customers by assuring them of authenticity and quality.",
      },
    ],
    ipComparison: [
      {
        category: "Trademark",
        protection: "Protects brand names, logos, slogans, and distinctive marks that identify goods or services.",
        duration: "10 years, renewable indefinitely every 10 years.",
        application: "Filed with the Controller General of Patents, Designs & Trademarks in India.",
        requirements: "Must be unique, distinctive, and capable of distinguishing goods/services.",
        enforcement: "Civil and criminal remedies including injunctions, damages, and seizure of goods.",
        example: "Nike's Swoosh logo, Coca-Cola brand name and bottle shape.",
      },
      {
        category: "Copyright",
        protection: "Protects original creative works of authorship including literary, artistic, and musical works.",
        duration: "Author's lifetime plus 60 years in India.",
        application: "Automatic upon creation, but registration provides additional benefits.",
        requirements: "Must be original and fixed in a tangible medium of expression.",
        enforcement: "Legal action for unauthorized reproduction, distribution, or public performance.",
        example: "Books, songs, movies, software code, artistic paintings.",
      },
      {
        category: "Patent",
        protection: "Protects new inventions, processes, and technical innovations.",
        duration: "20 years from the filing date, non-renewable.",
        application: "Filed with the Patent Office after thorough examination.",
        requirements: "Must be novel, non-obvious, and have industrial application.",
        enforcement: "Exclusive right to make, use, and sell the invention.",
        example: "Pharmaceutical formulations, mechanical devices, software algorithms.",
      },
    ],
    howWeAssist: [
      {
        title: "Comprehensive Trademark Search",
        description:
          "Start the process by providing us with essential information about your desired trademark and industry. Our experts conduct thorough searches of the trademark database to determine availability, including identical mark searches, phonetic similarity analysis, and cross-class reviews. Once we identify an available trademark, we proceed to the registration process.",
      },
      {
        title: "Expert Class Selection and Document Collection",
        description:
          "Our professional trademark attorneys guide you in selecting the appropriate class or classes that comprehensively cover all aspects of your business operations. We ensure proper classification under the Nice Classification system and assist you in uploading all required documents for the trademark registration process.",
      },
      {
        title: "Professional Application Filing",
        description:
          "Upon receiving your documents, our expert team verifies their accuracy and completeness. We complete the trademark application form (TM-A) on your behalf, ensuring all required documents are submitted correctly with proper Vienna codification. Throughout this process, we maintain transparency and keep you informed, monitoring notifications from the Trademark Registry until the registration is completed. Once the application is submitted, you can start using the ™ symbol.",
      },
      {
        title: "Objection and Opposition Handling",
        description:
          "In cases where the trademark examiner raises questions about your application, you may receive a trademark objection notice. Our experienced attorneys craft robust responses and submit necessary documents and evidence within the stipulated timeframe. We keep you informed about your application status and help navigate any oppositions or hearings. After successful registration, we assist with trademark renewal, assignment, licensing, and other post-registration services.",
      },
    ],
    faq: [
      {
        question: "What is a Trademark?",
        answer:
          "Following the Indian Trademarks Act of 1999 (Section 2(zb)), a trademark is a distinctive marker that distinguishes products or services from competitors in the market. It encompasses various elements such as symbols, designs, expressions, or any identifiable feature linked to a specific brand. Trademarks can be owned by individuals, corporations, or legal entities, making them accessible to a broad spectrum of businesses.",
      },
      {
        question: "Why is Trademark Registration Important?",
        answer:
          "Trademark registration provides legal protection for your brand under the Trade Marks Act, 1999, giving you exclusive rights to use it for your goods or services. It helps prevent others from using a similar mark that could confuse consumers, enhances your brand's value, creates a valuable business asset, and allows you to take legal action against infringers.",
      },
      {
        question: "How long does the trademark registration process take?",
        answer:
          "The complete trademark registration process typically takes 18-24 months if there are no objections or oppositions. Initial filing takes 7-10 business days, examination takes 12-18 months, followed by a 4-month publication period in the Trademark Journal. The timeline may extend if objections are raised or oppositions are filed.",
      },
      {
        question: "What happens after my trademark is registered?",
        answer:
          "Once registered, your trademark is protected for 10 years from the filing date and can be renewed indefinitely. You gain exclusive rights to use the ® symbol, can take legal action against infringers, license your trademark for revenue, and use it as a valuable business asset. We also offer post-registration monitoring and renewal services.",
      },
      {
        question: "Can I use the ® symbol before registration is complete?",
        answer:
          "No, the ® symbol can only be used after your trademark is officially registered and you receive the registration certificate. Using ® before registration is illegal and can result in penalties. However, you can use the ™ symbol once you file your application to indicate that you're claiming trademark rights.",
      },
      {
        question: "What is the difference between ™ and ® symbols?",
        answer:
          "The ™ symbol indicates that you're claiming trademark rights but the mark is not yet registered. It can be used during the application process or for unregistered marks. The ® symbol indicates official registration with the trademark office and can only be used after receiving the registration certificate. Misuse of ® is illegal.",
      },
      {
        question: "How much does trademark registration cost in India?",
        answer:
          "Government fees are ₹4,500 per class for individuals, startups, and MSMEs, and ₹9,000 per class for companies and LLPs. Additional costs may include professional fees for search, filing, and handling objections or oppositions. The total cost depends on the number of classes and complexity of your case.",
      },
      {
        question: "Can I register a trademark in multiple classes?",
        answer:
          "Yes, if your business operates across different product or service categories, you should register your trademark in all relevant classes. Each class requires a separate application and fee. Our experts help identify all applicable classes to ensure comprehensive protection for your brand.",
      },
      {
        question: "What happens if someone opposes my trademark application?",
        answer:
          "If someone files an opposition during the 4-month publication period, a hearing is scheduled before a Trademark Hearing Officer. Both parties present their arguments and evidence. Our experienced attorneys represent you in opposition proceedings, presenting strong legal arguments to defend your application and secure registration.",
      },
      {
        question: "How long is a trademark valid and how do I renew it?",
        answer:
          "A trademark registration is valid for 10 years from the filing date and can be renewed indefinitely for successive 10-year periods. Renewal must be done via Form TM-R before expiry, though a one-year grace period is available with additional fees. We provide renewal reminder services to ensure your trademark remains protected.",
      },
    ],
    commonlyFiledTrademarks: [
      {
        title: "Brand Name",
        imageQuery: "/assets/new-nike.svg",
        description: "Business name for your brand identity and recognition",
      },
      {
        title: "Brand name + Logo",
        imageQuery: "/assets/brandNike.svg",
        description: "Complete brand identity with name and graphic representation",
      },
      {
        title: "Logo",
        imageQuery: "/assets/nikeTick.svg",
        description: "Distinctive graphic representation of your brand",
      },
      {
        title: "Slogan",
        imageQuery: "/assets/doit.svg",
        description: "Memorable tagline that represents your brand values",
      },
    ],
  },
}
