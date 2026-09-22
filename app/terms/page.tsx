"use client";

export default function TermsAndConditions() {
     const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long', // optional: "Tuesday"
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-deep-blue mb-8">
            Terms & Conditions
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Effective Date:</strong> {formattedDate}<br />
              <strong>Website:</strong>{" "}
              <a
                href="https://LegalDhara.in"
                className="text-brand-orange hover:underline"
              >
                https://LegalDhara.in
              </a>
              <br />
              <strong>Company:</strong> Vibrant Law Associates (23HWDPS204R1Z4)
            </p>

            {/* I. Welcome Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-blue mb-4">
                I. Welcome to LegalDhara.in
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to LegalDhara.in. Since we will not be meeting face-to-face, it is important
                to set out the terms of this agreement clearly in advance. If you have any queries
                about Legal Dhara, please do not hesitate to contact us.
              </p>
              <p className="text-gray-700 leading-relaxed">
                “Service” refers to the legal facilitation and support services offered through
                LegalDhara.in. “User” refers to any person accessing or using our website or
                services. “Agreement” refers to these Terms and Conditions. The term “Advisor”
                includes advocates, legal consultants, chartered accountants, company secretaries,
                and other professionals. By using our services, you confirm that you are more than
                18 years of age and fully competent to enter into legally binding agreements and
                abide by these Terms and Conditions.
              </p>
            </section>

            {/* II. Legal Dhara as Medium */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-blue mb-4">
                II. Legal Dhara Only Provides a Medium for Interaction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Legal Dhara is an online platform that facilitates communication between
                professionals (Advisors) and users seeking professional services. Our platform acts
                as a venue to exchange information with the goal of forming professional
                relationships. Legal Dhara does not guarantee the success of any Advisor–client
                relationship nor does it take a position on whether such a relationship has been
                formed.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>(a) No Advisor-Client Relationship:</strong> Communication through the
                  website does not create any advisor-client relationship between the User and
                  Legal Dhara.
                </li>
                <li>
                  <strong>(b) Legal Dhara Does Not Promote Any User:</strong> We aim to match users
                  with suitable advisors but do not endorse or advertise any specific professional.
                </li>
                <li>
                  <strong>(c) No Solicitation:</strong> Advisors cannot access a User’s personal
                  information until the User chooses to communicate with them directly.
                </li>
                <li>
                  <strong>(d) Legal Dhara Does Not Provide Professional Advice:</strong> Our content
                  and tools are for general information only.
                </li>
                <li>
                  <strong>(e) Resale of Templates Prohibited:</strong> Redistribution or resale is
                  strictly prohibited.
                </li>
                <li>
                  <strong>(f) Disclaimer of Representations:</strong> We do not guarantee the
                  competence or quality of any Advisor.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Note: Legal Dhara and Vibrant Law Associates are not a law firm or professional
                firm. We only facilitate access to licensed professionals. We are not responsible
                for the professional services provided by the Advisors.
              </p>
            </section>

            {/* III. User Guidelines */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-blue mb-4">
                III. User Guidelines
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Users are granted a non-exclusive, limited right to use Legal Dhara’s services in
                compliance with these terms. Any abuse of the platform will result in suspension or
                termination of access.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use of offensive, racist, or defamatory language.</li>
                <li>Posting or promoting illegal content or activities.</li>
                <li>Infringing intellectual property rights.</li>
                <li>Sending spam or unsolicited messages.</li>
                <li>Attempting to gain unauthorized access to systems.</li>
                <li>Violating privacy or security standards.</li>
              </ul>
            </section>

            {/* IV - XXVIII Sections */}
            {[
              ["IV. Disclaimer of Information", "Legal Dhara provides a platform for communication and is not responsible for the accuracy, completeness, or adequacy of information shared through the site."],
              ["V. Limitations on Use", "The contents of Legal Dhara are for personal use only. You may not copy, reproduce, reverse-engineer, or distribute content without written permission from Vibrant Law Associates."],
              ["VI. Confidentiality", "We make every reasonable effort to maintain confidentiality of user information, but complete confidentiality cannot be guaranteed."],
              ["VII. Indemnification", "Users agree to indemnify and hold Legal Dhara harmless from any claims, damages, or liabilities."],
              ["VIII. Data and Communications", "We are not responsible for data loss or interruption due to system failures or force majeure."],
              ["IX. License of Your Content to Legal Dhara", "By submitting content, you grant Legal Dhara a perpetual, royalty-free license to use, modify, and display it."],
              ["X. Proprietary Rights", "All content and design elements are the property of Vibrant Law Associates."],
              ["XI. Linking to LegalDhara.in", "You may link to our homepage provided the link is not misleading."],
              ["XII. Advertisers", "We are not responsible for third-party ads."],
              ["XIII. Registration", "Users must provide accurate registration information."],
              ["XIV. Errors and Corrections", "We do not guarantee an error-free experience."],
              ["XV. Third Party Content", "We are not responsible for third-party content or links."],
              ["XVI. Unlawful Activity", "We may report unlawful activity to authorities."],
              ["XVII. Remedies for Violations", "We may suspend or block users for violations."],
              ["XVIII. Conflicts Checks", "We do not perform conflict-of-interest checks."],
              ["XIX. Severability", "If any term is unenforceable, the rest remain in effect."],
              ["XX. Modifications to Terms", "We may update these Terms at any time."],
              ["XXI. Service Modifications", "We may modify or discontinue services without notice."],
              ["XXII. Disclaimer of Warranties and Limitation of Liability", "The platform is provided 'as is'. We disclaim all warranties and are not liable for damages."],
              ["XXIII. Arbitration", "Disputes shall be resolved through arbitration. Courts of New Delhi, India shall have jurisdiction."],
              ["XXIV. Ownership", "All intellectual property belongs to Vibrant Law Associates."],
              ["XXV. Entire Agreement", "This Agreement constitutes the entire understanding."],
              ["XXVI. Indemnification", "You agree to defend and hold Vibrant Law Associates harmless."],
              ["XXVII. Cancellation and Refund Policy", "Refunds are allowed before service initiation or due to delays caused by us. Government fees are non-refundable."],
              ["XXVIII. Grievance Officer", "Grievance Officer: Ayush shrivastav, Email: support@LegalDhara.in, Company: Vibrant Law Associates"],
            ].map(([title, text], index) => (
              <section key={index} className="mb-8">
                <h2 className="text-2xl font-semibold text-deep-blue mb-4">{title}</h2>
                <p className="text-gray-700 leading-relaxed">{text}</p>
              </section>
            ))}

            <div className="border-t pt-6 text-sm text-gray-500">
              <p>
                © {new Date().getFullYear()} Vibrant Law Associates. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
