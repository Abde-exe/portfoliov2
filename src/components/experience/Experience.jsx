import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiSass,
  SiExpo,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiRedux,
} from 'react-icons/si';

import './experience.css';
const Experience = () => {
  return (
    <section className="" id="experience">
      <h5>The skills i have</h5>
      <h2>My experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend</h3>
          <div className="experience_content">
            <article className="experience_details">
              <SiHtml5 className="experience_icon" size={20} />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiCss3 className="experience_icon" size={20} />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiBootstrap className="experience_icon" size={20} />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiSass className="experience_icon" size={20} />
              <div>
                <h4>Sass</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiJavascript className="experience_icon" size={20} />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiReact className="experience_icon" size={20} />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend</h3>
          <div className="experience_content">
            <article className="experience_details">
              <SiNodedotjs className="experience_icon" size={20} />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiMysql className="experience_icon" size={24} />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiMongodb className="experience_icon" size={20} />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiExpress className="experience_icon" size={20} />
              <div>
                <h4>Express</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_mobile">
          <h3>Mobile</h3>
          <div className="experience_content">
            <article className="experience_details">
              <SiReact className="experience_icon" size={20} />
              <div>
                <h4>React Native</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiExpo className="experience_icon" size={20} />
              <div>
                <h4>Expo</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiRedux className="experience_icon" size={20} />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
