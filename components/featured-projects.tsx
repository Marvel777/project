"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/constants";

export function FeaturedProjects() {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={ { opacity: 0, y: 20 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true } }
          transition={ { duration: 0.6 } }
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills and expertise in building modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          { featuredProjects.map((project, index) => (
            <ProjectCard key={ project.id } project={ project } index={ index } />
          )) }
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      className="group bg-card border rounded-lg overflow-hidden flex flex-col h-full hover:shadow-lg transition-all"
      initial={ { opacity: 0, y: 30 } }
      whileInView={ { opacity: 1, y: 0 } }
      viewport={ { once: true } }
      transition={ { duration: 0.6, delay: index * 0.1 } }
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={ project.image }
          alt={ project.title }
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          fill
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{ project.title }</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{ project.description }</p>

        <div className="flex flex-wrap gap-2 mb-4">
          { project.tags.slice(0, 4).map((tag: string) => (
            <Badge key={ tag } variant="secondary">{ tag }</Badge>
          )) }
          { project.tags.length > 4 && (
            <Badge variant="outline">+{ project.tags.length - 4 }</Badge>
          ) }
        </div>

        <div className="flex justify-between mt-auto pt-2">
          <Button size="sm" variant="outline" asChild>
            <Link href={ project.githubUrl } target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href={ project.demoUrl } target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}