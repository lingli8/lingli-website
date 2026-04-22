"use client";

import { motion, useReducedMotion } from "framer-motion";

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
  const reduced = useReducedMotion();

  const cls = "font-pixel text-accent leading-loose";
  const style = { fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)" };

  if (reduced) {
    return (
      <p className={cls} style={style}>
        &ldquo;{text}&rdquo;
      </p>
    );
  }

  return (
    <motion.p
      className={cls}
      style={style}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={`"${text}"`}
    >
      <span aria-hidden="true">
        &ldquo;
        {text.split("").map((char, i) => (
          <motion.span key={i} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
        &rdquo;
      </span>
    </motion.p>
  );
}
