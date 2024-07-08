// src/components/Services.js

import React from 'react';
import '../styles/Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faCode, faSearchDollar } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className="services">
      <div className="services-background"></div>
      <div className="services-header">
        <h2>MON OFFRE DE SERVICES</h2>
        <p>Voici les prestations sur lesquelles je peux intervenir.</p>
        <hr />
      </div>
      <div className="services-content">
        <div className="service-card">
          <FontAwesomeIcon icon={faDesktop} size="3x" className="service-icon" />
          <h3>UX DESIGN</h3>
          <p>L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faCode} size="3x" className="service-icon" />
          <h3>DÉVELOPPEMENT WEB</h3>
          <p>Le <strong>développement de sites web</strong> repose sur l'utilisation des langages <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> et <strong>PHP</strong>.</p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faSearchDollar} size="3x" className="service-icon" />
          <h3>RÉFÉRENCEMENT</h3>
          <p>Le <strong>référencement naturel</strong> d'un site, aussi appelé <strong>SEO</strong>, consiste à mettre des techniques en œuvre pour <em>améliorer sa position</em> dans les résultats des moteurs de recherche.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
