import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';
import Services from './components/services/Services.jsx';
import Qualification from './components/qualification/Qualification.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
      </main>
    </div>
  );
}

export default App;
