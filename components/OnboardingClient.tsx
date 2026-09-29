"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { RazorpayCheckout } from "@/components/payments/RazorpayCheckout";

export default function OnboardingClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const chargeId = searchParams.get("chargeId");
  const serviceName = searchParams.get("serviceName") || "Legal service";

  if (!chargeId) {
    return (
      <section className="mx-auto max-w-xl p-8 text-center">
        <h1 className="text-2xl font-semibold">Payment is not ready</h1>
        <p className="mt-2 text-slate-600">Return to your dashboard and open the payment request again.</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-xl p-8 text-center">
      <h1 className="text-2xl font-semibold">Complete your {serviceName} payment</h1>
      <p className="my-4 text-slate-600">The amount is calculated securely from your application.</p>
      <RazorpayCheckout
        chargeId={chargeId}
        onComplete={(completedChargeId) => router.push(`/payment/response?chargeId=${completedChargeId}`)}
      />
    </section>
  );
}
