import React, { useState } from 'react';
import '../styles/Services.css';

export default function Services() {
  const [iconHovered, setIconHovered] = useState(false);

  const services = [
    {
      id: 1,
      title: 'Développement web',
      description: 'Description des sites web modernes et réactifs pour améliorer votre présence en ligne.',
      imageUrl: 'https://via.placeholder.com/300x200',
      link: '/services/service1'
    },
    {
      id: 2,
      title: 'Design graphisme',
      description: 'Design graphique professionnel pour tous vos besoins de branding et de communication visuelle.',
      imageUrl: 'https://via.placeholder.com/300x200',
      link: '/services/service2'
    },
    {
      id: 3,
      title: 'SEO',
      description: 'Optimisation pour les moteurs de recherche pour ameliorer la visibilité de votre site web.',
      imageUrl: 'https://via.placeholder.com/300x200',
      link: '/services/service3'
    },
    
  ];

  return (
    <div className="services-page">
      <h1>Services</h1>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img
              src={service.imageUrl}
              alt={service.title}
              className={`service-image ${iconHovered ? 'serviceIconHover' : ''}`}
              onMouseEnter={() => setIconHovered(true)}
              onMouseLeave={() => setIconHovered(false)}
            />
            <div className="service-content">
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
              <a href={service.link} className="view-more">Voir plus</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
