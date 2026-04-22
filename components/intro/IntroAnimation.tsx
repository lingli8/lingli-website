"use client";

import { useReducer, useCallback } from "react";
import { content } from "@/lib/content";
import type { AnimationScene } from "@/lib/schemas";
import Scene0Cover from "./scenes/Scene0Cover";
import Scene1Origin from "./scenes/Scene1Origin";
import Scene2Student from "./scenes/Scene2Student";
import Scene3Bachelors from "./scenes/Scene3Bachelors";
import SceneStub from "./scenes/SceneStub";

interface Props {
  onFinish: () => void;
}

type State = { index: number };
type Action = { type: "NEXT" };

function reducer(state: State, _action: Action): State {
  return { index: state.index + 1 };
}

type SceneComponent = React.ComponentType<{
  scene: AnimationScene;
  onComplete: () => void;
}>;

const SCENE_MAP: Record<string, SceneComponent> = {
  "scene-0-cold-open":    Scene0Cover,
  "scene-1-origin-china": Scene1Origin,
  "scene-2-student-life": Scene2Student,
  "scene-3-bachelors":    Scene3Bachelors,
};

export default function IntroAnimation({ onFinish }: Props) {
  const scenes = content.animationScenes.scenes;
  const [state, dispatch] = useReducer(reducer, { index: 0 });

  const handleComplete = useCallback(() => {
    if (state.index + 1 >= scenes.length) {
      onFinish();
    } else {
      dispatch({ type: "NEXT" });
    }
  }, [state.index, scenes.length, onFinish]);

  const scene = scenes[state.index];
  if (!scene) return null;

  const SceneComponent: SceneComponent = SCENE_MAP[scene.id] ?? SceneStub;
  const isDev = process.env.NODE_ENV === "development";

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {isDev && (
        <div
          className="absolute top-2 left-2 z-50 font-mono pointer-events-none"
          style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}
        >
          Scene {state.index + 1}/{scenes.length}
        </div>
      )}
      <SceneComponent key={scene.id} scene={scene} onComplete={handleComplete} />
    </div>
  );
}
