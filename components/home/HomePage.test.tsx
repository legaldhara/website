import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import Home from "@/app/page";

vi.mock("@/components/ClassFinderTool", () => ({ default: () => <div>Class finder tool</div> }));
vi.mock("@/components/Contactform", () => ({ default: () => <div>Contact form</div> }));
vi.mock("@/components/TalkToExpertButton", () => ({ default: () => null }));

afterEach(cleanup);

describe("premium homepage", () => {
  it("presents one primary journey without duplicate trust sections", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/business.*legally ready/i);
    expect(screen.getByRole("link", { name: /start with an expert/i })).toHaveAttribute("href", "/contact");
    expect(screen.getByRole("heading", { name: /how your filing moves/i })).toBeVisible();
    expect(screen.getAllByRole("heading", { name: /why legal dhara/i })).toHaveLength(1);
    expect(screen.getAllByRole("link", { name: /view services/i }).map((link) => link.getAttribute("href"))).toEqual([
      "/services/trademark-registration",
      "/services/pvt-ltd",
      "/services/gst-registration",
      "/services/documentation",
    ]);
  });
});
