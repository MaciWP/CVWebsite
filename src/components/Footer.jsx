// src/components/Footer.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/components/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer__social">
        <a href="mailto:your.email@example.com" aria-label={t('contact.email')}>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://linkedin.com/in/your_username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/your_username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} {t('footer.name')}. {t('footer.rights')}
      </p>
      {/* Removed the Privacy Policy link to clean up the footer */}
    </footer>
  );
};

export default Footer;
