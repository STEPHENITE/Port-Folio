
import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Quantum Cipher",
    description: "A secure messaging platform with end-to-end encryption utilizing cutting-edge cryptography algorithms for maximum privacy.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23151030'/%3E%3Cpath d='M200,100 L300,200 L100,200 Z' fill='%23915EFF' fill-opacity='0.7'/%3E%3Ccircle cx='200' cy='150' r='50' fill='none' stroke='%2300fff2' stroke-width='2'/%3E%3Ccircle cx='200' cy='150' r='30' fill='none' stroke='%2332CD32' stroke-width='2' stroke-dasharray='5,5'/%3E%3C/svg%3E",
    technologies: ["React", "Node.js", "WebCrypto API", "WebSockets", "Redis"],
    githubUrl: "#",
    liveUrl: "#",
    category: "Security"
  },
  {
    id: 2,
    title: "Neural Nexus",
    description: "An AI-powered analytics dashboard that visualizes complex data sets and provides predictive insights through machine learning algorithms.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23151030'/%3E%3Cpath d='M100,50 L300,50 L300,250 L100,250 Z' fill='%23151030' stroke='%23915EFF' stroke-width='2'/%3E%3Ccircle cx='150' cy='100' r='20' fill='%2300fff2'/%3E%3Ccircle cx='250' cy='100' r='20' fill='%2300fff2'/%3E%3Cpath d='M150,200 Q200,250 250,200' fill='none' stroke='%2332CD32' stroke-width='3'/%3E%3C/svg%3E",
    technologies: ["Python", "TensorFlow", "React", "D3.js", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
    category: "AI"
  },
  {
    id: 3,
    title: "Ethereal Exchange",
    description: "A decentralized cryptocurrency trading platform with real-time market data and secure blockchain-based transactions.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23151030'/%3E%3Cpath d='M150,50 L250,50 L300,150 L250,250 L150,250 L100,150 Z' fill='none' stroke='%23915EFF' stroke-width='3'/%3E%3Cpath d='M150,50 L250,250 M250,50 L150,250' stroke='%2300fff2' stroke-width='2'/%3E%3Ccircle cx='200' cy='150' r='30' fill='%2332CD32' fill-opacity='0.3'/%3E%3C/svg%3E",
    technologies: ["Solidity", "Web3.js", "React", "Node.js", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
    category: "Blockchain"
  },
  {
    id: 4,
    title: "Virtual Voyager",
    description: "An immersive VR travel exploration application that lets users virtually visit global destinations with interactive 3D environments.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23151030'/%3E%3Ccircle cx='200' cy='150' r='100' fill='none' stroke='%23915EFF' stroke-width='2'/%3E%3Cpath d='M150,100 L250,100 L250,200 L150,200 Z' fill='%2300fff2' fill-opacity='0.3'/%3E%3Cpath d='M100,150 L300,150' stroke='%2332CD32' stroke-width='3' stroke-dasharray='10,10'/%3E%3C/svg%3E",
    technologies: ["Three.js", "WebXR", "React", "Express", "AWS"],
    githubUrl: "#",
    liveUrl: "#",
    category: "Interactive"
  }
];

const categories = ["All", ...new Set(projects.map(project => project.category))];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative noise-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-cyber-accent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-cyber-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical wizardry and creative problem-solving.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? 'bg-cyber-accent text-white shadow-lg shadow-cyber-accent/30'
                  : 'bg-cyber-muted/30 text-foreground/80 hover:bg-cyber-muted/50 border border-cyber-accent/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group">
              <div className="cyber-card h-full flex flex-col bg-cyber-background/70 overflow-hidden">
                <div className="relative overflow-hidden h-48 mb-4 border border-cyber-accent/20 rounded-md">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-cyber-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a 
                      href={project.githubUrl} 
                      className="h-10 w-10 rounded-full bg-cyber-muted/80 flex items-center justify-center text-cyber-secondary hover:bg-cyber-muted transition-colors duration-300"
                      aria-label="View GitHub repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      className="h-10 w-10 rounded-full bg-cyber-muted/80 flex items-center justify-center text-cyber-accent hover:bg-cyber-muted transition-colors duration-300"
                      aria-label="View live project"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-cyber-secondary group-hover:text-cyber-secondary/90 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="bg-cyber-accent/10 text-cyber-accent border-cyber-accent/30">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 py-1 text-xs rounded-md bg-cyber-muted border border-cyber-accent/10 text-foreground/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={project.liveUrl} 
                      className="inline-flex items-center text-cyber-secondary group-hover:text-cyber-accent transition-colors duration-300 text-sm font-medium"
                    >
                      View Project <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
