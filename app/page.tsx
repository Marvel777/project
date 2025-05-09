'use client'
import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { motion } from 'framer-motion';
import { AuroraBackground } from "@/components/ui/aurora-background";


export default function Home() {
  return (


    <div >
      <AuroraBackground>
        <motion.div
          initial={ { opacity: 0.0, y: 40 } }
          whileInView={ { opacity: 1, y: 0 } }
          transition={ {
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          } }
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        ></motion.div>
        <HeroSection />
      </AuroraBackground>

      <SkillsSection />
      <FeaturedProjects />
    </div>
  );
}