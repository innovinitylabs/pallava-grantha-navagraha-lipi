<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Nava Graha Lipi — Project Memory & Architectural Rules

## 1. Strict Language & Script Policy (NON-NEGOTIABLE)

**This project must ONLY contain:**
1. **Tamil** — Both historical epigraphic scripts of the Tamil region (Pallava Grantha, Vatteluttu, Tamil-Brahmi) and modern Tamil (தமிழ்).
2. **English** — For technical documentation, UI, code, and academic IAST Latin transliteration (e.g., Sūrya, Chandra, Maṅgala, Budha, Guru, Śukra, Śani, Rāhu, Ketu).

**ABSOLUTE PROHIBITIONS:**
- **NO Hindi or Devanagari script anywhere in the project.**
- **NO other modern Indian languages (Hindi, Marathi, Bengali, Telugu, Kannada, etc.).**
- Never use Devanagari characters in source code, databases, JSON files, metadata, UI text, or documentation.
- Do not use Hindi terminology or North Indian visual conventions as the project's identity.
- Historical terms must only be represented in Tamil script or standard Latin IAST transliteration.

## 2. Core Project Identity & Scope

- **Primary Mission**: An independent, open-source Indian astronomical glyph initiative creating original, modern vector symbols for the Nine Grahas (and broader astronomical notation).
- **Secondary Research Foundation**: Historical Tamil-region epigraphy (Pallava Grantha, Vatteluttu, Tamil-Brahmi) informs the stroke ductus and aesthetic logic, but must remain strictly distinct from original glyph creation.
- **Never Fabricate History**: Never present newly designed astronomical glyphs as ancient symbols.

## 3. Technology Stack & Conventions (Anekaroopam Parity)

- **Framework**: Next.js 16 (`next build --webpack`), React 19, TypeScript 5.
- **Styling**: Tailwind CSS v4, Anekaroopam archival paper material system (`--paper`, `--paper-deep`, `--ink`, `--muted`, `--cinnabar`, `--bronze`, procedural noise).
- **Typography**: Google Fonts (`Cormorant_Garamond`, `Source_Serif_4`, `Anek_Tamil`), optical script splitting via `src/lib/typography/tamil.ts`.
- **Motion**: Framer Motion (`FadeIn`, dynamic brandmark wheel transform).
- **Deployment Domain**: `nava-graha-lipi.valipokkann.in`
