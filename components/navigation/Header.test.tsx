import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import Header from "../Header";

const fetchUser = vi.fn();

vi.mock("@/store/useAuthStore", () => ({
  useAuthStore: () => ({ isAuthenticated: false, fetchUser }),
}));

afterEach(() => {
  cleanup();
  fetchUser.mockClear();
});

describe("Header", () => {
  it("links the Legal Dhara brand to the homepage", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: /legal dhara/i })).toHaveAttribute("href", "/");
  });

  it("opens and closes the accessible mobile navigation", async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole("button", { name: /open navigation/i }));
    const mobileNavigation = screen.getByRole("navigation", { name: /mobile/i });
    expect(mobileNavigation).toBeVisible();
    expect(within(mobileNavigation).getByRole("link", { name: "Login" })).toHaveAttribute("href", "/login");
    expect(within(mobileNavigation).getByRole("link", { name: "Get started" })).toHaveAttribute("href", "/signup");

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("navigation", { name: /mobile/i })).not.toBeInTheDocument();
  });
});
