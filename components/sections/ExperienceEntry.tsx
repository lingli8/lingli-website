"use client";

import type { ExperienceEntry } from "@/lib/schemas";
import { useEasterEggs } from "@/components/ui/EasterEggTracker";
import { EASTER_EGGS } from "@/lib/easter-eggs";

interface Props {
  entry: ExperienceEntry;
  isLast: boolean;
}

export default function ExperienceEntryRow({ entry, isLast }: Props) {
  const isCurrent = entry.end === "present";
  const isWork = entry.type === "work";
  const { discover } = useEasterEggs();

  return (
    <div className="flex gap-4 md:gap-6">
      {/* Timeline spine */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className={`w-4 h-4 rounded-full border-2 mt-1 flex-shrink-0 ${
            isCurrent
              ? "border-success bg-success animate-pulse"
              : isWork
              ? "border-accent bg-accent/20"
              : "border-secondary bg-secondary/20"
          }`}
          aria-hidden="true"
        />
        {!isLast && (
          <div className="w-px flex-1 bg-divider mt-1" aria-hidden="true" />
        )}
      </div>

      {/* Content */}
      <div className={`flex flex-col gap-1 pb-8 min-w-0 ${isLast ? "" : ""}`}>
        {/* Header row */}
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <span className="text-xl" aria-hidden="true">{entry.icon}</span>
          <span className="font-semibold text-foreground">{entry.role}</span>
          {entry.hiddenEasterEgg && (
            <span
              className="opacity-0 hover:opacity-100 transition-opacity cursor-pointer text-base select-none"
              title="Easter egg unlocked 🎉"
              aria-hidden="true"
              onClick={() => discover(EASTER_EGGS.EY_SWEAT)}
            >
              {entry.hiddenEasterEgg}
            </span>
          )}
        </div>

        {/* Org + meta */}
        <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-sm text-secondary">
          <span>{entry.org}</span>
          {entry.location && <span>· {entry.location}</span>}
          <span className="font-mono text-xs">
            {entry.start} – {isCurrent ? <strong className="text-success">present</strong> : entry.end}
          </span>
        </div>

        {/* Bullets */}
        {entry.bullets && entry.bullets.length > 0 && (
          <ul className="mt-1 flex flex-col gap-1">
            {entry.bullets.map((b) => (
              <li key={b} className="flex gap-2 text-sm leading-snug text-foreground/80">
                <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Coursework */}
        {entry.coursework && entry.coursework.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {entry.coursework.map((c) => (
              <span
                key={c}
                className="text-xs px-2 py-0.5 rounded-md border border-divider text-secondary"
              >
                {c}
              </span>
            ))}
          </div>
        )}

        {/* Tags */}
        {entry.tags && entry.tags.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {entry.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded-md bg-accent/10 text-accent"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
