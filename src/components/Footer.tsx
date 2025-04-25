import React from 'react';
import { FlaskRound as Flask, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Flask className="h-6 w-6 text-teal-400" />
            <span className="text-xl font-bold">Fathima Arka</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
            <a href="#home" className="text-slate-300 hover:text-teal-400 transition-colors">Home</a>
            <a href="#about" className="text-slate-300 hover:text-teal-400 transition-colors">About</a>
            <a href="#skills" className="text-slate-300 hover:text-teal-400 transition-colors">Skills</a>
            <a href="#education" className="text-slate-300 hover:text-teal-400 transition-colors">Education</a>
            <a href="#research" className="text-slate-300 hover:text-teal-400 transition-colors">Research</a>
            <a href="#contact" className="text-slate-300 hover:text-teal-400 transition-colors">Contact</a>
          </div>
          
          <div className="flex gap-4">
            
             
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-slate-800 text-center text-slate-400">
          <p className="flex items-center justify-center gap-1">
            <span>&copy; {currentYear} Fathima Arka Latheef. All rights reserved.</span>
            <span className="inline-flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for biomedical science
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;