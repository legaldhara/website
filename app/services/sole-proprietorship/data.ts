import type { Service } from "@/lib/types"

const soleProprietorshipService: Service = {
  name: "Sole Proprietorship",
  title: "Sole Proprietorship",
  description: "Register your sole proprietorship business with proper documentation and compliance setup.",
  href: "/services/sole-proprietorship",
  icon: "UserCheck",
  details: {
    overview1: {
      introduction: [
        "A sole proprietorship firm is a simple and popular business structure in India, ideal for individual entrepreneurs and small businesses looking for a low-cost setup. In this model, there is no legal distinction between the owner and the business, meaning all profits, losses, and liabilities directly affect the proprietor. The sole proprietor has full control over operations, decision-making, and can hire employees if needed. However, the owner also bears unlimited liability—putting personal assets at risk in case of business debts—making this structure more suitable for low-risk ventures.",
        "To legally establish a sole proprietorship in India, key tax registrations like GST (Goods and Services Tax) are often required, especially if annual turnover exceeds the prescribed threshold. Depending on the business location and type, licenses such as the Shop and Establishment Act license may also be necessary. LegalDhara offers end-to-end assistance in registering sole proprietorships, ensuring a smooth, compliant, and hassle-free setup tailored to your business needs."
      ],
      whatIs: [
        "Sole Proprietorship Registration is the process of legally establishing a business owned and operated by a single individual. It is the simplest form of business structure in India, ideal for small businesses, freelancers, or local traders.",
        "The owner and the business are considered the same legal entity, which means all profits, losses, and liabilities belong solely to the proprietor. While it doesn't require a formal registration under the Companies Act, businesses may need licenses like GST registration or a shop act license depending on their nature."
      ]
    },
    sections: [
      {
        title: "Advantages of Sole Proprietorship Registration",
        type: "list",
        list: [
          "Easy to Start and Low Compliance Requirements: A sole proprietorship is generally inexpensive to start compared to other business structures like corporations or LLPs.",
          "Complete Control and Quick Decision-Making: The sole proprietor has full ownership and control over business operations. This allows for faster decision-making without the need for approvals from partners or a board. It's ideal for small business owners, local traders, and service providers who value autonomy.",
          "Tax Benefits and Savings: Sole proprietorships are taxed as individual income, which can result in lower tax liability. In some cases, proprietors may also be eligible for deductions up to 20%, helping reduce their overall tax burden.",
          "Direct Customer Relationships: A sole proprietorship enables close interaction with customers. The proprietor can address feedback directly, build trust, and develop strong, personalized client relationships—especially important for service businesses and local shops.",
          "Flexibility in Hiring Employees: Sole proprietors can hire employees or work with independent consultants. These consultants provide input as recommendations, allowing the owner to retain control while still gaining expert support when needed."
        ]
      },
      {
        title: "Considerations and Limitations",
        type: "list",
        list: [
          "Limited Access to Funding: Sole proprietorships may struggle to raise capital due to lack of formal structure and investor confidence.",
          "No Continuity: The business does not have a separate legal existence. It may cease to exist upon the death or incapacity of the owner.",
          "Limited Credibility: Without formal registration, it can be harder to build trust or enter into large-scale contracts."
        ]
      },
      {
        title: "Eligibility Criteria for Sole Proprietorship Registration",
        type: "list",
        list: [
          "The applicant should be above 18 years.",
          "The applicant should be an Indian Citizen.",
          "They should have the legal capacity to enter into a contract.",
          "The proprietor should not have any legal disabilities.",
          "Applicant should not be declared bankrupt or convicted for a felony previously.",
          "The purpose of the business should be clearly outlined while starting a sole proprietorship.",
          "The business should be a lawful activity and should prevent selling illegal goods and services.",
          "The business should have a unique name that was not registered previously."
        ]
      },
      {
        title: "Documents Required for Sole Proprietorship Registration",
        type: "list",
        list: [
          "Personal Identification Documents: Aadhaar Card and PAN Card or any other valid government-issued identity proof of the proprietor.",
          "Business Bank Details: Bank account details in the name of the proprietorship.",
          "Business Address Proof: Address proof of the business location, rental agreement (if operating from a rented property), No Objection Certificate (NOC) from the landlord (if applicable), utility bill or sale deed (if the property is self-owned).",
          "Note: Document requirements might differ depending on the state. PAN and Aadhaar card of the business owner are required for online registration. Shop and Establishment Act registration is often required. GST registration is mandatory if the annual turnover exceeds ₹20 lakh (₹10 lakh for certain northeastern and special category states)."
        ]
      },
      {
        title: "Sole Proprietorship Registration Fees",
        type: "table",
        table: [
          { component: "GST Registration", fees: "Free (Government portal)", remarks: "Mandatory if turnover exceeds ₹40 lakhs" },
          { component: "MSME (Udyam) Registration", fees: "Free", remarks: "Optional but beneficial for small businesses" },
          { component: "Shop & Establishment License", fees: "₹1,000 – ₹5,000", remarks: "Varies by state and business size" },
          { component: "CA or Consultant Charges (if any)", fees: "₹1,000 – ₹3,000", remarks: "For handling paperwork and legal formalities" },
          { component: "PAN Application (if not available)", fees: "₹110", remarks: "One-time fee for applying through NSDL or UTIITSL" },
          { component: "Current Account Opening", fees: "Varies by Bank", remarks: "Usually requires minimal balance maintenance" }
        ]
      },
      {
        title: "Steps to Register a Sole Proprietorship in India",
        type: "list",
        list: [
          "Register your Business Name: Consult our legal experts and choose a proper name for your sole proprietorship. Our team will assist you in registering your business name.",
          "Get your PAN, GST, and MSME Registration Done: Our team will help you get your Udyam registration certificate and GST registration done in one go.",
          "Obtain Shop and Establishment Act License: Submit all the required documentation, and we will file the registration form for your sole proprietorship.",
          "Open a Current Account: After business registration, we will assist you in opening an instant zero-balance current account. Our team also provides GST, ITR annual filing, and trademark registration support."
        ]
      }
    ]
  },
}

export default soleProprietorshipService
