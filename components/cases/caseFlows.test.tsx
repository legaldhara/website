import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { CaseReplyForm } from "./CaseReplyForm";
import { CaseRequirements } from "./CaseRequirements";
import type { LifecycleResponse } from "@/lib/cases";

vi.mock("@/components/payments/RazorpayCheckout", () => ({
  RazorpayCheckout: () => <button type="button">Pay now</button>,
}));
vi.mock("@/config/apiClient", () => ({ secureApi: { get: vi.fn(), post: vi.fn() } }));
afterEach(cleanup);

const lifecycle = (overrides: Partial<LifecycleResponse> = {}): LifecycleResponse => ({
  case: {
    id: "11111111-1111-4111-8111-111111111111",
    type: "APPLICATION",
    status: "ACTION_REQUIRED",
    version: 2,
    submittedAt: "2026-10-06T00:00:00.000Z",
    approvedAt: null,
    rejectedAt: null,
    completedAt: null,
    closedAt: null,
  },
  timeline: [],
  requirements: [],
  deliverables: [],
  availableActions: ["POST_MESSAGE"],
  ...overrides,
});

describe("customer case flows", () => {
  it("shows document and payment requirements at the same time", () => {
    render(<CaseRequirements lifecycle={lifecycle({ requirements: [
      {
        id: "documents-1", type: "DOCUMENTS", status: "OPEN", title: "Identity documents",
        instructions: "Upload proof", documentLabels: ["PAN card"], dueAt: null, payment: null, assets: [],
      },
      {
        id: "payment-1", type: "PAYMENT", status: "OPEN", title: "Additional payment",
        instructions: null, documentLabels: [], dueAt: null,
        payment: { id: "charge-1", amountMinor: 250000, currency: "INR", purpose: "Government fee", status: "OPEN" }, assets: [],
      },
    ] })} onRefresh={vi.fn()} />);

    expect(screen.getByText("Identity documents")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /pay now/i })).toBeInTheDocument();
  });

  it("keeps text replies available during ACTION_REQUIRED", () => {
    render(<CaseReplyForm lifecycle={lifecycle()} onRefresh={vi.fn()} />);
    expect(screen.getByRole("textbox", { name: /message/i })).toBeEnabled();
  });

  it("hides every mutation control for a closed case", () => {
    render(<CaseRequirements lifecycle={lifecycle({ case: { ...lifecycle().case, status: "CLOSED" }, availableActions: [] })} onRefresh={vi.fn()} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
