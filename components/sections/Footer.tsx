"use client";

import { content } from "@/lib/content";
import { useEasterEggs } from "@/components/ui/EasterEggTracker";
import { EASTER_EGGS, TOTAL_EGGS } from "@/lib/easter-eggs";

export default function Footer() {
  const { footer } = content.meta;
  const { count, discover } = useEasterEggs();

  return (
    <footer
      className="py-10 px-6 md:px-12 lg:px-20 border-t border-divider bg-background"
      aria-label="Footer"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-3 text-center">
        {/* Terminal prompt — click the cursor to discover easter egg */}
        <p className="font-mono text-sm text-accent" aria-label="Terminal prompt">
          <span className="text-secondary">$</span>{" "}
          <span className="text-foreground/90">{footer.prompt.replace(/^.*?\$ /, "")}</span>
          <button
            onClick={() => discover(EASTER_EGGS.FOOTER_PROMPT)}
            className="animate-pulse text-accent ml-0.5 cursor-pointer bg-transparent border-none p-0 leading-none"
            aria-label="Hidden easter egg"
            title="..."
          >
            ▌
          </button>
        </p>

        {/* Copyright + builtWith */}
        <p className="text-xs text-secondary">{footer.copyright}</p>
        <p className="text-xs text-secondary/70">{footer.builtWith}</p>

        {/* Easter egg counter — dynamic, hydrates from localStorage */}
        <p
          className={`text-xs italic transition-colors ${
            count > 0 ? "text-accent/70" : "text-secondary/50"
          }`}
        >
          🔍 Easter eggs found: {count} / {TOTAL_EGGS}
        </p>
      </div>
    </footer>
  );
}
