import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("Home1 design route", () => {
  it("keeps the new homepage accessible before Trademark & IP", () => {
    const pagePath = "app/home1/page.tsx";
    expect(existsSync(pagePath)).toBe(true);
    if (!existsSync(pagePath)) return;

    const page = readFileSync(pagePath, "utf8");
    const header = readFileSync("components/Header.tsx", "utf8");
    const desktopNavigation = header.indexOf("{/* Desktop Navigation */}");
    const mobileNavigation = header.indexOf("{/* Mobile Menu */}");
    const desktopHome1 = header.indexOf('href="/home1"', desktopNavigation);
    const desktopServices = header.indexOf("Object.entries(navigationData)", desktopNavigation);
    const mobileHome1 = header.indexOf('href="/home1"', mobileNavigation);
    const mobileServices = header.indexOf("Object.entries(navigationData)", mobileNavigation);

    expect(page).toContain("Get Free Consultation");
    expect(page).toContain("What would you like to get done?");
    expect(header.match(/href="\/home1"/g)).toHaveLength(2);
    expect(desktopHome1).toBeGreaterThan(desktopNavigation);
    expect(desktopHome1).toBeLessThan(desktopServices);
    expect(mobileHome1).toBeGreaterThan(mobileNavigation);
    expect(mobileHome1).toBeLessThan(mobileServices);
  });
});
