# Homepage Motion System Design

## Objective

Create a coordinated, premium motion language across the Legal Dhara homepage without changing layout, factual content, colors, service behavior, or navigation. Motion must clarify hierarchy and state while preserving fast mobile performance.

## Motion Thesis

The homepage behaves like a precise legal ledger coming into order: rules draw, documents reveal through controlled masks, grouped information assembles in sequence, and state changes maintain spatial continuity.

The existing Legal Journey remains the primary authored scroll moment. Other sections use shorter supporting sequences and must not compete through pinning or excessive movement.

## Shared Principles

- Use transforms, opacity, SVG stroke progress, and bounded clip-path reveals.
- Keep scrubbed animations reversible when scrolling upward.
- Keep revealed content visible while continuing downward.
- Use GSAP and ScrollTrigger for scroll-linked sequences already aligned with the homepage stack.
- Use Framer Motion only for state-driven transitions such as tabs and review changes.
- Do not add another animation dependency.
- Avoid bounce, elastic easing, ornamental rotation, large blur, and perpetual floating.
- Keep content visible when JavaScript is unavailable.
- Respect `prefers-reduced-motion` in every animated section.
- Shorten movement, stagger, and scroll ranges on mobile.

## Existing Motion Preserved

### Expert Guidance

Retain the directional image and text reveal. Elements remain visible on downward scroll and reverse only when scrolling upward.

### Expert Network

Retain the network assembly, SVG drawing, divider extension, and mobile per-card triggers.

### Legal Journey

Retain the pinned desktop stepper and reversible scroll progress as the homepage focal animation.

### Service Directory

Retain category artwork transitions, staggered service selection, and animated detail changes.

## New Motion

### Hero

- Draw the short gold brand rule from left to right.
- Reveal the brand note, headline lines, fee statement, supporting copy, and actions in a controlled load sequence.
- Use one short sequence lasting no more than 1.1 seconds.
- Do not animate the background continuously.
- Keep CTA hover feedback at the existing short duration.

### Legal Comparison

- Replace the one-time IntersectionObserver/CSS entrance with a reversible GSAP sequence.
- Reveal the section heading and legend first.
- Assemble each comparison card with a short stagger.
- Within each card, reveal the traditional side, then draw the divider/arrow, then reveal the Legal Dhara side.
- Keep cards visible after the reveal completes.
- On mobile, animate each card independently as it approaches the viewport.

### Trademark Class Library

- Reveal the heading, search field, and class count as a coordinated editorial header.
- Uncover the archival-box artwork using a vertical mask with slight scale correction.
- Reveal the featured class number, title, list, and related classes as indexed records.
- Draw benefit dividers and reveal benefit items in a compact sequence.
- Do not animate form controls while the user is interacting with them.

### Trust Section

- Keep the certification and message entrance restrained.
- Keep the ecosystem marquee moving left to right.
- Pause the marquee when the section is outside the viewport, when the page is hidden, on hover/focus, or for reduced-motion users.
- Avoid adding motion to the institutional marks after their initial reveal.

### Review Showcase

- Reveal the summary, metrics, and diary artwork on section entry.
- Replace abrupt review body changes with directional transitions.
- Next review enters from the right; previous review enters from the left.
- Exit duration is shorter than entrance duration.
- Keep autoplay paused on hover, keyboard focus, reduced motion, and hidden tabs.
- Keep control buttons immediately responsive.

### Expert Consultation

- Reveal the photographic side through a restrained curtain mask.
- Reveal visual copy from the lower edge of its image area.
- Reveal the form rule and heading, followed by fields in a short stagger.
- Never delay focus, validation, typing, or submission.
- Once revealed, the form remains fully visible.

### Support Dashboard

- Reveal the heading before the dashboard preview.
- Assemble the dashboard shell through a small scale and mask correction.
- Draw the progress line from Request to Review.
- Reveal request cards and support card sequentially.
- Reveal benefit cards as one grouped list with a capped stagger.
- Do not simulate repeated activity or loop dashboard states.

## Responsive Behavior

### Desktop

- Use section-level timelines for grouped compositions.
- Maximum spatial travel is approximately 72 pixels.
- No new pinned sections.

### Mobile

- Maximum spatial travel is approximately 32 pixels.
- Use per-card triggers for tall stacked sections.
- Avoid simultaneous animation of off-screen content.
- Preserve horizontal tab and marquee usability.

## Accessibility

- Reduced-motion mode removes scrubbed spatial travel and continuous marquee movement.
- Focus outlines remain visible and animation never replaces semantic state.
- Carousel announcements remain limited to the active review.
- Decorative duplicate marquee content remains hidden from assistive technology.
- Animations must not leave invisible interactive elements focusable.

## Performance Budget

- Prefer transform and opacity.
- Restrict clip-path animation to one or two major surfaces per section.
- Do not animate layout properties such as width, height, margin, or positioning.
- Avoid persistent `will-change`; use it only on active marquee or known animation surfaces.
- Pause all nonessential loops when off-screen or when the document is hidden.
- Reuse the current GSAP, ScrollTrigger, Framer Motion, and Lenis stack.

## Implementation Boundaries

- Animation changes stay inside homepage components and homepage styles.
- No service copy, API, form payload, route, authentication, or payment changes.
- Existing uncommitted homepage animation work remains part of the same visual pass.

## Verification

- Add focused source/behavior tests for each new animation contract.
- Run focused tests during implementation.
- At finalization, run the complete homepage tests, lint, type checking/build, and the Impeccable detector once.
- Perform one desktop and one mobile visual review after all motion is implemented.
