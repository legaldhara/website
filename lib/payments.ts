import { secureApi } from "@/config/apiClient";

export interface PaymentAttemptCheckout {
  attemptId: string;
  chargeId: string;
  gatewayOrderId: string;
  amountMinor: number;
  currency: string;
  keyId: string;
}

export interface RazorpayCheckoutProof {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export type ChargeDisplayStatus = "OPEN" | "PROCESSING" | "PAID" | "FAILED_RETRYABLE" | "REFUNDED" | "CANCELLED";

export interface ChargeStatus {
  chargeId: string;
  status: ChargeDisplayStatus;
  amountMinor: number;
  currency: string;
  purpose: string;
}

export const startPaymentAttempt = async (chargeId: string): Promise<PaymentAttemptCheckout> => {
  const response = await secureApi.post(`/api/v1/payments/charges/${chargeId}/attempts`);
  return response.data.data;
};

export const confirmCheckout = async (proof: RazorpayCheckoutProof): Promise<{ status: ChargeDisplayStatus; chargeId: string }> => {
  const response = await secureApi.post("/api/v1/payments/attempts/confirm", proof);
  return response.data.data;
};

export const getChargeStatus = async (chargeId: string): Promise<ChargeStatus> => {
  const response = await secureApi.get(`/api/v1/payments/charges/${chargeId}/status`);
  return response.data.data;
};
