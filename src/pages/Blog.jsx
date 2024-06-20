import React from 'react';
import '../styles/Blog.css';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: 'Premier pas en CSS3 et HTML5',
      excerpt: 'Ceci est un extrait de l\'article 1.',
      imageUrl: 'https://via.placeholder.com/300x200',
      link: '/blog/article1'
    },
    {
      id: 2,
      title: 'Apprendre javascript',
      excerpt: 'Ceci est un extrait de l\'article 2.',
      imageUrl: 'https://via.placeholder.com/300x200',
      link: '/blog/article2'
    },
    {
      id: 3,
      title: 'Coder avec vuejs3',
      excerpt: 'Ceci est un extrait de l\'article 2.',
      imageUrl: 'https://via.placeholder.com/300x200',
      link: '/blog/article3'
    },
    {
      id: 4,
      title: 'React pour débutant',
      excerpt: 'Ceci est un extrait de l\'article 2.',
      imageUrl: 'https://via.placeholder.com/300x200',
      link: '/blog/article4'
    },
    {
      id: 5,
      title: 'Le référencement SEO',
      excerpt: 'Ceci est un extrait de l\'article 2.',
      imageUrl: 'https://via.placeholder.com/300x200',
      link: '/blog/article5'
    },
    {
      id: 6,
      title: 'Figma design',
      excerpt: 'Ceci est un extrait de l\'article 2.',
      imageUrl: 'https://via.placeholder.com/300x200',
      link: '/blog/article6'
    },
  
  ];

  return (
    <div className="blog-page">
      <h1>Blog</h1>
      <div className="articles-container">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <img src={article.imageUrl} alt={article.title} className="article-image" />
            <div className="article-content">
              <h2 className="article-title">{article.title}</h2>
              <p className="article-excerpt">{article.excerpt}</p>
              <a href={article.link} className="read-more">Lire plus</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
