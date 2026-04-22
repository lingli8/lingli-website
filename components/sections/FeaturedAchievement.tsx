import { content } from "@/lib/content";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturedAchievement() {
  const { featured } = content.achievements;

  const goldBorder: React.CSSProperties = featured.spotlight
    ? {
        borderColor: "#D4AF37",
        boxShadow:
          "0 0 24px rgba(212,175,55,0.25), 0 0 6px rgba(212,175,55,0.15)",
      }
    : {};

  return (
    <section
      id="achievement"
      className="py-20 px-6 md:px-12 lg:px-20 bg-background"
      aria-label="Featured Achievement"
    >
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <SectionHeading id="achievement">Featured Achievement</SectionHeading>
        </FadeUp>

        <FadeUp delay={0.15} className="mt-6">
          <div
            className="flex flex-col md:flex-row gap-6 items-start border rounded-2xl p-6 md:p-8 bg-background transition-shadow"
            style={goldBorder}
            aria-label={`Achievement: ${featured.title}`}
          >
            {/* Icon */}
            <div className="text-5xl flex-shrink-0" aria-hidden="true">
              {featured.icon}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                {featured.award && (
                  <span className="text-xs font-pixel text-accent border border-accent/40 rounded px-2 py-0.5"
                    style={{ fontSize: "0.55rem" }}>
                    {featured.award}
                  </span>
                )}
                <span className="text-xs text-secondary font-mono">
                  {featured.date}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                {featured.title}
              </h3>

              {featured.project && (
                <p className="text-sm font-semibold text-accent">
                  {featured.project}
                </p>
              )}

              <p className="text-sm leading-6 text-foreground/80">
                {featured.description}
              </p>

              {featured.link && (
                <a
                  href={featured.link}
                  className="mt-2 self-start text-sm font-medium text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                  aria-label={`Learn more about ${featured.title}`}
                >
                  Read the story →
                </a>
              )}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
