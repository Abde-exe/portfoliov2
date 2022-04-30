import React from 'react';
import './about.css';
import { FiAward } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';
import { FiFolder } from 'react-icons/fi';

import ME from '../../assets/img/photo2.jpeg';
const About = () => {
  return (
    <section id="about">
      <h5>get to know</h5>
      <h2>about me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>3+ years working</small>
            </article>
            <article className="about_card">
              <FiFolder className="about_icon" />
              <h5>Projects</h5>
              <small>3+ years working</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            voluptatibus quae nesciunt quia nam dolore accusamus, quod fuga
            reprehenderit, rerum aliquid itaque vitae totam reiciendis? Ex vel
            in enim placeat.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contactez-moi
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
