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
                  className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="relative w-full aspect-video overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold">{project.name}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full group/btn">
                      View Project
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
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
}
