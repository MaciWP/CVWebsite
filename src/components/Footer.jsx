import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/components/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__social">
          <a href="mailto:oriolomb@gmail.com" aria-label={t('header.Email')}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a 
            href="https://linkedin.com/in/oriolmaciasbadosa" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={t('header.LinkedIn')}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a 
            href="https://github.com/MaciWP" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={t('header.GitHub')}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <p className="footer__copyright">
          &copy; {currentYear} {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;