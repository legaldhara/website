import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("trust section motion", () => {
  it("reveals marks and benefits with a scoped reversible timeline", () => {
    const component = readFileSync("components/home1/TrustSection.tsx", "utf8");

    expect(component).toContain('from "@gsap/react"');
    expect(component).toContain('from "gsap/ScrollTrigger"');
    expect(component).toContain("data-trust-mark");
    expect(component).toContain("data-trust-message");
    expect(component).toContain("data-trust-benefit");
    expect(component).toContain("data-trust-action");
    expect(component).toContain("scrub:");
    expect(component).not.toContain("isRevealed");
  });
});
