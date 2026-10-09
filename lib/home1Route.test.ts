import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("default homepage route", () => {
  it("serves the redesigned homepage at root without temporary navigation links", () => {
    const rootPagePath = "app/page.tsx";
    const pagePath = "app/home1/page.tsx";
    const homePagePath = "app/home1/HomePage.tsx";
    expect(existsSync(rootPagePath)).toBe(true);
    expect(existsSync(pagePath)).toBe(true);
    expect(existsSync(homePagePath)).toBe(true);
    if (!existsSync(rootPagePath) || !existsSync(pagePath) || !existsSync(homePagePath)) return;

    const rootPage = readFileSync(rootPagePath, "utf8");
    const page = readFileSync(pagePath, "utf8");
    const homePage = readFileSync(homePagePath, "utf8");
    const header = readFileSync("components/Header.tsx", "utf8");

    expect(rootPage).toContain('import HomePage from "./home1/HomePage"');
    expect(rootPage).toContain("export default HomePage");
    expect(homePage).toContain("Get Free Consultation");
    expect(homePage).toContain("What would you like to get done?");
    expect(page).toContain('redirect("/")');
    expect(header).not.toContain('href="/home1"');
    expect(header).not.toContain("Home1");
  });
});
