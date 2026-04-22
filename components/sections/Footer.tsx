import { content } from "@/lib/content";

export default function Footer() {
  const { footer, easterEggCount } = content.meta;

  return (
    <footer
      className="py-10 px-6 md:px-12 lg:px-20 border-t border-divider bg-background"
      aria-label="Footer"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-3 text-center">
        {/* Terminal prompt */}
        <p className="font-mono text-sm text-accent" aria-label="Terminal prompt">
          <span className="text-secondary">$</span>{" "}
          <span className="text-foreground/90">{footer.prompt.replace(/^.*?\$ /, "")}</span>
          <span className="animate-pulse text-accent ml-0.5">▌</span>
        </p>

        {/* Copyright + builtWith */}
        <p className="text-xs text-secondary">{footer.copyright}</p>
        <p className="text-xs text-secondary/70">{footer.builtWith}</p>

        {/* Easter egg count */}
        <p className="text-xs text-secondary/50 italic">
          {easterEggCount} easter egg{easterEggCount !== 1 ? "s" : ""} hidden on this page. Find them all 🔍
        </p>
      </div>
    </footer>
  );
}
