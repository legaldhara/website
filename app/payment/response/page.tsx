"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { ChargeStatus, getChargeStatus } from "@/lib/payments";

export default function PaymentResponsePage() {
  return (
    <Suspense fallback={<PaymentCard title="Verifying payment" message="Loading the secure payment record…" />}>
      <PaymentResponseContent />
    </Suspense>
  );
}

function PaymentResponseContent() {
  const chargeId = useSearchParams().get("chargeId");
  const [charge, setCharge] = useState<ChargeStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!chargeId) return;
    let stopped = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const refresh = async () => {
      try {
        const nextCharge = await getChargeStatus(chargeId);
        if (stopped) return;
        setCharge(nextCharge);
        if (["OPEN", "PROCESSING"].includes(nextCharge.status)) timer = setTimeout(refresh, 2000);
      } catch {
        if (!stopped) setError("Unable to verify payment status. Please try again.");
      }
    };
    void refresh();
    return () => {
      stopped = true;
      if (timer) clearTimeout(timer);
    };
  }, [chargeId]);

  if (!chargeId) return <PaymentCard title="Invalid payment link" message="No charge was provided." />;
  if (error) return <PaymentCard title="Status unavailable" message={error} />;
  if (!charge) return <PaymentCard title="Verifying payment" message="Checking the secure payment record…" />;

  const content = {
    PAID: ["Payment confirmed", "Your payment was verified and recorded successfully."],
    REFUNDED: ["Payment refunded", "The full refund has been confirmed."],
    FAILED_RETRYABLE: ["Payment not completed", "You can safely retry this charge from your dashboard."],
    CANCELLED: ["Charge cancelled", "This charge is no longer payable."],
    OPEN: ["Awaiting payment", "The charge is still open."],
    PROCESSING: ["Payment processing", "Razorpay is still confirming this payment."],
  }[charge.status];

  return (
    <PaymentCard
      title={content[0]}
      message={content[1]}
      detail={`${charge.purpose} · ₹${(charge.amountMinor / 100).toFixed(2)}`}
    />
  );
}

function PaymentCard({ title, message, detail }: { title: string; message: string; detail?: string }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <section className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-lg">
        <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
        <p className="mt-3 text-slate-600">{message}</p>
        {detail ? <p className="mt-4 font-medium text-slate-800">{detail}</p> : null}
        <Link href="/dashboard" className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-3 text-white">
          Return to dashboard
        </Link>
      </section>
    </main>
  );
}
