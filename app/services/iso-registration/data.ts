import type { Service } from "@/lib/types"

const isoRegistrationService: Service = {
  name: "ISO Registration",
  title: "ISO Certification Services",
  description:
    "Achieve internationally recognized ISO certification with expert guidance and comprehensive support for quality, environmental, and safety management systems.",
  href: "/services/iso-registration",
  icon: "Award",
  details: {
    overview:
      "Obtain ISO certification to demonstrate your commitment to quality, environmental management, information security, or occupational health and safety. We provide end-to-end support for various ISO standards including ISO 9001, ISO 14001, ISO 45001, ISO 27001, and more.",

    keyFeatures: [
      {
        title: "Expert Consultation",
        description:
          "Our certified consultants guide you through the entire ISO certification process with industry-specific expertise.",
      },
      {
        title: "Comprehensive Documentation",
        description:
          "Complete documentation support including quality manuals, procedures, and work instructions tailored to your organization.",
      },
      {
        title: "Implementation Support",
        description: "Hands-on assistance with system implementation, employee training, and process integration.",
      },
      {
        title: "Audit Preparation",
        description: "Thorough preparation for internal and external audits to ensure successful certification.",
      },
    ],

    process: [
      {
        step: 1,
        title: "Standard Selection & Gap Analysis",
        description: "Identify the appropriate ISO standard and assess current processes against requirements.",
      },
      {
        step: 2,
        title: "Documentation Development",
        description: "Create comprehensive documentation including quality manual and procedures.",
      },
      {
        step: 3,
        title: "System Implementation",
        description: "Implement the management system with employee training and process integration.",
      },
      {
        step: 4,
        title: "Internal Audit & Review",
        description: "Conduct internal audits and management review to ensure system effectiveness.",
      },
      {
        step: 5,
        title: "External Certification Audit",
        description: "Two-stage certification audit by accredited certification body.",
      },
      {
        step: 6,
        title: "Certificate Issuance",
        description: "Receive ISO certificate valid for 3 years with annual surveillance audits.",
      },
    ],

    pricing: {
      basePrice: "₹25,999",
      governmentFees: "Certification body fees additional",
      timeline: "3-6 months",
    },

    faqs: [
      {
        question: "Which ISO standards do you support?",
        answer:
          "We support all major ISO standards including ISO 9001 (Quality Management), ISO 14001 (Environmental Management), ISO 45001 (Occupational Health & Safety), ISO 27001 (Information Security), ISO 22000 (Food Safety), ISO 50001 (Energy Management), and ISO 13485 (Medical Devices).",
      },
      {
        question: "How long is ISO certification valid?",
        answer:
          "ISO certificates are typically valid for 3 years from the date of issuance. Annual surveillance audits are required to maintain certification, and a re-certification audit is conducted before the certificate expires.",
      },
      {
        question: "What are the main benefits of ISO certification?",
        answer:
          "Key benefits include enhanced credibility and trust, improved operational efficiency, better risk management, access to global markets, competitive advantage, regulatory compliance, and increased customer satisfaction.",
      },
      {
        question: "What is the minimum requirement for ISO certification in India?",
        answer:
          "Generally, organizations need to be registered entities with operational presence for minimum 5 years, have at least 10 employees, and demonstrate a functioning management system aligned with the chosen ISO standard.",
      },
      {
        question: "Can small businesses get ISO certified?",
        answer:
          "Yes, ISO certification is available for organizations of all sizes. While there are minimum requirements, small businesses can achieve certification with proper documentation and implementation of management systems.",
      },
      {
        question: "What happens during the certification audit?",
        answer:
          "The certification audit is conducted in two stages: Stage 1 involves documentation review and readiness assessment, while Stage 2 is a comprehensive on-site audit of your implemented management system and operational processes.",
      },
      {
        question: "How much does ISO certification cost?",
        answer:
          "Costs vary based on organization size, complexity, and chosen standard. Our packages start from ₹25,999 for consultation and implementation support, with additional certification body fees ranging from ₹15,000 to ₹50,000 depending on the standard and organization size.",
      },
      {
        question: "Do you provide training for employees?",
        answer:
          "Yes, we provide comprehensive training programs for employees at all levels, including awareness training, internal auditor training, and specialized training for management representatives and key personnel.",
      },
    ],
  },
}

export default isoRegistrationService
