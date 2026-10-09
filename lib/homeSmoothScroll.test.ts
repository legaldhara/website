import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("homepage smooth scrolling", () => {
  it("runs only with the homepage and cleans up accessibly", () => {
    const componentPath = "components/home1/SmoothHomepageScroll.tsx";
    expect(existsSync(componentPath)).toBe(true);
    if (!existsSync(componentPath)) return;

    const component = readFileSync(componentPath, "utf8");
    const homepage = readFileSync("app/home1/HomePage.tsx", "utf8");
    const packageJson = JSON.parse(readFileSync("package.json", "utf8"));

    expect(packageJson.dependencies.lenis).toBeDefined();
    expect(homepage).toContain("<SmoothHomepageScroll />");
    expect(component).toContain('matchMedia("(prefers-reduced-motion: reduce)")');
    expect(component).toContain("syncTouch: false");
    expect(component).toContain("allowNestedScroll: true");
    expect(component).toContain("cancelAnimationFrame");
    expect(component).toContain("lenis.destroy()");
  });
});
