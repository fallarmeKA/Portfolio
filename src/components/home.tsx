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
          title="Front-End Developer"
          description="I'm a passionate front-end developer who combines creative design thinking with technical expertise to build engaging, user-centered digital experiences.. Combining creative design thinking with technical skills to build user-centered solutions that solve real problems."
          imageUrl="images/ProfPic.jpg"
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
