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
        "A responsive portfolio website built with HTML, CSS, and JavaScript.",
      longDescription:
        "This portfolio website showcases skills and projects in a clean, modern design. Built with HTML, CSS and Javascript, it features responsive layouts and interactive elements.",
      thumbnail:
        "/images/Port.png",
      imageUrl:
        "/images/Port.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://free-template-portfolio-xi.vercel.app/", 
      repoUrl: "https://github.com/fallarmeKA/Free-Template-Portfolio",
    },
    {
      id: "2",
      title: "E-commerce Dashboard",
      description:
        "An admin dashboard for managing an online store with analytics",
      longDescription:
        "A comprehensive dashboard for e-commerce store owners to manage products, view sales analytics, and handle customer orders. Features a clean UI with data visualization components.",
      thumbnail:
        "/images/proj.jpg",
      imageUrl:
        "/images/proj.jpg",
      technologies: ["React", "Redux", "Chart.js", "Material UI"],
      demoUrl: "https://intern-projmgt-main.vercel.app/dashboard",
      repoUrl: "https://github.com/bridge360-ph/Intern_projmgt1",
    },
    {
      id: "3",
      title: "BaryoWork Application",
      description:
        "A cross-platform mobile application for local job search.",
      longDescription:
        "A BaryoWork Application is to streamline local job search for residents in the Philippines.",
      thumbnail:
        "/images/Baryo.png",
      imageUrl:
        "/images/Baryo.png",
      technologies: ["React Native", "MongoDB", "Redux"],
      demoUrl: "https://www.figma.com/proto/Ehh1s269c2iBtOB9taFlps/BaryoWork-App-(temp-name)?node-id=7-13&p=f&t=nEGGNZBpJf2F866W-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=460%3A64&show-proto-sidebar=1",
      repoUrl: "https://github.com/fallarmeKA/BaryoWorkFront",
    },
    {
      id: "4",
      title: "MemoRecall Web App",
      description:
        "A Senior Friendly Website Application for Geriatric Individuals.",
      longDescription:
        "The development of a Senior Friendly Web Application for holistic intervention of early memory lapses in geriatric individuals.",
      thumbnail:
        "/images/memo.jpg",
      imageUrl:
        "/images/memo.jpg",
      technologies: ["Vite", "React", "Tailwind CSS", "TypeScript", "MongoDB"],
      demoUrl: "https://memorecall-v3.vercel.app/?fbclid=IwZXh0bgNhZW0CMTEAAR095nOnBidRaKpm2ytk1yxG1QCnQQi86y5RnSSEdJ38GTwpSwUA04J0kbE_aem__TQC0ZJizodmRscQIGBTjA",
      
    },
    {
      id: "5",
      title: "Nike-Ecommerce Website",
      description:
        "Nike E-commerce Website is a modern e-commerce platform for Nike products.",
      longDescription:
        "Nike E-commerce Website is a modern e-commerce platform for Nike products, featuring a sleek design, user-friendly interface, and secure payment options.",
      thumbnail:
        "/images/Nike.png",
      imageUrl:
        "/images/Nike.png",
      technologies: ["TypeScript"],
      demoUrl: "https://memorecall-v3.vercel.app/?fbclid=IwZXh0bgNhZW0CMTEAAR095nOnBidRaKpm2ytk1yxG1QCnQQi86y5RnSSEdJ38GTwpSwUA04J0kbE_aem__TQC0ZJizodmRscQIGBTjA",
      repoUrl: "https://github.com/kylefallarme/",
    },
  ],
}: ProjectsSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

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
          {visibleProjects.map((project) => (
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

        {projects.length > 4 && (
          <div className="mt-8 text-center">
            <button
  onClick={() => setShowAll(!showAll)}
  className="px-6 py-2 text-white bg-[#0f172a] hover:brightness-110 rounded-full transition-all"
>
  {showAll ? "Show Less" : "See All Projects"}
</button>
          </div>
        )}

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