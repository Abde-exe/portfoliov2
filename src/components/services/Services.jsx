import React from 'react';
import { FiCheck } from 'react-icons/fi';

import './services.css';
const Services = () => {
  return (
    <section className="" id="services">
      <h5></h5>
      <h2>Compétences non techniques</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Méthodologies</h3>
          </div>
          <ul className="service_list">
            <li>
              <FiCheck className="service_list-icon" />
              <p>UX/UI design</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Responsive design</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>UML</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Agile (SCRUM)</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Design Patters</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Soft skills</h3>
          </div>
          <ul className="service_list">
            <li>
              <FiCheck className="service_list-icon" />
              <p>Autonomie</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Communication</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Curiosité</p>
            </li>

            <li>
              <FiCheck className="service_list-icon" />
              <p>Esprit d'Equipe</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Résolution de problème</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
