import type { Project } from "@/lib/schemas";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const { title, subtitle, badge, oneLiner, stack, metrics, links, date } =
    project;

  return (
    <article className="flex flex-col gap-3 rounded-xl border border-divider bg-background p-5 hover:border-accent/60 transition-colors">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-0.5 min-w-0">
          <div className="flex items-center gap-2">
            {badge && <span aria-hidden="true">{badge}</span>}
            <h3 className="font-semibold text-foreground leading-snug">{title}</h3>
          </div>
          {subtitle && (
            <p className="text-xs text-secondary leading-snug">{subtitle}</p>
          )}
        </div>
        <span className="text-xs font-mono text-secondary flex-shrink-0">{date}</span>
      </div>

      {/* One-liner */}
      <p className="text-sm text-foreground/80 leading-snug">{oneLiner}</p>

      {/* Metrics */}
      {metrics && metrics.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex flex-col items-center px-3 py-1.5 rounded-lg bg-accent/10 text-center"
            >
              <span className="text-sm font-bold text-accent">{m.value}</span>
              <span className="text-xs text-secondary">{m.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5">
        {stack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-0.5 rounded-md border border-divider text-foreground/70 font-mono"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {links && (
        <div className="flex gap-3 mt-auto pt-1">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} GitHub repository`}
              className="text-xs font-medium text-secondary hover:text-accent transition-colors"
            >
              🐙 GitHub
            </a>
          )}
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live demo`}
              className="text-xs font-medium text-secondary hover:text-accent transition-colors"
            >
              🔗 Demo
            </a>
          )}
          {links.caseStudy && (
            <a
              href={links.caseStudy}
              aria-label={`${title} case study`}
              className="text-xs font-medium text-secondary hover:text-accent transition-colors"
            >
              📖 Case study →
            </a>
          )}
        </div>
      )}
    </article>
  );
}
