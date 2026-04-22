"use client";

import { useEffect, useState } from "react";

export default function HeroIntroHint() {
  const [hasWatchedIntro, setHasWatchedIntro] = useState<boolean | null>(null);

  useEffect(() => {
    setHasWatchedIntro(localStorage.getItem("intro-watched") === "true");
  }, []);

  // null = not yet hydrated (avoid SSR mismatch); true = already watched
  if (hasWatchedIntro !== false) return null;

  return (
    <a
      href="#" // TODO: replace with /intro once animation route is built
      className="mt-2 text-sm opacity-70 hover:opacity-100 inline-flex items-center gap-2 transition-opacity"
    >
      🎮 First time here? Watch my 30-second story →
    </a>
  );
}
