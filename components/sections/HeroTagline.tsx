"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.4 },
  },
};

const letter = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.06 } },
};

interface Props {
  text: string;
}

export default function HeroTagline({ text }: Props) {
  const chars = text.split("");

  return (
    <motion.p
      className="font-pixel text-accent leading-loose"
      style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)" }}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={`"${text}"`}
    >
      {/* aria-hidden so screen readers use the aria-label above */}
      <span aria-hidden="true">
        &ldquo;
        {chars.map((char, i) => (
          <motion.span key={i} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
        &rdquo;
      </span>
    </motion.p>
  );
}
