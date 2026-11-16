# Contributing to Nava Graha Lipi

Thank you for your interest in contributing to Nava Graha Lipi (நவ கிரக லிபி). This project sits at the intersection of software development, historical epigraphy, type design, and Indian astronomical traditions. Contributions from all of these domains are welcome.

Please read this guide carefully before contributing. The project has specific requirements around research integrity that differ from typical open-source projects.

---

## Table of Contents

- [Types of Contributions](#types-of-contributions)
- [Contributing Research](#contributing-research)
- [Contributing Code](#contributing-code)
- [Contributing Glyph Designs](#contributing-glyph-designs)
- [Research Integrity Requirements](#research-integrity-requirements)
- [Code Standards](#code-standards)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)
- [Code of Conduct](#code-of-conduct)

---

## Types of Contributions

We accept contributions in several categories:

1. **Research contributions** — new primary sources, corrections to existing attestation data, additional historical references, improved transliterations
2. **Code contributions** — features, bug fixes, performance improvements, documentation for the web application
3. **Glyph design contributions** — new or revised SVG glyphs, font engineering work, design critique
4. **Documentation** — improving guides, translating content, correcting errors

---

## Contributing Research

Research contributions are the scholarly backbone of this project. If you have expertise in South Indian epigraphy, palaeography, Indian astronomy, or related fields, your contributions are especially valued.

### What We Need

- **Primary source citations** — references to specific inscriptions (by catalogue number, e.g., SII volume/number), manuscripts (by repository and accession number), or published estampages
- **Corrections** — if an attestation claim in the project is wrong or overstated, please file a [Historical Correction issue](.github/ISSUE_TEMPLATE/historical_correction.md) with evidence
- **New evidence** — if you have access to inscriptions, copper plates, or manuscripts that contain astronomical symbols or relevant Grantha/Pallava letterforms, we want to hear about it
- **Palaeographic analysis** — comparative analysis of letterforms across dated inscriptions

### Requirements for Research Contributions

Every research contribution must include:

1. **Source identification** — the specific inscription, manuscript, or publication being referenced
2. **Date or date range** — with basis for the dating (e.g., regnal year, palaeographic dating, carbon dating)
3. **Repository or location** — where the artefact is held or was documented
4. **Basis for claims** — how you arrived at any interpretive conclusions
5. **Images where possible** — photographs or estampage reproductions (with rights status noted)

We do not accept:

- Unsourced claims about historical usage
- Claims based solely on secondary sources without tracing to primary evidence
- Assertions that a modern design is an ancient form

---

## Contributing Code

### Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Create a feature branch: `git checkout -b feature/your-feature-name`
5. Run the development server: `npm run dev`
6. Make your changes
7. Run linting: `npm run lint`
8. Build successfully: `npm run build`
9. Commit with a clear message
10. Push to your fork and open a pull request

### Branch Naming

- `feature/` — new features
- `fix/` — bug fixes
- `docs/` — documentation changes
- `research/` — research data additions or corrections
- `glyph/` — glyph design additions or modifications

---

## Contributing Glyph Designs

Glyph design is a specialised contribution. Please read [docs/glyph-design-guidelines.md](docs/glyph-design-guidelines.md) thoroughly before submitting design work.

### Key Principles

1. **Pallava Grantha as principal influence.** New astronomical glyphs should draw their structural and calligraphic logic from Pallava-era Grantha inscriptions (roughly 4th–9th century CE).

2. **Historical vs. original.** If your design is based on a specific historical form, cite the source inscription. If it is original work inspired by historical forms, say so explicitly.

3. **Never claim antiquity for new work.** A glyph designed in 2024 is a 2024 design. It may be deeply informed by 6th-century letterforms, but it is not a 6th-century letterform.

### Technical Requirements

- SVG format with a consistent `viewBox` (see design guidelines)
- Clean, minimal path data — no auto-generated noise from drawing tools
- Stroke-based construction where appropriate
- Accompanying metadata file with attestation status and design rationale

### Review Process

Glyph designs undergo a two-stage review:

1. **Design review** — visual quality, consistency with project style, technical SVG correctness
2. **Research review** — accuracy of historical claims, proper attestation status, appropriate confidence level

---

## Research Integrity Requirements

These requirements apply to all contributions, not only research-specific ones:

### The Three Categories

Every historical or design element in this project falls into one of three categories:

| Category | Definition | Requirements |
|----------|-----------|-------------|
| **Attested** | Found in a dated, identifiable inscription or manuscript | Full source citation, date, repository |
| **Reconstructed** | Inferred from attested forms using established methods | Method described, confidence level assigned, sources cited |
| **Original** | New design created for this project | Designer credited, inspiration sources cited, clearly marked as original |

### What Is Not Acceptable

- Presenting original designs as historical forms
- Citing Wikipedia or general web pages as primary evidence
- Making claims about "ancient usage" without specific inscriptional evidence
- Conflating Pallava, Grantha, and Tamil-Brahmi traditions without acknowledging their differences
- Using Devanagari forms as the basis for glyph design (the project focuses on Tamil-region traditions)

---

## Code Standards

### TypeScript

- Strict TypeScript throughout — no `any` types without justification
- Use interfaces over type aliases for object shapes where practical
- Export types from `src/lib/types.ts` for shared type definitions

### Next.js

- Use App Router conventions (no Pages Router)
- Server Components by default; add `'use client'` only when needed
- Use Next.js data fetching patterns (Server Components, Route Handlers)
- Follow the directory structure established in `src/app/`

### Styling

- Tailwind CSS v4 for all styling
- Follow the project's visual direction: parchment and stone-inspired surfaces, deep maroon (#5B1A18), charcoal (#2D2D2D), muted bronze (#8B7355)
- No CSS-in-JS libraries

### General

- No unused imports or variables
- Meaningful variable and function names
- Comments for non-obvious logic, especially database queries and palaeographic algorithms
- All user-facing text should support both Tamil and English where relevant

---

## Pull Request Process

1. **Fill out the PR template completely.** Every section matters.
2. **One concern per PR.** Don't mix a feature addition with a research correction.
3. **All checks must pass.** Linting and build must succeed.
4. **Research claims need review.** PRs that add or modify historical claims will be reviewed for accuracy before merge.
5. **Design changes need visual review.** Include screenshots or SVG previews for any visual changes.
6. **Be patient.** Research review may take longer than code review. This is intentional.

### Commit Messages

Use clear, descriptive commit messages:

```
feat: add glyph comparison view for Sūrya variants
fix: correct attestation date for Kanchipuram inscription ref
research: add Mamallapuram shore temple Grantha specimens
glyph: revise Budha symbol stroke construction
docs: clarify Pallava vs. later Grantha dating criteria
```

---

## Issue Reporting

We provide three issue templates:

- **Bug Report** — for software defects
- **Feature Request** — for new features or enhancements
- **Historical Correction** — for reporting errors in historical claims or providing new evidence

Please use the appropriate template. For general questions or discussion, use GitHub Discussions if available, or open an issue with a `[Question]` prefix.

---

## Code of Conduct

All contributors are expected to follow our [Code of Conduct](CODE_OF_CONDUCT.md). In particular:

- Respect the diversity of South Asian script traditions
- Maintain academic integrity in all historical claims
- Engage respectfully with contributors from different disciplinary backgrounds
- Do not present personal religious interpretations as historical fact

---

## Questions?

If you're unsure whether a contribution fits, open an issue to discuss it first. We'd rather help you shape a contribution than have you invest time in something that doesn't align with the project's goals.

Thank you for helping preserve and study Tamil-region script heritage.
