import type { SkillCategory as TSkillCategory } from "@/lib/schemas";

const LEVEL_DOTS: Record<string, number> = {
  proficient:  3,
  comfortable: 2,
  familiar:    1,
  learning:    0,
};

function SkillDots({ level }: { level: string }) {
  const filled = LEVEL_DOTS[level] ?? 0;
  return (
    <span className="flex gap-0.5 flex-shrink-0" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${
            i < filled ? "bg-accent" : "bg-divider"
          }`}
        />
      ))}
    </span>
  );
}

interface Props {
  category: TSkillCategory;
}

export default function SkillCategoryCard({ category }: Props) {
  const isLearning = category.id === "learning";

  return (
    <div
      className={`flex flex-col gap-3 rounded-xl p-5 border ${
        isLearning
          ? "border-dashed border-secondary/50 bg-secondary/5"
          : "border-divider bg-background"
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="text-xl" aria-hidden="true">
          {category.icon}
        </span>
        <h3
          className={`font-semibold text-sm ${
            isLearning ? "text-secondary" : "text-foreground"
          }`}
        >
          {category.name}
        </h3>
      </div>

      {/* Skills */}
      <ul className="flex flex-col gap-1.5">
        {category.skills.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center justify-between gap-2 text-sm"
          >
            <span className="text-foreground/90 leading-snug">
              {skill.name}
              {skill.usedIn && (
                <span className="ml-1 text-xs text-secondary/70 hidden md:inline">
                  · {skill.usedIn}
                </span>
              )}
            </span>
            <SkillDots level={skill.level} />
          </li>
        ))}
      </ul>
    </div>
  );
}
