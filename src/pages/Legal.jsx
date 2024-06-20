import React, { useState } from 'react';
import '../styles/Legal.css';

export default function Legal() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isAccordionOpen = (index) => openIndex === index;

  return (
    <div className="legal-page">
      <h1>MENTIONS LÉGALES</h1>
      <div className="accordion-container">
        <div className="accordion-item">
          <button onClick={() => toggleAccordion(0)}>
            Éditeur du site
            <span className={`arrow ${isAccordionOpen(0) ? 'open' : ''}`}>&#9662;</span>
          </button>
          {isAccordionOpen(0) && (
            <div>
              <p>Informations sur l'éditeur du site.</p>
            </div>
          )}
        </div>
        <div className="accordion-item">
          <button onClick={() => toggleAccordion(1)}>
            Hébergeur
            <span className={`arrow ${isAccordionOpen(1) ? 'open' : ''}`}>&#9662;</span>
          </button>
          {isAccordionOpen(1) && (
            <div>
              <p>Informations sur l'hébergeur du site.</p>
            </div>
          )}
        </div>
        <div className="accordion-item">
          <button onClick={() => toggleAccordion(2)}>
            Crédits
            <span className={`arrow ${isAccordionOpen(2) ? 'open' : ''}`}>&#9662;</span>
          </button>
          {isAccordionOpen(2) && (
            <div>
              <h2>Crédits</h2>
              <p>Site développé par John Doe, étudiant du CEF.</p>
              <p>Les images libres de droit sont issues du site <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a>.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
