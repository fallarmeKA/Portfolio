import React from "react";
import SkillCard from "./SkillCard";
import { Code, Database, Palette, Terminal } from "lucide-react";

interface SkillsSectionProps {
  title?: string;
  description?: string;
  skills?: {
    webDevelopment?: { name: string }[];
    databaseTechnologies?: { name: string }[];
    programmingLanguages?: { name: string }[];
    aiDesignTools?: { name: string }[];
  };
}

const SkillsSection = ({
  title = "My Skills",
  description = "I specialize in a variety of technical and design skills that allow me to create comprehensive digital solutions.",
  skills = {
    webDevelopment: [
      { name: "HTML/CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Responsive Design" },
      { name: "Tailwind CSS" },
    ],
    databaseTechnologies: [
      { name: "SQL" },
      { name: "MongoDB" },
      { name: "Firebase" },
      { name: "Postman" },
    ],
    programmingLanguages: [
      { name: "Java" },
      { name: "TypeScript" },
    ],
    aiDesignTools: [
      { name: "Canva" },
      { name: "Figma" },
      { name: "WordPress" },
      { name: "Wix" },
    ],
  },
}: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard
            title="Web Development"
            icon={<Code className="w-8 h-8 text-primary" />}
            skills={skills.webDevelopment}
          />

          <SkillCard
            title="Database Technologies"
            icon={<Database className="w-8 h-8 text-primary" />}
            skills={skills.databaseTechnologies}
          />

          <SkillCard
            title="Programming Languages"
            icon={<Terminal className="w-8 h-8 text-primary" />}
            skills={skills.programmingLanguages}
          />

          <SkillCard
            title="AI Design Tools"
            icon={<Palette className="w-8 h-8 text-primary" />}
            skills={skills.aiDesignTools}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
