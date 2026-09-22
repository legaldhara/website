import type { Service } from "@/lib/types"

const taxPlanningService: Service = {
    name: "Tax Planning",
  title: "Tax Planning",
  description: "Strategic tax planning services to minimize tax liability and maximize savings legally.",
  href: "/services/tax-planning",
  icon: "TrendingUp",
  details: {
    overview:
      "Optimize your tax liability with strategic tax planning services. Our experts help you structure your finances and investments to achieve maximum tax efficiency while staying compliant.",
    keyFeatures: [
        {title: "Expert Guidance", description: "Professional advice tailored to your financial situation."},
        {title: "Legal Compliance", description: "Ensure all strategies comply with current tax laws."},
        {title: "Maximize Savings", description: "Identify opportunities to reduce tax burden effectively."},
        {title: "Ongoing Support", description: "Continuous monitoring and adjustment of strategies as needed."},
    ],
    process: [
      {
        step: 1,
        title: "Financial Assessment",
        description: "Analyze your current financial situation and tax position.",
      },
      {
        step: 2,
        title: "Strategy Development",
        description: "Develop customized tax planning strategies.",
      },
      {
        step: 3,
        title: "Implementation",
        description: "Implement recommended tax-saving measures.",
      },
      {
        step: 4,
        title: "Monitoring",
        description: "Monitor and adjust strategies as needed.",
      },
    ],
    pricing: {
      basePrice: "₹9,999",
      governmentFees: "No government fees",
      timeline: "Ongoing consultation",
    },
    faqs: [
      {
        question: "What is tax planning?",
        answer:
          "Tax planning is the analysis of financial situations to minimize tax liability through legal means while achieving financial goals.",
      },
      {
        question: "When should I start tax planning?",
        answer:
          "Tax planning should be done throughout the year, not just before filing returns. Early planning provides more opportunities for tax savings.",
      },
      {
        question: "What tax-saving options are available?",
        answer:
          "Options include Section 80C investments, ELSS, NPS, health insurance, home loan interest, and various business deductions depending on your situation.",
      },
    ],
  },
}

export default taxPlanningService
