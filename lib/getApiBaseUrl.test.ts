import { describe, expect, it } from "vitest";
import { getApiBaseUrl } from "./getApiBaseUrl";

describe("getApiBaseUrl", () => {
  it("uses one canonical configured API origin", () => {
    expect(getApiBaseUrl({ NEXT_PUBLIC_BACKEND_API_URL: "https://api.legaldhara.com/" }, "production"))
      .toBe("https://api.legaldhara.com");
  });

  it("rejects missing production configuration", () => {
    expect(() => getApiBaseUrl({}, "production")).toThrow("NEXT_PUBLIC_BACKEND_API_URL");
  });

  it("uses the local API during development", () => {
    expect(getApiBaseUrl({}, "development")).toBe("http://localhost:4001");
  });
});
