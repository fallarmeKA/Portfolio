import React from "react";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-white py-12 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kyle Fallarme</h3>
            <p className="text-slate-300 mb-4">
              UI/UX Designer passionate about creating intuitive and engaging
              digital experiences.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#bio"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-300 hover:text-white hover:bg-slate-800"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-300 hover:text-white hover:bg-slate-800"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-300 hover:text-white hover:bg-slate-800"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-300 hover:text-white hover:bg-slate-800"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} Kyle Fallarme. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
