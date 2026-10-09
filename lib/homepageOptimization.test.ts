import { existsSync, readFileSync, statSync } from "node:fs";
import { describe, expect, it } from "vitest";

const retiredHomepageFiles = [
  "components/HeroSection.tsx",
  "components/ServicesSection.tsx",
  "components/WhyChooseUsSection.tsx",
  "components/TestimonialsSection.tsx",
  "components/WhyChooseUs.tsx",
  "components/HowItWorksSection.tsx",
  "components/professional-services.tsx",
  "components/why-customers-love-us.tsx",
  "components/ProfessionalSupport.tsx",
  "public/ama.webp",
  "public/google.webp",
  "public/g_logo.png",
  "public/icons8-hp-48.png",
  "public/icons8-intel-24.png",
  "public/icons8-phone-pe-48.png",
  "public/assets/hero_boy.webp",
  "public/assets/hero_boy2.webp",
  "public/assets/v1.webp",
  "public/assets/servc.webp",
  "public/assets/ISO.webp",
  "public/assets/FSSAI.webp",
  "public/assets/MSME.webp",
  "public/assets/IP.webp",
];

const optimizedHomepageImages = [
  "public/assets/legal-hero-desktop.webp",
  "public/assets/legal-hero-mobile.webp",
  "public/assets/home1-guidance/lawyer.webp",
  "public/assets/home1-guidance/chartered-accountant.webp",
  "public/assets/home1-guidance/company-secretary.webp",
  "public/assets/home1-reviews/legal-diary.webp",
  "public/assets/home1-consultation/legal-consultant.webp",
  "public/assets/home1-classes/class-library.webp",
];

describe("homepage production assets", () => {
  it("does not retain the retired homepage implementation or its exclusive assets", () => {
    retiredHomepageFiles.forEach((path) => expect(existsSync(path), path).toBe(false));
  });

  it("keeps the legacy route as a lightweight redirect", () => {
    const legacyRoute = readFileSync("app/home1/page.tsx", "utf8");
    expect(legacyRoute).toContain('redirect("/")');
    expect(legacyRoute).not.toContain("HomePage");
    expect(legacyRoute.length).toBeLessThan(300);
  });

  it("serves compressed active homepage artwork", () => {
    optimizedHomepageImages.forEach((path) => {
      expect(existsSync(path), path).toBe(true);
      if (existsSync(path)) expect(statSync(path).size, path).toBeLessThan(500_000);
    });

    expect(existsSync("public/assets/home1-services/folio-master.png")).toBe(false);
    expect(existsSync("public/assets/home1-classes/class-library.png")).toBe(false);
    expect(readFileSync("app/home1/home1.module.css", "utf8")).not.toContain("legal-hero-desktop.png");
  });

  it("uses one optimized class-library image without the scroll sequence", () => {
    const library = readFileSync("components/home1/TrademarkClassLibrary.tsx", "utf8");
    const packageJson = JSON.parse(readFileSync("package.json", "utf8"));

    expect(existsSync("components/home1/LidScrollSequence.tsx")).toBe(false);
    expect(existsSync("public/assets/home1-classes/lid-frames")).toBe(false);
    expect(library).toContain('src="/assets/home1-classes/class-library.webp"');
    expect(library).not.toContain("LidScrollSequence");
    expect(packageJson.dependencies.gsap).toBeDefined();
    expect(packageJson.dependencies["@gsap/react"]).toBeDefined();
  });
});
