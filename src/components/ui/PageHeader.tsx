import type { ReactNode } from "react";

interface PageHeaderProps {
  /** Primary title */
  title: string;
  /** Optional Tamil or secondary-language title */
  titleTamil?: string;
  /** Subtitle shown beneath the title */
  subtitle?: string;
  /** Longer description paragraph */
  description?: string;
  /** Optional right-aligned actions or badges */
  actions?: ReactNode;
  /** Extra class names */
  className?: string;
}

export function PageHeader({
  title,
  titleTamil,
  subtitle,
  description,
  actions,
  className = "",
}: PageHeaderProps) {
  return (
    <header className={`mb-8 ${className}`}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          {/* Tamil title rendered above the English title */}
          {titleTamil && (
            <p className="text-accent-maroon font-serif text-lg tracking-wide mb-1">
              {titleTamil}
            </p>
          )}

          <h1 className="text-3xl font-bold tracking-tight text-text-primary">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-1 text-lg text-text-secondary">{subtitle}</p>
          )}
        </div>

        {actions && (
          <div className="flex shrink-0 items-center gap-3">{actions}</div>
        )}
      </div>

      {description && (
        <p className="mt-4 max-w-3xl text-text-muted leading-relaxed">
          {description}
        </p>
      )}

      {/* Decorative stone rule */}
      <hr className="rule-stone mt-6" />
    </header>
  );
}
