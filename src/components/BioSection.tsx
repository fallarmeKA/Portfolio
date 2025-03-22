import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

interface BioSectionProps {
  name?: string;
  title?: string;
  description?: string;
  resumeUrl?: string;
  imageUrl?: string;
}

const BioSection = ({
  name = "Kyle Fallarme",
  title = "UI/UX Designer",
  description = "Passionate UI/UX designer with expertise in creating intuitive and engaging digital experiences. Combining creative design thinking with technical skills to build user-centered solutions that solve real problems.",
  resumeUrl = "/resume.pdf",
  imageUrl = "images/ProfPic.jpg",
}: BioSectionProps) => {
  return (
    <section
      id="bio"
      className="min-h-[600px] w-full bg-slate-50 py-16 md:py-24 flex items-center"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-xl font-medium text-primary mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {name}
            </h1>
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <span className="font-medium">{title}</span>
            </div>
            <p className="text-slate-700 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              {description}
            </p>
            <a href="/public/FALLARME_RESUME.pdf" download>
  <Button className="group" size="lg">
    <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
    Download Resume
  </Button>
</a>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img
                src={imageUrl}
                alt={`${name} profile`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
