"use client";

import { useEffect, useRef, useState } from "react";

function parseStat(
  value: string
): { target: number; suffix: string; isStatic: boolean } {
  if (value.includes("/")) {
    return { target: 0, suffix: value, isStatic: true };
  }

  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return { target: 0, suffix: value, isStatic: true };

  const numStr = match[1];
  const suffix = match[2];

  const multiplier = suffix.startsWith("K") ? 1000 : 1;
  const displaySuffix = suffix.startsWith("K")
    ? "K" + suffix.slice(1)
    : suffix;

  return {
    target: parseFloat(numStr) * multiplier,
    suffix: displaySuffix,
    isStatic: false,
  };
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export default function StatCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const hasAnimated = useRef(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (hasAnimated.current) return;

    const el = ref.current;
    if (!el) return;

    const parsed = parseStat(value);
    if (parsed.isStatic || reduced) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(progress);
            const current = Math.round(eased * parsed.target);
            setDisplay(`${current}${parsed.suffix}`);
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, reduced]);

  return <span ref={ref}>{display}</span>;
}
