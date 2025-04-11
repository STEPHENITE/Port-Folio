
import React from 'react';
import { Shield, Code, Cpu, Linkedin, Mail, Github } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative noise-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-cyber-accent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyber-secondary mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <div className="cyber-card h-full">
              <h3 className="text-2xl font-bold mb-4 text-cyber-secondary">Education & Background</h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-lg">CURRENT</h4>
                <p className="text-muted-foreground mb-1">Bachelor of Computer Applications</p>
                <p className="text-cyber-accent">Amrita Viswa Vidyapeetham</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-lg">ADDITIONAL</h4>
                <p className="text-muted-foreground mb-1">Daksh Gurukul</p>
                <p className="text-cyber-accent">IIT Guwahati</p>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-cyber-secondary">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                I'm a passionate BCA student with a keen interest in cyber security, Python programming, and IoT technologies. My journey in the tech world is just beginning, and I'm excited to explore and learn more.
              </p>
              <p className="text-muted-foreground mb-4">
                As a student of Daksh Gurukul by IIT Guwahati, I've been exposed to cutting-edge technologies and methodologies that have further fueled my passion for cybersecurity and programming.
              </p>
              <p className="text-muted-foreground mb-6">
                I believe in continuous learning and hands-on experience to grow in this rapidly evolving field of technology.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="mailto:aditya.stephenite@gmail.com" className="flex items-center gap-2 text-cyber-accent hover:text-cyber-secondary transition-colors">
                  <Mail size={18} className="cursor-pointer hover:scale-110 transition-transform" />
                  <span>aditya.stephenite@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/adityathegr8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyber-accent hover:text-cyber-secondary transition-colors">
                  <Linkedin size={18} className="cursor-pointer hover:scale-110 transition-transform" />
                  <span>linkedin.com/in/adityathegr8</span>
                </a>
                <a href="https://github.com/STEPHENITE" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyber-accent hover:text-cyber-secondary transition-colors">
                  <Github size={18} className="cursor-pointer hover:scale-110 transition-transform" />
                  <span>github.com/STEPHENITE</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              <a href="#" className="cyber-card bg-cyber-muted group hover:bg-cyber-muted/80 transition-colors duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-cyber-accent/10 flex items-center justify-center mb-4 group-hover:bg-cyber-accent/20 transition-colors duration-300 cursor-pointer hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6 text-cyber-accent" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Cyber Security</h4>
                  <p className="text-muted-foreground text-sm">
                    Passionate about digital security and protection mechanisms.
                  </p>
                </div>
              </a>

              <a href="#" className="cyber-card bg-cyber-muted group hover:bg-cyber-muted/80 transition-colors duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-cyber-secondary/10 flex items-center justify-center mb-4 group-hover:bg-cyber-secondary/20 transition-colors duration-300 cursor-pointer hover:scale-110 transition-transform">
                    <Code className="w-6 h-6 text-cyber-secondary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Python Programming</h4>
                  <p className="text-muted-foreground text-sm">
                    Skilled in Python with a focus on security applications.
                  </p>
                </div>
              </a>

              <a href="#" className="cyber-card bg-cyber-muted group hover:bg-cyber-muted/80 transition-colors duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-cyber-secondary/10 flex items-center justify-center mb-4 group-hover:bg-cyber-secondary/20 transition-colors duration-300 cursor-pointer hover:scale-110 transition-transform">
                    <Cpu className="w-6 h-6 text-cyber-secondary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">IoT Technologies</h4>
                  <p className="text-muted-foreground text-sm">
                    Exploring the world of connected devices and systems.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
