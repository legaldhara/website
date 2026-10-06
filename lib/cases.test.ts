import { describe, expect, it, vi } from "vitest";

vi.mock("@/config/apiClient", () => ({
  secureApi: { get: vi.fn(), post: vi.fn() },
}));

import { createCaseCommand } from "./cases";

describe("case commands", () => {
  it("includes the current version and a fresh idempotency key", () => {
    const first = createCaseCommand(4);
    const second = createCaseCommand(4);

    expect(first).toEqual({ expectedVersion: 4, idempotencyKey: expect.any(String) });
    expect(first.idempotencyKey).not.toBe(second.idempotencyKey);
  });
});
