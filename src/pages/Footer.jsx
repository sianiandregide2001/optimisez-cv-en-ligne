import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Footer.css';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>John Doe</h4>
          <p>40 Rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p>Téléphone : 06 20 30 40 50</p>
          <div className="social-icons">
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Liens utiles</h4>
          <ul>
            <li> <i className="fas fa-chevron-right"></i>Accueil</li>
            <li> <i className="fas fa-chevron-right"></i>À propos</li>
            <li><i className="fas fa-chevron-right"></i>Services</li>
            <li><i className="fas fa-chevron-right"></i>Me contacter</li>
            <li><i className="fas fa-chevron-right"></i>Mentions légales</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Mes dernières réalisations</h4>
          <ul>
            <li><i className="fas fa-chevron-right"></i>Fresh food</li>
            <li><i className="fas fa-chevron-right"></i>Restaurant Akira</li>
            <li><i className="fas fa-chevron-right"></i>Espace bien-être</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Mes derniers articles</h4>
          <ul>
            <li><i className="fas fa-chevron-right"></i>Coder son site en HTML/CSS</li>
            <li><i className="fas fa-chevron-right"></i>Vendre ses produits sur le web</li>
            <li><i className="fas fa-chevron-right"></i>Se positionner sur Google</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Designed by John Doe</p>
      </div>
    </footer>
  );
}
