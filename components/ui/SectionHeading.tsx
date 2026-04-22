"use client";

import { useState } from "react";

interface Props {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ id, children, className = "" }: Props) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <h2
      id={id}
      className={`group flex items-center gap-2 text-2xl md:text-3xl font-bold ${className}`}
    >
      {children}
      <button
        onClick={handleCopy}
        aria-label={`Copy link to ${id} section`}
        title={copied ? "Copied!" : "Copy section link"}
        className="opacity-0 group-hover:opacity-100 transition-opacity text-secondary hover:text-accent font-mono text-base"
      >
        {copied ? "✓" : "#"}
      </button>
    </h2>
  );
}
