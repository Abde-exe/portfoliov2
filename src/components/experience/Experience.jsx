import React from 'react';

import {
  frontend,
  backend,
  mobile,
  outils,
  autres,
  nivExp,
} from './competences.jsx';
import './experience.css';

const Experience = () => {
  const renderFront = () => {
    return frontend.map((comp) => {
      return (
        <article className="experience_details">
          {comp.icon}
          <div>
            <h4>{comp.nom}</h4>
            <small className="text-light">{nivExp[comp.exp]}</small>
          </div>
        </article>
      );
    });
  };
  const renderBack = () => {
    return backend.map((comp) => {
      return (
        <article className="experience_details">
          {comp.icon}
          <div>
            <h4>{comp.nom}</h4>
            <small className="text-light">{nivExp[comp.exp]}</small>
          </div>
        </article>
      );
    });
  };
  const renderMobile = () => {
    return mobile.map((comp) => {
      return (
        <article className="experience_details">
          {comp.icon}
          <div>
            <h4>{comp.nom}</h4>
            <small className="text-light">{nivExp[comp.exp]}</small>
          </div>
        </article>
      );
    });
  };
  const renderOutils = () => {
    return outils.map((comp) => {
      return (
        <article className="experience_details">
          {comp.icon}
          <div>
            <h4>{comp.nom}</h4>
            {/* <small className="text-light">{nivExp[comp.exp]}</small> */}
          </div>
        </article>
      );
    });
  };
  const renderAutres = () => {
    return autres.map((comp) => {
      return (
        <article className="experience_details">
          {comp.icon}
          <div>
            <h4>{comp.nom}</h4>
            {/* <small className="text-light">{nivExp[comp.exp]}</small> */}
          </div>
        </article>
      );
    });
  };
  return (
    <section className="" id="experience">
      <h5></h5>
      <h2>Compétences techniques</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend</h3>
          <div className="experience_content">{renderFront()}</div>
        </div>
        <div className="experience_backend">
          <h3>Backend</h3>
          <div className="experience_content">{renderBack()}</div>
        </div>
        <div className="experience_mobile">
          <h3>Mobile</h3>
          <div className="experience_content">{renderMobile()}</div>
        </div>
        <div className="experience_mobile">
          <h3>Outils</h3>
          <div className="experience_content">{renderOutils()}</div>
        </div>
        <div className="experience_mobile">
          <h3>Autres curiosités</h3>
          <div className="experience_content">{renderAutres()}</div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
