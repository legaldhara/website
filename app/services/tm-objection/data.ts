import type { Service } from "@/lib/types"

const trademarkObjectionService: Service = {
  name: "TM Objection",
  href: "/services/trademark-objection",
  description:
    "Expert assistance to draft and file a robust response to your trademark objection, securing your brand's future.",
  icon: "Gavel",
  price: "Starting from ₹4,999",
  timeline: "7-10 Business Days",
  zeroServiceCharges: false,
  details: {
    introductoryText:
      "A trademark objection is a formal notice from the Registrar of Trademarks indicating issues with a trademark application that need to be addressed before registration can proceed. It is not a rejection, but a request for clarification or modification. Responding effectively to a trademark objection within the stipulated time (usually one month) is crucial to prevent your application from being abandoned. Our legal experts specialize in analyzing objection reports and drafting comprehensive, legally sound responses to overcome these hurdles.",

    whatIsTrademarkObjection: {
      title: "Understanding Trademark Objection",
      content:
        "A trademark objection is a formal notice from the Registrar of Trademarks indicating issues with a trademark application that need to be addressed before registration can proceed. It's essential to understand that an objection isn't a denial but a request for clarification or adjustment. The reviewing officer must confirm that the trademark application meets all necessary standards and regulations.",
      keyPoints: [
        "An objection is not a rejection - it's an opportunity to clarify or defend your application",
        "You have 30 days from receiving the examination report to file a response",
        "Failing to respond may result in application abandonment",
        "A well-crafted response significantly increases chances of registration approval",
        "The application can proceed to publication if objections are successfully addressed",
      ],
    },

    objectionGrounds: {
      section9: {
        title: "Objections Under Section 9 - Absolute Grounds",
        description:
          "This section focuses on trademarks that might be too obvious, lack a unique character, or could be misleading.",
        examples: [
          {
            type: "Descriptive Terms",
            description: "Trademarks that directly describe the product or service",
            example:
              "A trademark like 'FreshJuice' for juice products could face objection because it directly describes the product",
          },
          {
            type: "Lack of Distinctiveness",
            description: "Marks that fail to distinguish goods/services from others",
            example:
              "A simple geometric design like a square for furniture might be objected to for lacking unique identity",
          },
          {
            type: "Deceptive or Misleading",
            description: "Brands that might falsely represent their products",
            example:
              "'OrganicGarden' for skincare with non-organic ingredients could face objection due to potential consumer deception",
          },
          {
            type: "Generic Terms",
            description: "Common words that cannot be exclusively owned",
            example: "Using 'Computer' as a trademark for computer products would be too generic",
          },
          {
            type: "Offensive Content",
            description: "Marks containing offensive, obscene, or immoral content",
            example: "Any trademark with profanity or content against public policy",
          },
        ],
      },
      section11: {
        title: "Objections Under Section 11 - Relative Grounds",
        description:
          "This section concerns objections related to similarity between the proposed trademark and existing trademarks.",
        examples: [
          {
            type: "Identical Marks",
            description: "Same trademark already exists in the same category",
            example:
              "Applying for 'Sunshine' as a beverage trademark when 'Sunshine' already exists in the same category",
          },
          {
            type: "Similar Sound",
            description: "Phonetic similarity causing confusion",
            example:
              "Application for 'CandyLand' might be objected if 'KandyLand' is already registered in the same sector",
          },
          {
            type: "Similar Concept",
            description: "Conceptual similarity in meaning or idea",
            example:
              "Applying for 'TechSolutions' might clash with existing 'TechPro' mark as both suggest similar concepts",
          },
          {
            type: "Visual Similarity",
            description: "Similar appearance or design elements",
            example: "Logo designs that are visually similar to existing registered marks",
          },
        ],
      },
    },

    objectionVsOpposition: {
      title: "Trademark Objection vs Trademark Opposition",
      objection: {
        definition:
          "Concerns raised by the examining officer about the registration process's adherence to trademark law",
        raisedBy: "Trademark Examiner/Registrar",
        timing: "During the examination phase, before publication",
      },
      opposition: {
        definition: "Challenge posed by a third party questioning the trademark's validity",
        raisedBy: "Third parties (individuals, companies, or organizations)",
        timing: "After publication in the Trademark Journal (4-month opposition period)",
      },
    },

    responseTimeline: {
      title: "Response Timeline and Consequences",
      timeLimit: "30 days from the date of receiving the examination report",
      consequences:
        "If no response is filed within the timeframe, the trademark application will be treated as abandoned",
      extensionPossible: "An extension of up to 30 days may be requested if more time is needed for preparation",
    },

    requiredDocuments: {
      initialDetails: [
        "The following documents are typically required to prepare a strong reply to a trademark objection:"
      ],
      documentTypes: [
        {
          type: "Business Evidence",
          documents: [
            "Invoices and bills showing use of the trademark",
            "Business cards and letterheads featuring the mark",
            "Purchase orders and delivery challans",
            "Sales and turnover documents"
          ]
        },
        {
          type: "Legal Documents",
          documents: [
            "Affidavit of use detailing first use, geographical area, and sales figures",
            "Power of Attorney (Form TM-48) if filed through an agent",
            "Government certificates (MSME, FSSAI, etc.)",
            "Company incorporation or partnership documents"
          ]
        },
        {
          type: "Marketing Materials",
          documents: [
            "Screenshots of social media pages",
            "Copies of advertisements in print, digital, or broadcast media",
            "Website screenshots showing trademark usage",
            "Brochures, catalogs, and promotional materials"
          ]
        },
        {
          type: "Supporting Evidence",
          documents: [
            "Customer testimonials and reviews",
            "Press coverage and media mentions",
            "Awards and recognitions received",
            "Export/import documents if applicable"
          ]
        }
      ]
    },

    replyFees: {
      title: "Trademark Objection Reply Fees",
      description:
        "The fees for responding to a trademark objection can vary depending on several factors and the complexity of the case.",
      factors: [
        "Complexity of the objection raised",
        "Need for legal assistance and representation",
        "Jurisdiction and classification of goods/services",
        "Additional documentation and evidence required",
        "Whether hearing representation is needed",
      ],
    },

    detailedProcess: {
      title: "Detailed Process for Filing Trademark Objection Reply",
      steps: [
        {
          step: "1",
          title: "Analysis and Understanding",
          description:
            "Comprehensive review and assessment of the examination report to understand specific objection grounds",
          considerations: [
            "Identify whether objections fall under Section 9 or Section 11",
            "Understand the examiner's specific concerns",
            "Assess the strength of the objection",
            "Determine the best response strategy",
          ],
        },
        {
          step: "2",
          title: "Evidence Collection",
          description: "Gathering all necessary documents and evidence to support the response",
          considerations: [
            "Collect proof of prior use and distinctiveness",
            "Gather marketing and promotional materials",
            "Obtain legal documents and certifications",
            "Prepare affidavits and sworn statements",
          ],
        },
        {
          step: "3",
          title: "Drafting the Reply",
          description: "Preparation of a comprehensive, legally sound response addressing all objection points",
          considerations: [
            "Follow the specified format to prevent rejection",
            "Address each objection with legal arguments",
            "Reference applicable laws and prior rulings",
            "Highlight differences between contested marks",
            "Include supporting evidence and annexures",
          ],
        },
        {
          step: "4",
          title: "Filing and Submission",
          description: "Timely submission of the reply through proper channels within the 30-day deadline",
          considerations: [
            "Submit through Form TM-M with reply document",
            "Include all annexures and supporting documents",
            "Pay applicable fees",
            "Obtain acknowledgment receipt",
          ],
        },
        {
          step: "5",
          title: "Follow-up and Hearing",
          description: "Monitor application status and prepare for potential hearing if required",
          considerations: [
            "Track application status regularly",
            "Prepare for oral hearing if scheduled",
            "Present arguments with supporting documents",
            "Await registrar's final decision",
          ],
        },
      ],
    },

    keyFeatures: [
      {
        title: "Expert Analysis",
        description: "Thorough review of the trademark examination report by experienced legal professionals.",
      },
      {
        title: "Comprehensive Response",
        description: "Detailed, legally compliant reply addressing all objection grounds systematically.",
      },
      {
        title: "Evidence Compilation",
        description: "Strategic collection and presentation of supporting documents and proof of use.",
      },
      {
        title: "Timely Submission",
        description: "Ensuring your response is filed well within the 30-day deadline to avoid abandonment.",
      },
      {
        title: "Hearing Support",
        description: "Expert representation and advocacy if your case proceeds to an oral hearing.",
      },
      {
        title: "Success Optimization",
        description: "Maximizing the likelihood of overcoming objections and securing trademark registration.",
      },
    ],

    processSteps: [
      {
        title: "Objection Analysis",
        description:
          "Our experts carefully review the trademark examination report to understand the specific grounds for objection, whether due to similarity with existing marks, lack of distinctiveness, or other legal issues under Sections 9 and 11 of the Trademarks Act.",
        step: 1,
      },
      {
        title: "Evidence & Document Collection",
        description:
          "We guide you in collecting comprehensive evidence including proof of prior use, business documents, marketing materials, and legal certifications to build a strong foundation for your response.",
        step: 2,
      },
      {
        title: "Strategic Response Drafting",
        description:
          "Our legal team drafts a comprehensive, legally sound response addressing each objection point with relevant legal arguments, case law references, and supporting evidence to maximize approval chances.",
        step: 3,
      },
      {
        title: "Filing & Follow-up",
        description:
          "We ensure timely filing of your response within the 30-day deadline and continuously monitor your application status. If a hearing is scheduled, our experts provide professional representation before the Trademark Hearing Officer.",
        step: 4,
      },
    ],

    howWeAssist: [
      {
        title: "Detailed Objection Analysis",
        description:
          "We provide clear explanation of why your trademark application was objected to, breaking down complex legal language into understandable terms.",
      },
      {
        title: "Customized Response Strategy",
        description:
          "Develop a tailored approach to address specific objections, whether they're based on similarity, descriptiveness, or other grounds.",
      },
      {
        title: "Professional Legal Drafting",
        description:
          "Our experienced legal team crafts compelling, legally compliant responses with proper legal arguments and case law references.",
      },
      {
        title: "Evidence Optimization",
        description:
          "Strategic compilation and presentation of supporting documents to demonstrate trademark distinctiveness and prior use.",
      },
      {
        title: "Deadline Management",
        description:
          "Ensure your response is filed well within the 30-day deadline with proper documentation and fee payment.",
      },
      {
        title: "Hearing Representation",
        description:
          "Provide expert legal representation and oral advocacy if your case proceeds to a hearing before the Registrar.",
      },
    ],

    whyChooseUs: {
      title: "Why Choose  LegalDharafor Objection Response",
      benefits: [
        {
          title: "Expert Legal Team",
          description:
            "Our experienced trademark attorneys specialize in handling complex objection cases with high success rates.",
        },
        {
          title: "Comprehensive Analysis",
          description:
            "Thorough examination of objection grounds with strategic response planning tailored to your specific case.",
        },
        {
          title: "Proven Track Record",
          description:
            "Successfully handled thousands of trademark objection cases across various industries and business sectors.",
        },
        {
          title: "End-to-End Support",
          description:
            "Complete assistance from initial analysis to final registration, including hearing representation if required.",
        },
        {
          title: "Transparent Process",
          description:
            "Clear communication throughout the process with regular updates on application status and next steps.",
        },
        {
          title: "Cost-Effective Solutions",
          description:
            "Competitive pricing with no hidden charges, ensuring maximum value for your investment in brand protection.",
        },
      ],
    },

    faq: [
      {
        question: "What is a trademark objection?",
        answer:
          "A trademark objection is a formal communication from the Trademark Examiner stating reasons why your trademark application cannot be registered in its current form. It's an opportunity to clarify, defend, or modify your application rather than an outright rejection.",
      },
      {
        question: "What are the common grounds for trademark objection?",
        answer:
          "Common grounds include similarity with existing trademarks (Section 11), lack of distinctiveness, descriptive nature, use of prohibited symbols, incorrect classification of goods/services, and procedural issues like incorrect forms or missing documents.",
      },
      {
        question: "How much time do I have to respond to a trademark objection?",
        answer:
          "You have 30 days from the date of receiving the examination report to file a comprehensive response. An extension of up to 30 days may be requested if additional time is needed for preparation.",
      },
      {
        question: "What happens if I don't respond to a trademark objection?",
        answer:
          "If no response is filed within the given timeframe, your trademark application will be treated as abandoned and will not proceed to registration. This means you'll lose your application and any fees paid.",
      },
      {
        question: "Do I need a lawyer to respond to a trademark objection?",
        answer:
          "While not legally mandatory, it is highly recommended to seek expert legal assistance. A professionally drafted response significantly increases the chances of overcoming objections and securing registration.",
      },
      {
        question: "What is the difference between trademark objection and opposition?",
        answer:
          "An objection is raised by the Trademark Examiner during the examination phase, while an opposition is filed by third parties after your trademark is published in the Trademark Journal during the 4-month opposition period.",
      },
      {
        question: "Can I modify my trademark after receiving an objection?",
        answer:
          "In some cases, minor modifications may be possible, but this depends on the nature of the objection. It's often better to provide evidence of distinctiveness and prior use rather than modify the mark.",
      },
      {
        question: "What documents are required for responding to an objection?",
        answer:
          "Required documents include affidavit of use, invoices and bills, business cards, marketing materials, government certificates, social media screenshots, and any other evidence demonstrating prior use and distinctiveness of your trademark.",
      },
      {
        question: "How long does it take to get a decision after filing the objection reply?",
        answer:
          "After filing your response, the Registrar typically takes 2-4 months to review and make a decision. If satisfied, your trademark proceeds to publication; if not, a hearing may be scheduled.",
      },
      {
        question: "What happens if my objection reply is not accepted?",
        answer:
          "If the Registrar is not satisfied with your reply, they may schedule a hearing where you can present oral arguments. If the objection is still not overcome, the application may be refused, but you can appeal to the Intellectual Property Appellate Board.",
      },
      {
        question: "Can I file multiple objection replies for the same application?",
        answer:
          "Generally, you get one opportunity to respond to the examination report. However, if new objections arise or if the Registrar requests additional information, you may need to file supplementary responses.",
      },
      {
        question: "What are the fees for filing a trademark objection reply?",
        answer:
          "The fees vary depending on the complexity of the case, legal assistance required, and additional documentation needed. Our team provides transparent pricing based on your specific requirements.",
      },
    ],
  },
}

export default trademarkObjectionService
