import React from 'react';
import '../styles/Home.css';


const Home = () => {
  return (
    <div>
      <header className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur web full stack</h2>
            <button className="btn-primary">En savoir plus</button>
          </div>
        </div>
      </header>

      <div className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>À propos</h2>
          <div><hr /></div>
          <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.</p>
          <p>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.</p>
          <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
        </div>
        <div className="about-skills">
          <img src="data:image/jpeg;base64,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" alt="Developer" />
          <h3>Mes compétences</h3>
          <div className="skill">
            <span>HTML5 90%</span>
            <div className="progress-bar">
              <div className="progress html5"></div>
            </div>
          </div>
          <div className="skill">
            <span>CSS3 80%</span>
            <div className="progress-bar">
              <div className="progress css3"></div>
            </div>
          </div>
          <div className="skill">
            <span>JavaScript 70%</span>
            <div className="progress-bar">
              <div className="progress javascript"></div>
            </div>
          </div>
          <div className="skill">
            <span>PHP 60%</span>
            <div className="progress-bar">
              <div className="progress php"></div>
            </div>
          </div>
          <div className="skill">
            <span>React 50%</span>
            <div className="progress-bar">
              <div className="progress react"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
