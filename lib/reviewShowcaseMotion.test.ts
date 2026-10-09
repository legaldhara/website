import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("review showcase motion", () => {
  it("uses directional review transitions and pauses autoplay safely", () => {
    const component = readFileSync("components/home1/ReviewShowcase.tsx", "utf8");
    const styles = readFileSync("components/home1/ReviewShowcase.module.css", "utf8");

    expect(component).toContain('from "framer-motion"');
    expect(component).toContain("AnimatePresence");
    expect(component).toContain("custom={direction}");
    expect(component).toContain("reviewVariants");
    expect(component).toContain("enter:");
    expect(component).toContain("exit:");
    expect(component).toContain("setDirection(-1)");
    expect(component).toContain("setDirection(1)");
    expect(component).toContain('document.addEventListener("visibilitychange"');
    expect(component).toContain("data-review-summary");
    expect(component).toContain("data-review-metrics");
    expect(component).toContain("data-review-artwork");
    expect(component).toContain("data-review-card");
    expect(component).toContain('from "@gsap/react"');
    expect(styles).not.toContain("@keyframes reviewEnter");
    expect(styles).toContain("scaleX(var(--review-progress))");
    expect(styles).not.toContain("transition: width");
  });
});
