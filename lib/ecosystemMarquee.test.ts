import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const newLogos = [
  "shopify",
  "woo",
  "wordpress",
  "microsoft",
  "meta",
  "razorpay",
  "paytm",
  "flipkart",
  "meesho",
  "myntra",
];

describe("ecosystem logo marquee", () => {
  it("loops all existing and supplied marks smoothly from left to right", () => {
    const component = readFileSync("components/home1/TrustSection.tsx", "utf8");
    const styles = readFileSync("components/home1/TrustSection.module.css", "utf8");

    newLogos.forEach((logo) => {
      expect(component).toContain(`/assets/home1-trust/ecosystems/${logo}.svg`);
      expect(existsSync(`public/assets/home1-trust/ecosystems/${logo}.svg`), logo).toBe(true);
    });

    expect(component).toContain("ecosystemLogos");
    expect(component).toContain('aria-hidden={duplicate ? "true" : undefined}');
    expect(styles).toContain("@keyframes marqueeRight");
    expect(styles).toContain("animation: marqueeRight");
    expect(styles).toContain("animation-play-state: paused");
    expect(styles).toContain("prefers-reduced-motion: reduce");
    expect(component).toContain('document.addEventListener("visibilitychange"');
    expect(component).toContain("IntersectionObserver");
    expect(component).toContain("isMarqueePaused");
    expect(component).toContain("styles.marqueePaused");
    expect(styles).toContain(".marqueePaused .marqueeTrack");
  });
});
