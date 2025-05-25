import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <header className="text-center py-10 text-4xl font-bold text-white">Dev Bansal</header>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
