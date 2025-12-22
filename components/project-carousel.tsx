"use client";

import { useEffect, useState } from "react";
import { Project } from "@/lib/types";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (isPaused || !projects.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, projects.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  if (!projects.length) return null;

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto py-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Featured Projects
        </h2>
        <div className="flex gap-2">
            <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 text-white"
            >
                <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 text-white"
            >
                <ChevronRight className="w-4 h-4" />
            </Button>
        </div>
      </div>

      <div className="relative overflow-hidden p-1">
        <AnimatePresence mode="wait">
            <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full"
            >
                <ProjectCard 
                    project={projects[currentIndex]} 
                    onClick={setSelectedProject}
                />
            </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-8 bg-white" : "w-1.5 bg-white/20"
            }`}
          />
        ))}
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
    />
    </div>
  );
}
