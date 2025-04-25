import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Toaster position="bottom-right" />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;