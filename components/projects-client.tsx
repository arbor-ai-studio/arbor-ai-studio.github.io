"use client";

import { useState } from "react";
import { Project } from "@/lib/types";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={setSelectedProject}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
