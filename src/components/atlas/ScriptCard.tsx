import Link from 'next/link';
import type { Script } from '@/lib/types';
import { Card } from '@/components/ui/Card';

interface ScriptCardProps {
  script: Script;
  characterCount?: number;
}

export function ScriptCard({ script, characterCount }: ScriptCardProps) {
  return (
    <Card className="p-6 flex flex-col justify-between hover:border-[var(--color-accent-maroon)] transition-all">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]">
            {script.family}
          </span>
          <span className="text-xs text-[var(--color-accent-bronze)] font-medium">
            {script.period_start} – {script.period_end}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[var(--color-text-primary)] font-serif mt-2">
          {script.name}
        </h3>
        <p className="text-xs text-[var(--color-accent-maroon)] font-medium mb-3">
          Region: {script.region}
        </p>

        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed line-clamp-4">
          {script.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
        <div className="text-xs">
          <span className="text-[var(--color-text-muted)]">Inventory: </span>
          <span className="font-bold text-[var(--color-text-primary)]">
            {characterCount !== undefined ? `${characterCount} attested` : 'Attested'}
          </span>
        </div>
        <Link
          href={`/script-atlas/${script.id}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-[var(--color-accent-maroon)] hover:underline"
        >
          Explore Inventory →
        </Link>
      </div>
    </Card>
  );
}
