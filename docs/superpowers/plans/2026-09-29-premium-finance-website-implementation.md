# Premium Finance Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver the phase-one Legal Dhara premium finance redesign for the shared website shell, homepage, login, and signup while reducing initial JavaScript, image weight, and unnecessary motion.

**Architecture:** Establish semantic brand tokens first, then build a reusable brand mark and progressively replace the shared shell and phase-one surfaces. Keep static content in server components, isolate navigation/form state in small client components, and dynamically load only lower-priority interactive tools.

**Tech Stack:** Next.js 16 static export, React 19, TypeScript, Tailwind CSS, Vitest, Testing Library, Cloudflare Workers Static Assets.

**Spec:** `docs/superpowers/specs/2026-09-29-premium-finance-website-design.md`

## Global Constraints

- Use `#111111`, `#252525`, `#BC9139`, `#F7F5F0`, `#FFFFFF`, `#151515`, `#747474`, and `#E7E2D8` as the phase-one palette.
- Use gold only for primary actions, active states, icons, key numbers, and small highlights.
- Preserve existing routes, factual copy, authentication behavior, payment behavior, and API integration.
- Preserve static export compatibility and avoid external font requests.
- Remove blinking, shaking, perpetual floating, and ornamental spinning from phase-one surfaces.
- Keep the supplied LD monogram geometry and black/gold proportions unchanged.
- Do not invent proof, testimonials, certifications, customer counts, or outcomes.
- Do not commit or push at task checkpoints without explicit user approval.

---

### Task 1: Brand Assets and Semantic Tokens

**Files:**
- Create: `public/assets/brand/legal-dhara-mark.webp`
- Create: `public/assets/brand/legal-dhara-mark-192.png`
- Create: `public/assets/brand/legal-dhara-mark-48.png`
- Create: `components/brand/LegalDharaBrand.tsx`
- Create: `components/brand/LegalDharaBrand.test.tsx`
- Modify: `app/globals.css`
- Modify: `tailwind.config.ts`
- Modify: `app/layout.tsx`
- Modify: `lib/deploymentConfig.test.ts`

**Interfaces:**
- Produces: `LegalDharaBrand({ compact?: boolean; inverse?: boolean; priority?: boolean })`
- Produces Tailwind colors: `ink`, `charcoal`, `legal-gold`, `warm-paper`, `paper-card`, `body-text`, `secondary-text`, `ledger-border`.

- [ ] **Step 1: Write failing brand and token tests**

```tsx
it("renders the approved wordmark and optimized logo", () => {
  render(<LegalDharaBrand />);
  expect(screen.getByRole("img", { name: /legal dhara/i })).toHaveAttribute(
    "src",
    expect.stringContaining("legal-dhara-mark"),
  );
  expect(screen.getByText("Legal Dhara")).toBeVisible();
});
```

Add deployment assertions that `globals.css` contains `--color-legal-gold: #bc9139` and that `layout.tsx` references the compact brand asset for the favicon.

- [ ] **Step 2: Run tests and confirm the new contract fails**

Run: `npx vitest run components/brand/LegalDharaBrand.test.tsx lib/deploymentConfig.test.ts --pool=threads`

Expected: FAIL because the brand component, assets, and semantic tokens do not exist.

- [ ] **Step 3: Produce optimized logo assets**

Use the supplied source `C:\Users\satya\Downloads\photo_2026-09-29_12-35-12.jpg`. Remove only the white background, preserve the black/gold geometry, tightly crop transparent margins, and export the three named assets. Confirm the 192px asset is below 40 KB and the 48px asset is below 15 KB.

- [ ] **Step 4: Implement semantic tokens and brand component**

Define the approved colors as CSS custom properties and map Tailwind names to `var(...)`. Remove the automatic dark color-scheme override so operating-system dark mode cannot replace the approved brand. Implement the wordmark as accessible text beside `next/image`; `compact` hides only the text.

- [ ] **Step 5: Verify task output**

Run:

```bash
npx vitest run components/brand/LegalDharaBrand.test.tsx lib/deploymentConfig.test.ts --pool=threads
npx tsc --noEmit
```

Expected: PASS. Review checkpoint; commit only after user approval.

---

### Task 2: Premium Header and Responsive Navigation

**Files:**
- Create: `components/navigation/navigationData.ts`
- Create: `components/navigation/MobileNavigation.tsx`
- Create: `components/navigation/Header.test.tsx`
- Modify: `components/Header.tsx`

**Interfaces:**
- Consumes: `LegalDharaBrand` from Task 1.
- Produces: `navigationGroups`, a typed static data structure shared by desktop and mobile navigation.
- Produces: `MobileNavigation({ groups, authenticated })`, the only stateful mobile menu layer.

- [ ] **Step 1: Write failing navigation behavior tests**

```tsx
it("opens the mobile menu and exposes primary actions", async () => {
  render(<Header />);
  await userEvent.click(screen.getByRole("button", { name: /open navigation/i }));
  expect(screen.getByRole("navigation", { name: /mobile/i })).toBeVisible();
  expect(screen.getByRole("link", { name: /login/i })).toHaveAttribute("href", "/login");
  expect(screen.getByRole("link", { name: /get started/i })).toHaveAttribute("href", "/signup");
});
```

Also test Escape closes the menu and the logo links to `/`.

- [ ] **Step 2: Run the header test and confirm failure**

Run: `npx vitest run components/navigation/Header.test.tsx --pool=threads`

Expected: FAIL because the accessible mobile navigation contract is not implemented.

- [ ] **Step 3: Extract navigation data and simplify the header**

Move service labels and URLs out of the 384-line client component. Render the desktop shell with black text, ledger borders, a slim gold active rule, a quiet Login action, and one gold Get Started action. Keep mobile state isolated in `MobileNavigation.tsx`.

- [ ] **Step 4: Verify keyboard, responsive, and test behavior**

Run:

```bash
npx vitest run components/navigation/Header.test.tsx --pool=threads
npx eslint components/Header.tsx components/navigation --quiet
npx tsc --noEmit
```

Expected: PASS. Review checkpoint; commit only after user approval.

---

### Task 3: Homepage Narrative and Visual System

**Files:**
- Create: `components/home/HomeHero.tsx`
- Create: `components/home/ServiceFamilies.tsx`
- Create: `components/home/ProcessLedger.tsx`
- Create: `components/home/TrustPanel.tsx`
- Create: `components/home/HomeClosingCta.tsx`
- Create: `components/home/HomePage.test.tsx`
- Modify: `app/page.tsx`
- Retire from homepage composition: `components/HeroSection.tsx`, `components/ProfessionalSupport.tsx`, `components/WhyChooseUs.tsx`, `components/WhyChooseUsSection.tsx`, `components/why-customers-love-us.tsx`, `components/CTASection.tsx`

**Interfaces:**
- Produces server components for static homepage sections.
- Consumes existing real service routes and factual copy only.
- Keeps `ClassFinderTool` and `Contactform` as lower-priority interactive islands.

- [ ] **Step 1: Write a failing homepage composition test**

```tsx
it("presents one primary journey without duplicate trust sections", () => {
  render(<Home />);
  expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
  expect(screen.getByRole("link", { name: /start with an expert/i })).toHaveAttribute("href", "/contact");
  expect(screen.getByRole("heading", { name: /how your filing moves/i })).toBeVisible();
  expect(screen.getAllByRole("heading", { name: /why legal dhara/i })).toHaveLength(1);
});
```

- [ ] **Step 2: Run the homepage test and confirm failure**

Run: `npx vitest run components/home/HomePage.test.tsx --pool=threads`

Expected: FAIL because the new homepage sections do not exist.

- [ ] **Step 3: Build the Capital Ledger homepage**

Implement a warm-paper canvas, editorial serif display hierarchy, disciplined dark/gold actions, service-family navigation, ledger-rule process sequence, one consolidated trust section, and one dark closing CTA. Remove redundant homepage sections from `app/page.tsx` without deleting reusable files needed by other routes.

- [ ] **Step 4: Remove phase-one perpetual motion**

Ensure the new homepage does not use `animate-blink`, `animate-shake-blink`, `animate-float`, `animate-spin-slow`, or infinite marquee animation. Use CSS hover/focus transitions only.

- [ ] **Step 5: Verify homepage contracts**

Run:

```bash
npx vitest run components/home/HomePage.test.tsx lib/deploymentConfig.test.ts --pool=threads
npx eslint app/page.tsx components/home --quiet
npx tsc --noEmit
```

Expected: PASS. Review checkpoint; commit only after user approval.

---

### Task 4: Footer Simplification

**Files:**
- Create: `components/footer/footerData.ts`
- Create: `components/footer/FooterSection.tsx`
- Create: `components/footer/Footer.test.tsx`
- Modify: `components/Footer.tsx`

**Interfaces:**
- Consumes: `LegalDharaBrand` from Task 1.
- Produces static footer data and semantic `<details>` disclosure sections usable without client JavaScript.

- [ ] **Step 1: Write failing footer tests**

```tsx
it("renders service groups as semantic disclosures", () => {
  render(<Footer />);
  expect(screen.getByText("Trademark & IP").closest("summary")).toBeTruthy();
  expect(screen.getByRole("link", { name: /privacy/i })).toHaveAttribute("href", "/privacy");
});
```

- [ ] **Step 2: Run the test and confirm failure**

Run: `npx vitest run components/footer/Footer.test.tsx --pool=threads`

Expected: FAIL because the existing footer uses JavaScript accordion state.

- [ ] **Step 3: Rebuild footer as a server component**

Extract data, replace mobile state with `<details>/<summary>`, use the new brand component, retain existing legitimate contact and service links, and remove unused icon imports and blog calculations from the shared shell.

- [ ] **Step 4: Verify footer behavior and size**

Run:

```bash
npx vitest run components/footer/Footer.test.tsx --pool=threads
npx eslint components/Footer.tsx components/footer --quiet
npx tsc --noEmit
```

Expected: PASS and `Footer.tsx` no longer begins with `"use client"`. Review checkpoint; commit only after user approval.

---

### Task 5: Login and Signup Visual Conversion

**Files:**
- Modify: `components/auth/AuthShell.tsx`
- Modify: `components/auth/PasswordField.tsx`
- Modify: `components/auth/VerificationStatus.tsx`
- Modify: `app/login/page.tsx`
- Modify: `app/signup/page.tsx`
- Modify: `components/auth/authFlows.test.tsx`

**Interfaces:**
- Consumes: `LegalDharaBrand` and semantic phase-one tokens.
- Preserves existing auth store calls, Google sign-in, phone OTP, resend countdown, password visibility, verification state, and redirects.

- [ ] **Step 1: Extend auth tests with visual and accessibility contracts**

Add assertions for the Legal Dhara brand, persistent labels, password visibility accessible names, gold primary action class, and step text. Keep all existing behavioral assertions unchanged.

- [ ] **Step 2: Run auth tests and confirm the new assertions fail**

Run: `npx vitest run components/auth/authFlows.test.tsx --pool=threads`

Expected: FAIL on the new brand/token assertions while existing behavior remains green.

- [ ] **Step 3: Apply the premium auth system**

Replace legacy navy/blue values with semantic tokens, use the brand mark in the dark panel, simplify decorative circles into one ledger-rule composition, keep the form card white, and use dark text on the gold primary action.

- [ ] **Step 4: Verify all auth behavior**

Run:

```bash
npx vitest run components/auth/authFlows.test.tsx store/useAuthStore.test.ts --pool=threads
npx eslint app/login/page.tsx app/signup/page.tsx components/auth --quiet
npx tsc --noEmit
```

Expected: PASS. Review checkpoint; commit only after user approval.

---

### Task 6: Performance Optimization

**Files:**
- Create: `components/home/LazyClassFinder.tsx`
- Create: `components/home/LazyContactForm.tsx`
- Modify: `app/page.tsx`
- Modify: phase-one image call sites identified by `rg -n "vv\.png|<img" components app`
- Modify: `app/globals.css`
- Test: `lib/deploymentConfig.test.ts`

**Interfaces:**
- Produces viewport-triggered or dynamic lower-page islands with stable reserved dimensions.
- Preserves direct links and server-rendered content before interactive enhancements load.

- [ ] **Step 1: Add failing performance contract checks**

Assert that phase-one files do not import `framer-motion`, `public/vv.png` is no longer referenced, new image calls contain explicit dimensions or `fill` plus `sizes`, and reduced-motion CSS exists.

- [ ] **Step 2: Run the deployment contract and confirm failure**

Run: `npx vitest run lib/deploymentConfig.test.ts --pool=threads`

Expected: FAIL on legacy asset/motion references.

- [ ] **Step 3: Optimize assets and client boundaries**

Convert only images actually retained in phase one, replace raw `<img>` where appropriate, add responsive `sizes`, reserve layout space, and dynamically load `ClassFinderTool` and `Contactform` below the primary narrative. Remove unused homepage imports and motion dependencies from converted components.

- [ ] **Step 4: Add reduced-motion behavior**

Under `@media (prefers-reduced-motion: reduce)`, disable nonessential animation and smooth scrolling while retaining immediate state feedback.

- [ ] **Step 5: Verify performance contracts and production output**

Run:

```bash
npx vitest run lib/deploymentConfig.test.ts --pool=threads
npx eslint app/page.tsx components/home app/globals.css --quiet
npx tsc --noEmit
npm run build
```

Expected: PASS; `out/index.html` exists and no phase-one component references forbidden perpetual animation classes.

Review checkpoint; commit only after user approval.

---

### Task 7: Visual QA, Accessibility, and Release

**Files:**
- Modify only defects found in phase-one files.
- Update: `docs/superpowers/plans/2026-09-29-premium-finance-website-implementation.md` checkboxes.

**Interfaces:**
- Produces the release candidate for Cloudflare static deployment.

- [ ] **Step 1: Run complete automated verification**

```bash
npm test -- --run
npx eslint . --quiet
npx tsc --noEmit
npm run build
git diff --check
```

Expected: all commands exit zero; Next.js exports 49 static routes or the updated intentional route count.

- [ ] **Step 2: Run the mechanical design detector once**

```bash
node C:\Users\satya\.codex\skills\impeccable\scripts\detect.mjs --json app/page.tsx app/login/page.tsx app/signup/page.tsx components/Header.tsx components/Footer.tsx components/home components/auth app/globals.css
```

Resolve phase-one violations in one consolidated pass.

- [ ] **Step 3: Inspect desktop and mobile together**

Capture homepage, login, and signup at approximately 1440px and 390px widths. Check hierarchy, overflow, focus visibility, menu behavior, logo sharpness, image loading, and reduced-motion behavior.

- [ ] **Step 4: Perform one consolidated correction pass**

Fix all defects from desktop/mobile inspection together, then repeat only the affected automated tests and one final screenshot check.

- [ ] **Step 5: Request release approval**

Present test/build evidence, changed-file summary, screenshots, remaining known limitations, and production smoke-test steps. Commit and push only after explicit user approval.

