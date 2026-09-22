// frontend/pages/pay.tsx or any component
"use client"

import { useEffect } from "react";
import { secureApi } from "@/config/apiClient";
import toast from "react-hot-toast";


export default function PayPage() {


const handlePayment = async () => {
  try {
    // Step 1: Create order from backend using secureApi
    const res = await secureApi.post("/api/v1/application/create-order", {
      ticketNo: "TKT-20251109-8IOH",
      paymentType: "INITIAL",
      amount: 1,
    });

    const data = res.data;
    console.log("Order response:", data);

    if (!data.success) {
      toast.error(data.message || "Failed to create order");
      return;
    }

    // Step 2: Configure Razorpay options
    const options = {
      key: data.keyId,
      amount: data.amount,
      currency: 'INR',
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
    //   handler: async (response: any) => {
    //     // Step 3: Verify payment with backend
    //     try {
    //       const verifyRes = await secureApi.post("/api/v1/application/verify-payment", {
    //         razorpay_order_id: response.razorpay_order_id,
    //         razorpay_payment_id: response.razorpay_payment_id,
    //         razorpay_signature: response.razorpay_signature,
    //       });

    //       const verifyData = verifyRes.data;
    //       if (verifyData.success) {
    //         toast.success("Payment verified successfully!");
    //       } else {
    //         toast.error("Payment verification failed!");
    //       }
    //     } catch (error: any) {
    //       console.error("Verification error:", error);
    //       toast.error("Error verifying payment.");
    //     }
    //   },
    };

    // Step 4: Open Razorpay modal
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  } catch (error: any) {
    console.error("Payment Error:", error);
    toast.error(error.response?.data?.message || "Something went wrong");
  }
};


  useEffect(() => {
    // Load Razorpay script dynamically
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handlePayment}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Pay ₹500
      </button>
    </div>
  );
}