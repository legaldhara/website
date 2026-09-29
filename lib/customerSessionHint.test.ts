import { beforeEach, describe, expect, it, vi } from "vitest";
import { hasCustomerSessionHint, setCustomerSessionHint } from "./customerSessionHint";

describe("customer session hint", () => {
  beforeEach(() => localStorage.clear());

  it("persists only a non-sensitive signed-in hint", () => {
    setCustomerSessionHint(true);
    expect(hasCustomerSessionHint()).toBe(true);
    expect(Object.values(localStorage)).not.toContain(expect.stringContaining("@"));
  });

  it("clears the hint and announces auth changes", () => {
    const listener = vi.fn();
    window.addEventListener("legaldhara-auth-changed", listener);
    setCustomerSessionHint(true);
    setCustomerSessionHint(false);
    expect(hasCustomerSessionHint()).toBe(false);
    expect(listener).toHaveBeenCalledTimes(2);
    window.removeEventListener("legaldhara-auth-changed", listener);
  });
});
