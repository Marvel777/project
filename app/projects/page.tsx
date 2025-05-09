"use client";

import { useState } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ProjectCardDetailed } from "@/components/project-card-detailed";
import { projects } from "@/lib/constants";
import { BackForwardButtons } from "@/components/back-forward-button";

// export const metadata: Metadata = {
//   title: "Projects | Frontend Developer Portfolio",
//   description: "Explore my featured projects and see my development skills in action.",
// };

export default function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags from projects
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  ).sort();

  // Filter projects based on selected tags
  const filteredProjects = selectedTags.length
    ? projects.filter(project =>
      selectedTags.some(tag => project.tags.includes(tag))
    )
    : projects;

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Clear all filters
  const clearFilters = () => setSelectedTags([]);

  return (
    <div className="container px-4 mx-auto py-24 md:py-32">
      <BackForwardButtons />
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-muted-foreground max-w-2xl">
          A collection of my work, including web applications, design projects, and open-source contributions.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <p className="text-sm text-muted-foreground">
          Showing { filteredProjects.length } of { projects.length } projects
        </p>

        <div className="flex gap-4">
          { selectedTags.length > 0 && (
            <Button variant="ghost" size="sm" onClick={ clearFilters }>
              Clear Filters
            </Button>
          ) }

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter by Technology
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              { allTags.map(tag => (
                <DropdownMenuCheckboxItem
                  key={ tag }
                  checked={ selectedTags.includes(tag) }
                  onCheckedChange={ () => toggleTag(tag) }
                >
                  { tag }
                </DropdownMenuCheckboxItem>
              )) }
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        { filteredProjects.map((project, index) => (
          <ProjectCardDetailed
            key={ project.id }
            project={ project }
            index={ index }
          />
        )) }
      </div>
    </div>
  );
}