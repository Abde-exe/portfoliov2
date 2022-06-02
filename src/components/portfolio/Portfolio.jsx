import React from 'react';

import './portfolio.css';
import IMG1 from '../../assets/img/theresto.png';
import IMG2 from '../../assets/img/lingo.png';
import IMG3 from '../../assets/img/wanted.png';
import IMG4 from '../../assets/img/portfolio.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'The Resto',
    subtitle: ' - Site web responsive',
    github: 'https://github.com',
    demo: 'https://abde-exe.github.io/TheResto/',
    stack: 'HTML + CSS',
    maquette:
      'https://www.figma.com/file/dP9OgeRB9W3T8LHRS8YsD6/Restaurant?node-id=0%3A2',
  },

  {
    id: 3,
    image: IMG3,
    title: 'Wanted',
    subtitle: ' - App iOS/Android',
    github: 'https://github.com/abde-exe/wantedFB',
    demo: 'http://onelink.to/r5cycy',
    stack: 'React Native + Firebase',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Portfolio',
    subtitle: ' - App Web responsive',
    github: 'https://github.com/abde-exe/portfoliov2',
    demo: '#',
    stack: 'HTML + CSS + React.js',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Lingo',
    subtitle: ' - Page Web responsive',
    github: 'https://github.com/Abde-exe/lingo',
    demo: 'https://abde-exe.github.io/lingo/',
    stack: 'HTML + CSS + Bootsrap',
  },
];
const Portfolio = () => {
  return (
    <section className="" id="portfolio">
      <h5>Quelques projets</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(
          ({ id, image, title, subtitle, github, demo, stack, maquette }) => {
            return (
              <article className="portfolio_item" key={id}>
                <div className="portfolio_item-img">
                  <img src={image} alt={title} />
                </div>
                <div className="titles">
                  <h3>
                    <span> {title}</span>
                    {subtitle}
                  </h3>
                </div>
                <div className="portfolio_item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Demo
                  </a>
                </div>

                <small className="text-light">{stack}</small>
                {maquette ? (
                  <a href={maquette} className="btn2" target="_blank">
                    Maquette
                  </a>
                ) : null}
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
