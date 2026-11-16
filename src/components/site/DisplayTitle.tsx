import { splitByTamilScript } from "@/lib/typography/tamil";
import { cn } from "@/lib/utils";

type DisplayTitleProps = {
  children: string;
  className?: string;
  tamilClassName?: string;
};

/**
 * Renders mixed Latin/Tamil text with Cormorant Garamond for Latin
 * and optically matched thin-to-medium Anek Tamil for Tamil text.
 */
export function DisplayTitle({
  children,
  className,
  tamilClassName,
}: DisplayTitleProps) {
  const text = String(children);
  const segments = splitByTamilScript(text);

  if (segments.length === 1 && !segments[0].tamil) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {segments.map((segment, index) => (
        <span
          key={`${index}-${segment.text.slice(0, 8)}`}
          className={segment.tamil ? cn("font-anek-tamil-thin tracking-normal", tamilClassName) : undefined}
        >
          {segment.text}
        </span>
      ))}
    </span>
  );
}
