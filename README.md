# HelpMyCoach — Marketing for Spiritual Coaches & Healers

A modern, animated, responsive landing page for **HelpMyCoach** — a fictional digital marketing company that works exclusively with spiritual coaches, healers, astrologers, Reiki practitioners, Vastu consultants, tarot readers and similar professionals.

Built as a frontend challenge project. The goal was not to copy the existing [helpmycoach.com](https://helpmycoach.com/) site, but to redesign the experience from scratch with original UI/UX, animation, and interaction thinking.

## ✨ Highlights

- **Distinctive "cosmic-gold" design system** — a deep midnight-cosmos palette with warm gold accents, built with `oklch` tokens in `src/styles.css`.
- **Animated hero** — twinkling starfield, cosmic background image, staggered entrance animations.
- **Interactive process timeline** — a vertical timeline with an animated progress line that fills as you scroll (`motion` `useScroll`).
- **Pricing with a billing toggle** — switch between monthly and quarterly (≈2 months free) with animated price transitions.
- **Animated stat counters** that count up when scrolled into view.
- **Testimonial carousel** with autoplay and manual controls.
- **Working audit form** — `react-hook-form` + `zod` validation, simulated submission with a success state (no backend).
- **Interactive FAQ accordion** — animated expand/collapse with `aria-expanded`.
- **Fully responsive** — desktop, tablet, and mobile layouts.
- **Accessible** — semantic HTML, keyboard-navigable controls, labelled inputs, focus styles.
- **Emojis** used as lightweight iconography for each spiritual niche.

## 🧩 Sections

1. Hero — who it's for, what they do, why care, + "Get Your Free Coach Presence Audit" CTA
2. Who We Help — 8 spiritual niches as interactive cards
3. The Problem — 5 common problems spiritual coaches face
4. Why HelpMyCoach — differentiation + "handled for you" panel
5. How It Works — Discovery → Strategy → Content → Editing → Publishing → Review
6. Pricing — Spark (₹14,999), Grow (₹24,999), Authority (₹39,999)
7. Social Proof — animated stats + testimonial carousel
8. Free Audit CTA — working form (name, niche, Instagram handle)
9. FAQ — interactive accordion
10. Final CTA + Footer

## 🚀 Getting started

### Prerequisites

- Node.js 20+ (or [Bun](https://bun.sh))
- npm / bun

### Install

```bash
bun install
# or
npm install
```

### Run locally

```bash
bun run dev
# or
npm run dev
```

The dev server runs at `http://localhost:8080`.

### Build

```bash
bun run build
```

## 🛠 Technologies used

- **React 19** + **TypeScript**
- **TanStack Start** (full-stack React framework, Vite 7)
- **Tailwind CSS v4** (native CSS `@import` + `@theme` tokens)
- **Motion** (Framer Motion) — scroll & interaction animations
- **lucide-react** — icons
- **react-hook-form** + **zod** — form validation
- **shadcn/ui** component primitives

## 📚 Libraries used

| Library | Purpose |
| --- | --- |
| `motion` | Scroll-reveal, timeline progress, carousel, micro-interactions |
| `lucide-react` | UI icons |
| `react-hook-form` + `@hookform/resolvers` | Audit form state & validation |
| `zod` | Schema validation |
| `tailwindcss` + `tw-animate-css` | Styling & animation utilities |
| `sonner` | Toast notifications |

## 🤔 Assumptions

- No backend is required (per the brief); the audit form simulates submission with frontend state.
- Pricing is shown in INR with a quarterly option that gives ~2 months free (pay for 10, not 12).
- The brand is fictional; social links in the footer are placeholders.

## 🧠 Interesting technical decisions

- **Deterministic starfield** — star positions are derived from the index (`(i * 53) % 100`) rather than `Math.random()` to avoid SSR hydration mismatches.
- **`oklch` color tokens** — the entire palette uses the perceptually-uniform `oklch` color space for consistent lightness across the gold/cosmos range.
- **Component-based architecture** — each section is its own component; all content lives in a single data file (`src/lib/site-data.ts`) for easy editing.
- **Scroll-linked progress** — the timeline uses `useScroll` + `useSpring` so the progress line fills smoothly as the section scrolls through the viewport.

See [`AI_USAGE.md`](./AI_USAGE.md) for how AI was used in this project.
