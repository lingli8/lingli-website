import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedAchievement from "@/components/sections/FeaturedAchievement";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedAchievement />
      <Skills />
      <Experience />
      <Projects />
      <ThemeToggle />
    </main>
  );
}
