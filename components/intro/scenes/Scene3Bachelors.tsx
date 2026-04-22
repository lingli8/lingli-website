"use client";

import type { AnimationScene } from "@/lib/schemas";
import SceneFrame from "./SceneFrame";

interface Props {
  scene: AnimationScene;
  onComplete: () => void;
}

export default function Scene3Bachelors({ scene, onComplete }: Props) {
  return (
    <SceneFrame
      character={{ variant: "base" }}
      mainPopup={scene.popup?.main}
      sidePopup={scene.popup?.side}
      effects={scene.effects ?? []}
      duration={scene.duration}
      onComplete={onComplete}
    />
  );
}
