# Premium Finance Website Refresh

## Scope

Phase one redesigns the shared visual foundation and the highest-traffic customer surfaces:

- Global design tokens and base styles
- Header and responsive navigation
- Footer
- Homepage
- Login and signup flows
- New LD logo treatment
- Frontend performance improvements directly affecting those surfaces

Service pages, dashboard internals, onboarding, payment, pricing, and remaining informational pages retain their current structure in phase one. They inherit safe global tokens where compatible and receive full component conversion in phase two.

## Experience Goal

The first viewport should feel like a credible legal-finance institution rather than a generic service marketplace. Visitors should immediately understand what Legal Dhara helps them do, see one primary next action, and encounter proof and process details in a disciplined sequence.

## Visual Concept: Capital Ledger

The black LD geometry establishes authority; its gold vertical stroke becomes a recurring ledger rule. The page uses warm paper surfaces, white content fields, black typography, and small controlled gold signals. This provides a recognizable system without turning every section into a logo motif.

### Homepage Narrative

1. **Header:** monogram plus wordmark, clear service navigation, restrained login, gold primary action.
2. **Hero:** one decisive promise, concise supporting copy, primary consultation/application CTA, secondary service exploration action, and a compact trust strip.
3. **Service selection:** fewer, clearer service families with direct descriptions instead of a dense icon catalogue.
4. **How it works:** a ledger-style sequence showing consultation, documents, filing, and tracking.
5. **Why Legal Dhara:** consolidate overlapping trust sections into one evidence-led block using only existing factual content.
6. **Focused tools/support:** retain useful interactive tools, loaded below the primary content path.
7. **Contact CTA:** one mature dark closing panel rather than multiple competing CTA sections.
8. **Footer:** simplified information architecture with native disclosure behavior on mobile.

## Header and Logo

- Derive a transparent, tightly cropped production logo from the supplied JPG without changing its geometry.
- Export responsive WebP/PNG assets and a compact square monogram.
- Render “Legal Dhara” as accessible text beside the image rather than baking the wordmark into a large raster asset.
- Keep desktop navigation one line where possible; mobile uses a clear menu button and full-width action hierarchy.

## Authentication

- Replace navy surfaces with Ink and Charcoal.
- Use Warm Paper for the page, White for the form, and Legal Gold for progress completion and primary action.
- Reuse the LD logo treatment instead of the generic scale icon as the primary brand marker.
- Preserve all existing email, Google, phone OTP, verification, password, and redirect behavior.
- Keep error messages adjacent to the affected field and retain visible password controls.

## Performance Work

- Convert the 2.5 MB `public/vv.png` and other oversized raster assets to correctly sized WebP/AVIF variants where used.
- Use `next/image` with explicit dimensions, responsive `sizes`, and priority only for the true above-the-fold visual.
- Remove perpetual Framer Motion effects from the initial viewport and static content.
- Keep components server-rendered unless they require state, browser APIs, or interaction.
- Replace JavaScript-only footer accordion behavior with semantic disclosure where practical.
- Dynamically load lower-priority interactive homepage tools when they approach the viewport.
- Consolidate duplicated homepage trust/benefit sections to reduce DOM size, content repetition, and JavaScript.
- Preserve static export compatibility and avoid external font requests.

## Performance Acceptance

- No initial image larger than necessary for its rendered dimensions.
- No blinking, shaking, floating, or spinning animation in the phase-one surfaces.
- No layout shift from the logo or hero media.
- Homepage remains usable with JavaScript delayed; interactive tools may enhance afterward.
- Production tests, lint, TypeScript, and static build pass.
- Desktop and mobile screenshots are reviewed once, followed by one consolidated correction pass.

## Testing

- Add or update component tests for header navigation, mobile menu, and authentication behavior.
- Add deployment/design contract checks for logo assets, approved tokens, and forbidden legacy animation classes on phase-one surfaces.
- Run the existing website test suite, ESLint error check, TypeScript check, and production build.
- Inspect the homepage, login, and signup at desktop and mobile widths.

## Rollout

1. Implement and review phase one locally.
2. Push to `main` only after visual and automated verification.
3. Allow Cloudflare to create a preview/production deployment.
4. Perform a production smoke test for navigation, login/signup, API connectivity, and responsive rendering.
5. Convert service and remaining application pages in phase two using the same tokens and components.

