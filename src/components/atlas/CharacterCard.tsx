import Link from 'next/link';
import type { Character } from '@/lib/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface CharacterCardProps {
  character: Character;
  showScript?: boolean;
}

export function CharacterCard({ character, showScript = false }: CharacterCardProps) {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'independent-vowel': return 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300';
      case 'consonant': return 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-300';
      case 'dependent-vowel-sign': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300';
      case 'punctuation': return 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border-purple-300';
      default: return 'bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-300 border-stone-300';
    }
  };

  return (
    <Card className="p-4 flex flex-col justify-between hover:border-[var(--color-accent-maroon)] transition-all group">
      <div>
        <div className="flex items-center justify-between gap-1 mb-2">
          <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${getCategoryColor(character.category)}`}>
            {character.category}
          </span>
          <span className="text-[10px] font-mono text-[var(--color-text-muted)]">
            #{character.sort_order}
          </span>
        </div>

        {/* Character Glyph Representation or Transliteration display */}
        <div className="my-3 py-3 rounded-lg bg-[var(--color-bg-secondary)] flex flex-col items-center justify-center border border-[var(--color-border)] group-hover:bg-[var(--color-surface-hover)] transition-colors">
          <div className="text-3xl font-serif text-[var(--color-accent-maroon)] font-bold tracking-wider">
            {character.transliteration || character.character_name.split(' ').pop()}
          </div>
          <div className="text-[11px] font-mono text-[var(--color-text-muted)] mt-1">
            [{character.ipa || character.phonetic_value}]
          </div>
        </div>

        <h4 className="text-xs font-bold text-[var(--color-text-primary)] truncate" title={character.character_name}>
          {character.character_name}
        </h4>

        {character.notes && (
          <p className="text-[11px] text-[var(--color-text-secondary)] mt-1.5 line-clamp-2 leading-relaxed">
            {character.notes}
          </p>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-[10px]">
        <span className="text-[var(--color-text-muted)]">
          {character.attestation_status}
        </span>
        <Link
          href={`/character-explorer/${character.id}`}
          className="text-[var(--color-accent-maroon)] font-semibold hover:underline"
        >
          Details →
        </Link>
      </div>
    </Card>
  );
}
