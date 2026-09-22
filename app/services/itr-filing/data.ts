import type { Service } from "@/lib/types"

const incomeTaxFilingService: Service = {
  name: "Income Tax Filing",  
  title: "Income Tax Filing",
  description:
    "Professional income tax return filing services for individuals and businesses. Maximize your refunds and ensure compliance with tax laws.",
  href: "/services/income-tax-filing",
  icon: "Calculator",
  details: {
    overview1: {
      introduction: [
        "Income Tax Return (ITR) filing is a legal obligation for individuals and businesses whose income exceeds the basic exemption limit, or who meet specific conditions under the Income Tax Act, 1961. The Income Tax Department, under the Ministry of Finance, Government of India, oversees the return filing process each financial year.",
        "Whether you’re a salaried employee, earn interest income, have income from house property, or receive a family pension, LegalDhara helps you file your returns accurately. Our team of experienced Chartered Accountants ensures timely filing and helps you avoid penalties."
      ],
      whatIs: [
        "ITR filing is the process of reporting your total income, deductions, and taxes paid to the Income Tax Department for a specific financial year. It is mandatory for individuals and businesses whose income exceeds the basic exemption limit.",
        "Why it matters:",
        "• Declares your total income and tax paid",
        "• Helps you claim deductions and refunds",
        "• Legally required if income exceeds exemption threshold"
      ]
    },
    sections: [
      {
        title: "Sources of Income for ITR",
        type: "list",
        list: [
          "Salary Income",
          "Business or Professional Income",
          "Capital Gains (from shares, mutual funds, or property)",
          "Income from House Property",
          "Other Income (like interest from savings, lottery winnings, etc.)"
        ]
      },
      {
        title: "Benefits of Income Tax Return Filing",
        type: "list",
        list: [
          "Tax Refund Claims – Claim excess tax paid directly to your account.",
          "Legal Compliance – Avoid notices and penalties by staying fully compliant.",
          "Easy Loan Approval – Banks prefer ITR as reliable proof of income.",
          "Visa Processing – Many embassies ask for ITR during visa applications.",
          "Income Verification – Serves as an official, government-recognised income statement.",
          "Carry Forward Losses – Helps reduce future tax by carrying losses forward.",
          "Government Tenders – ITR is often required in government contract bids.",
          "Quick Document Access – Easy reference for financial planning or official needs."
        ]
      },
      {
        title: "Who Should File ITR?",
        type: "list",
        list: [
          "Anyone earning above the basic exemption limit or meeting specific financial criteria must file an Income Tax Return (ITR) in India.",
          "Under the Union Budget 2025, the basic exemption limit under the new tax regime has been revised from ₹3 lakhs to ₹4 lakhs. Additionally, the tax rebate under Section 87A has been increased, offering more relief for taxpayers in the lower-income brackets.",
          "ITR filing applies to a wide range of taxpayers, including:",
          "• Salaried Individuals – With annual income exceeding the basic exemption limit.",
          "• Self-Employed Professionals – Freelancers, consultants, and business owners with taxable income.",
          "• NRIs – With income earned or received in India.",
          "• HUFs (Hindu Undivided Families) – Earning income from ancestral property or investments.",
          "• Companies and Firms – Required to file ITRs regardless of profit or loss."
        ]
      },
      {
        title: "Documents Required for ITR Filing",
        type: "list",
        list: [
          "Salary Related Documents:",
          "• Form 16",
          "• Salary Slips",
          "• PAN and Aadhaar Card",
          "• Form 26AS",
          "• Bank Statements",
          "Business / Capital Gains Related Documents:",
          "• Profit and Loss Statement",
          "• Balance Sheet",
          "• Capital Gains Statement (shares, property)",
          "• GST Returns",
          "• Form 26AS",
          "Other Income Related Documents:",
          "• Investment Proofs (LIC, ELSS, PPF)",
          "• Rent Receipts",
          "• Loan Interest Certificates",
          "• Donation Receipts",
          "• Annual Information Statement (AIS)"
        ]
      },
      {
        title: "Eligibility Criteria for ITR Filing",
        type: "list",
        list: [
          "Income Threshold – Individuals must file ITR if their total annual income exceeds the basic exemption limit (₹2.5 lakh for individuals below 60 years, ₹3 lakh for those aged 60–80, and ₹5 lakh for those above 80).",
          "Residential Status – Your tax liability depends on how many days you've stayed in India during a financial year. Residents are taxed on global income, while Non-Residents are taxed only on Indian income.",
          "NRI Criteria – NRIs must file ITR if they earn income from sources in India, such as rent, salary, capital gains, or interest on savings and fixed deposits.",
          "Business/Profession – Individuals running a business or profession (including freelancers, consultants, and gig workers) must file ITR if their gross receipts exceed the prescribed limits under tax laws.",
          "Foreign Assets – Residents with foreign bank accounts, financial interests, or assets outside India must file ITR, even if their income is below the exemption limit."
        ]
      },
      {
        title: "Steps: Income Tax Return e-Filing Procedure",
        type: "list",
        list: [
          "E-filing of Income Tax Returns (ITR) is mandatory for most taxpayers in India. You can file returns through the official Income Tax Department portal or by using third-party software providers approved by the Ministry of Finance.",
          "For the best experience, use the latest version of Chrome or Firefox, and ensure your system settings are compatible with the portal. The platform also supports major browsers like Safari.",
          "Filing your ITR online is quick, secure, and hassle-free with LegalDhara — our experts ensure accuracy and timely submission, saving you time and avoiding penalties.",
          "Step 1: Document Collection – Gather income, deduction, and investment documents like Form 16 and bank statements.",
          "Step 2: Secure Upload – Upload your documents safely to the e-filing portal or via a trusted service.",
          "Step 3: Expert Review – Get your return prepared and reviewed by a CA or tax expert, if needed.",
          "Step 4: File ITR Online – Submit the return on the Income Tax portal and e-verify to complete the process."
        ]
      },
      {
        title: "Types of ITR Forms & Their Applicability",
        type: "list",
        list: [
          "The Income Tax Department has introduced seven ITR forms for FY 2024-25 for different categories of taxpayers. The different ITR forms apply based on income source and taxpayer type.",
          "• ITR-1 – For salaried individuals with income up to ₹50 lakh.",
          "• ITR-2 – For individuals with capital gains or multiple properties.",
          "• ITR-3 – For professionals or business owners with income from business.",
          "• ITR-4 – For presumptive income for small businesses and freelancers.",
          "• ITR-5 – For partnership firms, LLPs, and certain associations.",
          "• ITR-6 – For companies other than those claiming exemption under Section 11.",
          "• ITR-7 – For trusts, political parties, and charitable institutions."
        ]
      },
      {
        title: "Income Tax Return Filing Deadlines & Penalties",
        type: "list",
        list: [
          "Missing ITR deadlines can lead to penalties and interest, so it's crucial to file on time to stay compliant.",
          "Regular Return Deadline – The regular deadline for filing your ITR is July 31 of the assessment year (the year following the financial year). Filing by this date helps you avoid penalties and ensures timely processing of refunds.",
          "Belated Return (ITR-U) Deadline – If you miss the regular deadline, you can still file a belated return by December 31 of the assessment year. However, filing late may restrict certain benefits, such as carrying forward losses.",
          "Late-Filing Fees & Interest – Late filing attracts a penalty fee up to ₹10,000 under Section 234F, depending on the delay. Additionally, interest at 1% per month is charged on any outstanding tax from the original due date until payment."
        ]
      },
      {
        title: "Why Choose LegalDhara for ITR Filing?",
        type: "list",
        list: [
          "Filing your Income Tax Return (ITR) can be stressful, but with LegalDhara, you’re in safe hands. We combine expert guidance, cutting-edge security, and a client-first approach to make your tax filing seamless and error-free.",
          "Whether you're a salaried professional or a business owner, our platform ensures accuracy, transparency, and complete data protection.",
          "10+ years of experience as a trusted ITR partner.",
          "Verified by thousands of 5-star client reviews.",
          "CA-backed accuracy ensures zero filing errors.",
          "Fully encrypted and secure portal for maximum protection.",
          "Your data is safe with us."
        ]
      }
    ]
  ,
    faqs1: [
      {
        question: "What is the deadline for income tax filing?",
        answer:
          "The deadline for individual taxpayers is July 31st of the assessment year. For businesses, it's September 30th or October 31st depending on the type.",
      },
      {
        question: "What documents do I need for tax filing?",
        answer:
          "You need Form 16, salary slips, bank statements, investment proofs, property documents, and other income-related documents.",
      },
      {
        question: "Can I file returns for previous years?",
        answer:
          "Yes, you can file belated returns within 2 years from the end of the relevant assessment year, subject to penalty.",
      },
    ],
  
  },
}

export default incomeTaxFilingService
