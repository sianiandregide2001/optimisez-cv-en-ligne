import React, { useEffect, useState } from 'react';
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
      <div className="footer-columns">
        <div className="footer-column">
          <h4> <strong>John Doe</strong> </h4>
          <address><p>40 Rue Laure Diebold<br />69009 Lyon<br />France</p></address>
          <p>Téléphone : +33 06 20 30 40 50</p>
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
        <div className="footer-column">
          <h4> <strong>Liens utiles</strong> </h4>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/legal">Legal</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>  <strong> Mes derniers réalisations</strong></h4>
          <ul>
            <li><a href="/portfolio/project1">chaine youtube</a></li>
            <li><a href="/portfolio/project2">Mon portfolio</a></li>
            <li><a href="/portfolio/project3">Restaurant Ubereat</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4><strong>Mes derniers articles</strong></h4>
          <ul>
            <li><a href="/blog/article1">Premier pas en CSS3 et HTML5</a></li>
            <li><a href="/blog/article2">Apprendre javascript</a></li>
            <li><a href="/blog/article3">coder avec vuejs3</a></li>
            <li><a href="/blog/article3">React pour débutant</a></li>
            <li><a href="/blog/article3">Le référencement SEO</a></li>
            <li><a href="/blog/article3">Figma design</a></li>

          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 John Doe. Tous droits réservés.</p>
        {showScrollTop && (
          <a href="#top" className="scroll-top">Haut de page</a>
        )}
      </div>
    </footer>
  );
}
