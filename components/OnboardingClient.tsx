'use client';

import { useSearchParams } from 'next/navigation';
import PaymentSelectionSimple from '@/app/onboarding/PaymentSelectionSimple';

import toast from "react-hot-toast";
import { secureApi } from '@/config/apiClient';
import { initiateRazorpayPayment } from '@/config/initiateRazorpayPayment';

export default function OnboardingClient() {
  const searchParams = useSearchParams();

  // ✅ Extract values from URL
  const serviceName = (searchParams.get('serviceName') || 'trademark').toLowerCase();
  const serviceId = (searchParams.get('serviceId') || "id").toLowerCase();
  const fullName = searchParams.get('fullName') || "";
  const email = searchParams.get('email') || "";
  const phone = searchParams.get('phone') || "";
  const businessname = searchParams.get('BusinessName') || "";
  const servicePrice = parseFloat(searchParams.get('servicePrice') || "0");
  const governmentCharges = parseFloat(searchParams.get('governmentCharges') || "0");
  const applicationId = searchParams.get('applicationId');
  const ticketNo = searchParams.get('ticketNo');

  // ✅ Calculate total price for payment
  const totalPrice = servicePrice + governmentCharges;
  const currentDomain = typeof window !== "undefined" ? window.location.hostname : "";

  console.log("🟢 Onboarding params:", {
    serviceName,
    serviceId,
    servicePrice,
    governmentCharges,
    totalPrice,
    ticketNo,
    applicationId,
  });


  const handleProceedToPay = async (plan: any) => {

    try {
      let response;

      if (ticketNo) {
        // ✅ Case 1: Update existing payment
        const payload = {
          ticketNo,
          amount: totalPrice, // 👈 use combined total
          paymentType: "INITIAL",
        };

        console.log("💳 Sending WITH ticketNo:", payload);

        response = await secureApi.post(`/api/v1/application/pay`, payload );
      } else {
        // ✅ Case 2: Create new application and start payment
        const payload = {
          fullName,
          email,
          phone,
          gender: "",
          city: "",
          dob: "",
          termsAccepted: true,
          serviceId,
          serviceFor: "",
          serviceName,
          businessName: businessname,
          amount: totalPrice, // 👈 total price (base + govt)
        };

        console.log("💳 Sending WITHOUT ticketNo:", payload);

        response = await secureApi.post(`/api/v1/application/direct/apply`, payload);
      }

      // ✅ Handle success
      if (response.status === 200 && response.data?.success) {
        toast.success("Redirecting to secure payment gateway...");
        const redirectUrl = response.data.redirectUrl;
        if (redirectUrl) {
          window.location.href = redirectUrl;
        } else {
          toast.error("Payment link missing. Please try again.");
        }
      } else {
        toast.error(response.data?.message || "Something went wrong. Try again.");
      }
    } catch (error: any) {
      console.error("❌ Payment Error:", error);

      if (error.response) {
        toast.error(error.response.data?.message || "Payment failed.");
      } else if (error.request) {
        toast.error("No response from server. Check your connection.");
      } else {
        toast.error("Unexpected error occurred. Please try again.");
      }
    } finally {
      console.log("🔵 Payment request completed.");
    }


    if (currentDomain.includes("legaldhara.in")){

    }
    else{                            
      if (ticketNo) {
        initiateRazorpayPayment(ticketNo, totalPrice)
      }
    }
  };

  return (
    <PaymentSelectionSimple
      serviceName={serviceName}
      servicePrice={servicePrice} // 👈 send base price
      governmentCharges={governmentCharges} // 👈 send govt fee separately
      onProceedToPay={handleProceedToPay}
    />
  );
}
