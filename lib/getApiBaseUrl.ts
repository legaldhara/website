export function getApiBaseUrl(
  environment: Record<string, string | undefined> = process.env,
  nodeEnv = process.env.NODE_ENV,
): string {
  const configuredUrl = environment.NEXT_PUBLIC_BACKEND_API_URL?.trim().replace(/\/+$/, "");
  if (configuredUrl) return configuredUrl;
  if (nodeEnv !== "production") return "http://localhost:4001";
  throw new Error("NEXT_PUBLIC_BACKEND_API_URL is required in production");
}
