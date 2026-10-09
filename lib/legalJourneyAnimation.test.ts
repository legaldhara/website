import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("legal journey stepper animation", () => {
  it("opens on entry and closes in reverse order on exit", () => {
    const component = readFileSync("components/home1/LegalJourney.tsx", "utf8");
    const styles = readFileSync("components/home1/LegalJourney.module.css", "utf8");
    const smoothScroll = readFileSync("components/home1/SmoothHomepageScroll.tsx", "utf8");

    expect(component).toContain('from "@gsap/react"');
    expect(component).toContain('from "gsap/ScrollTrigger"');
    expect(component).toContain("gsap.matchMedia()");
    expect(component).toContain("scrub:");
    expect(component).toContain("createTimeline(true)");
    expect(component).toContain('"(min-width: 900px)"');
    expect(component).toContain('"(max-width: 899px)"');
    expect(component).not.toContain("IntersectionObserver");
    expect(styles).toContain("--step-progress");
    expect(styles).toContain("scaleY(var(--step-progress))");
    expect(smoothScroll).toContain('lenis.on("scroll", updateScrollTrigger)');
    expect(smoothScroll).toContain('lenis.off("scroll", updateScrollTrigger)');
  });
});
