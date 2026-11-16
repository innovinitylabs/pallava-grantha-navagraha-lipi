# Nava Graha Lipi — நவ கிரக லிபி

**An Open-Source Indian Astronomical Symbol and Historical Script Initiative**

---

Nava Graha Lipi is a research-driven, open-source project developing historically informed Indian astronomical symbols rooted in Tamil-region script traditions — specifically Pallava Grantha, Grantha, Vatteluttu, and Tamil-Brahmi. The project bridges epigraphy, typography, and software to produce a coherent symbol system for the nine Navagraha (celestial bodies of Indian astronomy), grounded in attested historical letterforms rather than invention.

This is not a revival of a single ancient script. It is a principled effort to study the calligraphic and structural logic of Tamil-region epigraphic traditions and, where historical evidence permits, to derive astronomical symbols that are consistent with those traditions. Where original design is necessary, it is clearly marked as such and never presented as ancient.

## The Navagraha — Initial Symbol Repertoire

The initial repertoire covers the nine celestial bodies of Indian astronomical tradition:

| Sanskrit (IAST) | Tamil | Celestial Body |
|-----------------|-------|---------------|
| Sūrya | சூரியன் | Sun |
| Candra / Chandra | சந்திரன் | Moon |
| Maṅgala | செவ்வாய் | Mars |
| Budha | புதன் | Mercury |
| Bṛhaspati | குரு | Jupiter |
| Śukra | சுக்கிரன் | Venus |
| Śani | சனி | Saturn |
| Rāhu | இராகு | Ascending Node |
| Ketu | கேது | Descending Node |

## Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Database:** SQLite (via better-sqlite3) — for glyph metadata, attestation records, and research provenance
- **Runtime:** Node.js
- **Font Tooling:** SIL-compatible font development pipeline (planned)
- **Glyph Format:** SVG with structured metadata

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
git clone https://github.com/your-org/nava-graha-lipi.git
cd nava-graha-lipi
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project Modules

| Module | Description |
|--------|------------|
| `src/app/` | Next.js App Router pages — glyph explorer, research viewer, comparison tools |
| `src/lib/` | Core libraries — database access, types, schema definitions |
| `data/` | Research data, attestation records, and structured metadata |
| `glyphs/` | SVG glyph files with provenance metadata |
| `fonts/` | Font source files and build outputs |
| `scripts/` | Build and data processing scripts |
| `docs/` | Research methodology, design guidelines, and project documentation |

## Cultural Principles

1. **Tamil-region script traditions are the foundation.** Pallava Grantha, Grantha, Vatteluttu, and Tamil-Brahmi are the primary visual and structural references. Devanagari is not used as a design basis.

2. **Distinct traditions remain distinct.** Tamil, Grantha, and Pallava script traditions have overlapping but different histories. This project preserves those distinctions rather than collapsing them.

3. **No invented history.** Every historical claim requires a cited source — an inscription, a manuscript, or a published scholarly reference. New designs are explicitly labelled as original work inspired by historical forms.

4. **Respectful engagement.** The Navagraha tradition spans Hindu, Buddhist, and Jain contexts across South and Southeast Asia. This project engages with that diversity respectfully and does not privilege one religious interpretation.

5. **Transliteration conventions.** Sanskrit terms use IAST transliteration. Tamil terms use standard Tamil script. Both are provided where relevant.

## Research Integrity

This project maintains a strict separation between:

- **Attested forms** — letterforms or symbols found in dated inscriptions, manuscripts, or catalogued artefacts, with verifiable provenance.
- **Reconstructed forms** — shapes inferred from attested forms using established palaeographic methods, clearly marked with confidence levels.
- **Original designs** — new glyphs created for this project, explicitly attributed to their designers and never presented as historical.

Every glyph in the system carries an attestation status, source references, and a confidence assessment. See [docs/research-methodology.md](docs/research-methodology.md) for the full framework.

## Licence

This project uses a multi-licence structure:

| Component | Licence |
|-----------|---------|
| Software (source code) | [MIT](LICENSE) |
| Font files | [SIL Open Font License 1.1](LICENSE-FONT) |
| Original artwork and glyph designs | [CC BY 4.0](LICENSE-ARTWORK) |

## Citation

If you use this software or its research outputs in academic work, please cite it using the information in [CITATION.cff](CITATION.cff).

## Contributing

We welcome contributions from developers, designers, epigraphers, palaeographers, and anyone with relevant expertise. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting work.

## Unicode Consortium

This project is in a **research and development phase**. One long-term goal is to prepare a well-evidenced proposal for the Unicode Consortium to encode Indian astronomical symbols. However, no submission has been made, and the project does not claim any official relationship with the Unicode Consortium or the UTC. See [docs/unicode-proposal-roadmap.md](docs/unicode-proposal-roadmap.md) for the current roadmap.

## Acknowledgements

This project draws on centuries of epigraphic and palaeographic scholarship. We are grateful to the researchers, institutions, and communities that have preserved and studied Tamil-region inscriptions and manuscripts.

---

*Nava Graha Lipi is a community-driven, open-source initiative. It is not affiliated with any government, religious institution, or standards body.*
