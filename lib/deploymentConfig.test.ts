import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const findTsxFiles = (directory: string): string[] =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return findTsxFiles(path);
    return entry.isFile() && entry.name.endsWith(".tsx") ? [path] : [];
  });

describe("website production configuration", () => {
  it("uses the maintained production framework and test runner", () => {
    const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
    expect(packageJson.dependencies.next).toMatch(/^\^16\./);
    expect(packageJson.devDependencies["eslint-config-next"]).toMatch(/^\^16\./);
    expect(packageJson.devDependencies.vitest).toMatch(/^\^5\./);
    expect(packageJson.dependencies["@next/swc-wasm-nodejs"]).toBeUndefined();
  });

  it("does not disable lint checks during production builds", () => {
    expect(readFileSync("next.config.js", "utf8")).not.toContain("ignoreDuringBuilds");
    const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
    expect(packageJson.scripts.lint).toBe("eslint .");
    const workflow = readFileSync(".github/workflows/ci.yml", "utf8");
    expect(workflow).toContain("- run: npm run lint");
    expect(workflow).toContain("node-version: 22");
  });

  it("exports the website for Cloudflare static assets", () => {
    expect(readFileSync("next.config.js", "utf8")).toContain("output: 'export'");
    const wranglerConfig = readFileSync("wrangler.jsonc", "utf8");
    expect(wranglerConfig).toContain('"directory": "./out"');
    expect(wranglerConfig).toContain('"not_found_handling": "404-page"');
  });

  it("uses a statically discoverable public API environment variable", () => {
    expect(readFileSync("lib/getApiBaseUrl.ts", "utf8")).toContain(
      "process.env.NEXT_PUBLIC_BACKEND_API_URL",
    );
  });

  it("uses the approved palette and logo without replacing the existing layout", () => {
    const tailwindConfig = readFileSync("tailwind.config.ts", "utf8");
    expect(tailwindConfig).toContain("'deep-blue': '#111111'");
    expect(tailwindConfig).toContain("'brand-orange': '#BC9139'");
    expect(tailwindConfig).toContain("'light-orange': '#F7F5F0'");
    expect(readFileSync("components/Header.tsx", "utf8")).toContain(
      'src="/assets/LD2.webp"',
    );
    expect(statSync("public/assets/LD2.webp").size).toBe(13_014);
    expect(readFileSync("app/layout.tsx", "utf8")).toContain(
      "/assets/legal-dhara-mark-48.png",
    );
  });

  it("does not ship placeholder call-to-action links", () => {
    const placeholderLinks = ["app", "components"]
      .flatMap(findTsxFiles)
      .filter((path) => /href=[{]?["']#["']/.test(readFileSync(path, "utf8")));

    expect(placeholderLinks).toEqual([]);
  });

const findSourceFiles = (directory: string): string[] =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return findSourceFiles(path);
    return entry.isFile() && /\.(ts|tsx)$/.test(entry.name) && !entry.name.includes(".test.")
      ? [path]
      : [];
  });

  it("keeps Firebase out of the anonymous header path", () => {
    const header = readFileSync("components/Header.tsx", "utf8");
    expect(header).not.toContain("/store/useAuthStore");
    expect(header).toContain("hasCustomerSessionHint");
  });

  it("loads public homepage services without importing Firebase", () => {
    const publicApi = readFileSync("config/publicApi.ts", "utf8");
    const servicesStore = readFileSync("store/useServicesStore.ts", "utf8");
    const contactForm = readFileSync("components/Contactform.tsx", "utf8");

    expect(publicApi).not.toContain("firebase");
    expect(publicApi).not.toContain("./apiClient");
    expect(servicesStore).toContain('from "@/config/publicApi"');
    expect(servicesStore).not.toContain('from "@/config/apiClient"');
    expect(contactForm).toContain('from "@/config/publicApi"');
    expect(contactForm).not.toContain('from "@/config/apiClient"');
  });

  it("does not publish unused legacy images", () => {
    for (const path of [
      "public/vv.png",
      "public/assets/ISO.png",
      "public/assets/fullLogo.png",
      "public/assets/IP.jpg",
      "public/assets/LD.png",
      "public/assets/lD.jpg",
      "public/assets/MSME.png",
    ]) {
      expect(existsSync(path), path).toBe(false);
    }
    expect(statSync("public/assets/android-chrome-512x512.png").size).toBeLessThan(80_000);
    expect(readFileSync("components/service-hero-form.tsx", "utf8")).not.toContain("/assets/LD2.jpg");
  });

  it("does not ship production debug logging", () => {
    const debugLogs = ["app", "components", "config", "lib", "store"]
      .flatMap(findSourceFiles)
      .filter((path) => /console\.\w+\s*\(/.test(readFileSync(path, "utf8")));

    expect(debugLogs).toEqual([]);
  });
});
