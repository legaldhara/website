import { beforeEach, describe, expect, it, vi } from "vitest";

const { post, get } = vi.hoisted(() => ({ post: vi.fn(), get: vi.fn() }));
vi.mock("@/config/apiClient", () => ({ secureApi: { post, get } }));

import { confirmCheckout, getChargeStatus, startPaymentAttempt } from "./payments";

describe("payment API client", () => {
  beforeEach(() => vi.clearAllMocks());

  it("starts checkout with only a charge ID", async () => {
    post.mockResolvedValue({ data: { data: { gatewayOrderId: "order-1" } } });

    await startPaymentAttempt("charge-1");

    expect(post).toHaveBeenCalledWith("/api/v1/payments/charges/charge-1/attempts");
    expect(JSON.stringify(post.mock.calls)).not.toMatch(/amount|paymentType/);
  });

  it("confirms only Razorpay checkout proof", async () => {
    post.mockResolvedValue({ data: { data: { status: "PAID" } } });
    const proof = { razorpay_order_id: "order-1", razorpay_payment_id: "pay-1", razorpay_signature: "signature" };

    await confirmCheckout(proof);

    expect(post).toHaveBeenCalledWith("/api/v1/payments/attempts/confirm", proof);
  });

  it("reads an authenticated charge status", async () => {
    get.mockResolvedValue({ data: { data: { status: "PROCESSING" } } });
    await getChargeStatus("charge-1");
    expect(get).toHaveBeenCalledWith("/api/v1/payments/charges/charge-1/status");
  });
});
