import React, { useEffect, useRef } from 'react';
import { ArrowDown, FlaskRound as Flask, Dna, FileDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!heroRef.current) return;

      const particle = document.createElement('div');
      particle.classList.add('absolute', 'bg-teal-500', 'rounded-full', 'opacity-50');
      
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      
      const duration = Math.random() * 10 + 10;
      particle.style.animation = `float ${duration}s ease-in-out infinite`;
      
      heroRef.current.appendChild(particle);
      
      setTimeout(() => {
        if (heroRef.current?.contains(particle)) {
          heroRef.current.removeChild(particle);
        }
      }, duration * 1000);
    };
    
    for (let i = 0; i < 15; i++) {
      createParticle();
    }
    
    const interval = setInterval(createParticle, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="dna-container">
        <div className="dna-helix" style={{ top: '10%', left: '5%' }}>
          <Dna className="w-full h-full text-teal-500" />
        </div>
        <div className="dna-helix" style={{ top: '30%', right: '8%' }}>
          <Dna className="w-full h-full text-blue-500" />
        </div>
      </div>
      <div ref={heroRef} className="container relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl fade-in-up order-2 md:order-1">
            <div className="flex items-center gap-2 mb-4">
              <Flask className="text-teal-500 h-6 w-6" />
              <span className="badge-primary">Biomedical Science</span>
            </div>
            <h1 className="mb-6 leading-tight">
              <span className="block font-bold text-slate-800">Fathima Arka Latheef</span>
              <span className="block text-2xl md:text-3xl mt-2 text-slate-600 font-normal">
                Biomedical Scientist & Researcher
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl fade-in-up-delay-1">
              A passionate fourth-year biomedical science student with expertise in 
              laboratory techniques, research methodologies, and a deep understanding 
              of human health and disease.
            </p>
            
            <div className="flex flex-wrap gap-4 fade-in-up-delay-2">
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
              <a href="#research" className="btn-outline">
                View Research
              </a>
              <a 
                href="/Fathima_Arka_CV.pdf" 
                download 
                className="btn-secondary flex items-center gap-2"
              >
                <FileDown className="h-5 w-5" />
                Download CV
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full animate-pulse"></div>
              <img 
                src="/arka.png"
                alt="Fathima Arka Latheef"
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
          
          
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-400 hover:text-teal-500 transition-colors">
          <ArrowDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;