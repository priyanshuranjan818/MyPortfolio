import { AboutMe } from "@/components/main/about-me";
import { Certificates } from "@/components/main/certificates";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <Certificates />
        <Projects />
      </div>
    </main>
  );
}
