"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import IntroAnimation from "@/components/intro/IntroAnimation";
import { EasterEggToast } from "@/components/ui/EasterEggTracker";

export default function IntroPage() {
  const router = useRouter();
  const [done, setDone] = useState(false);

  function finish() {
    try {
      localStorage.setItem("intro-watched", "true");
    } catch {}
    setDone(true);
  }

  if (done) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <button
          onClick={() => router.push("/")}
          className="font-pixel text-accent border-2 border-accent px-8 py-4 text-xs hover:bg-accent hover:text-black transition-colors"
          style={{ boxShadow: "4px 4px 0 0 #fff" }}
        >
          CONTINUE →
        </button>
        <EasterEggToast />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      <button
        onClick={finish}
        className="absolute top-4 right-4 z-50 text-sm text-white/40 hover:text-white/80 transition-colors font-mono"
      >
        Skip intro →
      </button>
      <IntroAnimation onFinish={finish} />
      <EasterEggToast />
    </div>
  );
}
