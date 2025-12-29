<<<<<<< HEAD
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
=======
"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface Project {
  name: string;
  website: string;
  description: string;
  image: string;
  tags: string[];
}

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }, [projects.length])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide, isHovered])

  if (!projects.length) return null

  const currentProject = projects[currentIndex]

  return (
    <div 
      className="w-full max-w-5xl mx-auto px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
          <Button asChild variant="outline" size="sm" className="hidden md:flex rounded-full gap-2 text-xs">
            <Link href="/projects">
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full w-10 h-10 border-border bg-background hover:bg-muted">
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full w-10 h-10 border-border bg-background hover:bg-muted">
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Slide */}
      <div className="relative bg-card border border-border rounded-3xl p-2 md:p-3 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col"
            >
                {/* Image Section */}
                <div className="relative w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-2xl bg-muted border border-border/50">
                     <Image
                        src={currentProject.image}
                        alt={currentProject.name}
                        fill
                        className="object-cover object-top hover:scale-105 transition-transform duration-700"
                        priority
                     />
                     <div className="absolute top-4 right-4 z-20">
                        <Button asChild size="sm" variant="secondary" className="gap-2 shadow-lg backdrop-blur-md bg-background/80 hover:bg-background">
                            <Link href={currentProject.website} target="_blank">
                                Visit Website <ExternalLink className="w-3 h-3" />
                            </Link>
                        </Button>
                     </div>
                     <Link href={currentProject.website} target="_blank" className="absolute inset-0 z-10" aria-label={`View ${currentProject.name}`} />
                </div>

                {/* Content Section */}
                <div className="mt-4 px-2 md:px-4 pb-2 flex flex-col items-center text-center">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{currentProject.name}</h3>
                    
                    <p className="text-muted-foreground text-sm md:text-base mb-4 max-w-2xl leading-relaxed mx-auto">
                        {currentProject.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2">
                        {currentProject.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="px-3 py-1 text-xs rounded-full bg-secondary/50 hover:bg-secondary border-none">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
            </motion.div>
          </AnimatePresence>
      </div>

       {/* Pagination Dots */}
       <div className="flex justify-center mt-8 gap-2">
        {projects.map((_, idx) => (
            <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
            />
        ))}
       </div>

       {/* Mobile View All Button */}
       <div className="flex md:hidden justify-center mt-8">
          <Button asChild variant="outline" size="sm" className="rounded-full gap-2">
            <Link href="/projects">
              View All Projects <ArrowRight className="w-3 h-3" />
            </Link>
          </Button>
       </div>
    </div>
  )
>>>>>>> content-overhaul
}
