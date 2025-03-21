import React from "react";
import { ExternalLink, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";

interface ProjectModalProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  project?: {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    imageUrl: string;
    technologies: string[];
    demoUrl?: string;
    repoUrl?: string;
  };
  children?: React.ReactNode;
}

const ProjectModal = ({
  isOpen = false,
  onOpenChange,
  project = {
    id: "1",
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with React and Tailwind CSS",
    longDescription:
      "This project showcases my skills in modern web development using React, TypeScript, and Tailwind CSS. The website features a clean, professional design with sections for bio, skills, projects, and contact information.",
    imageUrl:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/example/portfolio",
  },
  children,
}: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="bg-white max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-gray-500 mt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <div className="rounded-lg overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Project Details</h3>
            <p className="text-gray-700">
              {project.longDescription || project.description}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="mt-6 flex justify-end gap-3">
          {project.repoUrl && (
            <Button
              variant="outline"
              onClick={() => window.open(project.repoUrl, "_blank")}
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              View Code
            </Button>
          )}
          {project.demoUrl && (
            <Button
              onClick={() => window.open(project.demoUrl, "_blank")}
              className="flex items-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
