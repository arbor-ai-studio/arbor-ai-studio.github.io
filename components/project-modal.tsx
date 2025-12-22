"use client";

import { Project } from "@/lib/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Image from "next/image";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-neutral-950 border-neutral-800 p-0 overflow-hidden text-neutral-200">
        <div className="relative aspect-video w-full bg-neutral-900">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-80" />
          <div className="absolute bottom-6 left-6 right-6">
             <DialogTitle className="text-3xl font-bold text-white mb-2">{project.title}</DialogTitle>
             <DialogDescription className="text-neutral-300 text-lg opacity-90">{project.description}</DialogDescription>
          </div>
        </div>
        
        <div className="p-8 grid gap-8 md:grid-cols-[2fr,1fr]">
            <div className="space-y-6">
                <div>
                    <h3 className="text-xl font-semibold text-white mb-3">About the Project</h3>
                    <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                        {project.longDescription}
                    </p>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                    <ul className="grid gap-3">
                        {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-neutral-400 text-sm">
                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <div className="space-y-6">
                <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                    <h4 className="font-medium text-white mb-4">Project Links</h4>
                    <Button 
                        onClick={() => window.open(project.url, "_blank")}
                        className="w-full bg-white text-black hover:bg-neutral-200 gap-2"
                    >
                        Visit Website <ExternalLink className="w-4 h-4" />
                    </Button>
                </div>

                <div>
                    <h4 className="font-medium text-white mb-3 text-sm uppercase tracking-wider text-neutral-500">Built With</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span 
                                key={tag} 
                                className="px-3 py-1 text-xs rounded-full bg-neutral-900 text-neutral-300 border border-neutral-800"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
