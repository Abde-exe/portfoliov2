import React from 'react';
import CV from '../../assets/pdf/CvAbdessamadWebMobile.pdf';
function CTA() {
  return (
    <div className="cta">
      <a href={CV} rel="noreferrer" className="btn" target="_blank">
        Télécharger CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contactez-moi
      </a>
    </div>
  );
}

export default CTA;
