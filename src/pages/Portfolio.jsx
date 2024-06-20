import React from 'react';
import '../styles/Portfolio.css';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Chaine youtube',
      description: 'Description du projet 1.',
      imageUrl: 'https://via.placeholder.com/300x200',
      link: '/portfolio/project1'
    },
    {
      id: 2,
      title: 'Mon portfolio',
      description: 'Description du projet 2.',
      imageUrl: 'https://via.placeholder.com/300x200',
      link: '/portfolio/project2'
    },
    {
      id: 3,
      title: 'Restaurant Ubereat',
      description: 'Description du projet 3.',
      imageUrl: 'https://via.placeholder.com/300x200',
      link: '/portfolio/project3'
    },
    
  ];

  return (
    <div className="portfolio-page">
      <h1>Portfolio</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="view-more">Voir plus</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
