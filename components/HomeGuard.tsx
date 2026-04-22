"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Wraps the homepage content and redirects first-time visitors to /intro.
 * Must be a client component (localStorage access), but children can be
 * server components — they are passed in from the server-component page.tsx.
 */
export default function HomeGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("intro-watched") !== "true") {
        router.push("/intro");
        return;
      }
    } catch {}
    setReady(true);
  }, [router]);

  if (!ready) return null;
  return <>{children}</>;
}
