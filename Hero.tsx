
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code, Wand2 } from 'lucide-react';

const Hero = () => {
  const floatingElementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = floatingElementRef.current;
    if (!element) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const moveX = (clientX - centerX) / 50;
      const moveY = (clientY - centerY) / 50;
      
      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10 hex-bg">
      <div className="absolute top-0 left-0 w-full h-full bg-cyber-radial opacity-80 z-0"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-cyber-accent/20 blur-[100px] animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-cyber-secondary/20 blur-[100px] animate-float" style={{ animationDelay: '-3s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-4 px-3 py-1 border border-cyber-accent/30 rounded-full bg-cyber-accent/5 backdrop-blur-sm">
              <span className="text-cyber-accent">Beginning My Tech Adventure</span>
            </div>
            
            <h1 className="hero-heading mb-6">
              <span className="block">Hi, I'm Aditya Tiwari</span>
              <span className="block text-cyber-accent">Tech Explorer<span className="text-cyber-secondary">_</span></span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              A BCA student at Amrita Viswa Vidyapeetham with a passion for cyber security, Python programming, and IoT technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="cyber-button bg-cyber-accent text-white border-0 hover:text-white group">
                Explore My Work
                <ArrowRight className="inline-block ml-2 transition-transform group-hover:translate-x-1 cursor-pointer" />
              </a>
              <a href="#contact" className="cyber-button">
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Profile Image */}
              <div className="w-72 h-72 md:w-96 md:h-96 relative z-10 mb-4">
                <img 
                  src="/lovable-uploads/dbc88ce1-8805-46ab-bf29-2e20ec7ed339.png" 
                  alt="Aditya Tiwari receiving an award" 
                  className="w-full h-full object-cover rounded-2xl cyber-border shadow-lg shadow-cyber-accent/30"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-cyber-background to-transparent opacity-40"></div>
              </div>
              
              {/* Tech orb */}
              <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4" ref={floatingElementRef}>
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-cyber-muted border border-cyber-accent/30 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-cyber-accent/20 animate-pulse-glow cursor-pointer hover:scale-105 transition-transform">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-cyber-secondary/40 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 animate-spin-slow opacity-30">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-cyber-gradient"></div>
                      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-1 bg-cyber-gradient"></div>
                    </div>
                    <div className="relative z-10 flex flex-col items-center">
                      <a href="#skills" className="cursor-pointer hover:scale-110 transition-transform">
                        <Code className="text-cyber-secondary w-8 h-8 mb-1" />
                      </a>
                      <span className="cyber-text-glow text-sm font-semibold tracking-wider">TECH</span>
                      <a href="#about" className="cursor-pointer hover:scale-110 transition-transform">
                        <Wand2 className="text-cyber-accent w-4 h-4 my-1" />
                      </a>
                      <span className="cyber-text-glow text-sm font-semibold tracking-wider">BEGINNER</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
