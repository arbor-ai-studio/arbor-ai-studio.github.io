"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  name: string;
  website: string;
  description: string;
  image: string;
  tags: string[];
}

interface ProjectModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  project: Project | null
}

export function ProjectModal({ isOpen, onOpenChange, project }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col border-border/50 bg-background/95 backdrop-blur-xl p-0 gap-0">
        
        <div className="flex-shrink-0 p-6 pb-4 border-b border-border/40">
          <DialogHeader className="gap-4">
            <div className="flex flex-col gap-4">
              <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-muted">
                 <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
              </div>
              <div className="space-y-1">
                <DialogTitle className="text-2xl font-bold tracking-tight">{project.name}</DialogTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                </div>
              </div>
            </div>
          </DialogHeader>
        </div>

        <div className="flex-1 overflow-y-auto p-6 pt-6">
            <DialogDescription className="text-base text-foreground/80 leading-relaxed">
                  {project.description}
            </DialogDescription>
        </div>

        <div className="flex-shrink-0 p-6 border-t border-border/40 bg-muted/10 flex flex-col sm:flex-row items-center justify-end gap-4">
          <Button asChild className="w-full sm:w-auto gap-2 shadow-md">
            <Link href={project.website} target="_blank" rel="noopener noreferrer">
              Visit Website
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

      </DialogContent>
    </Dialog>
  )
}
