import PixelCharacter from "@/components/intro/PixelCharacter";
import SceneBackground from "@/components/ui/SceneBackground";
import type { CharacterVariant } from "@/lib/sprites";

const variants: CharacterVariant[] = [
  "base",
  "ey-exhausted",
  "victory",
  "waving",
  "hiking",
  "coding",
  "walk",
];

export default function TestSpritePage() {
  return (
    <main className="min-h-screen bg-background py-12 px-8">
      <h1 className="text-2xl font-bold text-foreground mb-2">Sprite Test Page</h1>
      <p className="text-sm text-secondary mb-10">
        All variants at scale=8 (256px wide). Hover triggers wave swap on base.
        Walk cycles at 200ms/frame.
      </p>

      {/* All variants grid */}
      <div className="flex flex-wrap gap-10 items-end mb-16">
        {variants.map((v) => (
          <div key={v} className="flex flex-col items-center gap-2">
            <PixelCharacter
              variant={v}
              scale={8}
              hoverVariant={v === "base" ? "waving" : undefined}
            />
            <span className="text-xs font-mono text-secondary">{v}</span>
          </div>
        ))}
      </div>

      {/* Scale comparison */}
      <h2 className="text-lg font-semibold text-foreground mb-6">Scale comparison (base variant)</h2>
      <div className="flex flex-wrap gap-8 items-end mb-16">
        {[4, 6, 8, 10, 12].map((s) => (
          <div key={s} className="flex flex-col items-center gap-2">
            <PixelCharacter variant="base" scale={s} />
            <span className="text-xs font-mono text-secondary">scale={s}</span>
          </div>
        ))}
      </div>

      {/* Scene background test */}
      <h2 className="text-lg font-semibold text-foreground mb-6">Scene backgrounds</h2>
      <div className="flex flex-wrap gap-6">
        {(["hackathon", "seattle-dusk", "mountain-trail"] as const).map((scene) => (
          <div key={scene} className="flex flex-col gap-2">
            <div className="relative w-64 h-36 rounded-lg overflow-hidden border border-divider">
              <SceneBackground scene={scene} overlay={false}>
                <div className="absolute bottom-2 left-2">
                  <PixelCharacter variant="base" scale={4} />
                </div>
              </SceneBackground>
            </div>
            <span className="text-xs font-mono text-secondary text-center">{scene}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
