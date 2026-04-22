"use client";

import { useEffect, useRef, useState } from "react";

interface Resumes {
  data: string;
  ai: string;
  sde: string;
}

interface Props {
  email: string;
  github: string;
  linkedin: string;
  resumes: Resumes;
  mode: "job-seeking" | "employed" | "sabbatical";
}

const baseClass =
  "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-divider " +
  "bg-background text-foreground text-sm font-medium " +
  "hover:bg-accent hover:text-white hover:border-accent " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent " +
  "transition-colors duration-150";

export default function HeroLinks({ email, github, linkedin, resumes, mode }: Props) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const resumeOptions = [
    { icon: "📊", label: "Data Engineering Resume", href: resumes.data },
    { icon: "🤖", label: "AI Engineering Resume",   href: resumes.ai  },
    { icon: "💻", label: "SDE Resume",               href: resumes.sde },
  ];

  const otherLinks = [
    { label: "🐙 GitHub",  href: github,           aria: "View GitHub profile (opens in new tab)",  external: true  },
    { label: "💼 LinkedIn", href: linkedin,         aria: "View LinkedIn profile (opens in new tab)", external: true  },
    { label: "✉️ Email",   href: `mailto:${email}`, aria: `Send email to ${email}`,                  external: false },
  ] as const;

  const ctaLabel = mode === "job-seeking" ? "📄 Hire me" : "📄 Let\u2019s collaborate";

  return (
    <nav
      aria-label="Contact and social links"
      className="flex flex-wrap gap-3 justify-center md:justify-start mt-2"
    >
      {/* ── Resume dropdown ──────────────────────────────────── */}
      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-haspopup="listbox"
          className={baseClass + " gap-1"}
        >
          {ctaLabel}
          <span className="text-xs opacity-60 ml-0.5">{open ? "▲" : "▼"}</span>
        </button>

        {open && (
          <ul
            role="listbox"
            aria-label="Resume versions"
            className="absolute top-full left-0 mt-1 z-50 min-w-max flex flex-col rounded-lg border border-divider bg-background shadow-lg overflow-hidden"
          >
            {resumeOptions.map(({ icon, label, href }) => (
              <li key={href} role="option" aria-selected={false}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-foreground/80 hover:bg-accent hover:text-white transition-colors"
                >
                  <span aria-hidden="true">{icon}</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ── Other links ──────────────────────────────────────── */}
      {otherLinks.map(({ label, href, aria, external }) => (
        <a
          key={href}
          href={href}
          aria-label={aria}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={baseClass}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
