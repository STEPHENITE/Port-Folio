
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  proficiency: number;
  category: string;
  color: string;
}

const skills: Skill[] = [
  { name: 'Python', proficiency: 60, category: 'Programming', color: 'cyber-secondary' },
  { name: 'Network Security', proficiency: 45, category: 'Cyber Security', color: 'cyber-secondary' },
  { name: 'Penetration Testing', proficiency: 30, category: 'Cyber Security', color: 'cyber-secondary' },
  { name: 'IoT Prototyping', proficiency: 40, category: 'IoT', color: 'cyber-accent' },
  { name: 'Web Development', proficiency: 50, category: 'Programming', color: 'cyber-accent' },
  { name: 'Arduino', proficiency: 35, category: 'IoT', color: 'blue-500' },
  { name: 'Linux', proficiency: 55, category: 'Programming', color: 'blue-500' },
  { name: 'Database Management', proficiency: 40, category: 'Programming', color: 'emerald-500' },
  { name: 'Ethical Hacking', proficiency: 35, category: 'Cyber Security', color: 'emerald-500' },
];

const categories = [...new Set(skills.map(skill => skill.category))];

const Skills = () => {
  // Helper function to determine progress bar class based on skill color
  const getProgressClass = (color: string) => {
    switch(color) {
      case 'cyber-secondary':
        return 'bg-cyber-secondary';
      case 'cyber-accent':
        return 'bg-cyber-accent';
      case 'blue-500':
        return 'bg-blue-500';
      case 'emerald-500':
        return 'bg-emerald-500';
      default:
        return 'bg-cyber-secondary';
    }
  };

  // Get skill level label
  const getSkillLevel = (proficiency: number) => {
    if (proficiency < 40) return 'Beginner';
    if (proficiency < 70) return 'Learning';
    return 'Intermediate';
  };

  return (
    <section id="skills" className="py-20 bg-cyber-muted/50 relative noise-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-cyber-accent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-cyber-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As a beginner, I'm continuously developing these skills in various technology domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="cyber-card bg-cyber-background/70 backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-6 text-cyber-secondary">Core Skills</h3>
            <div className="space-y-6">
              {skills.slice(0, 6).map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium group-hover:text-cyber-accent transition-colors duration-300">{skill.name}</span>
                    <div className="flex items-center">
                      <span className={`text-${skill.color} text-sm mr-2`}>{skill.proficiency}%</span>
                      <span className="text-xs text-muted-foreground">{getSkillLevel(skill.proficiency)}</span>
                    </div>
                  </div>
                  <Progress 
                    value={skill.proficiency} 
                    className={`h-2 bg-cyber-muted group-hover:h-3 transition-all duration-300 [&>div]:${getProgressClass(skill.color)} cursor-pointer`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="cyber-card bg-cyber-background/70 backdrop-blur-md mb-8">
              <h3 className="text-2xl font-bold mb-6 text-cyber-accent">Categories</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <div 
                    key={category}
                    className="cyber-border p-4 rounded-lg text-center bg-cyber-muted/30 hover:bg-cyber-muted/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <span className="font-medium">{category}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="cyber-card bg-cyber-background/70 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 text-cyber-secondary">Additional Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.slice(6).map((skill) => (
                  <div 
                    key={skill.name}
                    className="cyber-border p-3 rounded-lg bg-cyber-muted/30 hover:bg-cyber-muted/50 hover:scale-105 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium group-hover:text-cyber-accent transition-colors duration-300">{skill.name}</span>
                      <div className="flex flex-col items-end">
                        <span className={`text-${skill.color} text-sm`}>{skill.proficiency}%</span>
                        <span className="text-xs text-muted-foreground">{getSkillLevel(skill.proficiency)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
