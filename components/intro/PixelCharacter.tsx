"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { characterSprites, walkFrames, type CharacterVariant } from "@/lib/sprites";

interface Props {
  variant?: CharacterVariant;
  scale?: number;
  hoverVariant?: CharacterVariant;
  className?: string;
}

// Logical sprite width in source pixels — all variants normalised to this.
const LOGICAL_WIDTH = 32;

const ALT_TEXT: Record<CharacterVariant, string> = {
  base:           "Lingli character, standing",
  "ey-exhausted": "Lingli character, exhausted from audit season",
  victory:        "Lingli character, holding a trophy in victory",
  waving:         "Lingli character, waving",
  hiking:         "Lingli character, hiking with a backpack",
  coding:         "Lingli character, coding at her desk",
  walk:           "Lingli character, walking",
};

export default function PixelCharacter({
  variant = "base",
  scale = 8,
  hoverVariant,
  className,
}: Props) {
  const reduced = useReducedMotion();
  const displayWidth = scale * LOGICAL_WIDTH;

  // Walk-cycle state
  const [walkFrame, setWalkFrame] = useState(0);

  // Hover-swap state
  const [hovered, setHovered] = useState(false);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Walk animation — freeze on frame 0 if reduced motion
  useEffect(() => {
    if (variant !== "walk" || reduced) return;
    const id = setInterval(() => {
      setWalkFrame((f) => (f + 1) % walkFrames.length);
    }, 200);
    return () => clearInterval(id);
  }, [variant, reduced]);

  // Hover swap — instant revert with no queued timers
  function handleMouseEnter() {
    if (!hoverVariant) return;
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    setHovered(true);
    hoverTimerRef.current = setTimeout(() => setHovered(false), 1000);
  }
  function handleMouseLeave() {
    // Let the 1-second timer run; don't snap back early
  }

  // Resolve active src
  const activeVariant = hovered && hoverVariant ? hoverVariant : variant;
  let src: string;
  if (activeVariant === "walk") {
    src = walkFrames[reduced ? 0 : walkFrame];
  } else {
    src = characterSprites[activeVariant];
  }

  return (
    <div
      className={className}
      style={{ width: displayWidth, height: "auto", display: "inline-block" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src}
        alt={ALT_TEXT[activeVariant]}
        width={displayWidth}
        height={displayWidth} // square placeholder; height auto via CSS
        unoptimized
        priority
        style={{
          imageRendering: "pixelated",
          width: displayWidth,
          height: "auto",
          objectFit: "contain",
          display: "block",
        }}
      />
    </div>
  );
}
