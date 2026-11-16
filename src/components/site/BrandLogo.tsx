"use client";

import Link from "next/link";
import { useReducedMotion, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

const REST = BRAND.name.slice(1);
const WHEEL_EASE = [0.34, 0, 0.21, 1] as const;
const DURATION = 0.52;
const HOVER_DELAY_MS = 100;

const WHEEL_OUT_DEG = -120;
const WHEEL_IN_START_DEG = 120;

type BrandLogoProps = {
  href?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

export function BrandLogo({
  href = "/",
  showWordmark = true,
  size = "md",
  className,
}: BrandLogoProps) {
  const [hovered, setHovered] = useState(false);
  const reduceMotion = useReducedMotion();
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHoverTimer = useCallback(() => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  }, []);

  const onPointerEnter = useCallback(() => {
    clearHoverTimer();
    hoverTimer.current = setTimeout(() => setHovered(true), HOVER_DELAY_MS);
  }, [clearHoverTimer]);

  const onPointerLeave = useCallback(() => {
    clearHoverTimer();
    setHovered(false);
  }, [clearHoverTimer]);

  useEffect(() => () => clearHoverTimer(), [clearHoverTimer]);

  const wheelTransition = {
    duration: reduceMotion ? 0.12 : DURATION,
    ease: WHEEL_EASE,
  };

  const latinOpacityTransition = {
    duration: reduceMotion ? 0.08 : hovered ? 0.22 : 0.26,
    ease: WHEEL_EASE,
  };

  const tamilOpacityTransition = {
    duration: reduceMotion ? 0.08 : hovered ? 0.3 : 0.2,
    delay: reduceMotion || !hovered ? 0 : 0.12,
    ease: WHEEL_EASE,
  };

  const content = (
    <span
      className={cn("inline-flex items-center gap-3 leading-none group", className)}
      onMouseEnter={onPointerEnter}
      onMouseLeave={onPointerLeave}
    >
      {/* Dynamic Emblem Emblem Circle */}
      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] shadow-xs transition-colors group-hover:border-[var(--cinnabar)]">
        <motion.span
          className="font-display text-base font-semibold leading-none text-[var(--ink)]"
          initial={false}
          animate={{
            opacity: hovered ? 0 : 1,
            rotate: reduceMotion ? 0 : hovered ? WHEEL_OUT_DEG : 0,
            scale: hovered ? 0.8 : 1,
          }}
          transition={{
            rotate: wheelTransition,
            opacity: latinOpacityTransition,
          }}
        >
          {BRAND.latinInitial}
        </motion.span>

        <span className="absolute inset-0 flex items-center justify-center leading-none">
          <motion.span
            className="font-anek-tamil text-sm font-bold text-[var(--cinnabar)]"
            initial={false}
            animate={{
              opacity: hovered ? 1 : 0,
              rotate: reduceMotion ? 0 : hovered ? 0 : WHEEL_IN_START_DEG,
              scale: hovered ? 1.05 : 0.8,
            }}
            transition={{
              rotate: wheelTransition,
              opacity: tamilOpacityTransition,
            }}
          >
            {BRAND.tamilInitial}
          </motion.span>
        </span>
      </span>

      {showWordmark && (
        <span className="flex flex-col text-left">
          <span
            className={cn(
              "font-display tracking-[0.14em] uppercase text-[var(--ink)] transition-colors group-hover:text-[var(--cinnabar)]",
              size === "sm" && "text-xs",
              size === "md" && "text-sm font-medium",
              size === "lg" && "text-lg font-medium",
              size === "xl" && "text-2xl font-semibold",
            )}
          >
            <span>{BRAND.latinInitial}</span>
            <span>{REST}</span>
          </span>
          <span className="font-anek-tamil text-[10px] tracking-wider text-[var(--muted)]">
            {BRAND.nameTamil}
          </span>
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} aria-label={BRAND.name} className="inline-block outline-none focus-visible:ring-1 focus-visible:ring-[var(--ink)]">
        {content}
      </Link>
    );
  }

  return content;
}
