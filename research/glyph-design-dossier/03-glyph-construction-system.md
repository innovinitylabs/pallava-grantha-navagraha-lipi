# Nava Graha Lipi — Glyph Design Research Dossier
## Document 03: Technical Glyph Construction System & Coordinate Specifications

---

### 1. Epistemic Classification

> [!IMPORTANT]
> **Status:** `[ORIGINAL PROJECT PROPOSAL]` & `[MODERN DESIGN INFERENCE]`  
> The metric boundaries, coordinate origins, clearance thresholds, and cubic Bézier constraints documented in this specification are contemporary digital typographic engineering standards created specifically for the Nava Graha Lipi project. They are not ancient or historical measurements.

---

### 2. 1000 UPM Coordinate Space & Metric Architecture

Every candidate planetary glyph designed in Fable must be constructed within a standardized **1000 Units Per Em (UPM)** vector coordinate square, adhering to OpenType and PostScript type-design standards.

```
Y = 0    ┌────────────────────────────────────────────────────────────┐ (Ascender headroom)
         │                                                            │
Y = 150  ├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┤ Ascender Boundary (+850)
         │                                                            │
Y = 250  ├════════════════════════════════════════════════════════════┤ Cap-Height (Top Alignment)
         │                                                            │
         │                         │                                  │
Y = 475  ├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄──┼──┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┤ Optical Center (Y=475)
         │                         │                                  │
         │                         │                                  │
Y = 700  ├═════════════════════════╧════════════════════════════════════┤ Baseline (Grounding Axis)
         │                                                            │
Y = 850  ├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┤ Descender Boundary (-150)
         │                                                            │
Y = 1000 └────────────────────────────────────────────────────────────┘ (Descender floor)
         X=0                     X=500                      X=1000
                               (Center)
```

#### 2.1 Vertical Keyline Reference Table
*(Values given in both SVG top-left origin coordinates and standard OpenType bottom-left baseline origin coordinates)*:

| Metric Landmark | SVG Coordinate (Top-Left Origin) | OpenType Font Metric (Baseline Origin = 0) | Typographic Role & Function |
|---|---|---|---|
| **Em Box Top** | `Y = 0` | `+1000` | Full height ceiling of the Em square. |
| **Ascender Boundary** | `Y = 150` | `+850` | Maximum vertical extension for upper ray accents or vertical crests. |
| **Cap-Height Line** | `Y = 250` | `+700` | Canonical primary head alignment for all standard uppercase glyph forms. |
| **Upper Optical Axis** | `Y = 360` | `+590` | Upper counter division in bi-level glyphs (e.g., Budha, Guru). |
| **Geometric Center** | `Y = 500` | `+450` | Mathematical horizontal midpoint of the 1000×1000 canvas. |
| **Optical Center** | `Y = 475` | `+475` | Target center of visual mass (compensated 25 units above mathematical center). |
| **Baseline Line** | `Y = 700` | `0` | Primary grounding horizontal line where glyphs rest stably. |
| **Descender Boundary**| `Y = 850` | `-150` | Maximum allowable depth for descending tail flourishes (e.g., Ketu, Rāhu). |
| **Em Box Bottom** | `Y = 1000`| `-300` | Full floor of the Em square. |

#### 2.2 Horizontal Metrics & Sidebearings
- **Default Advance Width:** 1000 units (square em).
- **Narrow Glyph Advance Width:** 850 to 900 units (for slender vertical forms such as Maṅgala and Guru).
- **Left Sidebearing (LSB):** Minimum **50 units**; target **70 to 80 units**.
- **Right Sidebearing (RSB):** Minimum **50 units**; target **70 to 80 units**.
- Under no circumstances should artwork touch or cross the `X = 0` or `X = 1000` vertical boundary lines.

---

### 3. Stroke Weight Geometry & Modulation

`[ORIGINAL PROJECT PROPOSAL]`  
To achieve harmonic family coherence across all nine glyphs while avoiding the mechanical sterility of a monoline engineering diagram, strokes must be calibrated to specific hierarchical zones:

```
┌─────────────────────────┬─────────────────────────┬──────────────────────────────────┐
│ STROKE ROLE             │ NOMINAL WIDTH (1000 UPM)│ APPLICATION & PURPOSE            │
├─────────────────────────┼─────────────────────────┼──────────────────────────────────┤
│ Primary Stems           │ 52 – 60 UPM             │ Main vertical pillars, outer     │
│                         │                         │ structural enclosures, solar orb.│
├─────────────────────────┼─────────────────────────┼──────────────────────────────────┤
│ Secondary Strokes       │ 36 – 44 UPM             │ Horizontal crossbars, interior   │
│                         │                         │ concentric rings, diagonal rays. │
├─────────────────────────┼─────────────────────────┼──────────────────────────────────┤
│ Terminal Flourishes     │ 24 – 32 UPM             │ Tapered ends, serpentine tail    │
│                         │                         │ terminations, subtle serifs.     │
├─────────────────────────┼─────────────────────────┼──────────────────────────────────┤
│ Central Bindu Diameter  │ 80 – 110 UPM            │ Focal point in Sūrya and         │
│                         │                         │ planetary center marks.          │
└─────────────────────────┴─────────────────────────┴──────────────────────────────────┘
```

#### 3.1 Stroke Modulation Rules:
1. **Dynamic Chisel Expansion:** As primary curved strokes descend from the cap-height toward the baseline, they should expand gradually from 48 UPM to 60 UPM before resolving into base terminals.
2. **Terminal Angle:** Stroke terminals must not be blunt mechanical cuts (`stroke-linecap: square`). They should feature a beveled chisel angle of **14° to 22°** or a subtle parabolic flare characteristic of Pallava inscriptional chisel work.
3. **Contrast Ratio:** The optical contrast ratio between the thickest and thinnest stroke elements within a single glyph should remain strictly between **1.4:1 and 1.8:1**.

---

### 4. Mathematical Curve Construction & Tangency

`[ORIGINAL PROJECT PROPOSAL]`  
In Fable, all vector geometry must be constructed using mathematically clean Bézier curves:

1. **Cubic Bézier Standard:** All curves must be authored as cubic Bézier segments (`C` or `S` path commands in SVG). Avoid quadratic approximations where possible.
2. **Smooth Tangency Continuity ($C^1$ and $C^2$):** Where an arc connects to an adjacent straight line or curve, handle vectors must align collinearly to avoid visible visual breaks, kinks, or unintentional bumps.
3. **Extreme Point Anchoring:** Anchor points must be placed at the local vertical and horizontal extrema (the highest, lowest, leftmost, and rightmost points of every curve). This ensures clean rasterization and flawless conversion to font outlines.
4. **Anchor Point Economy:** Use the minimum number of anchor points necessary to describe a curve. Over-anchored paths create rippling artifacts at large display sizes and corrupt font hinting tables.

---

### 5. Clearances, Optical Compensation & Counter Spaces

#### 5.1 Minimum Spacing & Aperture Thresholds
To prevent optical clogging at 12pt–14pt panchangam sizes:
- **Minimum Stroke-to-Stroke Clearance:** Non-intersecting parallel or adjacent strokes must maintain at least **35 UPM** of clear negative space.
- **Minimum Loop Counter Aperture:** Any internal loop counter must enclose an area equivalent to a circle of at least **80 UPM diameter**, with an entrance aperture of at least **40 UPM**.
- **Vertex Ink-Traps:** Where two strokes intersect at an acute angle (< 45°), the interior vertex must be relieved with a subtle optical cut-in (15–20 UPM) to prevent ink pooling and pixel blur.

#### 5.2 Optical Mass Placement
- **Baseline Stability:** A glyph's lower anchor points must ground firmly on the baseline (`Y = 700`). If a glyph has a curved base (like Sūrya's lower arc or Candra's crescent bowl), the curve must slightly overshoot the baseline by **10 to 14 UPM** (reaching `Y = 712`), exactly as uppercase letters *O* and *C* overshoot in Latin and Tamil typography.
- **Cap-Height Overshoot:** Curved tops must overshoot the `Y = 250` line by **10 to 14 UPM** (reaching `Y = 238`).

---

### 6. Sizing Hierarchy & Optical Testing Matrix

Candidates designed in Fable must be tested and visually verified across three optical scale tiers:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        OPTICAL SCALE TESTING TIERS                     │
├───────────┬──────────────┬────────────────────────┬────────────────────┤
│ TIER      │ TARGET SIZE  │ CONTEXT OF USE         │ VERIFICATION FOCUS │
├───────────┼──────────────┼────────────────────────┼────────────────────┤
│ 1. Display│ 64px – 512px │ Fable motion graphics, │ Curve smoothness,  │
│           │              │ museum exhibition art, │ terminal finesse,  │
│           │              │ large chapter headers. │ anchor tangency.   │
├───────────┼──────────────┼────────────────────────┼────────────────────┤
│ 2. Text   │ 16px – 24px  │ Inline running text,   │ Stem definition,   │
│           │              │ digital articles,      │ counter breathing, │
│           │              │ software UI labels.    │ x-height harmony.  │
├───────────┼──────────────┼────────────────────────┼────────────────────┤
│ 3. Table  │ 11px – 14px  │ Dense panchangam       │ Silhouette instant │
│           │              │ calendrical tables,    │ recognisability,   │
│           │              │ mobile astrological UI.│ zero stroke merge. │
└───────────┴──────────────┴────────────────────────┴────────────────────┘
```

---

### 7. Surface & Contrast Behavior: Monochrome, Light, and Dark

Every glyph must be conceived and tested as a **pure monochrome silhouette**:

1. **Light Background (Archival Paper):**
   - Background: `--paper` (`#F4F0E8`) or Pure White (`#FFFFFF`).
   - Glyph Fill / Stroke: `--ink` (`#16120F`) or `--cinnabar` (`#8C2D19`).
   - Stroke Blooming Allowance: The dark silhouette on light paper visually expands by ~5%; negative spaces must be sufficiently open.

2. **Dark Background (Temple Stone & Dark UI):**
   - Background: Deep Stone (`#16120F`) or Charcoal (`#1F1B16`).
   - Glyph Fill / Stroke: Archival Bone (`#FAF8F4`) or Pale Gold / Bronze (`#C8AD78`).
   - Optical Irradiance Compensation: On dark backgrounds, light strokes appear heavier due to optical halation. When rendering in dark mode, stroke weight should be scaled down by ~8% (or stroke paths thinned from 54 UPM to 50 UPM).

3. **Strict Prohibition on Decorative Color Reliance:**
   - Glyphs must NEVER rely on color fills, gradients, drop shadows, or multi-tone layers to communicate their identity.
   - If a glyph cannot be unambiguously recognized when laser-cut into solid stone or cast in 1-bit monochrome lead type, the design has failed.

---

### 8. Digital Font Integration & SVG Production Requirements

When exporting vector assets from Fable for ingestion into the Nava Graha Lipi font pipeline:

1. **SVG Code Hygiene:**
   - Coordinate system: `viewBox="0 0 1000 1000"`.
   - Clean integer or single-decimal coordinates.
   - All strokes converted to closed contour paths (`fill-rule: nonzero;`).
   - No embedded bitmap data, no `<clipPath>`, no CSS masks, and no proprietary editor metadata.
2. **Winding Order:**
   - Outer contour paths must follow a clockwise winding direction.
   - Inner cut-out counter loops must follow a counter-clockwise winding direction (standard OpenType PostScript non-zero winding rule).
3. **PUA Unicode Allocation:**
   - `U+E000`: Sūrya
   - `U+E001`: Candra
   - `U+E002`: Maṅgala
   - `U+E003`: Budha
   - `U+E004`: Guru (Bṛhaspati)
   - `U+E005`: Śukra
   - `U+E006`: Śani
   - `U+E007`: Rāhu
   - `U+E008`: Ketu
