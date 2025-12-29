"use client"

import { Container } from "@/components/ui/container"
import { Wrapper } from "@/components/ui/wrapper"
import { SectionBadge } from "@/components/ui/section-badge"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Loader2 } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ProjectModal } from "@/components/project-modal"
import { ProjectCarousel } from "@/components/project-carousel"
import { FadeIn } from "@/components/ui/fade-in"
import { MagicCard } from "@/components/ui/magic-card"
import { NeuralNetwork3D } from "@/components/ui/neural-network-3d"

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
    <div className="flex flex-col w-full min-h-screen relative">
      <NeuralNetwork3D />
      <Wrapper className="py-24 lg:py-32 z-10">
        <Container>
          <FadeIn className="flex flex-col items-center justify-center text-center mb-16">
            <SectionBadge title="Case Studies" className="mb-8" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-snug">
              Our Projects
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Explore how we&apos;ve helped businesses leverage the power of Artificial Intelligence to solve real-world problems.
            </p>
          </FadeIn>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="flex flex-col gap-24">
              {/* Featured Projects Carousel */}
              {projects.length > 0 && (
                <FadeIn>
                  <div className="w-full">
                    <ProjectCarousel projects={projects} showViewAll={false} />
                  </div>
                </FadeIn>
              )}

              {/* All Projects Grid */}
              <div className="flex flex-col gap-12">
                <FadeIn direction="right">
                  <div className="flex items-center gap-4">
                    <h2 className="text-3xl font-bold">All Projects</h2>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                </FadeIn>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, i) => (
                    <FadeIn key={project.name} delay={i * 0.1}>
                      <MagicCard 
                        onClick={() => handleProjectClick(project)}
                        className="group flex flex-col h-full overflow-hidden cursor-pointer"
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
                              <Badge key={tag} variant="secondary" className="px-3 py-1 text-xs rounded-full bg-secondary/30 group-hover:bg-secondary transition-colors border-none">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </MagicCard>
                    </FadeIn>
                  ))}
                </div>
              </div>
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