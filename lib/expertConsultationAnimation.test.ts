import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("expert consultation motion", () => {
  it("reveals the visual and form without changing form behavior", () => {
    const component = readFileSync("components/home1/ExpertConsultation.tsx", "utf8");
    const styles = readFileSync("components/home1/ExpertConsultation.module.css", "utf8");

    expect(component).toContain('from "@gsap/react"');
    expect(component).toContain('from "gsap/ScrollTrigger"');
    expect(component).toContain("data-consultation-visual");
    expect(component).toContain("data-consultation-copy");
    expect(component).toContain("data-consultation-form-heading");
    expect(component).toContain("data-consultation-field");
    expect(component).toContain("useGSAP");
    expect(component).toContain("clipPath");
    expect(component).toContain("prefers-reduced-motion: reduce");
    expect(component).toContain("handleSubmit");
    expect(component).toContain("publicApi.post");
    expect(component).toContain("Enter a valid phone number using digits only.");
    expect(component).toContain("Please provide at least 10 characters in your message.");
    expect(component).toContain("disabled={isSubmitting}");
    expect(component).toContain('name="phone"');
    expect(component).toContain('name="email"');
    expect(component).toContain('name="message"');
    expect(component).toContain("/assets/home1-consultation/consultation-desktop.png");
    expect(component).toContain("/assets/home1-consultation/consultation-mobile.png");
    expect(component).toContain("<picture>");
    expect(styles).toContain("grid-column: 1 / -1");
    expect(styles).toContain("position: absolute");
    expect(styles).toContain("z-index: 2");
  });
});
