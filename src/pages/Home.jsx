import React,  { useState }  from 'react';
import '../styles/Home.css' 

export default function Home() {
  const [navHovered, setNavHovered] = useState(false);

  return (
    <div className="home-page">
      <div className="background-image">
        <div className="overlay"></div>
        <div className="containertext-center">
          <h1>Bienvenue sur le site de John Doe</h1>
          <h2>Développeur Web</h2>
          <a href="#about" className={`btn btn-primary ${navHovered ? 'navLinkHover' : ''}`}
            onMouseEnter={() => setNavHovered(true)}
            onMouseLeave={() => setNavHovered(false)}>
              En savoir plus</a>
        </div>
      </div>
      <section id="about" className="about-section">
        <div className="container">
          <h2>À propos de John Doe</h2>
          <div className="row">
            <div className="col-md-4">
              <img src="https://media.licdn.com/dms/image/D4E35AQGcOs2Ew2yM1A/profile-framedphoto-shrink_100_100/0/1716507355576?e=1719111600&v=beta&t=I0lftvrN11SndFUmchuX6nLMWq-71lZ6a9ZwZtTMU2I" alt="John Doe" />
            </div>
            <div className="col-md-8">
              <div><p>John Doe est un développeur web talentueux avec une passion pour la création de sites web interactifs et fonctionnels.</p>
              <h3>Compétences</h3>
              </div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">HTML/CSS</div>
              </div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">JavaScript</div>
              </div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">Vuejs</div>
              </div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">React</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
