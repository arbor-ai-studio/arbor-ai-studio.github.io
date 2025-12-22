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
}
