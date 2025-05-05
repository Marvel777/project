"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Project } from "@/lib/constants";

interface ProjectCardDetailedProps {
  project: Project;
  index: number;
}

export function ProjectCardDetailed({ project, index }: ProjectCardDetailedProps) {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <div 
        className="group bg-card border rounded-lg overflow-hidden flex flex-col h-full hover:shadow-lg transition-all cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            fill
          />
          {project.featured && (
            <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
              Featured
            </Badge>
          )}
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 4).map((tag: string) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
            {project.tags.length > 4 && (
              <Badge variant="outline">+{project.tags.length - 4}</Badge>
            )}
          </div>
          
          <Button size="sm" className="mt-auto" variant="outline">
            View Details
          </Button>
        </div>
      </div>
      
      <ProjectDetailDialog project={project} open={open} setOpen={setOpen} />
    </>
  );
}

function ProjectDetailDialog({ 
  project, 
  open, 
  setOpen 
}: { 
  project: Project; 
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-4xl w-[90vw]">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setOpen(false)}
              className="h-8 w-8 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription>
            {project.featured && (
              <Badge className="mt-2 mb-2" variant="secondary">
                Featured Project
              </Badge>
            )}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
          <div className="relative aspect-video rounded-md overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              className="object-cover"
              fill
            />
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
            <p className="text-muted-foreground mb-6">
              {project.description}
            </p>
            
            <h4 className="font-medium mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag: string) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
            
            <div className="flex gap-4 mt-auto">
              <Button asChild>
                <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}