"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { content } from "@/lib/content";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function BeyondWork() {
  const { title, subtitle, items } = content.hobbies;
  const reduced = useReducedMotion();

  return (
    <section
      id="beyond-work"
      className="py-20 px-6 md:px-12 lg:px-20 bg-background"
      aria-label={title}
    >
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <SectionHeading id="beyond-work">{title}</SectionHeading>
          <p className="mt-1 text-sm text-secondary italic">{subtitle}</p>
        </FadeUp>

        {reduced ? (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {items.map((hobby) => (
              <HobbyCard key={hobby.label} hobby={hobby} />
            ))}
          </div>
        ) : (
          <motion.div
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {items.map((hobby) => (
              <motion.div key={hobby.label} variants={item}>
                <HobbyCard hobby={hobby} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

function HobbyCard({
  hobby,
}: {
  hobby: { icon: string; label: string; content: string; footnote?: string };
}) {
  return (
    <div className="flex flex-col gap-1.5 rounded-xl border border-divider bg-background p-4 hover:border-accent/60 transition-colors">
      <div className="flex items-center gap-2">
        <span className="text-xl" aria-hidden="true">
          {hobby.icon}
        </span>
        <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
          {hobby.label}
        </span>
      </div>
      <p className="text-sm text-foreground leading-snug">{hobby.content}</p>
      {hobby.footnote && (
        <p className="text-xs text-secondary/70 italic">{hobby.footnote}</p>
      )}
    </div>
  );
}
