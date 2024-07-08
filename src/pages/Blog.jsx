// src/components/Blog.js

import React from 'react';
import BlogItem from './BlogItem';
import '../styles/Blog.css';
import htmlCssImage from '../images/code_html.jpg';
import vendreWebImage from '../images/vendre_web.jpg';
import googlePositionImage from '../images/google_position.jpg';
import responsiveDesignImage from '../images/responsive_design.png';
import referencementImage from '../images/referencement.jpg';
import apprendreCoderImage from '../images/apprendre_coder.jpeg';

const Blog = () => {
  const articles = [
    {
      image: htmlCssImage,
      title: 'Coder son site en HTML/CSS',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      date: '22 août 2022',
      link: '#'
    },
    {
      image: vendreWebImage,
      title: 'Vendre ses produits sur le web',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      date: '20 août 2022',
      link: '#'
    },
    {
      image: googlePositionImage,
      title: 'Se positionner sur Google',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      date: '1 août 2022',
      link: '#'
    },
    {
      image: responsiveDesignImage,
      title: 'Coder en responsive design',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      date: '31 juillet 2022',
      link: '#'
    },
    {
      image: referencementImage,
      title: 'Techniques de référencement',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      date: '30 juillet 2022',
      link: '#'
    },
    {
      image: apprendreCoderImage,
      title: 'Apprendre à coder',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      date: '12 juillet 2022',
      link: '#'
    }
  ];

  return (
    <div className="blog">
      <div className="blog-background"></div>
      <div className="blog-header">
        <h2>BLOG</h2>
        <p>Retrouvez ici quelques articles sur le développement web.</p>
        <hr />
      </div>
      <div className="blog-items">
        {articles.map((article, index) => (
          <BlogItem
            key={index}
            image={article.image}
            title={article.title}
            description={article.description}
            date={article.date}
            link={article.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
