import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsNew from './components/ProjectsNew';
import About from './components/About';
import Tools from './components/Tools';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <ProjectsNew />
        <About />
        <Tools />
        <Education />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="relative bg-black border-t border-gray-900 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Messaoud Jrad • Built with precision, not templates
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Built with <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent font-semibold">React</span> & <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent font-semibold">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
