# Black's Tire and Auto Service — Concept Redesign

An unofficial, fan-built concept redesign of [blackstire.com](https://www.blackstire.com/) — a real 60+ location tire and auto service chain across North Carolina & South Carolina. Built as a design/engineering demo by **KB Creative AI Studio**.

**This is not the real Black's Tire and Auto Service website and is not affiliated with, endorsed by, or operated by that business.** Real business facts (name, tagline, services, tire brands, city footprint, public customer reviews) were pulled directly from their live site to keep the redesign accurate. Any phone number, email, or "book now" flow on this page is a non-functional demo, not a real contact channel for that business.

## What's here

Single-file static site (`index.html`, no build step) demonstrating a premium visual and interaction upgrade over the original template:

- **3D hero** — hand-built Three.js rotating tire/wheel, mouse-parallax, scroll-linked spin/dolly, and a `prefers-reduced-motion` fallback (reviewed against `spline-3d-integration`'s performance rules — trimmed to ≤3 scene lights)
- **Curtain Reveal** — real scroll-scrubbed panel-split entrance from the Cinematic Site Modules toolkit, plus kinetic marquee, spotlight-border service cards, particle-explosion CTA buttons, odometer stat counters, mesh-gradient ambient backgrounds
- **Tire Finder + Wheel Visualizer, Deals, Careers, Financing** — feature-parity sections matching the real site's actual nav (these didn't exist in earlier drafts of this redesign)
- **REV** — an AI service advisor widget: keyword-matched FAQ engine, a multi-step booking flow (service → location → time → contact → confirmation), and **real browser-based voice calling** via the Web Speech API (actual microphone input + text-to-speech output, not a scripted animation) with a scripted fallback for browsers without that API
- Every point where a real paid integration would be needed (Cal.com for live booking, ElevenLabs Conversational AI + Twilio for a real phone number) is marked with a code comment — those require external account signup this project doesn't have credentials for

## Design tooling used

- `frontend-design` (Claude Code, built-in) — aesthetic direction, avoids generic AI-slop patterns
- `leonxlnx/taste-skill@high-end-visual-design` (installed via `npx skills add`) — agency-tier taste checklist; applied directly: converted the nav from an edge-to-edge bar (an explicit anti-pattern under this skill) to a floating "island" pill nav, and added double-bezel depth (nested shadow/highlight) to the card components
- `spline-3d-integration` (Claude Code, built-in) — consulted for 3D hero performance rules; no `.spline` scene exists for this project (that requires designing one in Spline's own editor), so the hero stays hand-rolled Three.js
- `21st-dev/skill@21st-ai` (installed via `npx skills add`) — the real 21st.dev CLI/skill for AI-drafted UI. Confirmed installed and functional, but its core loop (`21st generate`) requires `21st login` (an interactive OAuth flow) or a `TWENTYFIRST_TOKEN`, neither of which exists in this environment — that one external step is what's blocking it, not the tool's existence

## Running it

Open `index.html` directly in a browser. No dependencies to install — fonts, Three.js, and GSAP load from CDN. Voice calling needs Chrome or Edge (Web Speech API) and a live HTTPS origin — it won't request microphone access from a `file://` page.

## Stack

HTML / CSS / vanilla JS, Three.js r128, GSAP 3.12.5 + ScrollTrigger, Google Fonts (Rajdhani + Archivo), Web Speech API.
