import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("homepage hero motion", () => {
  it("stages the hero once without making the server page a client component", () => {
    const component = readFileSync("app/home1/HomePage.tsx", "utf8");
    const styles = readFileSync("app/home1/home1.module.css", "utf8");

    expect(component).not.toContain('"use client"');
    expect(component).toContain("data-hero-motion");
    expect(component).toContain("data-hero-rule");
    expect(styles).toContain("@keyframes heroRuleDraw");
    expect(styles).toContain("@keyframes heroContentReveal");
    expect(styles).toContain(".hero [data-hero-rule]");
    expect(styles).toContain(".hero [data-hero-motion]");
    expect(styles).toContain("prefers-reduced-motion: reduce");
    expect(styles).not.toContain("animation-iteration-count: infinite");
  });
});
