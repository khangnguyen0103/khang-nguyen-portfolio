# Plan: Creative Refresh + Theme Switch

Inspired by the vibe of the portfolios shared in that Reddit thread (Bruno Simon / Cassie Codes / Olivier Larose style — playful motion, strong typography, a clear day↔night switch), we'll level up animation polish and add a background/theme toggle.

## 1. Theme switch (light cream ↔ dark)

- Add a `ThemeProvider` (small context, no extra deps) that toggles a `dark` class on `<html>` and persists to `localStorage`.
- Extend `src/index.css` with a `.dark` block defining dark equivalents of the existing HSL tokens (deep charcoal `--background`, warm cream `--foreground`, dimmer `--warm`, etc.) so every component re-themes automatically.
- Add a `ThemeToggle` button in `Header.tsx` (sun/moon icons from `lucide-react`) — animated icon crossfade + rotate using framer-motion. Mobile menu gets it too.
- Update `tailwind.config.ts` to ensure `darkMode: ["class"]` (it already is in shadcn setups — verify).

## 2. Creative animation upgrades

**Global**
- Custom cursor follower: small circle that lerps to the mouse, scales up on hover over links/buttons. Hidden on touch devices. New file `src/components/portfolio/Cursor.tsx`, mounted in `Index.tsx`.
- Animated background layer: subtle moving radial gradient + grain (SVG noise) behind the hero, theme-aware. New file `src/components/portfolio/AnimatedBackground.tsx`.

**Hero**
- Replace the simple word-by-word fade with a **letter mask reveal** ("I'm Khang Nguyen" letters slide up from behind a clip-path).
- Add a slow floating motion to the warm "Nguyen," word.
- Magnetic buttons: "See my work" / "Get in touch" gently follow the cursor when nearby.

**Header**
- Logo circle: on hover, the dashed ring speeds up and the inner image scales subtly.
- Nav links: animated underline already exists — add a tiny vertical letter-shift on hover (`hover:-translate-y-0.5`).

**Projects**
- Replace the static cards with a scroll-driven reveal: each card slides in from alternating sides with a slight rotate, and the `01/02/03` numerals scale + fade as they enter the viewport (`useScroll` + `useTransform`).
- On hover, an `ArrowUpRight` slides diagonally and a thin warm line draws across the bottom of the card.

**New: Marquee strip**
- Between AboutCards and Projects, add an infinite horizontal marquee of keywords ("Data · ML · Strategy · Python · SQL · Insight · …") in large serif italic — pure CSS `animate-[marquee_30s_linear_infinite]`. Adds movement without being noisy.

## 3. Files

```text
NEW   src/components/theme/ThemeProvider.tsx
NEW   src/components/theme/ThemeToggle.tsx
NEW   src/components/portfolio/Cursor.tsx
NEW   src/components/portfolio/AnimatedBackground.tsx
NEW   src/components/portfolio/Marquee.tsx
EDIT  src/index.css            (dark tokens, marquee keyframes, noise utility)
EDIT  tailwind.config.ts       (confirm darkMode class, add marquee keyframes)
EDIT  src/main.tsx             (wrap App in ThemeProvider)
EDIT  src/pages/Index.tsx      (mount Cursor, AnimatedBackground, Marquee)
EDIT  src/components/portfolio/Header.tsx   (ThemeToggle)
EDIT  src/components/portfolio/Hero.tsx     (letter reveal, magnetic buttons)
EDIT  src/components/portfolio/Projects.tsx (scroll-driven reveal, hover line)
```

## 4. Notes

- All new motion respects `prefers-reduced-motion` (skip cursor + marquee, keep simple fades).
- No new dependencies — `framer-motion` and `lucide-react` are already installed.
- Theme persists across reloads; default = light cream (current look).

Approve this and I'll implement it in one pass.