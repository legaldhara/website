export function getApiBaseUrl() {
  if (typeof window === 'undefined') {
    // Server-side
    return process.env.NEXT_PUBLIC_API_URL_IN; // fallback
  }

  const host = window.location.hostname;

  if (host.includes('legaldhara.in')) {
    return process.env.NEXT_PUBLIC_API_URL_IN;
  }

  if (host.includes('legaldhara.com')) {
    return process.env.NEXT_PUBLIC_API_URL_COM;
  }

  // default fallback
  return process.env.NEXT_PUBLIC_API_URL_COM;
}
