import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("support dashboard motion", () => {
  it("assembles the dashboard and progress with responsive scroll timelines", () => {
    const component = readFileSync("components/home1/SupportSection.tsx", "utf8");
    const styles = readFileSync("components/home1/SupportSection.module.css", "utf8");

    expect(component).toContain('"use client"');
    expect(component).toContain('from "@gsap/react"');
    expect(component).toContain('from "gsap/ScrollTrigger"');
    expect(component).toContain("data-support-intro");
    expect(component).toContain("data-support-dashboard");
    expect(component).toContain("data-support-progress");
    expect(component).toContain("data-support-request");
    expect(component).toContain("data-support-benefit");
    expect(component).toContain("--support-progress");
    expect(component).toContain("scrub:");
    expect(component).toContain("trigger: benefit");
    expect(component).toContain("gsap.matchMedia");
    expect(component).toContain("prefers-reduced-motion: reduce");
    expect(styles).toContain("scaleX(var(--support-progress, 1))");
  });
});
