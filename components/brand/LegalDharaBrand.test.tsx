import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { LegalDharaBrand } from "./LegalDharaBrand";

afterEach(cleanup);

describe("LegalDharaBrand", () => {
  it("renders the approved wordmark and optimized logo", () => {
    render(<LegalDharaBrand />);

    expect(screen.getByRole("img", { name: /legal dhara/i })).toHaveAttribute(
      "src",
      expect.stringContaining("legal-dhara-mark"),
    );
    expect(screen.getByText("Legal Dhara")).toBeVisible();
  });

  it("supports a compact monogram treatment", () => {
    render(<LegalDharaBrand compact />);

    expect(screen.getByRole("img", { name: /legal dhara/i })).toBeVisible();
    expect(screen.queryByText("Legal Dhara")).not.toBeInTheDocument();
  });
});
