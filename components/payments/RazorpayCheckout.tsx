"use client";

import { useState } from "react";
import { confirmCheckout, RazorpayCheckoutProof, startPaymentAttempt } from "@/lib/payments";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open(): void };
  }
}

let checkoutScript: Promise<void> | undefined;

const loadCheckout = (): Promise<void> => {
  if (window.Razorpay) return Promise.resolve();
  if (checkoutScript) return checkoutScript;
  checkoutScript = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Unable to load Razorpay checkout"));
    document.body.appendChild(script);
  });
  return checkoutScript;
};

export function RazorpayCheckout({
  chargeId,
  onComplete,
  disabled = false,
}: {
  chargeId: string;
  onComplete: (chargeId: string) => void;
  disabled?: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const openCheckout = async () => {
    setLoading(true);
    setError(null);
    try {
      await loadCheckout();
      const attempt = await startPaymentAttempt(chargeId);
      if (!window.Razorpay) throw new Error("Razorpay checkout is unavailable");
      const checkout = new window.Razorpay({
        key: attempt.keyId,
        amount: attempt.amountMinor,
        currency: attempt.currency,
        name: "LegalDhara",
        description: "Secure payment",
        order_id: attempt.gatewayOrderId,
        handler: async (proof: RazorpayCheckoutProof) => {
          await confirmCheckout(proof);
          onComplete(attempt.chargeId);
        },
        theme: { color: "#252525" },
      });
      checkout.open();
    } catch (checkoutError) {
      setError(checkoutError instanceof Error ? checkoutError.message : "Unable to start payment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button type="button" disabled={disabled || loading} onClick={openCheckout}>
        {loading ? "Starting secure payment…" : "Pay securely"}
      </button>
      {error ? <p role="alert">{error}</p> : null}
    </div>
  );
}
