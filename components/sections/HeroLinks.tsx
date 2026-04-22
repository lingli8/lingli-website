interface Props {
  email: string;
  github: string;
  linkedin: string;
  resumeHref: string;
  mode: "job-seeking" | "employed" | "sabbatical";
}

const baseClass =
  "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-divider " +
  "bg-background text-foreground text-sm font-medium " +
  "hover:bg-accent hover:text-white hover:border-accent " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent " +
  "transition-colors duration-150";

export default function HeroLinks({
  email,
  github,
  linkedin,
  resumeHref,
  mode,
}: Props) {
  const primaryCta = mode === "job-seeking" ? "Hire me" : "Let\u2019s collaborate";

  const links = [
    {
      label: `📄 ${primaryCta}`,
      href: resumeHref,
      aria: "Download resume (PDF, opens in new tab)",
      external: true,
    },
    {
      label: "🐙 GitHub",
      href: github,
      aria: "View GitHub profile (opens in new tab)",
      external: true,
    },
    {
      label: "💼 LinkedIn",
      href: linkedin,
      aria: "View LinkedIn profile (opens in new tab)",
      external: true,
    },
    {
      label: "✉️ Email",
      href: `mailto:${email}`,
      aria: `Send email to ${email}`,
      external: false,
    },
  ] as const;

  return (
    <nav
      aria-label="Contact and social links"
      className="flex flex-wrap gap-3 justify-center md:justify-start mt-2"
    >
      {links.map(({ label, href, aria, external }) => (
        <a
          key={href}
          href={href}
          aria-label={aria}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className={baseClass}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
