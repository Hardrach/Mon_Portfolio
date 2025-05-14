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
    <section className="section" id="home">
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
        <div className="hero-text">
          <h2 className="section-title">
            Bonjour,<br />
            Je suis <span style={{fontWeight:800}}>Yassine <span style={{color:'var(--secondary-color)'}}>Rachid</span></span>
          </h2>
          <p style={{fontSize:'1.25rem', opacity:0.9, marginBottom:'1.5rem'}}>Développeur Web passionné</p>
          <button className="btn-main" onClick={() => scrollToSection('about')}>À propos de moi</button>
          <div className="socials">
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
        <div className="avatar" style={{margin:'2rem auto'}}>
          <img src="/images/Yassine Rachid.jpg" alt="Yassine Rachid" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'50%'}} />
        </div>
      </div>
    </section>
  );
};

export default Hero; 