import HomeGuard from "@/components/HomeGuard";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedAchievement from "@/components/sections/FeaturedAchievement";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import BeyondWork from "@/components/sections/BeyondWork";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { EasterEggToast } from "@/components/ui/EasterEggTracker";

export default function Home() {
  return (
    <HomeGuard>
      <main>
        <Hero />
        <About />
        <FeaturedAchievement />
        <Skills />
        <Experience />
        <Projects />
        <BeyondWork />
        <Contact />
        <ThemeToggle />
        <Footer />
        <EasterEggToast />
      </main>
    </HomeGuard>
  );
}
