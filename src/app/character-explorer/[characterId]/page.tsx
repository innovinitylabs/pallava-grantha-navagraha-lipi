import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCharacter, getCharacterSources, getScript, searchCharacters } from '@/lib/db';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';

export function generateStaticParams() {
  try {
    const chars = searchCharacters('');
    return chars.map((c) => ({ characterId: c.id }));
  } catch {
    return [];
  }
}

interface CharacterDetailPageProps {
  params: Promise<{
    characterId: string;
  }>;
}

export default async function CharacterDetailPage({ params }: CharacterDetailPageProps) {
  const { characterId } = await params;
  const character = getCharacter(characterId);

  if (!character) {
    notFound();
  }

  const script = getScript(character.script_id);
  const sources = getCharacterSources(character.id);

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/character-explorer"
          className="inline-flex items-center gap-1 text-xs text-[var(--color-accent-maroon)] font-semibold hover:underline mb-3"
        >
          ← Back to Character Explorer
        </Link>
        <PageHeader
          title={character.character_name}
          subtitle={`Registry ID: ${character.id} • Script: ${script?.name || character.script_id}`}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Visual Glyph & Phonetics */}
        <div className="space-y-6">
          <Card className="p-8 text-center flex flex-col items-center justify-center">
            <div className="w-36 h-36 rounded-2xl bg-[var(--color-bg-secondary)] border-2 border-[var(--color-border)] flex items-center justify-center shadow-inner">
              <span className="text-6xl font-serif font-bold text-[var(--color-accent-maroon)]">
                {character.transliteration || '—'}
              </span>
            </div>
            <div className="mt-4 font-mono text-sm text-[var(--color-text-secondary)]">
              IAST: <strong className="text-[var(--color-text-primary)]">{character.transliteration}</strong>
            </div>
            <div className="font-mono text-xs text-[var(--color-text-muted)] mt-1">
              IPA: [{character.ipa}] • Phonetic: /{character.phonetic_value}/
            </div>
          </Card>

          <Card className="p-5 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
              Technical Properties
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-[var(--color-border)]">
                <span className="text-[var(--color-text-muted)]">Category</span>
                <span className="font-mono font-medium text-[var(--color-text-primary)]">{character.category}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[var(--color-border)]">
                <span className="text-[var(--color-text-muted)]">Attestation</span>
                <span className="font-medium text-emerald-800 dark:text-emerald-300">{character.attestation_status}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[var(--color-border)]">
                <span className="text-[var(--color-text-muted)]">Confidence</span>
                <span className="font-medium text-[var(--color-accent-bronze)]">{character.confidence}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[var(--color-border)]">
                <span className="text-[var(--color-text-muted)]">Unicode Codepoint</span>
                <span className="font-mono text-[var(--color-text-muted)]">
                  {character.unicode_codepoint || 'Not yet encoded (L2/18-083 pending)'}
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[var(--color-text-muted)]">Catalog Sort Order</span>
                <span className="font-mono text-[var(--color-text-primary)]">#{character.sort_order}</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Columns: Epigraphic Notes & Provenance Sources */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 space-y-3">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] font-serif">
              Character Description & Palaeographic Notes
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {character.notes || 'Documented in the preliminary Pallava Unicode proposal with epigraphical evidence.'}
            </p>
          </Card>

          <Card className="p-6 space-y-4">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] font-serif">
              Historical Attestation & Provenance ({sources.length} Record{sources.length === 1 ? '' : 's'})
            </h3>

            {sources.length === 0 ? (
              <p className="text-xs text-[var(--color-text-muted)]">
                No specific citation records linked yet. Sourced globally from Pandey (2018).
              </p>
            ) : (
              <div className="space-y-4">
                {sources.map((src: any) => (
                  <div key={src.id} className="p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h4 className="text-xs font-bold text-[var(--color-text-primary)]">
                        {src.source_title || 'Historical Source'}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--color-bg-primary)] text-[var(--color-accent-maroon)] border border-[var(--color-border)]">
                        {src.source_year || src.date_text}
                      </span>
                    </div>

                    <div className="text-[11px] text-[var(--color-text-muted)]">
                      Author/Editor: <strong className="text-[var(--color-text-secondary)]">{src.source_author || 'Archaeological Authority'}</strong>
                      {src.source_publisher && ` • ${src.source_publisher}`}
                    </div>

                    {src.inscription_name && (
                      <div className="text-[11px] text-[var(--color-text-secondary)]">
                        Inscription: <em>{src.inscription_name}</em> {src.location && `(${src.location})`}
                      </div>
                    )}

                    {src.notes && (
                      <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed pt-1 border-t border-[var(--color-border)]">
                        {src.notes}
                      </p>
                    )}

                    {src.source_url && (
                      <div className="pt-1">
                        <a
                          href={src.source_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] text-[var(--color-accent-maroon)] font-semibold hover:underline inline-flex items-center gap-1"
                        >
                          View Primary Document ↗
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
