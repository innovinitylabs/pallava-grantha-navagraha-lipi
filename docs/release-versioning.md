# Nava Graha Lipi — Release Versioning Strategy

Nava Graha Lipi adheres to [Semantic Versioning 2.0.0](https://semver.org/) (`MAJOR.MINOR.PATCH`) with domain-specific criteria governing metadata, typeface assets, and software.

## Component Versioning Rules

### 1. Database & Character Registry
- **MAJOR**: Breaking changes to character identifiers (e.g., renaming `PAL-V-001` or structural changes to the SQLite schema that invalidate existing client queries).
- **MINOR**: Addition of newly verified historical character records, newly catalogued primary sources, or new astronomical symbol categories.
- **PATCH**: Epigraphical corrections, typo fixes in transliteration or IPA, citation updates, and notes refinement.

### 2. Typeface & Font Binaries
- **MAJOR**: Glyph outline rewrites altering bounding boxes or baseline metrics that alter text flow.
- **MINOR**: Addition of new glyph variants, OpenType GSUB/GPOS ligature features, or expanded character mappings.
- **PATCH**: Minor Bézier curve smoothing, optical kerning tweaks, and metadata fixes.

### 3. Web Application & Research Software
- Standard semver applied to Next.js application routes, components, and export utilities.

## Current Project Version
- **v0.1.0**: Initial Foundation — Schema initialization, Pallava character inventory (61 records), historical source registry, and module scaffolding.
