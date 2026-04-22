import Image from "next/image";
import { scenes, type Scene } from "@/lib/sprites";

interface Props {
  scene: Scene;
  overlay?: boolean;
  children?: React.ReactNode;
}

export default function SceneBackground({ scene, overlay = false, children }: Props) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={scenes[scene]}
        alt=""
        fill
        unoptimized
        style={{ imageRendering: "pixelated", objectFit: "cover" }}
      />
      {overlay && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          aria-hidden="true"
        />
      )}
      {children && (
        <div className="absolute inset-0">{children}</div>
      )}
    </div>
  );
}
