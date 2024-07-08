import React from 'react';
import PortfolioItem from './PortfolioItem';
import '../styles/Portfolio.css';
import freshFoodImage from '../images/freshfood.jpeg';
import restaurantAkiraImage from '../images/akira.jpeg';
import espaceBienEtreImage from '../images/espace bien etre.jpeg';

const Portfolio = () => {
  const items = [
    {
      image: freshFoodImage,
      title: 'Fresh food',
      description: 'Réalisation d\'un site avec commande en ligne.',
      technology: 'Site réalisé avec PHP et MySQL',
      link: '#'
    },
    {
      image: restaurantAkiraImage,
      title: 'Restaurant Akira',
      description: 'Réalisation d\'un site vitrine.',
      technology: 'Site réalisé avec WordPress',
      link: '#'
    },
    {
      image: espaceBienEtreImage,
      title: 'Espace bien-être',
      description: 'Réalisation d\'un site vitrine pour un patricien de bien-être.',
      technology: 'Site réalisé en HTML/CSS',
      link: '#'
    }
  ];

  return (
    <div className="portfolio">
      <div className="portfolio-background"></div>
      <div className="portfolio-header">
        <h2>PORTFOLIO</h2>
        <p>Voici quelques-unes de mes réalisations.</p>
        <hr />
      </div>
      <div className="portfolio-items">
        {items.map((item, index) => (
          <PortfolioItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            technology={item.technology}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
