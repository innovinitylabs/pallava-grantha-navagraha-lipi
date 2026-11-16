import Link from "next/link";
import { DisplayTitle } from "@/components/site/DisplayTitle";
import { FadeIn } from "@/components/site/FadeIn";

export default function DocumentationPage() {
  const docs = [
    {
      title: "Research Methodology",
      file: "docs/research-methodology.md",
      desc: "Standards for epigraphical citation, confidence grading, and distinguishing attested history from original modern glyph design.",
      href: "/research",
    },
    {
      title: "Glyph Design Guidelines",
      file: "docs/glyph-design-guidelines.md",
      desc: "1000 UPM grid parameters, stroke modulation rules, optical sizing, and three-tier variant criteria.",
      href: "/design-principles",
    },
    {
      title: "Unicode Proposal Roadmap",
      file: "docs/unicode-proposal-roadmap.md",
      desc: "Staged pathway from open-source reference implementation and community adoption to formal UTC submission.",
      href: "#roadmap",
    },
    {
      title: "Release Versioning",
      file: "docs/release-versioning.md",
      desc: "Semantic versioning strategy governing character registry updates, font releases, and metadata schemas.",
      href: "/open-source",
    },
  ];

  const faqs = [
    {
      q: "Why is Devanagari not used as the visual foundation?",
      a: "The Tamil region possesses an unbroken, 2,300-year epigraphical lineage—spanning Tamil-Brahmi, monumental Pallava Grantha, continuous Vatteluttu, and Chola-era Grantha—with a profound tradition of astronomical and navigational observation. Grounding our glyph design in Pallava Grantha honors this unique calligraphic heritage.",
    },
    {
      q: "Is this a revival of ancient planetary symbols?",
      a: "No. Epigraphical records in South India traditionally recorded planetary names textually or through abbreviations in astrological charts. Nava Graha Lipi is creating original modern astronomical glyphs whose stroke geometry and ductus are informed by historical script traditions. We explicitly never claim these are rediscovered ancient symbols.",
    },
    {
      q: "When will these glyphs be submitted to Unicode?",
      a: "The Unicode Technical Committee encodes characters based on demonstrated real-world adoption, not hypothetical proposals. Submitting prematurely leads to rejection. We are currently in Phase 1 (open-source tool development, font creation, and panchangam publisher collaboration). Formal submission will occur after documented adoption in software and publications.",
    },
    {
      q: "How does Nava Graha Lipi relate to Pallava Grantha encoding?",
      a: "Anshuman Pandey's 2018 proposal (L2/18-083) proposed encoding the historical Pallava script. We catalogue and study those 61 historical characters as our aesthetic reference, but Nava Graha Lipi is an independent astronomical symbol initiative, not a script encoding proposal.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 space-y-16">
      {/* Header */}
      <FadeIn>
        <div className="space-y-4 max-w-3xl">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[var(--cinnabar)] font-semibold">
            Technical Governance & FAQs
          </p>
          <h1 className="font-display text-4xl sm:text-6xl tracking-tight text-[var(--ink)]">
            <DisplayTitle>Documentation</DisplayTitle>
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Methodological standards, design guidelines, and the standardisation roadmap governing the Nava Graha Lipi open-source project.
          </p>
        </div>
      </FadeIn>

      {/* Docs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {docs.map((d, idx) => (
          <FadeIn key={d.title} delay={0.06 * idx}>
            <div className="archive-mount rounded-2xl p-6 flex flex-col justify-between space-y-4 h-full">
              <div className="space-y-2">
                <span className="font-mono text-[9px] text-[var(--cinnabar)] block">
                  {d.file}
                </span>
                <h3 className="font-display text-lg font-semibold text-[var(--ink)]">
                  {d.title}
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  {d.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border)]">
                <Link href={d.href} className="text-xs font-medium text-[var(--cinnabar)] hover:underline">
                  Examine Document →
                </Link>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Unicode Roadmap Section */}
      <FadeIn delay={0.25}>
        <div id="roadmap" className="archive-mount rounded-2xl p-8 sm:p-10 space-y-6">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--cinnabar)] font-semibold block">
            UTC Pathway
          </span>
          <h2 className="font-display text-3xl font-semibold text-[var(--ink)]">
            Unicode Standardisation Roadmap
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-[var(--muted)] pt-2">
            <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] space-y-2">
              <strong className="text-[var(--ink)] font-semibold block text-sm">Phase 1: Research & Studio</strong>
              <p className="leading-relaxed">Candidate vector glyphs drafted on 1000 UPM grid. Historical Pallava corpus catalogued. Interactive design studio live.</p>
              <span className="font-mono text-[10px] text-[var(--cinnabar)] font-bold block pt-1">Active Phase</span>
            </div>
            <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] space-y-2">
              <strong className="text-[var(--ink)] font-semibold block text-sm">Phase 2: OpenType Reference Font</strong>
              <p className="leading-relaxed">Compile UFO3 sources to OTF/TTF. PUA experimental mapping (U+E000–E008). Web font packaging.</p>
              <span className="font-mono text-[10px] text-[var(--bronze)] block pt-1">Target Q3 2026</span>
            </div>
            <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] space-y-2">
              <strong className="text-[var(--ink)] font-semibold block text-sm">Phase 3: Community Adoption</strong>
              <p className="leading-relaxed">Independent adoption across Tamil & Sanskrit panchangams, astrological chart apps, and academic typography.</p>
              <span className="font-mono text-[10px] text-[var(--muted)] block pt-1">Evidence Gathering</span>
            </div>
            <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] space-y-2">
              <strong className="text-[var(--ink)] font-semibold block text-sm">Phase 4: Formal UTC Dossier</strong>
              <p className="leading-relaxed">Submission of formal proposal to the Unicode Technical Committee (UTC) Script Ad Hoc Group.</p>
              <span className="font-mono text-[10px] text-[var(--muted)] block pt-1">Standardisation</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Frequently Asked Questions */}
      <div className="space-y-6">
        <FadeIn delay={0.3}>
          <div className="border-b border-[var(--border)] pb-3">
            <h2 className="font-display text-3xl font-semibold text-[var(--ink)]">
              Frequently Asked Questions
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((f, idx) => (
            <FadeIn key={f.q} delay={0.06 * idx}>
              <div className="archive-mount rounded-xl p-6 space-y-3 h-full">
                <h4 className="font-display text-lg font-semibold text-[var(--ink)]">
                  {f.q}
                </h4>
                <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  {f.a}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
