import { readdirSync, readFileSync } from "node:fs";
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

  it("does not ship placeholder call-to-action links", () => {
    const placeholderLinks = ["app", "components"]
      .flatMap(findTsxFiles)
      .filter((path) => /href=[{]?["']#["']/.test(readFileSync(path, "utf8")));

    expect(placeholderLinks).toEqual([]);
  });
});
