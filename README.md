# Black's Tire and Auto Service — Concept Redesign

An unofficial, fan-built concept redesign of [blackstire.com](https://www.blackstire.com/) — a real 60+ location tire and auto service chain across North Carolina & South Carolina. Built as a design/engineering demo by **KB Creative AI Studio**.

**This is not the real Black's Tire and Auto Service website and is not affiliated with, endorsed by, or operated by that business.** Real business facts (name, tagline, services, tire brands, city footprint, public customer reviews) were pulled directly from their live site to keep the redesign accurate. Any phone number, email, or "book now" flow on this page is a non-functional demo, not a real contact channel for that business.

## What's here

Single-file static site (`index.html`, no build step) demonstrating a premium visual and interaction upgrade over the original template:

- **3D hero** — hand-built Three.js rotating tire/wheel with mouse-parallax and a `prefers-reduced-motion` fallback
- **Scroll-driven modules** from the Cinematic Site Modules toolkit — kinetic marquee, spotlight-border service cards, particle-explosion CTA buttons, odometer stat counters, mesh-gradient ambient backgrounds
- **REV** — a demo AI service advisor widget: keyword-matched FAQ engine, a multi-step booking flow (service → location → time → contact → confirmation), and a simulated "talk to REV by phone" call preview
- Every point where a real integration would be needed (Cal.com for live booking, ElevenLabs Conversational AI + Twilio for the real phone line) is marked with a code comment

## Running it

Open `index.html` directly in a browser. No dependencies to install — fonts, Three.js, and GSAP load from CDN.

## Stack

HTML / CSS / vanilla JS, Three.js r128, GSAP 3.12.5 + ScrollTrigger, Google Fonts (Rajdhani + Archivo).
