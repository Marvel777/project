"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { skills, Skill } from "@/lib/constants";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function SkillsSection() {
  const [category, setCategory] = useState<"all" | "frontend" | "backend" | "tools">("all");

  const filteredSkills = category === "all"
    ? skills
    : skills.filter(skill => skill.category === category);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={ { opacity: 0, y: 20 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true } }
          transition={ { duration: 0.6 } }
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of technologies and tools I've worked with throughout my career. I'm constantly learning and adding new skills to my repertoire.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full" onValueChange={ (value) => setCategory(value as any) }>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Skills</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-8">
            <SkillGrid skills={ filteredSkills } />
          </TabsContent>
          <TabsContent value="frontend" className="space-y-8">
            <SkillGrid skills={ filteredSkills } />
          </TabsContent>
          <TabsContent value="backend" className="space-y-8">
            <SkillGrid skills={ filteredSkills } />
          </TabsContent>
          <TabsContent value="tools" className="space-y-8">
            <SkillGrid skills={ filteredSkills } />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function SkillGrid({ skills }: { skills: Skill[] }) {
  return (
    <div className="grid grid-cols justify-center items-center sm:grid-cols-2 lg:grid-cols-3 gap-6">
      { skills.map((skill, index) => (
        <motion.div
          key={ skill.name }
          initial={ { opacity: 0, y: 20 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true } }
          transition={ { duration: 0.4, delay: index * 0.05 } }
        >
          <SkillCard skill={ skill } />
        </motion.div>
      )) }
    </div>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <HoverBorderGradient className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border w-60">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium">{ skill.name }</h3>
        <span className="text-sm text-muted-foreground">{ skill.level }%</span>
      </div>

      <div className="w-full bg-muted rounded-full h-2.5">
        <div
          className="bg-primary h-2.5 rounded-full"
          style={ { width: `${skill.level}%` } }
        />
      </div>

      <div className="mt-2 text-xs text-right text-muted-foreground">
        { getCategoryLabel(skill.category) }
      </div>
    </HoverBorderGradient>
  );
}

function getCategoryLabel(category: string): string {
  switch (category) {
    case "frontend":
      return "Frontend Development";
    case "backend":
      return "Backend Development";
    case "tools":
      return "Development Tools";
    default:
      return category;
  }
}