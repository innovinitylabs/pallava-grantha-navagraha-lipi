# Nava Graha Lipi — Glyph Design Guidelines

## 1. Aesthetic Foundation: Pallava Grantha

The visual architecture of the Nava Graha Lipi symbols is inspired by the monumental stone and copper-plate calligraphy of the Pallava dynasty (specifically 5th–8th century CE, Kanchipuram and Mahabalipuram).

### Essential Visual Characteristics

1. **Top Bars & Terminals**: Pallava letterforms feature subtle, serif-like horizontal top bars. In our glyph designs, terminals should terminate with deliberate calligraphic weight rather than uniform monoline round caps.
2. **Graceful Continuous Curvature**: Unlike the angular geometry of early Ashokan Brahmi, Pallava Grantha emphasizes sweeping, parabolic curves and counter-clockwise loop ductus.
3. **Loop Construction**: Loops in Pallava characters (such as KA, NA, BA, and MA) are organic and moderately open, avoiding cramped enclosed counters.
4. **Vertical Modulation**: Stems are stable and grounded, typically exhibiting a 1:1.2 to 1:1.4 width-to-height proportion.
5. **Negative Space**: Generous counter-spaces must be preserved to ensure clear legibility at text sizes down to 12pt.

## 2. Technical Specifications

- **Coordinate Grid**: 1000 Units Per Em (UPM).
- **Ascender**: +800
- **Cap Height**: +700
- **X-Height**: +500
- **Baseline**: 0
- **Descender**: -200
- **Standard Stroke Weight**: 60–80 units for body strokes; 35–45 units for hairline flourishes.
- **Format**: SVG vector masters using cubic Bézier paths (`d` attributes), strictly closed paths with non-zero fill rule.

## 3. The Nine Navagraha: Design Matrix

Each of the nine planetary symbols must be developed through three candidate variations:

1. **Variant A (Conservative Pallava)**: Strictly adhering to attested inscriptional ductus and ligature construction.
2. **Variant B (Geometric Synthesis)**: Synthesizing traditional Navagraha yantra geometries (circle, crescent, triangle, bow, lotus) with Pallava calligraphic terminals.
3. **Variant C (Calligraphic Flourish)**: Modern open-counter balance optimized for high-DPI digital displays and small-size panchangam tables.

## 4. Optical Sizing & Verification

Every candidate glyph must pass testing across four optical criteria:
- **Display Size (64px+)**: Inspect curve smoothness and terminal refinement.
- **Text Size (16px–24px)**: Verify counter-space clarity and absence of stroke collision.
- **Small Size (12px–14px)**: Confirm instantaneous recognizability in panchangam charts.
- **Contrast**: Legible on both light (#FAF6F0) parchment surfaces and dark (#1A1814) stone backgrounds.
