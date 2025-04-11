
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-cyber-accent/20 bg-cyber-background relative noise-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="flex items-center gap-2">
              <span className="text-xl font-bold bg-cyber-gradient inline-block text-transparent bg-clip-text">
                Cyber<span className="text-white">Wizard</span>
              </span>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
            <a href="#home" className="text-foreground/70 hover:text-cyber-secondary transition-colors duration-300">Home</a>
            <a href="#about" className="text-foreground/70 hover:text-cyber-secondary transition-colors duration-300">About</a>
            <a href="#skills" className="text-foreground/70 hover:text-cyber-secondary transition-colors duration-300">Skills</a>
            <a href="#projects" className="text-foreground/70 hover:text-cyber-secondary transition-colors duration-300">Projects</a>
            <a href="#contact" className="text-foreground/70 hover:text-cyber-secondary transition-colors duration-300">Contact</a>
          </div>
          
          <div>
            <p className="text-foreground/60 text-sm flex items-center">
              &copy; {currentYear} CyberWizard. Built with <Heart className="h-3 w-3 mx-1 text-cyber-accent" /> and code magic.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
