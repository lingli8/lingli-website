"use client";

import { useEffect, useRef } from "react";
import type { AnimationScene } from "@/lib/schemas";

interface Props {
  scene: AnimationScene;
  onComplete: () => void;
}

export default function SceneStub({ scene, onComplete }: Props) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(onComplete, scene.duration);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [scene.duration, onComplete]);

  // Human-readable scene number from the id (e.g. "scene-7-oss4ai-win" → "7")
  const sceneNum = scene.id.match(/scene-(\d[\d-]*\d|\d)/)?.[1] ?? scene.id;

  return (
    <div
      className="relative w-full max-w-3xl mx-auto flex items-center justify-center bg-black"
      style={{ aspectRatio: "16 / 9" }}
    >
      <p
        className="font-pixel text-white/30 text-center"
        style={{ fontSize: "clamp(7px, 1.2vw, 11px)" }}
      >
        Scene {sceneNum} — coming soon
      </p>
    </div>
  );
}
