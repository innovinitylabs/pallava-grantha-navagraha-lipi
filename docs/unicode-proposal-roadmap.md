# Nava Graha Lipi — Unicode Proposal Roadmap

## 1. Principles of Unicode Proposal Submission

The Unicode Technical Committee (UTC) encodes characters based on demonstrably distinct semantics, established community usage, and evidence that existing characters cannot adequately represent the required textual functions.

Premature proposal submission without real-world adoption invariably results in rejection. Therefore, Nava Graha Lipi adheres to a four-stage roadmap:

```
[Phase 1: Research & Tooling] ──► [Phase 2: Reference Implementation & Fonts]
                                                    │
                                                    ▼
[Phase 4: UTC Standardisation] ◄── [Phase 3: Community Adoption & Verification]
```

## 2. Roadmap Phases

### Phase 1: Research, Epigraphy & Tooling (Current Stage)
- Establish verified character database for Pallava Grantha and comparative scripts.
- Document primary sources and attestation evidence.
- Build open-source design workstation (Nava Graha Glyph Studio).
- Perform comprehensive overlap analysis against Unicode blocks:
  - Miscellaneous Symbols (`U+2600–U+26FF`)
  - Grantha Block (`U+11300–U+1137F`)
  - Proposed Pallava Block (`L2/18-083`)

### Phase 2: Open-Source Reference Implementation & Font Pipeline
- Release candidate vector glyphs for the nine Navagraha (three design variants per graha).
- Compile OpenType reference font (OFL 1.1) utilizing Private Use Area (`U+E000–U+E008`) strictly for experimental testing.
- Implement web typesetting tools, SVG specimen renderers, and panchangam chart layouts.

### Phase 3: Community Adoption & Real-World Usage Evidence
- Partner with digital epigraphers, indologists, Tamil language software developers, and astronomical publishing platforms.
- Collect published specimens of the symbols in digital panchangams, academic papers, and typesetting workflows.
- Demonstrate that Western astrological characters (☉, ☽, ♂, ☿, ♃, ♀, ♄, ☊, ☋) are inadequate due to structural, typographic, and cultural divergence.

### Phase 4: Formal Unicode Proposal Dossier
- Draft formal proposal document in accordance with Unicode Technical Report #28 and UTC Submission Guidelines.
- Submit proposal to the UTC Script Ad Hoc Group for preliminary review and feedback.
- Refine proposal through UTC meeting cycles toward eventual encoding.
