import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface Skill {
  name: string;
}

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  className?: string;
}

const SkillCard = ({
  title = "Web Development",
  icon = (
    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
      💻
    </div>
  ),
  skills = [
    { name: "HTML/CSS" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "Responsive Design" },
  ],
  className = "",
}: SkillCardProps) => {
  return (
    <Card
      className={`h-full overflow-hidden transition-all duration-300 hover:shadow-lg bg-white ${className}`}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          {icon}
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
