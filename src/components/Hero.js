import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>
          Hi There,<br />
          I'm <span className="highlight">Yassine <span className="color">Rachid</span></span>
        </h1>
        <p>I Am Into <span className="color">Web Develop</span></p>
        <button className="about-btn">About Me</button>
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