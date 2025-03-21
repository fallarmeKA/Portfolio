import React from "react";
import Navbar from "./Navbar";
import BioSection from "./BioSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar transparent={true} />

      {/* Main Content */}
      <main>
        {/* Bio Section */}
        <BioSection
          name="Kyle Fallarme"
          title="UI/UX Designer"
          description="Passionate UI/UX designer with expertise in creating intuitive and engaging digital experiences. Combining creative design thinking with technical skills to build user-centered solutions that solve real problems."
          imageUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Kyle"
        />

        {/* Skills Section */}
        <SkillsSection
          title="My Skills"
          description="I specialize in a variety of technical and design skills that allow me to create comprehensive digital solutions."
        />

        {/* Projects Section */}
        <ProjectsSection
          title="My Projects"
          description="Here are some of my recent projects. Click on a project to view more details."
        />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
