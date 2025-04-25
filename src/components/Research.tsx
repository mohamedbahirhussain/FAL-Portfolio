import React, { useState } from 'react';
import { Microscope, FlaskRound as Flask, Dna, ChevronRight } from 'lucide-react';

interface ResearchProject {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
}

const Research: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ResearchProject | null>(null);

  const projects: ResearchProject[] = [
    {
      id: 1,
      title: "Antimicrobial Resistance Analysis",
      category: "Microbiology",
      image: "https://images.pexels.com/photos/3825368/pexels-photo-3825368.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Conducted research on antimicrobial resistance patterns in clinical isolates, employing various microbiological techniques to identify resistance mechanisms and potential treatment strategies. The study involved the collection and analysis of over 100 samples, with a focus on emerging resistance trends.",
      technologies: ["Culture Techniques", "Antibiotic Susceptibility Testing", "PCR Analysis", "Data Analysis"],
      icon: <Microscope className="h-6 w-6 text-teal-600" />
    },
    {
      id: 2,
      title: "Blood Cell Morphology Study",
      category: "Hematology",
      image: "https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Investigated abnormal blood cell morphologies associated with various hematological disorders. This project involved detailed microscopic examination of blood smears, identifying cellular changes, and correlating findings with clinical data. This research contributed to improved diagnostic accuracy for hematological conditions.",
      technologies: ["Blood Film Preparation", "Microscopy", "Cell Counting", "Morphological Analysis"],
      icon: <Dna className="h-6 w-6 text-blue-600" />
    },
    {
      id: 3,
      title: "Biochemical Markers in Metabolic Disorders",
      category: "Biochemistry",
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Analyzed biochemical markers in patients with metabolic disorders to improve diagnostic methods and monitoring strategies. The research involved collecting blood samples, performing various biochemical tests, and analyzing data to identify correlations between marker levels and disease progression.",
      technologies: ["Spectrophotometry", "ELISA", "Chromatography", "Statistical Analysis"],
      icon: <Flask className="h-6 w-6 text-purple-600" />
    },
    {
      id: 4,
      title: "Pathogen Detection Method Development",
      category: "Molecular Biology",
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Developed and validated a novel method for rapid detection of pathogens in clinical samples. This project focused on optimizing PCR-based techniques to reduce detection time while maintaining high sensitivity and specificity, potentially improving the speed and accuracy of infectious disease diagnosis.",
      technologies: ["PCR", "DNA Extraction", "Gel Electrophoresis", "Method Validation"],
      icon: <Microscope className="h-6 w-6 text-amber-600" />
    },
  ];

  const openProjectModal = (project: ResearchProject) => {
    setActiveProject(project);
  };

  const closeProjectModal = () => {
    setActiveProject(null);
  };

  return (
    <section id="research" className="bg-slate-50 py-20">
      <div className="container">
        <h2 className="section-title">
          Research <span className="highlight">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="card overflow-hidden cursor-pointer group" onClick={() => openProjectModal(project)}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {project.icon}
                    <span className="badge-primary">{project.category}</span>
                  </div>
                  <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
              <div className="p-6 flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 2).map((tech, index) => (
                    <span key={`tech-${project.id}-${index}`} className="badge-secondary text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="badge-secondary text-xs">+{project.technologies.length - 2} more</span>
                  )}
                </div>
                <span className="text-teal-600 flex items-center gap-1 text-sm font-medium">
                  View Details <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Modal */}
        {activeProject && (
          <div className="fixed inset-0 bg-slate-900/70 flex items-center justify-center z-50 p-4" onClick={closeProjectModal}>
            <div 
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover"
                />
                <button 
                  className="absolute top-4 right-4 bg-white/80 p-2 rounded-full text-slate-800 hover:bg-white transition-colors"
                  onClick={closeProjectModal}
                >
                  &times;
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  {activeProject.icon}
                  <span className="badge-primary">{activeProject.category}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{activeProject.title}</h3>
                
                <p className="text-slate-600 mb-6">
                  {activeProject.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Technologies & Methods</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech, index) => (
                      <span key={`modal-tech-${index}`} className="badge-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button 
                  className="btn-primary w-full"
                  onClick={closeProjectModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Research;