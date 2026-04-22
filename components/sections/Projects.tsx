import { content } from "@/lib/content";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { featured, projects } = content.projects;
  const featuredProjects = featured
    .map((id) => projects[id])
    .filter(Boolean);

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 lg:px-20 bg-background"
      aria-label="Projects"
    >
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <SectionHeading id="projects">Projects</SectionHeading>
          <p className="mt-1 text-sm text-secondary">
            Featured work — more in{" "}
            <a
              href="https://github.com/lingli8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
              aria-label="View all projects on GitHub"
            >
              GitHub
            </a>
          </p>
        </FadeUp>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredProjects.map((project, i) => (
            <FadeUp key={project.title} delay={i * 0.08}>
              <ProjectCard project={project} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
