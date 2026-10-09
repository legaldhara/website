import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("trademark class library motion", () => {
  it("reveals the archive and indexed records without changing search behavior", () => {
    const component = readFileSync("components/home1/TrademarkClassLibrary.tsx", "utf8");

    expect(component).toContain('"use client"');
    expect(component).toContain('from "@gsap/react"');
    expect(component).toContain('from "gsap/ScrollTrigger"');
    expect(component).toContain("data-class-header");
    expect(component).toContain("data-class-search");
    expect(component).toContain("data-class-artwork");
    expect(component).toContain("data-class-record");
    expect(component).toContain("data-class-benefit");
    expect(component).toContain("data-class-divider");
    expect(component).toContain("clipPath");
    expect(component).toContain("scrub:");
    expect(component).toContain("gsap.matchMedia");
    expect(component).toContain("prefers-reduced-motion: reduce");
    expect(component).toContain('action="/services/trademark-class-finder"');
    expect(component).toContain('name="q"');
  });
});
