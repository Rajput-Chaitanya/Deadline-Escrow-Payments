# Deadline — implementation and design plan

## Scope
Build a premium, responsive, scroll-driven public landing page for Deadline — Trust. Commit. Deliver. The page explains the trust problem, shows the proposed Deadline ID and Trust Passport, presents the five pillars and Agree → Track → Verify → Build Trust lifecycle, handles MSME evidence precisely, connects to the supplied working prototype at `/demo/`, and distinguishes current prototype behavior from intended product design and long-term vision.

The supplied working prototype is preserved without unnecessary changes and copied to `demo/index.html` so the landing page links to a real local route.

## Implementation approach
- Static, dependency-light HTML/CSS/JavaScript site; no framework or build step.
- Use semantic sections, accessible buttons/links, CSS media queries, `IntersectionObserver`, CSS custom properties, `requestAnimationFrame`, and canvas for ambient background/network visuals.
- Use inline SVG for precise product diagrams and UI glyphs; no stock imagery or unsupported customer/product claims.
- Use a lightweight Python static server on port 3000 for Preview and deployment.
- Keep all public navigation relative so `/demo/` works in Preview, local hosting, and static publication.
- Reduced-motion mode disables scroll-linked transitions and canvas animation while preserving content and controls.

## Project structure
- `index.html`: complete public landing page, content, visuals, animations, interactions, SEO metadata.
- `demo/index.html`: untouched supplied Deadline working prototype.
- `public/manus-routes.json`: route manifest for `/` and `/demo/`.
- `public/favicon.svg`: small Deadline mark.
- `plan.md`: this plan.
- `TODO.md`: acceptance outcomes and progress.

## Design direction
### Design movement
- Neo-institutional launch film with editorial fintech precision (0.07)
- Luminous systems diagram with glass panels and technical annotation (0.08)
- Quiet luxury software manifesto with restrained motion (0.06)

**Chosen:** Neo-institutional launch film with editorial fintech precision.

### Core principles
1. Make the trust problem feel tangible before explaining the product.
2. Use structure, alignment, and evidence motifs rather than decorative “AI” effects.
3. Keep the electric-blue accent rare, legible, and purposeful.
4. Make every motion communicate a state change: uncertainty → structure → verified record.

### Color philosophy
Midnight navy and charcoal establish seriousness and protect focus. Electric blue is used as a verification signal and path highlight; pale cyan provides the quiet edge light of a precise instrument. There is no gold-led palette.

### Layout paradigm
Use an editorial sequence of asymmetric, viewport-height scenes with sticky visual frames, not a conventional card grid. Content alternates between question, tension, evidence, system, workflow, product, and vision.

### Signature elements
- A thin “commitment rail” that resolves into a verified path.
- A layered Trust Passport with a blue verification spine and audit-style metadata.
- Fine luminous connection lines that join parties, milestones, and network nodes.

### Interaction philosophy
Interactions should reveal provenance and state, not entertain for its own sake. Buttons scroll to real sections or open the actual demo. The Passport tilt is pointer-responsive but fully usable by keyboard; pillar controls update the visual and explanatory copy.

### Animation
Use slow, damped scroll-linked transforms, staggered reveals, count-up figures, and short state transitions. No looping decorative particles; the canvas uses a restrained star/grid field and network nodes. Reduced-motion settings show the final states immediately.

### Typography system
Use `Space Grotesk` for headlines and wordmark geometry, with `Inter` for body and metadata. Large headlines are compact and editorial; supporting copy stays between 15–18px with generous line-height.

### Brand essence
Deadline is a proposed trust infrastructure layer for professional and commercial relationships, helping people make commitments explicit, preserve delivery evidence, and build permissioned portable records. Personality: precise, credible, ambitious.

### Brand voice
Headlines ask direct questions and make clear distinctions. CTAs are specific and grounded.
- “What if trust could be demonstrated instead of assumed?”
- “Explore the working prototype.”

### Wordmark & logo
A compact `D/` mark formed from a square frame and diagonal deadline slash, paired with the uppercase DEADLINE wordmark.

### Signature brand color
Electric blue `#3B82F6`, used for verified states, path completion, and interactive focus.

## Content guardrails
- Treat all product capabilities beyond the supplied prototype as proposed/intended unless explicitly marked as demo behavior.
- Payment protection is optional and partner-led; do not claim Deadline holds funds or operates escrow.
- MSME figures retain their exact definitions: ₹8.1 lakh crore is an Economic Survey 2025–26 estimate of delayed payments locked across the MSME sector; 2,56,892 is the count of applications filed on MSME Samadhaan up to 31 December 2025. They are not Deadline TAM, revenue, recoveries, or proof Deadline solves the whole issue.
- Do not invent customers, partnerships, user counts, pricing, email addresses, social accounts, or regulatory approvals.
