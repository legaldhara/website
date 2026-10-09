import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("legal comparison scroll choreography", () => {
  it("assembles comparison cards reversibly with responsive GSAP timelines", () => {
    const component = readFileSync("components/home1/LegalComparison.tsx", "utf8");
    const styles = readFileSync("components/home1/LegalComparison.module.css", "utf8");

    expect(component).toContain('from "@gsap/react"');
    expect(component).toContain('from "gsap/ScrollTrigger"');
    expect(component).toContain("data-comparison-heading");
    expect(component).toContain("data-comparison-legend");
    expect(component).toContain("data-comparison-card");
    expect(component).toContain("data-comparison-traditional");
    expect(component).toContain("data-comparison-divider");
    expect(component).toContain("data-comparison-modern");
    expect(component).toContain("scrub:");
    expect(component).toContain("trigger: card");
    expect(component).not.toContain("IntersectionObserver");
    expect(component).not.toContain("useState");
    expect(component).not.toContain("isRevealed");
    expect(styles).not.toContain("@keyframes revealCard");
    expect(styles).not.toContain(".revealed .card");
  });
});
