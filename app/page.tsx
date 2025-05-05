import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { FeaturedProjects } from "@/components/featured-projects";

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <SkillsSection />
      <FeaturedProjects />
    </div>
  );
}