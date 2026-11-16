import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';

export default function UnicodeResearchPage() {
  const proposalRequirements = [
    {
      item: '1. Character Repertoire & Semantics',
      status: 'In Progress',
      detail: 'Complete inventory of proposed glyphs, proposed character names according to Unicode naming guidelines, and clear semantic definitions.',
    },
    {
      item: '2. Evidence of Attestation & Use',
      status: 'Active Compilation',
      detail: 'Photographic, epigraphical, and publication evidence demonstrating active usage in software, research publications, or historical manuscripts.',
    },
    {
      item: '3. Unicode Properties (UCD)',
      status: 'Drafting',
      detail: 'General_Category (So - Symbol Other), Bidi_Class (ON - Other Neutral), Linebreak properties, and script property assignment.',
    },
    {
      item: '4. Non-Overlap Verification',
      status: 'Completed Preliminary',
      detail: 'Comparative analysis against Western astronomical symbols (U+2609, U+2642, etc.) demonstrating why unified encoding is semantically and typographically unacceptable.',
    },
    {
      item: '5. Combining & Normalisation Analysis',
      status: 'Under Review',
      detail: 'Specification of normalization forms (NFC/NFD), behavior with virama, accents, or modifier marks in astrological charts.',
    },
    {
      item: '6. Community Review & Consensus',
      status: 'Open Source Phase',
      detail: 'Broader review among digital epigraphers, Tamil Nadu archaeology specialists, Unicode experts, and font engineers prior to UTC submission.',
    },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Unicode Proposal Preparation Workspace"
        titleTamil="யூனிகோட் பரிந்துரை ஆய்வுக் கூடம்"
        subtitle="Technical research and dossier compilation for eventual Unicode Consortium submission"
        description="Nava Graha Lipi is engineered from the ground up to adhere to the rigorous standards of the Unicode Technical Committee (UTC) and the Script Ad Hoc Group. A proposal must never be submitted prematurely; real-world digital adoption and exhaustive overlap analysis are required."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {proposalRequirements.map((req, idx) => (
          <Card key={idx} className="p-6 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-[var(--color-text-primary)] font-serif">
                {req.item}
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--color-bg-secondary)] text-[var(--color-accent-maroon)] border border-[var(--color-border)]">
                {req.status}
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {req.detail}
            </p>
          </Card>
        ))}
      </div>

      {/* UTC Reference Dossier Status */}
      <Card className="p-6 space-y-4">
        <h3 className="text-base font-bold text-[var(--color-text-primary)] font-serif">
          Primary Reference Proposal: L2/18-083 (Pandey 2018)
        </h3>
        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
          The primary document informing our Pallava script character repertoire is Anshuman Pandey&apos;s <em>Preliminary Proposal to Encode Pallava in Unicode</em> (L2/18-083). While the Pallava script itself remains pending on the Unicode roadmap, our project systematically catalogs its 61 identified characters and studies its stroke dynamics to support both script encoding efforts and astronomical symbol design.
        </p>
        <div className="pt-2 flex flex-wrap gap-3">
          <a
            href="https://www.unicode.org/L2/L2018/18083-pallava.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded bg-[var(--color-accent-maroon)] text-white hover:bg-[var(--color-accent-maroon-light)] font-medium transition-colors"
          >
            Download L2/18-083 PDF ↗
          </a>
          <a
            href="https://www.unicode.org/alloc/Pipeline.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded border border-[var(--color-border)] bg-[var(--color-surface-card)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)] font-medium transition-colors"
          >
            Unicode Roadmap Pipeline ↗
          </a>
        </div>
      </Card>
    </div>
  );
}
