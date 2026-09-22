import type { Service } from "@/lib/types"

const gstFilingService: Service = {
  name: "GST Filing",
  title: "GST Filing",
  description: "Professional GST return filing services to ensure compliance and avoid penalties.",
  href: "/services/gst-filing",
  icon: "FileText",
  details: {
    overview: "Ensure timely and accurate GST return filing with our professional services. We handle all types of GST returns including GSTR-1, GSTR-3B, and annual returns.",
    keyFeatures: [
      {
        title: "Comprehensive Filing",
        description: "We file all types of GST returns including  annual returns.",
      },
      {
        title: "Expert Guidance",
        description: "Our team provides expert advice on GST compliance and filing requirements.",
      },
      {
        title: "Timely Processing",
        description: "We ensure timely filing to avoid penalties and maintain compliance.",
      },
      {
        title: "Transparent Pricing",
        description: "No hidden fees, clear pricing for all our GST filing services.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Data Collection",
        description: "Collect and verify your business transaction data.",
      },
      {
        step: 2,
        title: "Return Preparation",
        description: "Prepare accurate GST returns based on your data.",
      },
      {
        step: 3,
        title: "Review & Filing",
        description: "Review returns for accuracy and file with GST portal.",
      },
      {
        step: 4,
        title: "Confirmation",
        description: "Provide filing confirmation and compliance status.",
      },
    ],
    pricing: {
      basePrice: "₹1,999/month",
      governmentFees: "No government fees",
      timeline: "Monthly/Quarterly",
    },
    faqs: [
      {
        question: "Which GST returns do you file?",
        answer: "We file all GST returns including GSTR-1, GSTR-3B, GSTR-4, GSTR-9, and other applicable returns based on your business type.",
      },
      {
        question: "What if I miss the filing deadline?",
        answer: "Late filing attracts penalties. We ensure timely filing and can help with late return filing if needed.",
      },
      {
        question: "Do you provide GST advisory services?",
        answer: "Yes, we provide comprehensive GST advisory including compliance guidance, tax planning, and dispute resolution support.",
      },
    ],
    objectionGrounds: undefined,
    objectionVsOpposition: undefined,
    responseTimeline: undefined,
    detailedProcess: undefined,
    replyFees: undefined,
    whyChooseUs: undefined,
    whatIsTrademarkObjection: undefined
  },
}

export default gstFilingService
