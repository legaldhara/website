// app/onboarding/page.tsx
import { Suspense } from "react";
import OnboardingClient from "@/components/OnboardingClient";

export default function OnboardingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OnboardingClient />
    </Suspense>
  );
}
