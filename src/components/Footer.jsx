// src/components/Footer.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/components/Footer.scss';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} {t('footer.name')}. {t('footer.rights')}
      </p>
      <a href="/politica-de-privacidad">{t('footer.privacyPolicy')}</a>
    </footer>
  );
};

export default Footer;
