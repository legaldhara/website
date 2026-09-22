import type { Service } from "@/lib/types"

const gstRegistrationService: Service = {
  name: "GST Registration",
  href: "/services/gst-registration",
  description: "Simplify your tax compliance with hassle-free GST registration for your business.",
  icon: "Calculator",
  price: "Starting from ₹2,999",
  timeline: "3-5 Business Days",
  zeroServiceCharges: true,
  details: {
    introductoryText:
      "GST registration is an essential compliance for any business or professional in India. It is the process of obtaining a unique 15-digit Goods and Services Tax Identification Number (GSTIN), making your business liable to pay GST and enabling authorities to monitor transactions effectively. Since its introduction on 1 July 2017, the Goods & Services Tax (GST) has been mandatory for all service providers, traders, manufacturers, and even freelancers in India. The GST system was implemented to replace Central and state-level taxes such as Service Tax, Excise Duty, CST, Entertainment Tax, Luxury Tax, and VAT, making the tax process more streamlined.",

    gstComponents: [
      {
        title: "Central Goods and Services Tax (CGST)",
        description:
          "This tax is levied by the Central Government on the supply of goods and services within a particular state. CGST applies to transactions carried out entirely within the boundaries of one state.",
        icon: "Building",
      },
      {
        title: "State Goods and Services Tax (SGST)",
        description:
          "SGST is charged by the State Government on the supply of goods and services within its jurisdiction. Similar to CGST, SGST is also limited to transactions happening within a specific state.",
        icon: "MapPin",
      },
      {
        title: "Integrated Goods and Services Tax (IGST)",
        description:
          "This tax is imposed by the Central Government on the supply of goods and services that occur between different states or between a state and a Union Territory. IGST is relevant for transactions where goods or services cross state or Union Territory boundaries.",
        icon: "Globe",
      },
    ],

    eligibilityCriteria: [
      {
        title: "Business Entities - Goods Supply",
        description:
          "Any enterprise with an aggregate annual turnover exceeding Rs. 40 lakhs. For special category states under GST, the threshold is Rs. 20 lakhs. Must satisfy conditions: Should not be providing any services, not engaged in intra-state supplies in certain states, not involved in supply of ice cream, pan masala or tobacco.",
        icon: "Package",
      },
      {
        title: "Service Providers",
        description:
          "Those with an aggregate annual turnover surpassing Rs. 20 lakhs. For special category states, this limit is Rs. 10 lakhs. All service providers above this threshold must register regardless of other conditions.",
        icon: "Briefcase",
      },
      {
        title: "Previously Registered Entities",
        description:
          "Entities that were registered under older tax frameworks (like Excise, VAT, Service Tax, etc.) need to migrate and register under the GST regime.",
        icon: "RefreshCw",
      },
      {
        title: "Inter-State Suppliers",
        description:
          "Any entity or individual involved in the supply of goods across state boundaries, regardless of turnover amount.",
        icon: "Truck",
      },
      {
        title: "Casual Taxable Entities",
        description:
          "Those who undertake taxable supply occasionally, even if they don't have a fixed place of business.",
        icon: "Calendar",
      },
      {
        title: "Entities under Reverse Charge Mechanism",
        description: "Businesses obligated to pay tax under the reverse charge mechanism as specified under GST law.",
        icon: "RotateCcw",
      },
      {
        title: "Input Service Distributors & Agents",
        description: "Distributors of input services, including their representatives who distribute input tax credit.",
        icon: "Users",
      },
      {
        title: "E-Commerce Platforms",
        description:
          "Operators or aggregators of e-commerce platforms must register compulsorily regardless of turnover.",
        icon: "ShoppingCart",
      },
      {
        title: "Non-Resident Taxable Entities",
        description: "Individuals or entities that are non-resident but engage in taxable supply within India.",
        icon: "Plane",
      },
      {
        title: "Supplier's Agents",
        description: "Representatives who supply on behalf of a principal supplier must obtain separate registration.",
        icon: "UserCheck",
      },
      {
        title: "E-Commerce Suppliers",
        description: "Individuals or entities that offer goods or services through an e-commerce aggregator.",
        icon: "Monitor",
      },
      {
        title: "Online Service Providers",
        description:
          "Entities delivering online information, database access, or retrieval services from outside India to an individual in India, excluding those already registered under GST.",
        icon: "Wifi",
      },
    ],

    turnoverLimits: {
      serviceProviders: {
        normalStates: "Rs. 20 lakhs",
        specialStates: "Rs. 10 lakhs",
        description:
          "Any person or entity who provides service of more than the specified limit in aggregate turnover in a year is required to obtain GST number registration.",
      },
      goodsSuppliers: {
        normalStates: "Rs. 40 lakhs",
        specialStates: "Rs. 20 lakhs",
        conditions: [
          "Should not be providing any services",
          "The supplier should not be engaged in making intra-state supplies in the States of Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Puducherry, Sikkim, Telangana, Tripura and Uttarakhand",
          "Should not be involved in the supply of ice cream, pan masala or tobacco",
        ],
        fallbackLimit:
          "If above conditions are not met, the supplier would be required to obtain GST registration when turnover crosses Rs. 20 lakhs and Rs. 10 lakhs in special category states.",
      },
      specialCategoryStates: [
        "Arunachal Pradesh",
        "Assam",
        "Jammu and Kashmir",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Sikkim",
        "Tripura",
        "Himachal Pradesh",
        "Uttarakhand",
      ],
      aggregateTurnover:
        "Aggregate turnover = (Taxable supplies + Exempt Supplies + Exports + Inter-State Supplies) + (Taxes + Value of Inward Supplies + Value of Supplies Taxable under Reverse Charge + Value of Non-Taxable Supplies). Calculated based on PAN, hence multiple places of business must be summed.",
    },

    requiredDocuments: {
      initialDetails: [
        "Sole Proprietor / Individual",
        "LLP and Partnership Firms",
        "HUF (Hindu Undivided Family)",
        "Company (Public and Private) (Indian and Foreign)"
      ],
      documentTypes: [
        {
          type: "Sole Proprietor / Individual",
          documents: [
            "PAN card of the owner",
            "Aadhar card of the owner",
            "Photograph of the owner (in JPEG format, maximum size 100 KB)",
            "Bank account details",
            "Address proof (Passport, driving license, Voters identity card, Aadhar card etc.)"
          ]
        },
        {
          type: "LLP and Partnership Firms",
          documents: [
            "PAN card of all partners (including managing partner and authorized signatory)",
            "Copy of partnership deed",
            "Photograph of all partners and authorised signatories (in JPEG format, maximum size 100 KB)",
            "Address proof of partners (Passport, driving license, Voters identity card, Aadhar card etc.)",
            "Aadhar card of authorised signatory",
            "Proof of appointment of authorized signatory",
            "In the case of LLP, registration certificate / Board resolution of LLP",
            "Bank account details",
            "Address proof of principal place of business"
          ]
        },
        {
          type: "HUF (Hindu Undivided Family)",
          documents: [
            "PAN card of HUF",
            "PAN card and Aadhar card of Karta",
            "Photograph of the owner (in JPEG format, maximum size 100 KB)",
            "Bank account details",
            "Address proof of principal place of business"
          ]
        },
        {
          type: "Company (Public and Private) (Indian and Foreign)",
          documents: [
            "PAN card of the Company",
            "Certificate of incorporation given by Ministry of Corporate Affairs",
            "Memorandum of Association / Articles of Association",
            "PAN card and Aadhar card of authorized signatory (must be an Indian, even for foreign companies)",
            "PAN card and address proof of all directors of the Company",
            "Photograph of all directors and authorised signatory (in JPEG format / PDF format, maximum size 100 KB)",
            "Board resolution appointing authorised signatory / Any other proof of appointment (in JPEG format / PDF format, maximum size 100 KB)",
            "Bank account details",
            "Address proof of principal place of business"
          ]
        }
      ]
    },

    processSteps: [
      {
        step: 1,
        title: "Part A - Generate TRN",
        description:
          "Visit gst.gov.in and generate Temporary Reference Number (TRN) using PAN, email, and mobile number. Complete OTP verification.",
        timeframe: "5-10 minutes",
      },
      {
        step: 2,
        title: "Part B - Fill Application",
        description:
          "Complete detailed business information including promoter details, business address, goods/services with HSN/SAC codes, and bank details.",
        timeframe: "30-45 minutes",
      },
      {
        step: 3,
        title: "Document Upload",
        description:
          "Upload all required documents in specified formats. Ensure documents are clear and within size limits.",
        timeframe: "15-20 minutes",
      },
      {
        step: 4,
        title: "Application Submission",
        description:
          "Submit application using Digital Signature Certificate (DSC), e-Sign, or EVC. Receive Application Reference Number (ARN).",
        timeframe: "5 minutes",
      },
      {
        step: 5,
        title: "Verification & Approval",
        description: "GST officer verifies application and documents. May request additional information if needed.",
        timeframe: "3-7 working days",
      },
      {
        step: 6,
        title: "GSTIN Issuance",
        description: "Upon approval, receive your 15-digit GST Identification Number (GSTIN) and GST certificate.",
        timeframe: "1-2 working days",
      },
    ],

    whyRegisterDetailed: [
      {
        title: "Legal Compliance",
        description:
          "Ensures that businesses remain compliant with tax regulations, thus avoiding any potential penalties. GST registration protects businesses and ensures their rights are upheld.",
        icon: "Shield",
      },
      {
        title: "Input Tax Credit (ITC)",
        description:
          "Businesses can claim credits for the GST they've paid on purchases, which can then be set off against the GST charged on sales, leading to a reduction in tax liability.",
        icon: "CreditCard",
      },
      {
        title: "Inter-State Trade Ease",
        description:
          "GST Portal Registration encourages businesses to transact across state boundaries without facing tax-related challenges, enabling seamless interstate commerce.",
        icon: "Globe",
      },
      {
        title: "Elimination of Cascading Effect",
        description:
          "By removing the effect of tax being levied on an already taxed amount, the overall cost of products or services is reduced, benefiting both businesses and consumers.",
        icon: "TrendingDown",
      },
      {
        title: "Competitive Edge",
        description:
          "Being GST compliant can instil trust in potential customers, opening up more business opportunities and establishing market credibility.",
        icon: "Award",
      },
      {
        title: "Access to Larger Markets",
        description:
          "Major corporations often prefer collaborating with GST-registered vendors, expanding your potential customer base significantly.",
        icon: "Target",
      },
      {
        title: "Optimized Cash Flow",
        description:
          "Efficient management and lower tax liability can enhance the cash flow within a business, improving financial stability.",
        icon: " IndianRupee",
      },
      {
        title: "Enhanced Credit Rating",
        description:
          "Maintaining a consistent and positive GST compliance record can boost a business's credit profile with banks and financial institutions.",
        icon: "TrendingUp",
      },
      {
        title: "Simplified Compliance",
        description:
          "The GST process is streamlined, enabling businesses to file returns and make payments online easily through a unified portal.",
        icon: "FileText",
      },
      {
        title: "Transparent Operations",
        description:
          "Ensures businesses maintain accurate records, promoting a sense of trustworthiness and professionalism in operations.",
        icon: "Eye",
      },
    ],

    gstCertificateInfo: {
      title: "GST Certificate",
      description:
        "The GST Certificate stands as an authoritative document provided by the Indian government to entities that are registered under the Goods and Services Tax (GST) framework. This certificate confirms a business's legitimate Registration under GST and prominently displays key details such as the GST identification number, the business name, and the official address.",
      importance: [
        "Tax Collection Authority: It empowers businesses to impose and gather GST from their clientele.",
        "Tax Credit Claims: With this certificate, businesses can rightfully claim credits on the GST they've disbursed on their procurements and operational costs.",
        "Loan Applications: When seeking financial aid or loans, businesses might be asked to present their GST certificates to validate their authenticity.",
        "Government Tenders: To be eligible and participate in official government tenders, the GST Certificate must often be produced as evidence of tax compliance.",
        "Market Reputation: The GST certificate enhances a business's stature in the market, reflecting its commitment to national tax regulations.",
      ],
    },

    gstinInfo: {
      title: "GSTIN (Goods and Services Tax Identification Number)",
      description:
        "GSTIN is a distinctive 15-digit alphanumeric code allocated to every taxpayer who is registered under the GST framework in India. This number acts as the primary identifier for both businesses and individuals in the context of GST-related transactions and compliance.",
      structure:
        "Format: First 2 digits (State code) + Next 10 digits (PAN) + 13th digit (Entity code) + 14th digit (Check sum) + Last digit (Default 'Z')",
    },

    voluntaryRegistration: {
      title: "Voluntary GST Registration for Businesses",
      description:
        "Businesses generating a turnover of less than Rs.20 lakhs can process the GST apply online voluntarily. By doing so, they can benefit from advantages such as availing input tax credits, unrestricted inter-state sales, eligibility to list on e-commerce sites, and establishing a competitive stance against businesses that aren't GST-registered.",
      benefits: [
        "Input tax credit benefits on purchases",
        "Unrestricted inter-state sales capability",
        "Eligibility to list products on e-commerce platforms",
        "Competitive advantage over non-GST registered businesses",
        "Enhanced business credibility and market reputation",
        "Access to larger corporate customers who prefer GST-registered vendors",
      ],
    },

    penaltyInfo: {
      title: "Penalty for Not Obtaining GST Number Registration",
      penalties: [
        {
          type: "For Non-Payment or Underpayments",
          description:
            "If a taxpayer either neglects to pay the requisite tax or mistakenly underpays, a penalty equivalent to 10% of the outstanding tax amount is levied.",
          amount: "10% of outstanding tax amount",
        },
        {
          type: "Intentional Tax Evasion",
          description:
            "If an individual or business willfully avoids paying the due taxes, the penalty equals 100% of the evaded tax amount.",
          amount: "100% of evaded tax amount",
        },
      ],
    },

    faq: [
      {
        question: "What is GST registration and why is it important?",
        answer:
          "GST registration is the process of obtaining a unique 15-digit Goods and Services Tax Identification Number (GSTIN), making your business liable to pay GST and enabling authorities to monitor transactions effectively. It's essential for legal compliance, claiming input tax credit, and conducting interstate business.",
      },
      {
        question: "What are the turnover limits for mandatory GST registration?",
        answer:
          "For goods supply: ₹40 lakhs (₹20 lakhs for special category states). For services supply: ₹20 lakhs (₹10 lakhs for special category states). However, goods suppliers must meet specific conditions to qualify for the ₹40 lakh limit, including not providing services and not dealing in ice cream, pan masala, or tobacco.",
      },
      {
        question: "What are the key components of GST?",
        answer:
          "GST has three main components: CGST (Central GST) levied by Central Government on intra-state supplies, SGST (State GST) charged by State Government on intra-state supplies, and IGST (Integrated GST) imposed by Central Government on inter-state supplies.",
      },
      {
        question: "Who must register for GST compulsorily?",
        answer:
          "Business entities above turnover thresholds, service providers above specified limits, inter-state suppliers, e-commerce platforms, casual taxable entities, entities under reverse charge mechanism, input service distributors, non-resident taxable entities, and online service providers from outside India.",
      },
      {
        question: "What is aggregate turnover and how is it calculated?",
        answer:
          "Aggregate turnover = (Taxable supplies + Exempt Supplies + Exports + Inter-State Supplies) + (Taxes + Value of Inward Supplies + Value of Supplies Taxable under Reverse Charge + Value of Non-Taxable Supplies). It's calculated based on PAN, so multiple business locations must be combined.",
      },
      {
        question: "Can I register for GST voluntarily?",
        answer:
          "Yes, businesses with turnover below mandatory limits can register voluntarily. This provides benefits like input tax credit, unrestricted inter-state sales, e-commerce platform eligibility, and competitive advantage over non-registered businesses.",
      },
      {
        question: "What documents are required for different business types?",
        answer:
          "Requirements vary by business type. Sole proprietors need PAN, Aadhaar, photograph, and address proof. Companies need incorporation certificate, MOA/AOA, director details, and board resolutions. Partnerships need partnership deed and partner details. All need bank account details and business address proof.",
      },
      {
        question: "What is the GST Certificate and GSTIN?",
        answer:
          "GST Certificate is an official document confirming registration, displaying GSTIN, business name, and address. GSTIN is a 15-digit unique identification number with specific structure: State code (2 digits) + PAN (10 digits) + Entity code (1 digit) + Check sum (1 digit) + 'Z' (1 digit).",
      },
      {
        question: "What are the penalties for not registering when required?",
        answer:
          "For non-payment or underpayment: 10% of outstanding tax amount. For intentional tax evasion: 100% of evaded tax amount. Additionally, interest charges apply on delayed payments.",
      },
      {
        question: "How long does GST registration take and what's the process?",
        answer:
          "Typically 3-7 working days after complete document submission. Process involves generating TRN on GST portal, filling detailed application, uploading documents, submitting with DSC/e-Sign, verification by GST officer, and GSTIN issuance upon approval.",
      },
      {
        question: "What are the main advantages of GST registration?",
        answer:
          "Legal compliance, input tax credit claims, elimination of cascading tax effect, interstate trade facilitation, competitive edge, access to larger markets, optimized cash flow, enhanced credit rating, simplified compliance procedures, and transparent business operations.",
      },
      {
        question: "Is there any registration fee for GST?",
        answer:
          "GST registration on the government portal is free of cost. However, professional assistance for documentation, application preparation, and filing may involve service charges from consultants or service providers.",
      },
    ],

    howWeAssist: [
      {
        title: "Expert Guidance at Every Step",
        description: "Our professionals assist you from document collection to GSTIN issuance, ensuring a smooth and error-free process."
      },
      {
        title: "Document Preparation & Review",
        description: "We help you prepare, review, and upload all required documents in the correct format to avoid rejections or delays."
      },
      {
        title: "Application Filing & Follow-up",
        description: "We file your GST application on the portal and coordinate with GST officers for timely approval and resolution of queries."
      },
      {
        title: "Post-Registration Support",
        description: "Get help with GST certificate download, amendments, and compliance queries even after registration is complete."
      },
      {
        title: "Transparent Communication",
        description: "You receive regular updates on your application status and can reach our support team anytime for clarifications."
      },
      {
        title: "Affordable & Reliable Service",
        description: "Enjoy competitive pricing with no hidden charges, backed by our commitment to quality and customer satisfaction."
      }
    ],
  },
}

export default gstRegistrationService
