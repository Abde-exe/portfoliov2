import React from 'react';

import './portfolio.css';
import IMG1 from '../../assets/img/portfolio1.jpg';
import IMG2 from '../../assets/img/portfolio2.jpg';
import IMG3 from '../../assets/img/portfolio3.jpg';
import IMG4 from '../../assets/img/portfolio4.jpg';
import IMG5 from '../../assets/img/portfolio5.png';
import IMG6 from '../../assets/img/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Crypto Currency Dashboard',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Crypto Currency Dashboard',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Crypto Currency Dashboard',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crypto Currency Dashboard',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dashboard',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
];
const Portfolio = () => {
  return (
    <section className="" id="portfolio">
      <h5>My recent work</h5>
      <h2>portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio_item" key={id}>
              <div className="portfolio_item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
