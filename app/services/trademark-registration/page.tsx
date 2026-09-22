// app/onboarding/page.tsx
import { Suspense } from "react";
import TrademarkRegistrationPage from "@/components/TrademarkRegistration/TrademarkRegistration";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Trademark Registration in India | Legal Dhara - 0 Service Charge & Expert Legal Assistance",
  description:
    "Register your trademark online with Legal Dhara — India's most trusted LegalTech platform offering 0 service charge on trademark filing. Get expert help for trademark search, application, renewal, and objection reply to protect your brand identity. Fast, transparent, and affordable trademark registration for startups and businesses across India.",
  keywords:
    "trademark registration India, online trademark filing, 0 service charge trademark, free trademark registration India, brand name registration, trademark search, trademark renewal, trademark objection reply, Legal Dhara, intellectual property rights, IPR registration, logo registration, trademark consultant India, startup trademark, register brand name, trademark attorney services, legal tech platform, protect brand name, TM filing, online legal services, trademark office India, intellectual property protection",
};


export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TrademarkRegistrationPage />
    </Suspense>
  );
}
