import React from 'react';
import { BookOpen, Award, Microscope, School } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="bg-white py-20">
      <div className="container">
        <h2 className="section-title">
          Education & <span className="highlight">Achievements</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <BookOpen className="text-teal-600 h-6 w-6" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-1">
              <div className="timeline-item">
                <div className="card p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-xl">Bachelor of Biomedical Science (Hons)</h4>
                    <span className="badge-primary whitespace-nowrap">2022 - Present</span>
                  </div>
                  <p className="text-slate-500 mb-2">Kaatsu International University, Sri Lanka</p>
                  <p className="text-slate-600">
                    Comprehensive program covering human anatomy, physiology, biochemistry, microbiology, 
                    pathology, and more. Emphasizing both theoretical knowledge and practical laboratory skills.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="badge-secondary">Molecular Biology</span>
                    <span className="badge-secondary">Clinical Research</span>
                    <span className="badge-secondary">Medical Laboratory</span>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="card p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-xl">Advanced Level - Bio Stream</h4>
                    <span className="badge-primary whitespace-nowrap">2019</span>
                  </div>
                  <p className="text-slate-500 mb-2">St. Cecilia's Girls' College</p>
                  <p className="text-slate-600">
                    Completed advanced studies in biology, chemistry, and physics, 
                    establishing a strong foundation for further education in biomedical sciences.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="badge-secondary">Biology</span>
                    <span className="badge-secondary">Chemistry</span>
                    <span className="badge-secondary">Physics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Achievements */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Award className="text-blue-600 h-6 w-6" />
              <h3 className="text-2xl font-semibold">Achievements</h3>
            </div>
            
            <div className="space-y-6">
              <div className="card p-6 border-l-4 border-teal-500">
                <div className="flex gap-4">
                  <div className="bg-teal-100 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                    <Microscope className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Enhanced Research Outcomes</h4>
                    <p className="text-slate-600">
                      Led a study that improved research accuracy and efficiency by 30% through innovative 
                      methodologies and effective collaboration.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card p-6 border-l-4 border-blue-500">
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                    <School className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Recognized for Leadership</h4>
                    <p className="text-slate-600">
                      Earned recognition for outstanding leadership in managing interdisciplinary lab teams 
                      and achieving experimental milestones ahead of schedule.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card p-6 border-l-4 border-purple-500">
                <div className="flex gap-4">
                  <div className="bg-purple-100 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Excellence in Problem Solving</h4>
                    <p className="text-slate-600">
                      Demonstrated strong analytical skills by solving complex biomedical challenges, 
                      leading to improved experimental designs and outcomes.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card p-6 border-l-4 border-amber-500">
                <div className="flex gap-4">
                  <div className="bg-amber-100 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                    <Microscope className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Adaptability and Innovation</h4>
                    <p className="text-slate-600">
                      Quickly adapted to new laboratory techniques and technologies, driving successful 
                      integration of advanced tools in biomedical research projects.
                    </p>
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

export default Education;