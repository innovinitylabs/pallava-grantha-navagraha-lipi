# Nava Graha Lipi — Glyph Design Research Dossier
## Document: Practical Handoff Protocol for Visual Designers in Fable

---

### Welcome to the Nava Graha Lipi Creative Exploration in Fable

This document establishes the official operational workflow and creative rules for designers using **Fable** to author candidate vector glyphs for the Nine Grahas (*Navagraha*).

Fable is our primary environment for vector shape composition, parametric curve modulation, and motion testing. Before opening Fable or drawing a single anchor point, you must read and adhere to the guidelines set out below.

---

### 1. Mandatory Pre-Design Rules (Read Before Creating Artwork)

1. **Read the Full Dossier First:**
   - [00-project-brief.md](./00-project-brief.md): Understand the project identity, use cases, and open-source mission.
   - [01-historical-research.md](./01-historical-research.md): Understand the difference between Tamil-region epigraphy, yantras, and astronomical notations.
   - [02-visual-design-language.md](./02-visual-design-language.md): Absorb the visual vocabulary (stroke modulation, chisel serifs, counter apertures).
   - [03-glyph-construction-system.md](./03-glyph-construction-system.md): Calibrate your canvas to the 1000 UPM grid specifications.
   - [04-nine-graha-design-briefs.md](./04-nine-graha-design-briefs.md): Review the specific briefs for each celestial body.
   - [05-design-evaluation-criteria.md](./05-design-evaluation-criteria.md): Understand how your work will be scored.

2. **Strict Language Policy (NON-NEGOTIABLE):**
   - Use **ONLY Tamil** (historical & modern) and **English** (with academic Latin IAST transliteration).
   - **ABSOLUTE PROHIBITION:** Never use Hindi, Devanagari script, or North Indian hanging top lines (*shirorekha*) in any layer name, label, annotation, concept description, or metadata file.

---

### 2. The Seven Absolute Creative Prohibitions

```
┌────────────────────────────────────────────────────────────────────────┐
│                   SEVEN CREATIVE PROHIBITIONS IN FABLE                 │
├────┬───────────────────────────────────┬────────────────────────────────┤
│ #  │ PROHIBITION                       │ WHY IT MUST BE AVOIDED         │
├────┼───────────────────────────────────┼────────────────────────────────┤
│ 01 │ DO NOT copy Western astrological  │ ☉, ☽, ♂, ♃ carry Greco-Roman   │
│    │ glyphs (Unicode U+263C–U+2644).   │ iconography foreign to India.  │
├────┼───────────────────────────────────┼────────────────────────────────┤
│ 02 │ DO NOT draw deity illustrations   │ A glyph must be a typographic  │
│    │ or pictorial temple figures.      │ symbol, not a miniature statue.│
├────┼───────────────────────────────────┼────────────────────────────────┤
│ 03 │ DO NOT treat raw yantra geometry  │ A bare circle or triangle is a │
│    │ as an automatic finished glyph.   │ shape, not a cultural symbol.  │
├────┼───────────────────────────────────┼────────────────────────────────┤
│ 04 │ DO NOT present new symbols as     │ We are creating modern designs;│
│    │ ancient historical artifacts.     │ never fabricate history.       │
├────┼───────────────────────────────────┼────────────────────────────────┤
│ 05 │ DO NOT make all nine symbols look │ Avoid identical round badges;  │
│    │ like identical circular coins.    │ silhouettes must be unique.    │
├────┼───────────────────────────────────┼────────────────────────────────┤
│ 06 │ DO NOT rely on color or gradients │ Every glyph must work in solid │
│    │ to communicate identity.          │ 1-bit monochrome ink on paper. │
├────┼───────────────────────────────────┼────────────────────────────────┤
│ 07 │ DO NOT declare any design an      │ All concepts remain candidates │
│    │ approved winner without review.   │ until human evaluation.        │
└────┴───────────────────────────────────┴────────────────────────────────┘
```

---

### 3. Fable Canvas Setup & Coordinate Calibration

When creating a new project or artboard in Fable:

1. **Artboard Dimensions:** Exactly **1000 px by 1000 px**.
2. **Key Guide Positions (Set Horizontal Guides):**
   - `Y = 150 px` → Ascender Headroom Line.
   - `Y = 250 px` → **Cap-Height Line** (Primary top boundary).
   - `Y = 475 px` → **Optical Center Line** (Focal balance line).
   - `Y = 700 px` → **Baseline** (Primary grounding axis).
   - `Y = 850 px` → Descender Floor Line.
3. **Key Guide Positions (Set Vertical Guides):**
   - `X = 50 px`  → Left Sidebearing Limit.
   - `X = 500 px` → **Center Optical Axis**.
   - `X = 950 px` → Right Sidebearing Limit.
4. **Coordinate Precision:** Keep vector vertices aligned to integers or clean single-decimal values.

---

### 4. Required Output Deliverables for Each Graha

For each of the Nine Grahas, the Fable designer must deliver:

```
research/glyph-design-dossier/
└── concepts/
    └── [graha-id]/                          (e.g., 'surya', 'candra', 'mangala')
        ├── concept-a-pallava-ductus.svg     (Direction A master vector)
        ├── concept-b-yantra-synthesis.svg   (Direction B master vector)
        ├── concept-c-calligraphic.svg       (Direction C master vector)
        ├── metadata-a.json                  (Conforming to glyph-specification.schema.json)
        ├── metadata-b.json
        ├── metadata-c.json
        └── DESIGNER_NOTES.md                (Qualitative rationale & optical notes)
```

#### SVG Export Requirements from Fable:
- Format: Plain SVG (`<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">`).
- Path type: Strictly closed cubic Bézier paths (`d="M ... C ... Z"`).
- Fill rule: `fill-rule="nonzero"`.
- Default styling: `fill="currentColor"` (no hardcoded inline hex colors in the master glyph path).
- Preserve source Fable project files (`.fable` or editable vector packages) alongside the SVGs.

---

### 5. Concept Generation Workflow in Fable

```
                      STEP 1: BRIEF REVIEW
       Read Document 04 section for the specific Graha
                               │
                               ▼
                   STEP 2: THREE DIRECTIONS
       Sketch 3 distinct concepts on the 1000 UPM grid:
         • Direction A: Conservative Pallava Ductus
         • Direction B: Geometric Yantra Synthesis
         • Direction C: Modern Calligraphic Flourish
                               │
                               ▼
                   STEP 3: OPTICAL SIZING QA
       Test each concept simultaneously at 5 scales:
         [512px]   [64px]   [24px]   [16px]   [12px]
       Ensure internal counters breathe at 12px!
                               │
                               ▼
                  STEP 4: BACKGROUND INVERSION
       Verify silhouette in:
         • Dark ink (#16120F) on parchment (#F4F0E8)
         • Light bone (#FAF8F4) on stone (#16120F)
                               │
                               ▼
                   STEP 5: METADATA & HANDOFF
       Export clean SVG, fill JSON metadata schema,
       and submit for human peer evaluation!
```

---

### 6. Human Review & Evaluation Gate

No glyph created in Fable is final. All outputs will be:
1. Benchmarked against the **100-Point Evaluation Rubric** in [05-design-evaluation-criteria.md](./05-design-evaluation-criteria.md).
2. Reviewed by epigraphers and typographic historians.
3. Stress-tested in test OpenType fonts using HarfBuzz and rendered in sample panchangam tables.
4. Subject to revision cycles before advancement to candidate status.
