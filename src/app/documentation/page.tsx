import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';

export default function DocumentationPage() {
  const docs = [
    {
      title: 'Research Methodology',
      file: 'docs/research-methodology.md',
      desc: 'Standards for epigraphical citation, confidence grading, and distinguishing attested history from modern design.',
    },
    {
      title: 'Glyph Design Guidelines',
      file: 'docs/glyph-design-guidelines.md',
      desc: 'Pallava Grantha visual foundation, optical scaling, stroke thickness rules, and 1000 UPM grid parameters.',
    },
    {
      title: 'Unicode Proposal Roadmap',
      file: 'docs/unicode-proposal-roadmap.md',
      desc: 'Staged pathway from community adoption and font implementation to formal submission to the Unicode Technical Committee.',
    },
    {
      title: 'Release Versioning',
      file: 'docs/release-versioning.md',
      desc: 'Semantic versioning strategy governing character registry updates, font releases, and database schemas.',
    },
    {
      title: 'Contributing Guide',
      file: 'CONTRIBUTING.md',
      desc: 'Instructions for submitting epigraphic corrections, vector glyph improvements, and scholarly documentation.',
    },
    {
      title: 'Code of Conduct',
      file: 'CODE_OF_CONDUCT.md',
      desc: 'Standards of respectful scholarly discourse, academic honesty, and inclusive collaboration.',
    },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Project Documentation & Standards"
        titleTamil="திட்ட ஆவணங்கள் மற்றும் வழிகாட்டுதல்கள்"
        subtitle="Epigraphic research methodology, typographic rules, and open-source contribution guidelines"
        description="Comprehensive technical and scholarly documentation governing all aspects of the Nava Graha Lipi initiative."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {docs.map((doc, idx) => (
          <Card key={idx} className="p-6 space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[var(--color-accent-maroon)] block mb-1">
                {doc.file}
              </span>
              <h3 className="text-base font-bold text-[var(--color-text-primary)] font-serif">
                {doc.title}
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                {doc.desc}
              </p>
            </div>
            <div className="pt-3 border-t border-[var(--color-border)] text-xs font-semibold text-[var(--color-accent-maroon)]">
              Repository Document
            </div>
          </Card>
        ))}
      </div>

      {/* Licensing Overview */}
      <Card className="p-6 space-y-4">
        <h3 className="text-base font-bold text-[var(--color-text-primary)] font-serif">
          Open-Source Licensing Structure
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] space-y-1">
            <strong className="text-[var(--color-text-primary)] block">Software & Web Application</strong>
            <p className="text-[var(--color-text-muted)]">MIT License</p>
            <p className="text-[11px] text-[var(--color-text-secondary)]">Permissive software license for frontend tools and backend code.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] space-y-1">
            <strong className="text-[var(--color-text-primary)] block">Typeface & Font Files</strong>
            <p className="text-[var(--color-text-muted)]">SIL Open Font License 1.1</p>
            <p className="text-[11px] text-[var(--color-text-secondary)]">Industry-standard open font license for OTF/TTF/UFO sources.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] space-y-1">
            <strong className="text-[var(--color-text-primary)] block">Artwork & Metadata</strong>
            <p className="text-[var(--color-text-muted)]">CC BY 4.0 / CC0</p>
            <p className="text-[11px] text-[var(--color-text-secondary)]">Creative Commons Attribution for SVG masters and epigraphic metadata.</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
