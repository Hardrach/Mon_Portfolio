import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Particles from './components/Particles';
import CursorTrail from './components/CursorTrail';
import AnimatedText from './components/AnimatedText';
import Hero from './components/Hero';

function App() {
  useEffect(() => {
    // Effet de parallaxe
    const handleScroll = () => {
      const sections = document.querySelectorAll('.parallax-section');
      sections.forEach(section => {
        const speed = section.dataset.speed || 0.5;
        const yPos = -(window.pageYOffset * speed);
        section.style.transform = `translateY(${yPos}px)`;
      });
    };

    // Animation au scroll
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.fade-in, .scale-in');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight) && (elementBottom > 0);
        
        if (isVisible) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0) scale(1)';
        }
      });
    };

    // Effet de tilt au mouvement de la souris
    const handleMouseMove = (e) => {
      const sections = document.querySelectorAll('.parallax-section');
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      
      sections.forEach(section => {
        section.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollAnimation);
    window.addEventListener('mousemove', handleMouseMove);
    handleScrollAnimation(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollAnimation);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <Particles />
      <CursorTrail />
      <Header />
      <main>
        <section className="parallax-section" data-speed="0.3">
          <Hero />
        </section>
        <section className="parallax-section" data-speed="0.3">
          <About />
        </section>
        <section className="parallax-section" data-speed="0.4">
          <Skills />
        </section>
        <section className="parallax-section" data-speed="0.5">
          <Projects />
        </section>
        <section className="parallax-section" data-speed="0.3">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App; 