import { getAllSources } from '@/lib/db';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';

export default function HistoricalSourcesPage() {
  const sources = getAllSources();

  const getSourceTypeBadge = (type: string) => {
    switch (type) {
      case 'proposal': return 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border-purple-300';
      case 'publication': return 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-300';
      case 'inscription': return 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300';
      case 'manuscript': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300';
      default: return 'bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-300 border-stone-300';
    }
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Historical Source Register"
        titleTamil="வரலாற்று மூலங்கள் பட்டியல்"
        subtitle="Primary epigraphical documents, scholarly publications, and Unicode standardisation proposals"
        description="To preserve strict research integrity, every historical claim and character form in Nava Graha Lipi is anchored to published primary epigraphy, Archaeological Survey of India reports, or scholarly palaeographical corpora. No fictional historical glyphs are generated."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sources.map((source) => (
          <Card key={source.id} className="p-6 flex flex-col justify-between hover:border-[var(--color-accent-maroon)] transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${getSourceTypeBadge(source.source_type)}`}>
                  {source.source_type.toUpperCase()}
                </span>
                <span className="text-xs font-mono text-[var(--color-accent-bronze)] font-semibold">
                  {source.year}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-[var(--color-text-primary)] font-serif leading-snug">
                  {source.title}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] mt-1 font-medium">
                  {source.author} • {source.publisher}
                </p>
              </div>

              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {source.notes}
              </p>

              {source.archive && (
                <div className="text-[11px] text-[var(--color-text-muted)]">
                  Archive / Corpus: <span className="text-[var(--color-text-secondary)]">{source.archive}</span>
                </div>
              )}
            </div>

            <div className="mt-6 pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-xs">
              <span className="font-mono text-[10px] text-[var(--color-text-muted)]">{source.id}</span>
              {source.url ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[var(--color-accent-maroon)] hover:underline inline-flex items-center gap-1"
                >
                  Access Document ↗
                </a>
              ) : (
                <span className="text-[10px] text-[var(--color-text-muted)] italic">Print / Museum Collection</span>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Scholarly Reference Citation Guide */}
      <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-card)] p-6 space-y-3">
        <h3 className="text-base font-bold text-[var(--color-text-primary)] font-serif">
          Epigraphic Citation Standard
        </h3>
        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
          In accordance with the project&apos;s research standards, all inscriptional references follow the citation convention of <em>Epigraphia Indica</em> (volume, plate, line) and the Tamil Nadu State Archaeology Department records. Contributors proposing character attestations must provide photographic or estampage plates from verified archival repositories.
        </p>
      </section>
    </div>
  );
}
