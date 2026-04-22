"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import PixelCharacter from "@/components/intro/PixelCharacter";
import { useEasterEggs } from "@/components/ui/EasterEggTracker";
import { scenes as sceneSprites, items as itemSprites } from "@/lib/sprites";
import type { Scene, Item, CharacterVariant } from "@/lib/sprites";

// Warm cream background used when no scene sprite is provided (matches tokens.ts light bg)
const FALLBACK_BG = "#FFF5E1";

interface SceneFrameProps {
  background?: Scene;
  character?: { variant: CharacterVariant; position?: "center" | "left" | "right" };
  mainPopup?: string[];
  sidePopup?: string[];
  easterEgg?: { sprite: Item; position: string; eggId: string; label?: string };
  effects?: string[];
  duration: number;
  onComplete: () => void;
}

export default function SceneFrame({
  background,
  character,
  mainPopup,
  sidePopup,
  easterEgg,
  effects = [],
  duration,
  onComplete,
}: SceneFrameProps) {
  const reduced = useReducedMotion();
  const { discover } = useEasterEggs();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(onComplete, duration);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [duration, onComplete]);

  const charPos = character?.position ?? "center";
  const charAlignClass =
    charPos === "left" ? "left-8" : charPos === "right" ? "right-8" : "left-1/2 -translate-x-1/2";

  const hasConfetti = effects.includes("confetti");

  // Confetti columns: 10 sprites spread across the frame
  const confettiItems = hasConfetti
    ? Array.from({ length: 10 }, (_, i) => ({
        key: i,
        left: `${5 + i * 9}%`,
        delay: reduced ? 0 : i * 0.08,
      }))
    : [];

  return (
    /* 16:9 container — fills available space up to max-width */
    <div
      className="relative w-full max-w-3xl mx-auto overflow-hidden"
      style={{
        aspectRatio: "16 / 9",
        background: background ? undefined : FALLBACK_BG,
      }}
    >
      {/* ── Scene background ──────────────────────────────────────── */}
      {background && (
        <Image
          src={sceneSprites[background]}
          alt=""
          fill
          unoptimized
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          style={{ imageRendering: "pixelated", objectFit: "cover" }}
        />
      )}

      {/* ── Confetti ──────────────────────────────────────────────── */}
      {confettiItems.map(({ key, left, delay }) => (
        <motion.div
          key={key}
          className="absolute pointer-events-none z-10"
          style={{ left, top: 0 }}
          initial={{ y: -40, opacity: 1 }}
          // y must be a large pixel value — framer-motion "%" is relative to the
          // element's own height (32 px), not the container height.
          animate={reduced ? { y: 20, opacity: 0.7 } : { y: 600, opacity: 1 }}
          transition={{ duration: 1.1, delay, ease: "easeIn" }}
        >
          <Image
            src="/sprites/effects/confetti.png"
            alt=""
            width={40}
            height={40}
            unoptimized
            style={{ imageRendering: "pixelated" }}
          />
        </motion.div>
      ))}

      {/* ── Character ──────────────────────────────────────────────── */}
      {character && (
        <div
          className={`absolute z-20 ${charAlignClass}`}
          style={{ bottom: "10%", background: "transparent" }}
        >
          <PixelCharacter variant={character.variant} scale={5} />
        </div>
      )}

      {/* ── Easter egg sprite ─────────────────────────────────────── */}
      {easterEgg && (
        <EggSprite
          sprite={easterEgg.sprite}
          position={easterEgg.position}
          eggId={easterEgg.eggId}
          label={easterEgg.label}
          discover={discover}
          reduced={!!reduced}
        />
      )}

      {/* ── Popups overlay ────────────────────────────────────────── */}
      {(mainPopup || sidePopup) && (
        <div className="absolute inset-x-4 bottom-4 z-30 flex items-end gap-3">
          {/* Main popup */}
          {mainPopup && mainPopup.length > 0 && (
            <div
              className="border-2 border-white bg-black/85 px-3 py-2 flex-1"
              style={{ boxShadow: "3px 3px 0 0 rgba(255,255,255,0.3)" }}
            >
              {mainPopup.map((line, i) => (
                <motion.p
                  key={i}
                  className="font-pixel text-white leading-relaxed"
                  style={{ fontSize: "9px" }}
                  initial={reduced ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18, delay: reduced ? 0 : i * 0.2 }}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          )}

          {/* Side popup (stat gains) */}
          {sidePopup && sidePopup.length > 0 && (
            <div className="flex flex-col gap-1 min-w-max">
              {sidePopup.map((line, i) => (
                <motion.div
                  key={i}
                  className="font-pixel text-accent bg-black/70 px-2 py-1 border border-accent/60"
                  style={{ fontSize: "7px" }}
                  initial={reduced ? false : { opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: reduced ? 0 : 0.4 + i * 0.2,
                  }}
                >
                  {line}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Easter-egg sprite sub-component ──────────────────────────────────────────

interface EggSpriteProps {
  sprite: Item;
  position: string;
  eggId: string;
  label?: string;
  discover: (id: string) => void;
  reduced: boolean;
}

function EggSprite({ sprite, position, eggId, label, discover, reduced }: EggSpriteProps) {
  const isBottomRight = position === "bottom-right";
  const isRight = position === "right";

  const posStyle: React.CSSProperties = isBottomRight
    ? { position: "absolute", bottom: "6%", right: "2%", zIndex: 25 }
    : isRight
    ? { position: "absolute", top: "25%", right: "4%", zIndex: 25 }
    : { position: "absolute", bottom: "20%", right: "4%", zIndex: 25 };

  // Cat at bottom-right: slides in quickly from off-screen right
  const motionProps =
    isBottomRight && !reduced
      ? {
          initial: { x: "140%" },
          animate: { x: 0 },
          transition: { duration: 0.5, delay: 0.2, ease: "linear" as const },
        }
      : {};

  return (
    <motion.div style={posStyle} {...motionProps}>
      <button
        onClick={() => discover(eggId)}
        className="relative flex flex-col items-center gap-0.5 bg-transparent border-none p-0 cursor-pointer group"
        aria-label="Easter egg"
        title="..."
      >
        <Image
          src={itemSprites[sprite]}
          alt=""
          width={64}
          height={64}
          unoptimized
          style={{ imageRendering: "pixelated" }}
          className="group-hover:scale-110 transition-transform"
        />
        {label && (
          <span
            className="font-pixel text-white bg-black/60 px-1"
            style={{ fontSize: "6px" }}
          >
            {label}
          </span>
        )}
      </button>
    </motion.div>
  );
}
