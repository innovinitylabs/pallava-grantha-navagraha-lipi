import type { ReactNode } from "react";

type BadgeVariant =
  | "default"
  | "maroon"
  | "bronze"
  | "copper"
  | "success"
  | "warning"
  | "error"
  | "outline";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
  /** Small dot indicator before text */
  dot?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "bg-bg-tertiary text-text-secondary",
  maroon:
    "bg-accent-maroon/10 text-accent-maroon border border-accent-maroon/20",
  bronze:
    "bg-accent-bronze/10 text-accent-bronze border border-accent-bronze/20",
  copper:
    "bg-accent-copper/10 text-accent-copper border border-accent-copper/20",
  success:
    "bg-success/10 text-success border border-success/20",
  warning:
    "bg-warning/10 text-warning border border-warning/20",
  error:
    "bg-error/10 text-error border border-error/20",
  outline:
    "bg-transparent text-text-secondary border border-border-strong",
};

const dotColors: Record<BadgeVariant, string> = {
  default: "bg-text-muted",
  maroon: "bg-accent-maroon",
  bronze: "bg-accent-bronze",
  copper: "bg-accent-copper",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
  outline: "bg-text-muted",
};

export function Badge({
  children,
  variant = "default",
  className = "",
  dot = false,
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        rounded-full px-2.5 py-0.5
        text-xs font-medium
        ${variantStyles[variant]}
        ${className}
      `.trim()}
    >
      {dot && (
        <span
          className={`h-1.5 w-1.5 rounded-full ${dotColors[variant]}`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}

/* Convenience wrappers for common attestation statuses */

export function AttestationBadge({
  status,
}: {
  status: string;
}) {
  const map: Record<string, { label: string; variant: BadgeVariant }> = {
    "directly-attested": { label: "Attested", variant: "success" },
    reconstructed: { label: "Reconstructed", variant: "warning" },
    "later-form": { label: "Later Form", variant: "bronze" },
    "modern-addition": { label: "Modern", variant: "copper" },
    uncertain: { label: "Uncertain", variant: "error" },
  };

  const entry = map[status] ?? { label: status, variant: "default" as const };

  return (
    <Badge variant={entry.variant} dot>
      {entry.label}
    </Badge>
  );
}

export function ConfidenceBadge({
  level,
}: {
  level: string;
}) {
  const map: Record<string, { label: string; variant: BadgeVariant }> = {
    high: { label: "High Confidence", variant: "success" },
    medium: { label: "Medium Confidence", variant: "warning" },
    low: { label: "Low Confidence", variant: "error" },
    uncertain: { label: "Uncertain", variant: "outline" },
  };

  const entry = map[level] ?? { label: level, variant: "default" as const };

  return <Badge variant={entry.variant}>{entry.label}</Badge>;
}
