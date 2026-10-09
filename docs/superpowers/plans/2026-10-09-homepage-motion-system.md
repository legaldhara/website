# Homepage Motion System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a coordinated, reversible, premium motion system to the remaining Legal Dhara homepage sections without changing layout, copy, routes, or feature behavior.

**Architecture:** Keep animation ownership inside each homepage component so timelines remain scoped, responsive, and easy to clean up. Use GSAP/ScrollTrigger for scroll-linked section choreography, Framer Motion for review state transitions, and CSS only for the hero load sequence and existing ecosystem marquee. Preserve server rendering where possible and make the visible static state the no-JavaScript and reduced-motion fallback.

**Tech Stack:** Next.js 16, React 18, TypeScript, CSS Modules, GSAP 3, `@gsap/react`, ScrollTrigger, Framer Motion 12, Vitest.

**Spec:** `docs/superpowers/specs/2026-10-09-homepage-motion-system-design.md`

## Global Constraints

- Do not change homepage layout, factual copy, palette, links, forms, API payloads, authentication, or payment behavior.
- Reuse the installed GSAP, ScrollTrigger, Framer Motion, and Lenis dependencies; add no animation package.
- Use transforms, opacity, SVG stroke progress, and bounded clip-path reveals; do not animate layout properties.
- Keep scrubbed animations reversible when scrolling upward and visible after completing while scrolling downward.
- Keep the existing Expert Guidance, Expert Network, Legal Journey, and Service Directory motion behavior intact.
- Respect `prefers-reduced-motion`; all content and controls remain immediately visible and usable.
- Desktop movement must not exceed approximately 72px; mobile movement must not exceed approximately 32px.
- Add no pinned section beyond the existing Legal Journey sequence.
- Run focused tests during implementation; defer the complete test/lint/build suite and visual review until the final task.
- Do not create commits unless the user explicitly requests them.

## File Structure

- `app/home1/HomePage.tsx`: adds semantic hero motion hooks only; remains a server component.
- `app/home1/home1.module.css`: owns the short hero load sequence and reduced-motion fallback.
- `components/home1/LegalComparison.tsx`: replaces one-shot IntersectionObserver state with scoped ScrollTrigger timelines.
- `components/home1/LegalComparison.module.css`: removes the old keyframe entrance and exposes divider/card motion surfaces.
- `components/home1/TrademarkClassLibrary.tsx`: becomes a small client component with a scoped editorial timeline.
- `components/home1/TrademarkClassLibrary.module.css`: exposes artwork mask and benefit-divider motion surfaces.
- `components/home1/TrustSection.tsx`: owns restrained entry motion plus marquee viewport/visibility lifecycle.
- `components/home1/TrustSection.module.css`: applies the paused marquee state and reduced-motion static layout.
- `components/home1/ReviewShowcase.tsx`: owns section entrance, directional review state, autoplay lifecycle, and AnimatePresence transitions.
- `components/home1/ReviewShowcase.module.css`: removes the old fixed-direction keyframe and supports the Framer transition surface.
- `components/home1/ExpertConsultation.tsx`: owns a scoped image/form entrance timeline without affecting form behavior.
- `components/home1/ExpertConsultation.module.css`: exposes curtain and field animation surfaces.
- `components/home1/SupportSection.tsx`: becomes a client component with a dashboard assembly timeline.
- `components/home1/SupportSection.module.css`: exposes progress-line and dashboard reveal surfaces.
- `lib/*Animation.test.ts`: source-contract tests that verify hooks, cleanup, responsive triggers, reduced-motion handling, and removal of superseded animation code.

---

### Task 1: Hero Load Sequence

**Files:**
- Modify: `app/home1/HomePage.tsx`
- Modify: `app/home1/home1.module.css`
- Create: `lib/heroMotion.test.ts`

**Interfaces:**
- Consumes: existing hero markup and CSS module classes.
- Produces: `data-hero-motion` hooks for the brand rule, brand copy, headline lines, fee statement, supporting copy, and actions.

- [ ] **Step 1: Write the failing source-contract test**

Create `lib/heroMotion.test.ts`:

```ts
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("homepage hero motion", () => {
  it("stages the hero once without making the server page a client component", () => {
    const component = readFileSync("app/home1/HomePage.tsx", "utf8");
    const styles = readFileSync("app/home1/home1.module.css", "utf8");

    expect(component).not.toContain('"use client"');
    expect(component).toContain("data-hero-motion");
    expect(component).toContain("data-hero-rule");
    expect(styles).toContain("@keyframes heroRuleDraw");
    expect(styles).toContain("@keyframes heroContentReveal");
    expect(styles).toContain("prefers-reduced-motion: reduce");
    expect(styles).not.toContain("animation-iteration-count: infinite");
  });
});
```

- [ ] **Step 2: Run the focused test and confirm failure**

Run: `npm test -- lib/heroMotion.test.ts`

Expected: FAIL because the data hooks and keyframes do not exist.

- [ ] **Step 3: Add semantic motion hooks to the existing hero**

Add `data-hero-motion` to the brand note copy, each headline line, fee statement, supporting copy, and actions. Add `data-hero-rule` to the gold rule. Do not wrap or reorder existing content.

```tsx
<span className={styles.brandRule} data-hero-rule />
<p data-hero-motion style={{ "--hero-order": 0 } as CSSProperties}>Legal Dhara</p>
<span data-hero-motion style={{ "--hero-order": 1 } as CSSProperties}>...</span>
```

Import `type CSSProperties` from React and continue the order through the actions container.

- [ ] **Step 4: Implement the bounded CSS sequence**

In `app/home1/home1.module.css`, draw the rule with `scaleX` and reveal content with `opacity`, `translateY`, and a short `clip-path`. Keep total delay plus duration under 1.1 seconds.

```css
[data-hero-rule] {
  transform: scaleX(0);
  transform-origin: left center;
  animation: heroRuleDraw 480ms cubic-bezier(.16, 1, .3, 1) 80ms both;
}

[data-hero-motion] {
  animation: heroContentReveal 620ms cubic-bezier(.16, 1, .3, 1) both;
  animation-delay: calc(120ms + var(--hero-order, 0) * 70ms);
}

@keyframes heroRuleDraw { to { transform: scaleX(1); } }
@keyframes heroContentReveal {
  from { opacity: 0; transform: translateY(22px); clip-path: inset(0 0 18% 0); }
  to { opacity: 1; transform: translateY(0); clip-path: inset(0); }
}

@media (prefers-reduced-motion: reduce) {
  [data-hero-rule], [data-hero-motion] { animation: none; transform: none; clip-path: none; }
}
```

- [ ] **Step 5: Run the focused test**

Run: `npm test -- lib/heroMotion.test.ts`

Expected: PASS.

---

### Task 2: Reversible Legal Comparison Assembly

**Files:**
- Modify: `components/home1/LegalComparison.tsx`
- Modify: `components/home1/LegalComparison.module.css`
- Create: `lib/legalComparisonAnimation.test.ts`

**Interfaces:**
- Consumes: GSAP registration pattern already used by `ExpertNetwork.tsx`.
- Produces: `data-comparison-heading`, `data-comparison-legend`, `data-comparison-card`, `data-comparison-traditional`, `data-comparison-divider`, and `data-comparison-modern` hooks.

- [ ] **Step 1: Write the failing source-contract test**

Assert that the component imports `useGSAP`, `gsap`, and `ScrollTrigger`; uses all six data hooks; defines `scrub`; uses `trigger: card` for the mobile branch; and no longer contains `IntersectionObserver`, `useState`, `isRevealed`, or the CSS `revealCard` keyframe.

- [ ] **Step 2: Run the focused test and confirm failure**

Run: `npm test -- lib/legalComparisonAnimation.test.ts`

Expected: FAIL on the missing GSAP imports and old observer implementation.

- [ ] **Step 3: Replace one-time state with a scoped GSAP timeline**

Follow the registration and cleanup pattern from `ExpertNetwork.tsx`:

```ts
const sectionRef = useRef<HTMLElement>(null);

useGSAP(() => {
  const section = sectionRef.current;
  if (!section) return;
  const media = gsap.matchMedia();

  media.add({ desktop: "(min-width: 900px)", reduceMotion: "(prefers-reduced-motion: reduce)" }, (context) => {
    const { desktop, reduceMotion } = context.conditions as { desktop: boolean; reduceMotion: boolean };
    if (reduceMotion) return;
    // Desktop: one section timeline. Mobile: one timeline per card.
  });

  return () => media.revert();
}, { scope: sectionRef });
```

Desktop order: heading/intro, legend, then each card. Within each card animate traditional half, divider scale, and modern half. Use `ease: "none"`, `scrub: 0.75`, `start: "top 86%"`, and `end: "center 34%"`. Use no exit tween.

- [ ] **Step 4: Add mobile per-card timelines and reduced-motion fallback**

For widths below 900px, animate each card with `trigger: card`, `start: "top 92%"`, `end: "top 56%"`, `scrub: 0.6`, and movement capped at 24px. Keep heading and legend in one short section timeline.

- [ ] **Step 5: Remove superseded CSS keyframes**

Delete `.revealed .card`, `@keyframes revealCard`, and `--comparison-order` usage. Keep hover elevation. Set divider transform origin in CSS so GSAP can animate `scaleX` on desktop and `scaleY` only if the mobile layout requires it.

- [ ] **Step 6: Run the focused test**

Run: `npm test -- lib/legalComparisonAnimation.test.ts`

Expected: PASS.

---

### Task 3: Trademark Class Library Editorial Reveal

**Files:**
- Modify: `components/home1/TrademarkClassLibrary.tsx`
- Modify: `components/home1/TrademarkClassLibrary.module.css`
- Create: `lib/trademarkClassLibraryAnimation.test.ts`

**Interfaces:**
- Consumes: existing class library content and search form.
- Produces: `data-class-header`, `data-class-search`, `data-class-artwork`, `data-class-record`, `data-class-benefit`, and `data-class-divider` hooks.

- [ ] **Step 1: Write the failing source-contract test**

Verify the component is a client component, imports the GSAP stack, includes each data hook, uses `clipPath`, `scrub`, `gsap.matchMedia`, and a reduced-motion condition. Verify the form action and input name remain unchanged.

- [ ] **Step 2: Run the focused test and confirm failure**

Run: `npm test -- lib/trademarkClassLibraryAnimation.test.ts`

Expected: FAIL because the component is currently static.

- [ ] **Step 3: Add scoped motion hooks without changing document structure**

Attach header hooks to the title group and class count, search hook to the form and suggestions, artwork hook to the figure, record hooks to featured/other class content, benefit hooks to each benefit, and divider hooks to existing border/rule surfaces.

- [ ] **Step 4: Build the desktop editorial timeline**

Create one section timeline with `start: "top 84%"`, `end: "center 30%"`, `scrub: 0.8`. Reveal header copy, search, artwork mask, indexed records, and benefits in that order. Use a vertical artwork mask from `clipPath: "inset(100% 0 0 0)"` with scale from `1.035` to `1`.

- [ ] **Step 5: Add mobile sequencing and interaction safety**

Cap mobile travel at 26px and avoid animating the input/button after the search form has entered. The timeline may reveal the form container but must not target input value, focus, pointer events, width, or height.

- [ ] **Step 6: Run the focused test**

Run: `npm test -- lib/trademarkClassLibraryAnimation.test.ts`

Expected: PASS.

---

### Task 4: Trust Entry and Marquee Lifecycle

**Files:**
- Modify: `components/home1/TrustSection.tsx`
- Modify: `components/home1/TrustSection.module.css`
- Modify: `lib/ecosystemMarquee.test.ts`
- Create: `lib/trustSectionAnimation.test.ts`

**Interfaces:**
- Consumes: the existing duplicated CSS marquee and logo list.
- Produces: `isMarqueePaused` state derived from viewport presence, document visibility, hover/focus, and reduced-motion; scoped entry hooks for marks, message, benefits, and CTA.

- [ ] **Step 1: Extend the marquee contract test**

Add assertions for `document.addEventListener("visibilitychange"`, an IntersectionObserver that does not disconnect after first entry, `isMarqueePaused`, and a `styles.marqueePaused` class. Keep the existing logo, duplicate-track, left-to-right, and reduced-motion assertions.

- [ ] **Step 2: Add a failing trust entrance test**

Create `lib/trustSectionAnimation.test.ts` and assert GSAP imports plus `data-trust-mark`, `data-trust-message`, `data-trust-benefit`, and `data-trust-action` hooks. Assert the old `isRevealed` one-time class is removed.

- [ ] **Step 3: Run both focused tests and confirm failure**

Run: `npm test -- lib/ecosystemMarquee.test.ts lib/trustSectionAnimation.test.ts`

Expected: FAIL on lifecycle and GSAP requirements.

- [ ] **Step 4: Implement persistent marquee pause state**

Track four booleans: section in viewport, document visible, user hover/focus pause, and reduced motion. Compute:

```ts
const isMarqueePaused = !isInViewport || !isDocumentVisible || isInteractionPaused || reduceMotion;
```

Use one IntersectionObserver that updates on every entry change and a `visibilitychange` listener with cleanup. Apply `styles.marqueePaused` to the viewport or track. Preserve the existing hover/focus CSS as a progressive fallback.

- [ ] **Step 5: Replace the one-time reveal with restrained GSAP entry**

Use one non-pinned scrubbed section timeline. Marks enter with a short stagger and no rotation; message copy follows; benefit icons/copy follow; CTA enters last. Maximum travel is 38px desktop and 22px mobile.

- [ ] **Step 6: Add the paused CSS class**

```css
.marqueePaused .marqueeTrack { animation-play-state: paused; }
```

Ensure reduced motion leaves one readable static row and no transform that hides the first logo group.

- [ ] **Step 7: Run both focused tests**

Run: `npm test -- lib/ecosystemMarquee.test.ts lib/trustSectionAnimation.test.ts`

Expected: PASS.

---

### Task 5: Directional Review Showcase

**Files:**
- Modify: `components/home1/ReviewShowcase.tsx`
- Modify: `components/home1/ReviewShowcase.module.css`
- Create: `lib/reviewShowcaseMotion.test.ts`

**Interfaces:**
- Consumes: `reviews`, `activeIndex`, existing previous/next controls, and current pause behavior.
- Produces: `direction: -1 | 1`, AnimatePresence variants, document visibility pause, and scroll-entry hooks for summary, metrics, artwork, and card.

- [ ] **Step 1: Write the failing source-contract test**

Assert imports from `framer-motion`; `AnimatePresence` uses `custom={direction}`; review variants define directional `enter` and `exit`; previous sets `-1`; next/autoplay set `1`; `visibilitychange` pauses autoplay; GSAP hooks cover summary, metrics, artwork, and card; the old `@keyframes reviewEnter` is removed.

- [ ] **Step 2: Run the focused test and confirm failure**

Run: `npm test -- lib/reviewShowcaseMotion.test.ts`

Expected: FAIL because review changes currently use a fixed CSS animation.

- [ ] **Step 3: Add directional review state and variants**

```ts
type ReviewDirection = -1 | 1;
const [direction, setDirection] = useState<ReviewDirection>(1);

const reviewVariants = {
  enter: (direction: ReviewDirection) => ({ opacity: 0, x: direction * 28 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: ReviewDirection) => ({ opacity: 0, x: direction * -18 }),
};
```

Wrap the changing review body/footer identity in `AnimatePresence` and a keyed `motion.div`. Use an entrance transition around 420ms and exit around 220ms. For reduced motion, resolve x to zero and duration to zero.

- [ ] **Step 4: Harden autoplay lifecycle**

Pause when hovered, keyboard-focused, document-hidden, or reduced motion. Keep both buttons synchronous and immediately responsive. Autoplay sets direction to `1` before advancing.

- [ ] **Step 5: Add the section entrance timeline**

Use GSAP for a single entry sequence: summary copy, metrics/divider, diary artwork mask, then review card. Keep this independent from review changes and do not animate control availability.

- [ ] **Step 6: Remove the old CSS body keyframe and run the test**

Run: `npm test -- lib/reviewShowcaseMotion.test.ts`

Expected: PASS.

---

### Task 6: Expert Consultation Curtain and Form Reveal

**Files:**
- Modify: `components/home1/ExpertConsultation.tsx`
- Modify: `components/home1/ExpertConsultation.module.css`
- Create: `lib/expertConsultationAnimation.test.ts`

**Interfaces:**
- Consumes: existing controlled form state and submit handler unchanged.
- Produces: `data-consultation-visual`, `data-consultation-copy`, `data-consultation-form-heading`, and `data-consultation-field` hooks.

- [ ] **Step 1: Write the failing source-contract test**

Assert GSAP imports, the four hooks, scoped `useGSAP`, `clipPath`, reduced-motion handling, and that `handleSubmit`, `publicApi.post`, validation strings, button disabled state, and input names remain present.

- [ ] **Step 2: Run the focused test and confirm failure**

Run: `npm test -- lib/expertConsultationAnimation.test.ts`

Expected: FAIL because the section has no timeline.

- [ ] **Step 3: Add non-blocking motion hooks**

Attach the visual hook to the image panel, copy hooks to the existing visual copy/note, heading hooks to the form rule/title/lead, and field hooks to each label, submit button, and privacy line. Do not wrap inputs in an element that changes form semantics.

- [ ] **Step 4: Implement one reversible section timeline**

Reveal the visual with `clipPath: "inset(0 100% 0 0)"` to `inset(0)`, then visual copy from 28px below. Reveal form rule/title and fields with a capped 55ms stagger. Use `start: "top 86%"`, `end: "center 34%"`, and `scrub: 0.75`.

- [ ] **Step 5: Guarantee immediate form usability**

Never animate `pointer-events`, `display`, `visibility`, field dimensions, or disabled state. Reduced-motion exits before setting any animation state. Keep submission and validation logic byte-for-byte unchanged except for hook attributes/ref plumbing.

- [ ] **Step 6: Run the focused test**

Run: `npm test -- lib/expertConsultationAnimation.test.ts`

Expected: PASS.

---

### Task 7: Support Dashboard Assembly

**Files:**
- Modify: `components/home1/SupportSection.tsx`
- Modify: `components/home1/SupportSection.module.css`
- Create: `lib/supportSectionAnimation.test.ts`

**Interfaces:**
- Consumes: existing dashboard mockup and benefit list.
- Produces: `data-support-intro`, `data-support-dashboard`, `data-support-progress`, `data-support-request`, and `data-support-benefit` hooks plus `--support-progress`.

- [ ] **Step 1: Write the failing source-contract test**

Assert the component becomes a client component, imports the GSAP stack, has every data hook, animates `--support-progress`, uses scrubbed ScrollTrigger, includes a mobile matchMedia branch, and handles reduced motion.

- [ ] **Step 2: Run the focused test and confirm failure**

Run: `npm test -- lib/supportSectionAnimation.test.ts`

Expected: FAIL because the component is static.

- [ ] **Step 3: Add animation hooks and CSS progress variable**

Add data hooks without changing dashboard semantics. Replace the completed-line visual width mechanism with a transform driven by a custom property:

```css
.progressDone {
  transform: scaleX(var(--support-progress, 1));
  transform-origin: left center;
}
```

The static default remains `1` so content is complete without JavaScript.

- [ ] **Step 4: Build the desktop assembly timeline**

Sequence intro, dashboard shell mask/scale correction, top bar/nav, dashboard heading, progress draw, request/support cards, then benefit list. Use no simulated repeated updates and no looping glow. Cap benefit stagger at 0.08 seconds.

- [ ] **Step 5: Build the mobile branch**

Use a shorter section timeline for intro/dashboard, then animate each benefit when it approaches the viewport. Cap movement at 24px and avoid animating hidden desktop navigation.

- [ ] **Step 6: Run the focused test**

Run: `npm test -- lib/supportSectionAnimation.test.ts`

Expected: PASS.

---

### Task 8: Final Motion Verification and Polish

**Files:**
- Modify only if verification reveals a motion-system defect in the files above.
- Test: all homepage motion tests and existing website tests.

**Interfaces:**
- Consumes: all motion contracts from Tasks 1–7 plus the existing Expert Guidance, Expert Network, Legal Journey, Service Directory, and smooth-scroll behavior.
- Produces: a verified homepage motion pass ready for user review and an optional later commit/push request.

- [ ] **Step 1: Run all focused homepage motion tests**

Run:

```powershell
npm test -- lib/heroMotion.test.ts lib/expertGuidanceAnimation.test.ts lib/expertNetworkAnimation.test.ts lib/legalJourneyAnimation.test.ts lib/legalComparisonAnimation.test.ts lib/serviceDirectoryTabs.test.ts lib/trademarkClassLibraryAnimation.test.ts lib/ecosystemMarquee.test.ts lib/trustSectionAnimation.test.ts lib/reviewShowcaseMotion.test.ts lib/expertConsultationAnimation.test.ts lib/supportSectionAnimation.test.ts
```

Expected: all listed tests PASS.

- [ ] **Step 2: Run static validation**

Run: `git diff --check`

Expected: no whitespace errors.

Run: `npm run lint`

Expected: exit code 0; pre-existing warnings may be reported separately but no new errors are accepted.

- [ ] **Step 3: Run the complete test suite**

Run: `npm test`

Expected: all tests PASS.

- [ ] **Step 4: Run the production build**

Run: `npm run build`

Expected: Next.js production build completes successfully.

- [ ] **Step 5: Run the Impeccable detector once**

Run:

```powershell
node C:\Users\satya\.codex\skills\impeccable\scripts\detect.mjs --json app/home1/HomePage.tsx app/home1/home1.module.css components/home1/LegalComparison.tsx components/home1/LegalComparison.module.css components/home1/TrademarkClassLibrary.tsx components/home1/TrademarkClassLibrary.module.css components/home1/TrustSection.tsx components/home1/TrustSection.module.css components/home1/ReviewShowcase.tsx components/home1/ReviewShowcase.module.css components/home1/ExpertConsultation.tsx components/home1/ExpertConsultation.module.css components/home1/SupportSection.tsx components/home1/SupportSection.module.css
```

Expected: review findings once; fix only issues introduced by this motion pass.

- [ ] **Step 6: Perform desktop visual review**

At approximately 1440px width, verify: hero sequence completes once; no section fades away on downward scroll; Legal Journey remains the only pinned focal moment; comparison halves read in order; marquee pauses off-screen; review direction matches controls; form remains immediately interactive; support progress draws once per scroll direction.

- [ ] **Step 7: Perform mobile visual review**

At approximately 390px width, verify: travel stays short; tall card sections trigger independently; no horizontal overflow; tab/carousel controls remain responsive; forms can be focused during/after reveal; reduced motion shows all content and a static ecosystem row.

- [ ] **Step 8: Report results without committing**

Summarize changed files, focused/full verification outcomes, and any unrelated pre-existing warnings. Ask the user whether they want the completed motion pass committed and pushed.
