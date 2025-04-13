import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
