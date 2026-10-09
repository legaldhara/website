import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("homepage service directory tabs", () => {
  it("switches four independently illustrated service groups with real destinations", () => {
    const component = readFileSync("components/home1/ServiceDirectory.tsx", "utf8");

    ["trademark", "registrations", "taxation", "documentation"].forEach((category) => {
      expect(component).toContain(`id: "${category}"`);
    });

    [
      "/services/trademark-registration",
      "/services/trademark-renewal",
      "/services/international-trademark",
      "/services/pvt-ltd",
      "/services/llp",
      "/services/opc",
      "/services/gst-registration",
      "/services/gst-filing",
      "/services/itr-filing",
      "/services/documentation",
    ].forEach((route) => expect(component).toContain(`href: "${route}"`));

    expect(component).toContain("AnimatePresence");
    expect(component).toContain("motion.");
    expect(component).toContain('role="tablist"');
    expect(component).toContain('role="tabpanel"');

    ["registrations.webp", "taxation.webp", "documentation.webp"].forEach((image) => {
      expect(existsSync(`public/assets/home1-services/webp/${image}`), image).toBe(true);
    });
  });
});
