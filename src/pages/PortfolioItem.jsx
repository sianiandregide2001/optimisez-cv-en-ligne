import React from 'react';

const PortfolioItem = ({ image, title, description, technology, link }) => {
  return (
    <div className="portfolio-item">
      <img src={image} alt={title} className="portfolio-item-image" />
      <div className="portfolio-item-content">
        <h3 className="portfolio-item-title">{title}</h3>
        <p className="portfolio-item-description">{description}</p>
        <button className="portfolio-item-link">Voir</button>
      </div>
      <div className="portfolio-item-footer">
        <h5 className="portfolio-item-technology">{technology}</h5>
        
      </div>
    </div>
  );
};

export default PortfolioItem;
