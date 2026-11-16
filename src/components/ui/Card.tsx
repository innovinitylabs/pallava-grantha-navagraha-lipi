import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Adds a subtle inset background for emphasis */
  variant?: "default" | "inset" | "bordered";
  /** Optional padding override */
  padding?: "none" | "sm" | "md" | "lg";
  /** Makes the entire card interactive (hover/focus styles) */
  interactive?: boolean;
  /** Accessible role override */
  as?: "div" | "article" | "section";
}

const paddingMap = {
  none: "",
  sm: "p-3",
  md: "p-5",
  lg: "p-7",
} as const;

const variantMap = {
  default:
    "bg-surface-card border border-border",
  inset:
    "bg-surface-inset border border-border",
  bordered:
    "bg-surface-card border-2 border-border-strong",
} as const;

export function Card({
  children,
  className = "",
  variant = "default",
  padding = "md",
  interactive = false,
  as: Component = "div",
}: CardProps) {
  const interactiveClasses = interactive
    ? "cursor-pointer transition-all duration-200 hover:border-accent-bronze hover:shadow-md hover:-translate-y-0.5 focus-within:border-accent-maroon"
    : "";

  return (
    <Component
      className={`
        rounded-lg shadow-sm
        ${variantMap[variant]}
        ${paddingMap[padding]}
        ${interactiveClasses}
        ${className}
      `.trim()}
    >
      {children}
    </Component>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return (
    <div className={`mb-3 ${className}`}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3" | "h4";
}

export function CardTitle({
  children,
  className = "",
  as: Component = "h3",
}: CardTitleProps) {
  return (
    <Component
      className={`text-lg font-semibold text-text-primary ${className}`}
    >
      {children}
    </Component>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({
  children,
  className = "",
}: CardDescriptionProps) {
  return (
    <p className={`text-sm text-text-muted mt-1 ${className}`}>{children}</p>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={className}>{children}</div>;
}
