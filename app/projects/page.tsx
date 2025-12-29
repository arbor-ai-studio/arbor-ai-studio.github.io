<<<<<<< HEAD
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { Project } from "@/lib/types";
import { promises as fs } from 'fs';
import path from 'path';
import ProjectsClient from "@/components/projects-client";

async function getProjects(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            Our Work
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Explore our portfolio of AI-driven solutions and innovative products that are shaping the future.
          </p>
        </div>

        <ProjectsClient projects={projects} />
      </div>
    </main>
  );
=======
"use client"

import { Container } from "@/components/ui/container"
import { Wrapper } from "@/components/ui/wrapper"
import { SectionBadge } from "@/components/ui/section-badge"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Loader2 } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ProjectModal } from "@/components/project-modal"

interface Project {
  name: string;
  website: string;
  description: string;
  image: string;
  tags: string[];
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects.json', { cache: 'no-store' })
        if (response.ok) {
          const data = await response.json()
          console.log("Projects loaded from JSON:", data)
          setProjects(data)
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Wrapper className="py-24 lg:py-32">
        <Container>
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <SectionBadge title="Case Studies" className="mb-8" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Our Projects
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Explore how we&apos;ve helped businesses leverage the power of Artificial Intelligence to solve real-world problems.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.name} 
                  onClick={() => handleProjectClick(project)}
                  className="group flex flex-col rounded-3xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="p-3 pb-0">
                    <div className="relative w-full aspect-video overflow-hidden bg-muted rounded-2xl">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 z-20">
                          <div className="bg-background/80 backdrop-blur-md text-foreground text-xs font-medium px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                            View Details <ArrowRight className="w-3 h-3" />
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6 items-center text-center">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.name}</h3>
                    <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed max-w-sm">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="px-3 py-1 text-xs rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors border-none">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </Wrapper>

      <ProjectModal 
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        project={selectedProject}
      />
    </div>
  )
>>>>>>> content-overhaul
}
