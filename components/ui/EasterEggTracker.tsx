"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TOTAL_EGGS } from "@/lib/easter-eggs";

// Custom event name — all hook instances and the console egg share this.
const EGG_EVENT = "egg-discovered";

// ── Hook ─────────────────────────────────────────────────────────────────────

export function useEasterEggs() {
  const [found, setFound] = useState<string[]>([]);

  useEffect(() => {
    // Hydrate from localStorage on mount
    try {
      setFound(JSON.parse(localStorage.getItem("easter-eggs-found") ?? "[]"));
    } catch {}

    // Sync when any other component (or the console script) discovers an egg
    const sync = () => {
      try {
        setFound(JSON.parse(localStorage.getItem("easter-eggs-found") ?? "[]"));
      } catch {}
    };
    window.addEventListener(EGG_EVENT, sync);
    return () => window.removeEventListener(EGG_EVENT, sync);
  }, []);

  const discover = useCallback((id: string) => {
    try {
      const stored: string[] = JSON.parse(
        localStorage.getItem("easter-eggs-found") ?? "[]"
      );
      if (stored.includes(id)) return; // already found — no-op
      const next = [...stored, id];
      localStorage.setItem("easter-eggs-found", JSON.stringify(next));
      // Dispatch: syncs all hook instances + triggers toast
      window.dispatchEvent(
        new CustomEvent(EGG_EVENT, { detail: { id, count: next.length } })
      );
    } catch {}
  }, []);

  return { found, count: found.length, discover };
}

// ── Toast ─────────────────────────────────────────────────────────────────────

export function EasterEggToast() {
  const [toast, setToast] = useState<{ count: number } | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const { count } = (e as CustomEvent<{ count: number }>).detail;
      if (timerRef.current) clearTimeout(timerRef.current);
      setToast({ count });
      timerRef.current = setTimeout(() => setToast(null), 3000);
    };
    window.addEventListener(EGG_EVENT, handler);
    return () => {
      window.removeEventListener(EGG_EVENT, handler);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (!toast) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 font-mono text-sm text-accent border border-accent bg-background whitespace-nowrap"
      style={{ boxShadow: "2px 2px 0 0 var(--foreground)" }}
    >
      ✨ Easter egg found! ({toast.count}/{TOTAL_EGGS})
    </div>
  );
}
