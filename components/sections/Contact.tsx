import { content } from "@/lib/content";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  const { profile, status } = content;
  const { mode, availability } = status;

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 lg:px-20 bg-background"
      aria-label="Contact"
    >
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <SectionHeading id="contact">Contact</SectionHeading>
        </FadeUp>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* ── Left card: availability ────────────────────────────────── */}
          <FadeUp delay={0.1}>
            <div className="rounded-xl border border-divider bg-background p-6 flex flex-col gap-3 h-full">
              {mode === "job-seeking" ? (
                <>
                  <h3 className="font-semibold text-foreground">I&apos;m open to:</h3>
                  <ul className="flex flex-col gap-2 text-sm text-foreground/80">
                    <li className="flex gap-2">
                      <span className="text-accent">▸</span>
                      <span>{availability.seeking.join(" / ")}</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">▸</span>
                      <span>Full-time · Start {availability.startDate}</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">▸</span>
                      <span>{availability.location.join(" · ")}</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">▸</span>
                      <span suppressHydrationWarning>Visa: {availability.visa}</span>
                    </li>
                    {availability.internshipOpen && (
                      <li className="flex gap-2">
                        <span className="text-success">▸</span>
                        <span className="text-success">Internships: open</span>
                      </li>
                    )}
                  </ul>
                </>
              ) : (
                <>
                  <h3 className="font-semibold text-foreground">
                    I&apos;m currently: {status.currentActivity}
                  </h3>
                  <ul className="flex flex-col gap-2 text-sm text-foreground/80">
                    <li className="flex gap-2">
                      <span className="text-accent">▸</span>
                      <span>Open to: consultations, collaborations, chats</span>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </FadeUp>

          {/* ── Right card: links ──────────────────────────────────────── */}
          <FadeUp delay={0.2}>
            <div className="rounded-xl border border-divider bg-background p-6 flex flex-col gap-3 h-full">
              <h3 className="font-semibold text-foreground">Reach me:</h3>
              <ul className="flex flex-col gap-2.5">
                {[
                  { icon: "✉️", label: profile.email, href: `mailto:${profile.email}`, aria: `Email ${profile.email}` },
                  { icon: "💼", label: "LinkedIn", href: profile.social.linkedin, aria: "LinkedIn profile", external: true },
                  { icon: "🐙", label: "GitHub", href: profile.social.github, aria: "GitHub profile", external: true },
                  { icon: "📄", label: "Download Resume", href: profile.resumes.data, aria: "Download resume PDF", external: true },
                ].map(({ icon, label, href, aria, external }) => (
                  <li key={href}>
                    <a
                      href={href}
                      aria-label={aria}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex items-center gap-2.5 text-sm text-foreground/80 hover:text-accent transition-colors group"
                    >
                      <span aria-hidden="true">{icon}</span>
                      <span className="group-hover:underline">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
