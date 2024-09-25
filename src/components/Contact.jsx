// src/components/Contact.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/components/Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contacto">
      <h2>{t('contact.title')}</h2>
      <p>
        {t('contact.email')}: <a href="mailto:tuemail@ejemplo.com">tuemail@ejemplo.com</a>
      </p>
      <div className="social-media">
        <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
      <div className="contact-actions">
        <button onClick={() => window.open('/TuCV.pdf')}>{t('contact.downloadCV')}</button>
        <button onClick={() => window.location.href = '#contacto'}>{t('contact.scheduleInterview')}</button>
      </div>
    </section>
  );
};

<div className="social-media">
  <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
  </a>
  <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faGithub} /> GitHub
  </a>
</div>

export default Contact;
