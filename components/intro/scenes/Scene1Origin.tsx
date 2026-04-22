"use client";

import type { AnimationScene } from "@/lib/schemas";
import type { Item } from "@/lib/sprites";
import SceneFrame from "./SceneFrame";

interface Props {
  scene: AnimationScene;
  onComplete: () => void;
}

export default function Scene1Origin({ scene, onComplete }: Props) {
  const egg = scene.easterEgg;
  return (
    <SceneFrame
      background="china-origin"
      character={{ variant: "base" }}
      mainPopup={scene.popup?.main}
      sidePopup={scene.popup?.side}
      easterEgg={
        egg
          ? { sprite: egg.sprite as Item, position: egg.position, eggId: egg.id, label: egg.label }
          : undefined
      }
      duration={scene.duration}
      onComplete={onComplete}
    />
  );
}
