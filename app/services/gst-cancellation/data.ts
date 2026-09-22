import type { Service } from "@/lib/types"

const gstCancellationService: Service = {
  name: "GST Cancellation and Revocation",
  title: "GST Cancellation and Revocation",
  description: "Professional assistance for GST registration cancellation or revocation of cancelled registration.",
  href: "/services/gst-cancellation-revocation",
  icon: "XCircle",
 details: {
    overview1: {
      introduction: [
        "If your GST registration was cancelled due to missed filings or non-compliance, you may be eligible to apply for revocation and restore your registration. The process involves strict timelines, documentation, and responding to notices—which can be overwhelming. LegalDhara simplifies it for you by managing the entire procedure on your behalf.",
        "Our experts file the revocation application (Form GST REG-21), handle notices, and track progress—ensuring full compliance and minimal business disruption.",
      ],
      whatIs: [
        "GST revocation is the process of restoring a cancelled GST registration. When your registration is cancelled—due to non-compliance, missed returns, or procedural errors—you can apply for revocation to reactivate it.",
        "Reinstating your GST registration helps you avoid penalties, resume filing returns, retain your legal tax identity, claim input tax credit, and continue issuing valid tax invoices. Without revocation, your business cannot legally operate under GST."
      ],
    },
    sections: [
      {
        title: "Why is GST Registration Revoked?",
        type: "list",
        list: [
          "Non-filing of GST Returns: Failure to file returns for consecutive periods can lead to automatic cancellation.",
          "Business Closure: Permanent business shutdown may result in GST registration cancellation.",
          "Change in Business Structure: Mergers, demergers, or transfers can cause revocation of existing registration.",
          "Non-compliance with GST Laws: Tax evasion, fraudulent activities, or providing false information may lead to cancellation.",
          "Voluntary Cancellation: Businesses below threshold limits can voluntarily cancel registration.",
          "Inactivity of Business: Prolonged inactivity without taxable supplies may cause cancellation."
        ]
      },
      {
        title: "GST Revocation Process: Step-by-Step Guide",
        type: "list",
        list: [
          "Step 1: Application for Revocation – Submit Form GST REG-21 with all required documents via the GST portal or physically at the jurisdictional GST office.",
          "Step 2: Scrutiny by GST Officer – The officer reviews your application, verifies documents, and may request clarifications to ensure compliance.",
          "Step 3: Revocation Confirmation or Rejection – If accepted, your GST registration is reactivated and an order is issued. If rejected, reasons are communicated for reapplication."
        ]
      },
      {
        title: "Documents Required for GST Revocation",
        type: "list",
        list: [
          "Form GST REG-21 – Official application form for revocation.",
          "Copy of GST Cancellation Order – Notice issued by GST authorities.",
          "Proof of Compliance – Evidence that all pending returns have been filed.",
          "Written Explanation – Detailed letter stating reasons for revocation.",
          "Supporting Documents – Financial statements or tax correspondence, if applicable.",
          "Authorization Letter – Required if filed by a consultant or representative."
        ]
      },
      {
        title: "Fees Associated with GST Revocation",
        type: "list",
        list: [
          "There is no government fee for submitting Form GST REG-21 for revocation.",
          "LegalDhara charges a professional fee depending on the level of support required, such as documentation and officer coordination.",
          "Any pending penalties or late fees due to prior non-compliance must be cleared separately within 30 days before approval."
        ]
      },
      {
        title: "Timeframe for GST Revocation",
        type: "list",
        list: [
          "Application Submission: Immediate to 2 days – Form GST REG-21 is acknowledged instantly on submission.",
          "Scrutiny by GST Officer: 5–10 working days – Officer verifies documents and compliance.",
          "Final Decision: 1–3 working days – Official order issued upon acceptance or rejection.",
          "Total Timeframe: Approximately 7–14 working days for the complete process."
        ]
      },
      {
        title: "Consequences of GST Registration Revocation",
        type: "list",
        list: [
          "Reversal of Input Tax Credit (ITC): You may need to repay previously claimed ITC upon cancellation.",
          "Business Continuity: You cannot legally collect GST or issue invoices until revocation approval.",
          "Compliance Obligations: Resume timely GST return filing after reinstatement.",
          "Legal Accountability: Continued non-compliance may result in penalties or prosecution."
        ]
      },
      {
        title: "How LegalDhara Can Assist with GST Revocation",
        type: "list",
        list: [
          "Hassle-Free Online Filing: We handle the complete revocation process on the GST portal.",
          "Expert Consultation: Our GST professionals provide case-based advice and address officer queries.",
          "Timely Follow-Ups: Continuous tracking of your application to ensure faster approval.",
          "Compliance Support: Guidance on post-revocation filings and future GST maintenance."
        ]
      }
    ]
  }
}

export default gstCancellationService
