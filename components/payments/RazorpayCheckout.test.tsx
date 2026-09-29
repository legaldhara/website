import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

const { startPaymentAttempt, confirmCheckout } = vi.hoisted(() => ({
  startPaymentAttempt: vi.fn(),
  confirmCheckout: vi.fn(),
}));
vi.mock("@/lib/payments", () => ({ startPaymentAttempt, confirmCheckout }));

import { RazorpayCheckout } from "./RazorpayCheckout";

describe("RazorpayCheckout", () => {
  afterEach(cleanup);

  it("opens checkout from server-owned attempt data", async () => {
    startPaymentAttempt.mockResolvedValue({
      chargeId: "charge-1",
      gatewayOrderId: "order-1",
      amountMinor: 50_000,
      currency: "INR",
      keyId: "rzp_test_public",
    });
    const open = vi.fn();
    window.Razorpay = class RazorpayMock {
      open = open;
    };

    render(<RazorpayCheckout chargeId="charge-1" onComplete={vi.fn()} />);
    fireEvent.click(screen.getByRole("button", { name: "Pay securely" }));

    await waitFor(() => expect(open).toHaveBeenCalled());
    expect(startPaymentAttempt).toHaveBeenCalledWith("charge-1");
  });
});
