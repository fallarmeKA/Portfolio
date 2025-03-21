import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Eye } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  onViewDetails: (id: string) => void;
}

const ProjectCard = ({
  id = "project-1",
  title = "Portfolio Website",
  description = "A responsive portfolio website built with React and Tailwind CSS",
  thumbnail = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
  tags = ["React", "Tailwind CSS", "Vite"],
  onViewDetails = () => {},
}: ProjectCardProps) => {
  return (
    <Card className="w-full max-w-[360px] overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      <div className="relative h-48 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-2">
        <Button
          onClick={() => onViewDetails(id)}
          className="w-full flex items-center justify-center gap-2"
          variant="outline"
        >
          <Eye size={16} />
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
