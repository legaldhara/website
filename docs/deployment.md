# Website Deployment

## Cloudflare Pages

- Project: `legaldhara-website`
- Repository: `legaldhara/website`
- Production branch: `main`
- Framework preset: Next.js Static HTML Export
- Build command: `npm run build`
- Output directory: `out`
- Production domain: `legaldhara.com`
- Production API variable: `NEXT_PUBLIC_BACKEND_API_URL=https://api.legaldhara.com`
- Configure all public Firebase variables from `.env.example` in Cloudflare Pages.
- Keep preview deployments enabled for pull requests and non-production branches.

## Canonical Redirects

Create Cloudflare redirect rules that preserve path and query string:

- `https://www.legaldhara.com/*` to `https://legaldhara.com/$1`
- `https://legaldhara.in/*` to `https://legaldhara.com/$1`
- `https://www.legaldhara.in/*` to `https://legaldhara.com/$1`

Use permanent `301` redirects. Do not proxy website traffic through the VPS or Caddy.

## Verification

Run `npm ci`, `npm test`, `npx tsc --noEmit`, and `npm run build`. Confirm `out/_headers` exists before connecting the production domain.
