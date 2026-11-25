# Deadline website TODO

## Build the cinematic landing page
- [ ] Deliver a polished, visually striking, responsive landing page for **DEADLINE — Trust. Commit. Deliver.** with a midnight navy / electric blue visual system, semantic sections, SEO metadata, favicon, and no horizontal overflow.
- [ ] Implement the opening question **“How do you know someone will deliver what they promised?”**, a commitment visual, the Deadline wordmark/tagline, **Explore the experience**, and **View the live demo** CTAs.
- [ ] Implement the two-sided trust problem for clients and service providers, including the exact problem themes from the briefing and the transition to **“What if trust could be demonstrated instead of assumed?”**.
- [ ] Implement the MSME evidence section with count-up figures **₹8.1 lakh crore** and **2,56,892 applications**, their exact definitions, source attribution, and a caveat that they are not Deadline’s addressable market or proof of recoveries.
- [ ] Implement the solution section with **ONE PORTABLE LAYER OF TRUST**, Deadline ID, Trust Passport, and visual fields for identity, commitments, delivery evidence, completed engagements, two-sided feedback, reputation, and permissioned sharing.
- [ ] Implement the five pillars exactly: **Verified Identity**, **Agreed Commitments**, **Delivery Evidence**, **Two-Sided Reputation**, **Payment Protection**; label payment protection as optional and through regulated partners.
- [ ] Implement the **AGREE → TRACK → VERIFY → BUILD TRUST** journey as a scroll-linked timeline with clear stage descriptions.
- [ ] Implement the actual demo showcase with a browser mockup and prominent **Launch Interactive Demo** link to `/demo/`; preserve the supplied demo code/functionality and avoid fake replacement behavior.
- [ ] Implement the long-term vision section with a growing network and the exact framing **“A trust layer for professional and commercial relationships.”**, clearly labeled as an intended/future vision.
- [ ] Implement the final CTA **“Trust should not be a guess.”**, Deadline branding, navigation links, demo link, and a truthful contact note because no official contact details were supplied.

## Interactions and accessibility
- [ ] Add sticky navigation with Overview, The Problem, The Solution, How It Works, Demo, Vision, and scroll-progress indicator.
- [ ] Add smooth scrolling, active-section state, reveal-on-scroll, count-up animation, Trust Passport pointer tilt, interactive pillar controls, responsive mobile navigation, visible keyboard focus, and reduced-motion fallbacks.
- [ ] Ensure every CTA is functional: section links scroll, demo CTAs open `/demo/`, and contact CTA lands on the truthful contact footer state.

## Demo integration and runtime
- [ ] Copy the supplied working prototype unchanged to `demo/index.html` and serve it from `/demo/`.
- [ ] Provide `public/manus-routes.json` for `/` and `/demo/`.
- [ ] Declare and verify a static development server on port 3000.
- [ ] Run source-level checks, inspect desktop/mobile screenshots, verify links and major interactions, and fix confirmed issues.
