import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="profile-section">
          <div className="profile-image">
            <img src="/images/Yassine Rachid.jpg" alt="Yassine Rachid" />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">Yassine Rachid</h1>
          </div>
        </div>

        <h2>À Propos</h2>
        <div className="about-text">
          <p>
            Passionné par le développement web et les nouvelles technologies, je crée des applications web modernes et performantes. Mon objectif est de concevoir des solutions innovantes qui répondent aux besoins des utilisateurs tout en offrant une expérience utilisateur exceptionnelle.
          </p>
          <p>
            Avec une solide formation en développement web et une expérience pratique dans divers projets, je maîtrise les technologies front-end et back-end les plus récentes.
          </p>
        </div>

        <div className="stats">
          <div className="stat-item">
            <h3>2+</h3>
            <p>Années d'expérience</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>Projets réalisés</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Technologies maîtrisées</p>
          </div>
        </div>
        
      </div>
      
    </section>
    
  );
}

export default About; 