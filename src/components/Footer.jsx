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
        <a href="mailto:oriolomb@gmail.com" aria-label={t('contact.email')}
          FontAwesomeIcon icon={faEnvelope} />
        <a

          href="https://linkedin.com/in/oriolmaciasbadosa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          FontAwesomeIcon icon={faLinkedin} />
        <a

          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          FontAwesomeIcon icon={faGithub} />

      </div>
      <p>
        &copy; {new Date().getFullYear()} {t('footer.name')}. {t('footer.rights')}
      </p>
    </footer>
  );
};

export default Footer;