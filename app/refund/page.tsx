"use client";

export default function RefundPolicy() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-deep-blue mb-8">
            Refund Policy
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-gray-600 mb-8">Last Updated: {formattedDate}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-blue mb-4">
                1. No Refund Policy
              </h2>
              <p>
                Thank you for choosing Legal Dhara and purchasing our services
                through <strong>https://LegalDhara.in</strong>. Please read this
                Policy carefully as it explains our position regarding refunds.
              </p>

              <p className="mt-4">
                All payments made toward any of our services, products, or
                consultation fees are <strong>final and non-refundable</strong>.
                Legal Dhara operates on a no-refund policy under all
                circumstances, including but not limited to:
              </p>

              <ul className="list-disc ml-6 mt-2">
                <li>
                  Change of mind, incorrect selection of service, or withdrawal
                  of application after initiation.
                </li>
                <li>
                  Delay caused by government departments, external agencies, or
                  third parties beyond our control.
                </li>
                <li>
                  Partial or full completion of work, regardless of outcome or
                  approval from authorities.
                </li>
              </ul>

              <p className="mt-4">
                Once payment is received, our team immediately begins processing
                and allocating resources toward your order. Therefore, refunds,
                cancellations, or chargebacks will <strong>not be accepted</strong>.
              </p>

              <p className="mt-4">
                We strongly advise all customers to review service details,
                eligibility, and timelines before making any payment.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-blue mb-4">
                2. Grievance Officer
              </h2>
              <p>
                In accordance with Consumer Protection Rules, 2020 and
                applicable laws, the Grievance Officer for Legal Dhara is:
              </p>
              <ul className="list-none mt-4">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:support@LegalDhara.in"
                    className="text-brand-blue underline"
                  >
                    support@LegalDhara.in
                  </a>
                </li>
                <li>
                  <strong>Company:</strong> Vibrant Law Associates
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
