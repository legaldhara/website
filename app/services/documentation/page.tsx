// app/onboarding/page.tsx
import { Suspense } from "react";
import DocumentationPage from "@/components/DocumentationPage/DocumentationPage";
import { Metadata } from "next";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "Online Legal Documentation Services in India | Legal Dhara -  Expert Drafting",
  description:
    "Create and register your legal documents online with Legal Dhara — India’s most trusted LegalTech platform offering lowest service charge on legal documentation. Get professionally drafted legal notices, rent agreements, affidavits, notary documents, business contracts, and all types of certifications. Fast, reliable, and affordable documentation services for individuals, startups, and businesses across India.",
  keywords:
    "legal documentation India, online legal documents, lowest service charge legal documents, free legal documentation, Legal Dhara, legal notice drafting, rent agreement online, affidavit format, notary service, online agreement, business contracts, partnership deed, MOA AOA drafting, power of attorney, NOC certificate, indemnity bond, legal drafting service, certification documents, property agreement, online notary, legal tech platform India, document registration service",
};

export default function Page() {
  return (
    <Suspense fallback={<>
      <Loader />
    </>}>
      <DocumentationPage />
    </Suspense>
  );
}
