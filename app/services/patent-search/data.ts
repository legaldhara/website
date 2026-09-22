import type { Service } from "@/lib/types"

const indianPatentSearchService: Service = {
  name: "Patent Search",
  title: "Patent Search",
  description: "Comprehensive patent search services to assess patentability and avoid infringement.",
  href: "/services/indian-patent-search",
  icon: "FileSearch",
  details: {
    overview: "Conduct thorough patent searches in Indian databases to assess the patentability of your invention and identify potential conflicts with existing patents.",
    keyFeatures: [
      {
        title: "Expert Analysis",
        description: "Our team of patent experts conducts detailed searches and analysis to provide you with actionable insights.",
      },
      {
        title: "Comprehensive Database Access",
        description: "We access multiple Patent databases and relevant technical literature to ensure thorough coverage.",
      },
      {
        title: "Custom Search Parameters",
        description: "We tailor search parameters based on your invention's specifics to maximize relevance and accuracy.",
      },
      {
        title: "Detailed Search Report",
        description: "Receive a comprehensive report summarizing search results, potential conflicts, and recommendations for next steps.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Invention Analysis",
        description: "Understand your invention and define search parameters.",
      },
      {
        step: 2,
        title: "Database Search",
        description: "Search Patent databases and relevant prior art.",
      },
      {
        step: 3,
        title: "Analysis",
        description: "Analyze search results and assess patentability.",
      },
      {
        step: 4,
        title: "Report Delivery",
        description: "Provide comprehensive search report with recommendations.",
      },
    ],
    pricing: {
      basePrice: "₹8,999",
      governmentFees: "No government fees",
      timeline: "7-10 days",
    },
    faq: [
      {
        question: "Why is patent search important?",
        answer: "Patent search helps assess patentability, avoid infringement, and understand the competitive landscape before filing an application.",
      },
      {
        question: "What databases do you search?",
        answer: "We search Patent Office databases, international databases, and relevant technical literature.",
      },
      {
        question: "Can you guarantee my invention is patentable?",
        answer: "While we provide expert analysis, final patentability determination is made by the patent office during examination.",
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

export default indianPatentSearchService
