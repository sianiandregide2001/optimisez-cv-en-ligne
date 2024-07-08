import React from 'react';
import '../styles/Blog.css';

const BlogItem = ({ image, title, description, date, link }) => {
  return (
    <div className="blog-item">
      <img src={image} alt={title} className="blog-item-image" />
      <div className="blog-item-content">
        <h3 className="blog-item-title">{title}</h3>
        <p className="blog-item-description">{description}</p>
        <a href={link} className="blog-item-link">Lire la suite</a>
        <p className="blog-item-date">Publié le {date}</p>
      </div>
    </div>
  );
};

export default BlogItem;
