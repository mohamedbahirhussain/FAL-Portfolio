import React, { useEffect, useRef } from 'react';
import { Microscope, FlaskRound as Flask, Dna, Stethoscope, Atom, Pill } from 'lucide-react';

interface Skill {
  name: string;
  proficiency: number;
  category: string;
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const laboratorySkills: Skill[] = [
    { 
      name: 'Specimen Collection', 
      proficiency: 95, 
      category: 'Laboratory',
      icon: <Flask className="h-5 w-5 text-teal-600" />
    },
    { 
      name: 'Clinical Testing', 
      proficiency: 90, 
      category: 'Laboratory',
      icon: <Microscope className="h-5 w-5 text-teal-600" />
    },
    { 
      name: 'Microbiological Techniques', 
      proficiency: 85, 
      category: 'Laboratory',
      icon: <Atom className="h-5 w-5 text-teal-600" />
    },
    { 
      name: 'Chemical Analysis', 
      proficiency: 80, 
      category: 'Laboratory',
      icon: <Flask className="h-5 w-5 text-teal-600" />
    },
    { 
      name: 'Instrumentation Handling', 
      proficiency: 90, 
      category: 'Laboratory',
      icon: <Microscope className="h-5 w-5 text-teal-600" />
    },
    { 
      name: 'Laboratory Operations', 
      proficiency: 85, 
      category: 'Laboratory',
      icon: <Flask className="h-5 w-5 text-teal-600" />
    },
  ];

  const academicSkills: Skill[] = [
    { 
      name: 'Anatomy and Physiology', 
      proficiency: 90, 
      category: 'Academic',
      icon: <Stethoscope className="h-5 w-5 text-blue-600" />
    },
    { 
      name: 'Chemistry and Biochemistry', 
      proficiency: 85, 
      category: 'Academic',
      icon: <Atom className="h-5 w-5 text-blue-600" />
    },
    { 
      name: 'Microbiology', 
      proficiency: 95, 
      category: 'Academic',
      icon: <Dna className="h-5 w-5 text-blue-600" />
    },
    { 
      name: 'Pathology', 
      proficiency: 80, 
      category: 'Academic',
      icon: <Stethoscope className="h-5 w-5 text-blue-600" />
    },
    { 
      name: 'Hematology', 
      proficiency: 85, 
      category: 'Academic',
      icon: <Dna className="h-5 w-5 text-blue-600" />
    },
    { 
      name: 'Pharmacology', 
      proficiency: 75, 
      category: 'Academic',
      icon: <Pill className="h-5 w-5 text-blue-600" />
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!skillsRef.current) return;
      
      const progressBars = skillsRef.current.querySelectorAll('.progress-bar-fill');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target as HTMLElement;
            const width = progressBar.getAttribute('data-width');
            progressBar.style.width = `${width}%`;
            progressBar.style.transition = 'width 1s ease-out';
          }
        });
      }, { threshold: 0.1 });
      
      progressBars.forEach((progressBar) => {
        observer.observe(progressBar);
      });
      
      return () => {
        progressBars.forEach((progressBar) => {
          observer.unobserve(progressBar);
        });
      };
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="skills" className="bg-slate-50 py-20">
      <div className="container" ref={skillsRef}>
        <h2 className="section-title">
          My <span className="highlight">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Flask className="text-teal-600 h-6 w-6" />
              <h3 className="text-2xl font-semibold">Laboratory Skills</h3>
            </div>
            
            <div className="space-y-6">
              {laboratorySkills.map((skill, index) => (
                <div key={`lab-${index}`}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      {skill.icon}
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-slate-500">{skill.proficiency}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-bar-fill bg-teal-500" 
                      data-width={skill.proficiency}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Atom className="text-blue-600 h-6 w-6" />
              <h3 className="text-2xl font-semibold">Academic Knowledge</h3>
            </div>
            
            <div className="space-y-6">
              {academicSkills.map((skill, index) => (
                <div key={`academic-${index}`}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      {skill.icon}
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-slate-500">{skill.proficiency}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-bar-fill bg-blue-500" 
                      data-width={skill.proficiency}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Professional Capabilities</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Data Analysis', icon: <Atom className="h-8 w-8" /> },
              { name: 'Scientific Writing', icon: <Dna className="h-8 w-8" /> },
              { name: 'Team Collaboration', icon: <Stethoscope className="h-8 w-8" /> },
              { name: 'Problem Solving', icon: <Flask className="h-8 w-8" /> },
            ].map((capability, index) => (
              <div 
                key={`cap-${index}`} 
                className="card p-6 text-center hover:bg-teal-50 transition-colors"
              >
                <div className="flex justify-center mb-4 text-teal-500">
                  {capability.icon}
                </div>
                <h4 className="font-medium">{capability.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;