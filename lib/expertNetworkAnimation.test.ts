import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("expert network scroll choreography", () => {
  it("assembles the heading, feature, cards, dividers and SVGs with scroll progress", () => {
    const component = readFileSync("components/home1/ExpertNetwork.tsx", "utf8");
    const styles = readFileSync("components/home1/ExpertNetwork.module.css", "utf8");

    expect(component).toContain('from "@gsap/react"');
    expect(component).toContain('from "gsap/ScrollTrigger"');
    expect(component).toContain("data-network-heading");
    expect(component).toContain("data-network-feature");
    expect(component).toContain("data-network-card");
    expect(component).toContain("data-network-icon");
    expect(component).toContain("strokeDashoffset");
    expect(component).toContain("scrub:");
    expect(component).toContain("trigger: card");
    expect(component).toContain("--network-line-progress");
    expect(component).not.toContain("IntersectionObserver");
    expect(component).not.toContain("useState");
    expect(styles).toContain("scaleY(var(--network-line-progress))");
    expect(styles).toContain("scaleX(var(--network-line-progress))");
  });
});
