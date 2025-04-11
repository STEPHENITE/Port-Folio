
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, Terminal } from 'lucide-react';

const NavItems = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cyber-background/80 backdrop-blur-md py-3 shadow-lg shadow-cyber-accent/10' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-cyber-accent/20 flex items-center justify-center border border-cyber-accent/50 animate-pulse-glow">
            <Terminal className="h-5 w-5 text-cyber-secondary" />
          </div>
          <span className="text-xl font-bold bg-cyber-gradient inline-block text-transparent bg-clip-text">
            Cyber<span className="text-white">Wizard</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {NavItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-foreground/80 hover:text-cyber-secondary transition-colors duration-300"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <a 
          href="#contact" 
          className="hidden md:block cyber-button"
        >
          <span>Contact Me</span>
        </a>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden text-foreground"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cyber-muted border-t border-cyber-accent/20 shadow-lg shadow-black/50">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {NavItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-foreground/80 hover:text-cyber-secondary py-2 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
            <a 
              href="#contact" 
              className="cyber-button text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
