"use client";

import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

interface TypewriterProps {
  text: string;
  /** Total time in ms to type all characters */
  duration: number;
  className?: string;
}

export default function Typewriter({ text, duration, className }: TypewriterProps) {
  const reduced = useReducedMotion();
  const [displayed, setDisplayed] = useState(() => (reduced ? text : ""));

  useEffect(() => {
    if (reduced || !text) return;
    const charDelay = Math.max(20, duration / text.length);
    let index = 0;
    const id = setInterval(() => {
      index++;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) clearInterval(id);
    }, charDelay);
    return () => clearInterval(id);
  }, [text, duration, reduced]);

  return (
    <span className={className}>
      {displayed}
      {!reduced && displayed.length < text.length && (
        <span className="animate-pulse">▌</span>
      )}
    </span>
  );
}
