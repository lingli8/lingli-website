import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ThemeToggle />
    </main>
  );
}
