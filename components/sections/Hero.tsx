import Image from "next/image";
import { content } from "@/lib/content";
import HeroTagline from "./HeroTagline";
import HeroLinks from "./HeroLinks";

export default function Hero() {
  const { profile, status } = content;
  const { education, mode } = status;

  return (
    <section
      className="min-h-svh flex items-center bg-background px-6 py-16 md:px-12 lg:px-20"
      aria-label="Introduction"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row gap-10 md:gap-16 items-center">

        {/* ── Photo ───────────────────────────────────────────────────── */}
        <div className="flex-shrink-0 flex justify-center">
          <Image
            src="/images/lingli-photo.jpg"
            alt={profile.fullName}
            width={300}
            height={300}
            className="w-56 h-56 md:w-[300px] md:h-[300px] rounded-2xl object-cover"
            priority
          />
        </div>

        {/* ── Text content ────────────────────────────────────────────── */}
        <div className="flex flex-col gap-3 md:gap-4 text-center md:text-left min-w-0">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hi, I&apos;m{" "}
            <span className="text-accent">{profile.name}.</span>
          </h1>

          <p className="text-secondary text-lg">{status.role}</p>

          <HeroTagline text={profile.tagline} />

          <ul className="flex flex-col gap-1.5 text-sm mt-1 list-none text-left mx-auto md:mx-0">
            <li>📍 {profile.location}</li>
            <li>
              🎓 {education.degree} @ {education.institution} · Class of{" "}
              {education.classOf}
            </li>
            {mode === "job-seeking" && (
              <li>🔍 Seeking: {status.availability.seeking.join(" / ")}</li>
            )}
          </ul>

          <HeroLinks
            email={profile.email}
            github={profile.social.github}
            linkedin={profile.social.linkedin}
            resumeHref={profile.resumes.data}
            mode={mode}
          />
        </div>

      </div>
    </section>
  );
}
