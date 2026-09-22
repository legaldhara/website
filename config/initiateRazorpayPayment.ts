'use client';
import { secureApi } from "./apiClient";
import toast from "react-hot-toast";

/**
 * Reusable Razorpay payment initiation helper.
 * 
 * @param ticketNo - Ticket number for the order
 * @param amount - Payment amount in INR (not in paise)
 * @param paymentType - Optional (e.g. 'INITIAL' | 'FINAL')
 */
export const initiateRazorpayPayment = async (
  ticketNo: string,
  amount: number,
  paymentType: string = "INITIAL"
) => {
  try {
    // ✅ Make sure window is available (client-side only)
    if (typeof window === "undefined") {
      console.warn("Razorpay can only be initiated on the client side");
      return;
    }

    // ✅ Ensure Razorpay script is loaded
    if (!(window as any).Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);

      await new Promise<void>((resolve) => {
        script.onload = () => resolve();
      });
    }

    // ✅ Step 1: Create order via backend
    const res = await secureApi.post("/api/v1/application/create-order", {
      ticketNo,
      paymentType,
      amount,
    });

    const data = res.data;
    console.log("🧾 Razorpay order created:", data);

    if (!data.success) {
      toast.error(data.message || "Failed to create order");
      return;
    }
  
    // ✅ Step 3: Setup Razorpay options
    const options = {
      key: data.keyId,
      amount: data.amount, // already in paise from backend
      currency: "INR",
      name: "LegalDhara",
      description: "Application Payment",
      order_id: data.order.id,
      callback_url:"https://legaldhara.com/api/v1/payment/razorpay/verify-response",
      prefill: {
        name: data?.user?.name || "User",
        email: data?.user?.email || "user@example.com",
        contact: data?.user?.phone || "9999999999",
      },
      notes: data.order.notes,
      theme: { color: "#0a2847" },
    };

    // ✅ Step 4: Open Razorpay checkout modal
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  } catch (error: any) {
    console.error("❌ Razorpay Payment Error:", error);
    toast.error(error.response?.data?.message || "Something went wrong");
  }
};
