## Goal

Push the portfolio from "polished but normal" into something memorable — the kind of editorial / award-style site where every section has its own identity, motion, and personality. Plus fix the current build error.

## 0. Fix the build (prerequisite)

`framer-motion` v11 typing rejects `ease: [n,n,n,n]` widened to `number[]`. Add `as const` to every shared `quickReveal` constant in `Hero.tsx`, `Projects.tsx`, `AboutCards.tsx`, `AboutMe.tsx`, `Contact.tsx`. No behavior change.

## 1. Hero — cinematic intro

- **Letter-by-letter mask reveal** for "Khang Nguyen" — each glyph slides up from a clipped row with staggered delay (40ms per char), in italic serif. Adds a real "title sequence" feel.
- **Floating eyebrow chips** ("Data Science", "ML", "Strategy") that drift slowly in the background behind the headline using `useMotionValue` + slow sine.
- **Parallax portrait**: the photo tile tilts slightly toward the cursor (rotateX/Y up to ~6°) with a soft glow that follows the mouse — gives it a "card under glass" feel.
- **Scroll-driven headline**: as the user scrolls down, the headline scales slightly and the subtitle fades, so the hero "compresses" into the page rather than just disappearing.
- Replace the long bio block with a tighter, two-line lead and move the full bio into AboutMe so the hero breathes.

## 2. About cards — magnetic 3D tilt

- Replace the current static cards with **3D tilt cards** (rotateX/Y based on cursor, ~8° max), with a soft warm gradient that follows the cursor inside each card.
- Numbers ("01 / 02 / 03") become **oversized serif numerals** that sit half-behind the card, breaking the grid edge — editorial magazine style.
- On hover, the card lifts and casts a colored shadow keyed off `--warm`.

## 4. Projects — horizontal pinned scroll

Convert the projects list from vertical cards into a **horizontally pinned scroll section** (the page scroll-locks while projects slide in horizontally). Each project gets:

- A big serif numeral (01 / 02 / 03) that animates in from offscreen.
- A motion-blurred image / abstract gradient panel that scales as the card enters the viewport.
- A "View Project" link with an animated underline draw and arrow that springs.
- Smooth fallback on mobile (regular vertical stack — the pinned scroll only kicks in ≥ lg).

Implementation: `useScroll` + `useTransform` on a tall outer wrapper; inner track translates X based on scroll progress.

## 6. Contact — interactive sign-off

- Replace the static heading with a **scramble-text effect** on "meaningful" (letters glitch through random chars before settling) on first reveal.
- Email button becomes a **magnetic pill with copy-to-clipboard** ("Click to copy" → "Copied ✓" toast).
- Social buttons get the same magnetic + 3D tilt treatment as About cards for consistency.

## 7. Theme toggle upgrade

Animate the toggle as a **morphing sun↔moon SVG** with a circular wipe of the page background when switching (radial-clip-path expanding from the toggle's position) — way more memorable than a snap swap.

## Technical notes

- All new motion uses `framer-motion` (already installed). No new deps required.
- Respect `prefers-reduced-motion`: disable parallax, tilt, scramble, and pinned-scroll for users who request it.
- Keep mobile experience clean — heavy effects (pinned scroll, 3D tilt, parallax) gate on `lg` breakpoint or pointer:fine.
- Performance: throttle pointer-driven effects with `requestAnimationFrame`, use `will-change: transform` only on actively-animating nodes.

## Files touched

- Edit: `Hero.tsx`, `AboutCards.tsx`, `AboutMe.tsx`, `Projects.tsx`, `Contact.tsx`, `Marquee.tsx`, `Cursor.tsx`, `AnimatedBackground.tsx`, `ThemeToggle.tsx`, `index.css`, `pages/Index.tsx`.
- New: `src/components/portfolio/SectionIndicator.tsx`, `src/components/portfolio/TiltCard.tsx`, `src/components/portfolio/ScrambleText.tsx`, `src/components/portfolio/SplitText.tsx`.

## What you'll notice

A site that feels designed, not templated: a title-sequence hero, tilting cards, horizontal projects, a scramble headline, a circular-wipe theme toggle, and a cursor that actually feels alive.