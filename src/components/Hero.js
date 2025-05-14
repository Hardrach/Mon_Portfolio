import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>
          Bonjour,<br />
          Je suis <span className="highlight">Yassine <span className="color">Rachid</span></span>
        </h1>
        <p>Développeur Web passionné</p>
        <button className="about-btn" onClick={() => scrollToSection('about')}>À propos de moi</button>
        <div className="Hero-socials">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link linkedin">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link github">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
     <div className="profile-section">
        <div className="profile-image">
          <img src="/images/Yassine Rachid.jpg" alt="Yassine Rachid" />
        </div>
     </div>
      
    </div>
  );
};

export default Hero; 