"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import Typewriter from "@/components/intro/Typewriter";
import type { AnimationScene } from "@/lib/schemas";

interface Props {
  scene: AnimationScene;
  onComplete: () => void;
}

export default function Scene0Cover({ scene, onComplete }: Props) {
  const reduced = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(onComplete, scene.duration);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [scene.duration, onComplete]);

  const tagline = scene.content?.tagline ?? "";

  return (
    <div className="relative w-full max-w-3xl mx-auto flex items-center justify-center bg-black" style={{ aspectRatio: "16 / 9" }}>
      <p
        className="font-pixel text-white text-center px-8 leading-loose"
        style={{ fontSize: "clamp(7px, 1.5vw, 12px)" }}
      >
        <Typewriter
          text={tagline}
          duration={reduced ? 0 : Math.floor(scene.duration * 0.8)}
        />
      </p>
    </div>
  );
}
