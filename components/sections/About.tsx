import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "content/about.mdx"),
    "utf-8"
  );
  const { content: body } = matter(raw);

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-12 lg:px-20 bg-background"
      aria-label="About"
    >
      <div className="max-w-3xl mx-auto">
        <FadeUp>
          <SectionHeading id="about">About</SectionHeading>
        </FadeUp>

        <FadeUp delay={0.15} className="mt-6">
          <div className="space-y-4 text-base leading-7 text-foreground">
            <ReactMarkdown
              components={{
                p: ({ children }) => (
                  <p className="mb-4 leading-7">{children}</p>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-foreground">
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em className="italic text-secondary">{children}</em>
                ),
              }}
            >
              {body}
            </ReactMarkdown>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
