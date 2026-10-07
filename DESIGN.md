# Legal Dhara Design System

## Direction

**Capital Ledger** combines the authority of legal documents with the precision of an investment statement. The interface is quiet, structured, and mature. It avoids decorative finance clichés, loud gradients, excessive rounded cards, and continuous animation.

The signature element is a slim gold ledger rule derived from the vertical gold stroke in the LD monogram. It appears beside important headings, active navigation states, process milestones, and selected numerical proof—never as general decoration.

## Color Tokens

| Token | Value | Use |
| --- | --- | --- |
| Ink | `#111111` | Primary navigation, dark sections, strong controls |
| Charcoal | `#252525` | Secondary dark surfaces and hover states |
| Legal Gold | `#BC9139` | Primary CTA, active state, icon, key number |
| Warm Paper | `#F7F5F0` | Main page background |
| White | `#FFFFFF` | Cards, forms, elevated content |
| Main Text | `#151515` | Body and heading text |
| Secondary Text | `#747474` | Supporting copy and metadata |
| Ledger Border | `#E7E2D8` | Borders, dividers, input outlines |

Gold must remain below roughly ten percent of a typical viewport. It is not used for long body text or large background fields.

## Typography

- Display headings: a restrained system serif stack (`ui-serif`, Georgia, Cambria) for authority and editorial character.
- Body and interface: a fast system sans stack (`Inter` where available, `ui-sans-serif`, system UI) for clarity and zero external font requests.
- Utility labels: sans-serif, medium weight, compact tracking, sentence case.
- Avoid oversized display text that forces short words across multiple lines on mobile.

## Shape and Structure

- Radius scale: 8px controls, 12px cards, 16px only for major auth panels.
- Shadows are rare and soft; borders and spacing establish most hierarchy.
- Page sections use deliberate vertical rhythm and visible dividers rather than floating card grids everywhere.
- Content width remains readable, with stronger alignment between section headings, copy, and actions.

## Logo Usage

- Header: optimized transparent LD monogram plus “Legal Dhara” wordmark.
- Mobile compact state and favicon: monogram only.
- Preserve the supplied geometry and black/gold proportions.
- Never place the logo on a busy image or recolor the gold stroke.

## Motion

- Motion communicates entry, expansion, or state change only.
- No blinking, shaking, perpetual floating, or ornamental spinning.
- Hover transitions stay between 120–180ms.
- Respect `prefers-reduced-motion` globally.

## Accessibility

- Maintain visible keyboard focus on every interactive element.
- Use the gold accent only where contrast remains sufficient; dark text is used on gold buttons.
- Inputs retain persistent labels and actionable error text.
- Navigation, accordions, and dialogs preserve semantic keyboard behavior.

