import React, { useRef } from 'react';

import { FiMail } from 'react-icons/fi';
import { SiLinkedin } from 'react-icons/si';
import emailjs from 'emailjs-com';

import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_rqussnr',
        'template_bu71i6b',
        form.current,
        'GLZTPfUL0oL2DizD8'
      )
      .then(
        (result) => {
          e.target.reset();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="" id="contact">
      <h5>Pour plus d'infos</h5>
      <h2>Contactez-moi</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <FiMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>
              <span>contact@abdedev.fr</span>
            </h5>
            <a href="mailto:contact@abdedev.fr">Envoyer un mail</a>
          </article>
          <article className="contact_option">
            <SiLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>
              <span>Abdessamad Bourhaleb</span>
            </h5>
            <a
              href="https://linkedin.com/in/abdessamad-bourhaleb"
              target="_blank"
            >
              Envoyer un message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Nom" required />
          <input
            type="email"
            name="email"
            placeholder="Adresse Email"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            cols="30"
            rows="7"
            required
          ></textarea>
          <button className="btn btn-primary">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
