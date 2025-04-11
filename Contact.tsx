
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you shortly.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-cyber-muted/30 relative noise-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-cyber-accent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-cyber-secondary mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="cyber-card bg-cyber-background/80 backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-6 text-cyber-secondary flex items-center">
              <MessageSquare className="mr-2 h-6 w-6" /> Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="cyber-input"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="cyber-input"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="cyber-input"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="cyber-input resize-none min-h-[150px]"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={loading}
                className="cyber-button bg-cyber-accent text-white border-0 hover:text-white w-full"
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="cyber-card bg-cyber-background/80 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 text-cyber-accent flex items-center">
                <Mail className="mr-2 h-6 w-6" /> Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-cyber-accent/10 flex items-center justify-center mr-4 mt-1">
                    <Mail className="h-5 w-5 text-cyber-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:aditya.stephenite@gmail.com" className="text-cyber-secondary hover:text-cyber-accent transition-colors duration-300">
                      aditya.stephenite@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="cyber-card bg-cyber-background/80 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 text-cyber-secondary">Connect With Me</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a 
                  href="https://github.com/STEPHENITE" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 cyber-border rounded-lg bg-cyber-muted/30 hover:bg-cyber-muted/50 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-cyber-accent/10 flex items-center justify-center mb-3 group-hover:bg-cyber-accent/20 transition-colors duration-300">
                    <Github className="h-6 w-6 text-cyber-accent" />
                  </div>
                  <span className="font-medium">GitHub</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/adityathegr8" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 cyber-border rounded-lg bg-cyber-muted/30 hover:bg-cyber-muted/50 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-cyber-secondary/10 flex items-center justify-center mb-3 group-hover:bg-cyber-secondary/20 transition-colors duration-300">
                    <Linkedin className="h-6 w-6 text-cyber-secondary" />
                  </div>
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
