import { content } from "@/lib/content";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillCategoryCard from "./SkillCategory";

export default function Skills() {
  const { categories } = content.skills;

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12 lg:px-20 bg-background"
      aria-label="Skills"
    >
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <SectionHeading id="skills">Skills</SectionHeading>
          <p className="mt-1 text-sm text-secondary">
            ●●● proficient &nbsp;·&nbsp; ●●○ comfortable &nbsp;·&nbsp;
            ●○○ familiar &nbsp;·&nbsp; ○○○ learning
          </p>
        </FadeUp>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <FadeUp key={cat.id} delay={i * 0.07}>
              <SkillCategoryCard category={cat} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
