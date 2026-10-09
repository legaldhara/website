import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("expert guidance scroll choreography", () => {
  it("scrubs directional image and copy reveals in both scroll directions", () => {
    const component = readFileSync("components/home1/ExpertGuidance.tsx", "utf8");

    expect(component).toContain('from "@gsap/react"');
    expect(component).toContain('from "gsap/ScrollTrigger"');
    expect(component).toContain("data-guidance-lawyer");
    expect(component).toContain("data-guidance-heading");
    expect(component).toContain("data-guidance-ca");
    expect(component).toContain("data-guidance-cs");
    expect(component).toContain("data-guidance-support");
    expect(component).toContain("scrub:");
    expect(component).toContain("prefers-reduced-motion: reduce");
    expect(component).not.toContain("IntersectionObserver");
    expect(component).not.toContain(".to(lawyer, { autoAlpha: 0");
    expect(component).not.toContain(".to(heading, { autoAlpha: 0");
    expect(component).not.toContain(".to(caCard, { autoAlpha: 0");
    expect(component).not.toContain(".to(csCard, { autoAlpha: 0");
    expect(component).not.toContain(".to(support, { autoAlpha: 0");
  });
});
