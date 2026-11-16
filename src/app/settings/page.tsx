import { getAllScripts, getAllSources, getCharacterStats } from '@/lib/db';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';

export default function SettingsPage() {
  let dbStatus = 'Connected';
  let scriptCount = 0;
  let sourceCount = 0;
  let characterCount = 0;

  try {
    const scripts = getAllScripts();
    scriptCount = scripts.length;
    const sources = getAllSources();
    sourceCount = sources.length;
    const stats = getCharacterStats();
    characterCount = stats.reduce((acc, curr) => acc + (curr.total || 0), 0);
  } catch (e: any) {
    dbStatus = `Error: ${e.message}`;
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title="Project Settings & Environment"
        titleTamil="திட்ட அமைப்புகள்"
        subtitle="Local SQLite database status, repository configuration, and system parameters"
      />

      <div className="space-y-6">
        <Card className="p-6 space-y-4">
          <h3 className="text-base font-bold text-[var(--color-text-primary)] font-serif">
            Local Database Engine
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
              <span className="text-[var(--color-text-muted)] block text-[10px] uppercase font-semibold">Engine</span>
              <strong className="text-[var(--color-text-primary)] text-sm">SQLite (better-sqlite3)</strong>
              <p className="text-[10px] text-emerald-800 dark:text-emerald-300 mt-1">Status: {dbStatus}</p>
            </div>

            <div className="p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
              <span className="text-[var(--color-text-muted)] block text-[10px] uppercase font-semibold">Database File</span>
              <strong className="text-[var(--color-text-primary)] text-sm">navagraha.db</strong>
              <p className="text-[10px] text-[var(--color-text-muted)] mt-1">Path: data/db/navagraha.db</p>
            </div>

            <div className="p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
              <span className="text-[var(--color-text-muted)] block text-[10px] uppercase font-semibold">Indexed Characters</span>
              <strong className="text-[var(--color-accent-maroon)] text-sm font-serif">{characterCount} Verified</strong>
              <p className="text-[10px] text-[var(--color-text-muted)] mt-1">{scriptCount} Script Traditions</p>
            </div>

            <div className="p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
              <span className="text-[var(--color-text-muted)] block text-[10px] uppercase font-semibold">Indexed Sources</span>
              <strong className="text-[var(--color-text-primary)] text-sm font-serif">{sourceCount} Primary</strong>
              <p className="text-[10px] text-[var(--color-text-muted)] mt-1">ASI & Epigraphical Corpus</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 space-y-4">
          <h3 className="text-base font-bold text-[var(--color-text-primary)] font-serif">
            Git & Remote Synchronization
          </h3>
          <div className="space-y-2 text-xs text-[var(--color-text-secondary)]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 border-b border-[var(--color-border)] gap-1">
              <span className="text-[var(--color-text-muted)]">Repository Remote (Origin)</span>
              <span className="font-mono text-[var(--color-accent-maroon)]">https://github.com/innovinitylabs/pallava-grantha-navagraha-lipi.git</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 border-b border-[var(--color-border)] gap-1">
              <span className="text-[var(--color-text-muted)]">Active Git Branch</span>
              <span className="font-mono text-[var(--color-text-primary)] font-semibold">main</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 gap-1">
              <span className="text-[var(--color-text-muted)]">Primary Research Source File</span>
              <span className="font-mono text-[var(--color-text-primary)]">18083-pallava.pdf (Unicode L2/18-083)</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
