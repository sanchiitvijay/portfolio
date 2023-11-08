import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';
import Projects from './components/projects/Projects.jsx';
import Qualification from './components/qualification/Qualification.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import Scrollup from './components/scrollup/Scrollup.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Qualification />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </div>
  );
}

export default App;
