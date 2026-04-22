import { content } from "@/lib/content";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";
import ExperienceEntryRow from "./ExperienceEntry";

export default function Experience() {
  const { timeline } = content.experience;

  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-12 lg:px-20 bg-background"
      aria-label="Experience"
    >
      <div className="max-w-3xl mx-auto">
        <FadeUp>
          <SectionHeading id="experience">Experience</SectionHeading>
        </FadeUp>

        <div className="mt-8">
          {timeline.map((entry, i) => (
            <FadeUp key={entry.id} delay={i * 0.08}>
              <ExperienceEntryRow
                entry={entry}
                isLast={i === timeline.length - 1}
              />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
