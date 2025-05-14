import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Ferme le menu sur mobile après clic
    }
  };

  return (
    <header className="header">
      <motion.div
        className="logo"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => scrollToSection('home')}
      >
        <h1>Portfolio</h1>
      </motion.div>

      <button
        className={`burger${menuOpen ? ' open' : ''}`}
        aria-label="Ouvrir le menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav${menuOpen ? ' open' : ''}`}>
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <li onClick={() => scrollToSection('home')}>Accueil</li>
          <li onClick={() => scrollToSection('about')}>À propos</li>
          <li onClick={() => scrollToSection('skills')}>Compétences</li>
          <li onClick={() => scrollToSection('projects')}>Projets</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </motion.ul>
      </nav>
    </header>
  );
};

export default Header; 