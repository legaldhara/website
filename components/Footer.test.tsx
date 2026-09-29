import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import Footer from "@/components/Footer";

afterEach(cleanup);

describe("Footer", () => {
  it("provides an accessible service directory and legal links", () => {
    render(<Footer />);

    expect(screen.getByText("Legal Dhara")).toBeVisible();
    expect(screen.getByText("Trademark & intellectual property")).toBeVisible();
    expect(screen.getByRole("link", { name: "Privacy policy" })).toHaveAttribute("href", "/privacy");
    expect(screen.getByRole("link", { name: "Talk to an expert" })).toHaveAttribute("href", "/contact");
  });
});
