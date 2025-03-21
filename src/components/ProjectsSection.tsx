import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  imageUrl: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
}

interface ProjectsSectionProps {
  title?: string;
  description?: string;
  projects?: Project[];
}

const ProjectsSection = ({
  title = "My Projects",
  description = "Here are some of my recent projects. Click on a project to view more details.",
  projects = [
    {
      id: "1",
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with React and Tailwind CSS",
      longDescription:
        "This portfolio website showcases my skills and projects in a clean, modern design. Built with React and Tailwind CSS, it features responsive layouts and interactive elements.",
      thumbnail:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
      imageUrl:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      demoUrl: "https://example.com/portfolio",
      repoUrl: "https://github.com/kylefallarme/portfolio",
    },
    {
      id: "2",
      title: "E-commerce Dashboard",
      description:
        "An admin dashboard for managing an online store with analytics",
      longDescription:
        "A comprehensive dashboard for e-commerce store owners to manage products, view sales analytics, and handle customer orders. Features a clean UI with data visualization components.",
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      technologies: ["React", "Redux", "Chart.js", "Material UI"],
      demoUrl: "https://example.com/dashboard",
      repoUrl: "https://github.com/kylefallarme/ecommerce-dashboard",
    },
    {
      id: "3",
      title: "Mobile Fitness App",
      description:
        "A cross-platform mobile application for tracking workouts and nutrition",
      longDescription:
        "A fitness tracking application that helps users monitor their workouts, nutrition, and progress. The app provides personalized recommendations and visualizes progress over time.",
      thumbnail:
        "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80",
      imageUrl:
        "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      demoUrl: "https://example.com/fitness-app",
      repoUrl: "https://github.com/kylefallarme/fitness-app",
    },
    {
      id: "4",
      title: "AI Content Generator",
      description:
        "A web application that uses AI to generate marketing content",
      longDescription:
        "An innovative tool that leverages AI to help marketers generate compelling content for various platforms. The application offers customization options and supports multiple content formats.",
      thumbnail:
        "https://images.unsplash.com/photo-1677442135968-6bd241f40c8d?w=600&q=80",
      imageUrl:
        "https://images.unsplash.com/photo-1677442135968-6bd241f40c8d?w=800&q=80",
      technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "MongoDB"],
      demoUrl: "https://example.com/ai-generator",
      repoUrl: "https://github.com/kylefallarme/ai-content-generator",
    },
  ],
}: ProjectsSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (id: string) => {
    const project = projects.find((p) => p.id === id);
    if (project) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              thumbnail={project.thumbnail}
              tags={project.technologies.slice(0, 3)}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            isOpen={isModalOpen}
            onOpenChange={setIsModalOpen}
            project={{
              id: selectedProject.id,
              title: selectedProject.title,
              description: selectedProject.description,
              longDescription: selectedProject.longDescription,
              imageUrl: selectedProject.imageUrl,
              technologies: selectedProject.technologies,
              demoUrl: selectedProject.demoUrl,
              repoUrl: selectedProject.repoUrl,
            }}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
