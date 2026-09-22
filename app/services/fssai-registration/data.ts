import type { Service } from "@/lib/types"

const fssaiRegistrationService: Service = {
  name: "FSSAI Registration",
  title: "FSSAI Registration - Apply for FSSAI Certificate Online",
  description: "FSSAI Registration is a mandatory and basic requirement for all food-related businesses in India, ensuring the safety and quality of food served or sold.",
  href: "/services/fssai-registration",
  icon: "ShieldCheck",
  details: {
    overview: "FSSAI Registration is a compulsory authorisation for individuals or entities involved in the manufacturing, processing, storage, distribution, or sale of food products in India. Whether you're a small food vendor, a home-based kitchen, or managing a large food chain, obtaining FSSAI Registration is essential for building customer trust and operating legally.",
    keyFeatures: [
      {
        title: "14-Digit Registration Number",
        description: "Every FSSAI Registration Certificate is accompanied by a 14-digit number that must be displayed on all food packages. This number provides vital information about the food product's origin, including the state where it was assembled and the producer's permit details."
      },
      {
        title: "Quality Assurance",
        description: "By compelling Food Business Operators (FBOs) to display their registration details, FSSAI ensures that accountability for quality and safety rests squarely on the entity handling the food."
      },
      {
        title: "Universal Applicability",
        description: "FSSAI License Registration is compulsory for all FBOs, from small-scale vendors to large manufacturing units, though the specific requirement depends on the size and nature of the business."
      },
      {
        title: "Online Issuance",
        description: "FSSAI Registration can be obtained online through the FoSCoS portal, making the process convenient and accessible."
      }
    ],
    process: [
      {
        step: 1,
        title: "Visit the FoSCoS Portal",
        description: "Go to the FoSCoS portal to begin the registration process."
      },
      {
        step: 2,
        title: "Choose the Appropriate Form",
        description: "Select and fill out Form A (for Basic Registration) or Form B (for State/Central License) to get started with your FSSAI registration online."
      },
      {
        step: 3,
        title: "Upload Required Documents",
        description: "Submit the necessary documents online along with the application. Alternatively, documents can be submitted physically if applying offline."
      },
      {
        step: 4,
        title: "Application Review",
        description: "The Food Safety Department will review the application. The application will be either accepted or rejected within 7 days of submission. If rejected, the applicant will be informed in writing."
      },
      {
        step: 5,
        title: "Premises Inspection (if required)",
        description: "The Department may conduct an inspection of your food business premises."
      },
      {
        step: 6,
        title: "Issuance of FSSAI Registration Certificate",
        description: "If the application is approved, the Department issues the FSSAI certificate. The FSSAI certificate includes a registration number and the applicant's photograph. It will be sent via email and can also be downloaded from the FoSCoS portal."
      },
      {
        step: 7,
        title: "Display the FSSAI Certificate",
        description: "The FSSAI Registration certificate must be displayed prominently at the business premises during business hours."
      }
    ],
    pricing: {
      basePrice: "₹3,999",
      governmentFees: "₹100 - ₹7,500",
      timeline: "7-60 days",
    },
    faqs: [
      {
        question: "What is FSSAI Registration?",
        answer: "FSSAI Registration is a compulsory authorisation for individuals or entities involved in the manufacturing, processing, storage, distribution, or sale of food products in India. It is governed by the Food Safety & Standards (Licensing and Registration of Food Business) Regulations, 2011."
      },
      {
        question: "Who needs FSSAI registration?",
        answer: "All Food Business Operators (FBOs) including petty retailers, retail shops, snack shops, confectionery or bakery shops, temporary stalls, hawkers, dairy units, slaughtering houses, fish processing units, meat processing units, food manufacturing units, vegetable oil processing units, cold storage facilities, transporters, wholesalers, hotels, restaurants, bars, canteens, cafeterias, food vending agencies, caterers, dhabas, importers and exporters of food items, and e-commerce food suppliers including cloud kitchens."
      },
      {
        question: "What are the different types of FSSAI licenses?",
        answer: "There are three types: 1) FSSAI Basic Registration for businesses with annual turnover less than ₹12 lakh, 2) FSSAI State License for businesses with annual turnover between ₹12 lakh and ₹20 crore, and 3) FSSAI Central License for businesses with annual turnover exceeding ₹20 crore."
      },
      {
        question: "What documents are required for FSSAI registration?",
        answer: "General documents include photo identity proof, business constitution certificate, proof of premises possession, food safety management system plan, list of food products, bank account information, and supporting documents like NOC from Municipality or Panchayat if applicable."
      },
      {
        question: "What is the validity of FSSAI registration?",
        answer: "FSSAI registration is valid for either 1 year or 5 years, based on the business's eligibility and size. Timely renewal is required, preferably 120 days prior to expiry."
      },
      {
        question: "What are the consequences of non-compliance?",
        answer: "A Food Safety Officer may conduct inspections and classify the business as Compliance (C), Non-compliance (NC), Partial compliance (PC), or Not applicable/Not observed (NA). Non-compliance may result in improvement notices and potential cancellation of registration."
      },
      {
        question: "What are the benefits of FSSAI registration?",
        answer: "Benefits include legal compliance, improved consumer trust, enhanced reputation, market access, competitive advantage, international trade opportunities, prevention of legal issues, assurance of product quality, access to resources and support, and better business opportunities including government contracts."
      }
    ],
  },
}

export default fssaiRegistrationService
