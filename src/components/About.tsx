import React from 'react';
import { Atom, Microscope, FlaskRound as Flask, Book, FlaskConical, Dna } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container">
        <h2 className="section-title">
          About <span className="highlight">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/arkamicro.jpg" 
                alt="Biomedical scientist working in a laboratory" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex flex-col justify-end p-6">
                <span className="text-white text-xl font-semibold">Fathima Arka Latheef</span>
                <span className="text-white/80">BSc (Hons) Biomedical Science</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-slate-800">Professional Summary</h3>
            <p className="text-slate-600 mb-6">
              I am a dedicated fourth-year Biomedical Science student at Kaatsu International University 
              with a passion for laboratory research and clinical diagnostics. My academic journey has 
              equipped me with a strong foundation in biological sciences, laboratory techniques, and 
              research methodologies.
            </p>
            <p className="text-slate-600 mb-8">
              I am deeply fascinated by the complexities of human health and disease. My goal is to 
              contribute to advancements in the biomedical field through rigorous research and application 
              of cutting-edge techniques. I am committed to continuous learning and am enthusiastic about 
              gaining hands-on experience through research opportunities.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-teal-100 p-2 rounded-lg">
                  <Microscope className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Laboratory Skills</h4>
                  <p className="text-slate-600 text-sm">Proficient in clinical testing methods</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-blue-100 p-2 rounded-lg">
                  <Atom className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Research Focus</h4>
                  <p className="text-slate-600 text-sm">Biomedical research and analysis</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-purple-100 p-2 rounded-lg">
                  <Book className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Academic Excellence</h4>
                  <p className="text-slate-600 text-sm">Strong foundation in medical sciences</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-amber-100 p-2 rounded-lg">
                  <FlaskConical className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Scientific Writing</h4>
                  <p className="text-slate-600 text-sm">Clear communication of findings</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Feature Cards Section */}
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          <div className="card p-6 bg-gradient-to-br from-teal-50 to-white rounded-xl shadow-md">
            <Microscope className="text-teal-500 mb-3 h-8 w-8" />
            <h3 className="text-xl font-semibold mb-2">Laboratory Expertise</h3>
            <p className="text-slate-600">Advanced skills in clinical testing and microbiological techniques</p>
          </div>
          <div className="card p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md">
            <Flask className="text-blue-500 mb-3 h-8 w-8" />
            <h3 className="text-xl font-semibold mb-2">Research Focus</h3>
            <p className="text-slate-600">Specialized in biomedical studies with analytical approach</p>
          </div>
          <div className="card p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-md">
            <Dna className="text-purple-500 mb-3 h-8 w-8" />
            <h3 className="text-xl font-semibold mb-2">Critical Thinker</h3>
            <p className="text-slate-600">Problem-solving skills in complex biomedical challenges</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
