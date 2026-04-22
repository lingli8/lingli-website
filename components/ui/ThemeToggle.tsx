"use client";

import { useState, useEffect, useCallback } from "react";
import { useReducedMotion } from "framer-motion";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [hintVisible, setHintVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    const attr = document.documentElement.getAttribute("data-theme") as Theme | null;
    const sys: Theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    setTheme(attr ?? sys);
    if (!localStorage.getItem("theme-hint-dismissed")) setHintVisible(true);
  }, []);

  const applyTheme = useCallback((next: Theme) => {
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  }, []);

  const toggle = useCallback(() => {
    applyTheme(theme === "light" ? "dark" : "light");
  }, [theme, applyTheme]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (
        e.key === "F2" ||
        (e.key === "D" && e.shiftKey && (e.metaKey || e.ctrlKey))
      ) {
        e.preventDefault();
        toggle();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggle]);

  function dismissHint() {
    setHintVisible(false);
    localStorage.setItem("theme-hint-dismissed", "true");
  }

  // Avoid hydration mismatch — icon depends on client-side theme read
  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {hintVisible && (
        <div
          className="flex items-center gap-2 bg-background border border-divider rounded-lg px-3 py-2 shadow-lg"
          role="status"
          aria-live="polite"
        >
          <span
            className="font-pixel text-foreground"
            style={{ fontSize: "0.55rem" }}
          >
            Press F2 to toggle theme
          </span>
          <button
            onClick={dismissHint}
            aria-label="Dismiss theme hint"
            className="text-secondary hover:text-foreground transition-colors leading-none"
          >
            ✕
          </button>
        </div>
      )}
      <button
        onClick={() => {
          toggle();
          dismissHint();
        }}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        title={`Toggle theme — F2 or ${
          navigator.platform.includes("Mac") ? "⌘" : "Ctrl"
        }+Shift+D`}
        className={`w-12 h-12 rounded-lg border border-divider bg-background text-xl shadow-md hover:border-accent transition-colors${!reduced ? " hover:scale-110 transition-transform" : ""}`}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}
