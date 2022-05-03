import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

import React from 'react';
import { MdDeveloperMode } from 'react-icons/md';
import { MdManageAccounts } from 'react-icons/md';
import { MdLightbulb } from 'react-icons/md';

import './about.css';
import ME from '../../assets/img/photo2.jpeg';
import CTA from '../header/CTA';
AOS.init();
const About = () => {
  return (
    <section id="about">
      <h5>qui suis-je?</h5>
      <h2>A propos de moi</h2>
      <div className="container about_container">
        <div className="about_me" data-aos="flip-left">
          <div className="about_me-img">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <MdDeveloperMode className="about_icon" />
              <h5>Développement</h5>
            </article>
            <article className="about_card">
              <MdLightbulb className="about_icon" />
              <h5>Entrepreneuriat</h5>
            </article>
            <article className="about_card">
              <MdManageAccounts className="about_icon" />
              <h5>Gestion de projet</h5>
            </article>
          </div>
          <div className="paragraphes">
            <p>
              Je suis un développeur <span>Web orienté Front</span> avec un coup
              de coeur pour le développement d'applications
              <span> mobiles cross-platfrom</span>.
            </p>
            <p>
              Passionné par les technologies depuis enfant, j'ai toujours voulu
              créer des choses. Du Collège au Lycée, j'ai touché à des logiciels
              par curiosité comme Photoshop, Sony Vegas, Unity 3D ou Fruity
              Loops.
            </p>
            <p>
              Par la suite, j'ai suivi un cursus qui m'a donné une base solide
              de <span>l'informatique théorique et applicative.</span>{' '}
              Cependant, mon réel intérêt pour le code s'est intensifié avec mon
              envie <span>d'entreprendre et de gérer des projets.</span>
            </p>
          </div>
          <div data-aos="fade-left">
            <CTA />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
