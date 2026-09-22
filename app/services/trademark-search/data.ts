import type { Service } from "@/lib/types"

const trademarkSearchService: Service = {
  name: "Trademark Search",
  title: "Trademark Search in India",
  href: "/services/trademark-search",
  description:
    "Trademark Search ensures your brand name, logo, or slogan is unique and not similar to any existing trademark. LegalDhara helps you avoid conflicts and rejections before filing your trademark application.",
  icon: "Trademark",
  price: "₹499",
  timeline: "1-2 Business Days",
  zeroServiceCharges: false,

  details: {
    overview1: {
      introduction: [
        "Before registering a trademark, it is essential to perform a comprehensive trademark search to ensure that your brand name or logo is unique and not already in use. A trademark search helps you identify existing or similar marks in the same or related classes, preventing legal disputes and rejection of your application.",
        "A trademark search is carried out using the Indian Trademark Registry’s database and international records. It includes phonetic, visual, and conceptual similarity checks to ensure that your proposed mark is distinctive and protectable.",
        "At LegalDhara, our team of experts conducts in-depth trademark searches across relevant classes and provides a detailed report outlining potential risks, available alternatives, and professional recommendations.",
      ],
    },

    sections: [
      {
        title: "Why Conduct a Trademark Search?",
        type: "list",
        list: [
          "To confirm that your proposed brand name or logo is unique and not already registered by another party.",
          "To prevent rejection or opposition during the trademark registration process.",
          "To avoid legal disputes and infringement claims from existing trademark holders.",
          "To ensure your brand has a strong and defensible identity before you invest in marketing or packaging.",
        ],
      },
      {
        title: "Types of Trademark Searches",
        type: "list",
        list: [
          "Wordmark Search: Checks for existing word-based trademarks (e.g., brand names, slogans).",
          "Logo Search: Verifies whether a similar visual design or symbol already exists in the registry.",
          "Phonetic Search: Identifies marks that sound similar even if spelled differently (e.g., ‘Qwik’ and ‘Quick’).",
          "Class-Based Search: Searches trademarks under the relevant class of goods or services based on the NICE Classification.",
          "Global Search: Searches international databases (WIPO, USPTO, EUIPO) for global brand protection.",
        ],
      },
      {
        title: "Documents Required for Trademark Search",
        type: "list",
        list: [
          "Proposed brand name or logo (in digital format).",
          "List of goods or services you plan to offer.",
          "Business activity or product description to determine correct trademark classes.",
        ],
      },
      {
        title: "How LegalDhara Helps You",
        type: "list",
        list: [
          "Comprehensive trademark search across Indian and international databases.",
          "Detailed analysis of identical and similar marks with risk evaluation.",
          "Professional guidance on brand name modification (if required).",
          "Assistance in selecting appropriate classes for registration.",
          "Step-by-step support until trademark filing.",
        ],
      },
      {
        title: "Steps to Conduct a Trademark Search",
        type: "list",
        list: [
          "Step 1: Provide your proposed brand name, logo, or tagline.",
          "Step 2: Our experts identify relevant classes of goods or services.",
          "Step 3: A detailed search is conducted in the Indian Trademark Registry database and international sources.",
          "Step 4: A comprehensive report is shared highlighting identical, similar, and conflicting marks.",
          "Step 5: LegalDhara’s experts guide you on risk level and next steps before filing.",
        ],
      },
      {
        title: "Benefits of Conducting a Trademark Search",
        type: "list",
        list: [
          "Ensures brand name availability before filing.",
          "Reduces chances of rejection or opposition.",
          "Saves time, effort, and costs in case of conflicts.",
          "Provides clarity on brand strategy and protection scope.",
          "Improves legal defensibility of your brand.",
        ],
      },
      {
        title: "Why Choose LegalDhara for Trademark Search?",
        type: "list",
        list: [
          "Expert team of IP professionals conducting in-depth search and analysis.",
          "Comprehensive coverage across all Indian and international trademark databases.",
          "Detailed, easy-to-understand report with expert recommendations.",
          "Fast turnaround time and transparent process.",
          "Personalized consultation to evaluate your brand’s protectability.",
        ],
      },
    ],

    faqs: [
      {
        question: "Why is a trademark search important?",
        answer:
          "A trademark search helps ensure your proposed mark is unique and not similar to existing ones. This minimizes the risk of legal disputes and rejection during the registration process.",
      },
      {
        question: "How long does a trademark search take?",
        answer:
          "A complete trademark search report is usually delivered within 1–2 business days after receiving your brand details.",
      },
      {
        question: "Can I conduct a trademark search myself?",
        answer:
          "While you can use the official IP India website for a basic search, professional searches by experts are more reliable as they identify phonetic and visual similarities you may miss.",
      },
      {
        question: "Does a trademark search guarantee registration?",
        answer:
          "No, but it significantly increases your success chances by identifying potential objections before you file.",
      },
      {
        question: "Can LegalDhara help me file for registration after the search?",
        answer:
          "Yes, once your brand name is cleared, our team assists with end-to-end trademark filing and legal documentation.",
      },
    ],
  },
}

export default trademarkSearchService
