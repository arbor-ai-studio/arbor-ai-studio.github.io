"use client";

import { Project } from "@/lib/types";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10"
      onClick={() => onClick(project)}
    >
      <div className="relative mb-4 aspect-video overflow-hidden rounded-xl bg-neutral-900">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
            <span className="text-white font-medium flex items-center gap-2">
                View Details <ArrowUpRight className="w-4 h-4" />
            </span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        </div>
        
        <p className="text-sm text-neutral-400 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 py-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs rounded-full bg-white/5 text-neutral-300 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
