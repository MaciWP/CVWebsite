// src/components/Header.jsx

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faGraduationCap,
  faCogs,
  faEnvelope,
  faDownload,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import PDFModal from './PDFModal';
import '../styles/components/Header.scss';

const Header = ({ theme, toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <header role="banner" className="header">
        <h1 className="header__title">
          <Link to="/">{t('header.name')}</Link>
        </h1>
        <nav className="header__nav" role="navigation" aria-label="Main navigation">
          <div className="header__nav-item">
            <Link to="/#introduccion">
              <FontAwesomeIcon icon={faHome} /> {t('header.nav.home')}
            </Link>
          </div>
          <div className="header__nav-item">
            <Link to="/#timeline">
              <FontAwesomeIcon icon={faGraduationCap} /> {t('header.nav.timeline')}
            </Link>
          </div>
          <div className="header__nav-item">
            <Link to="/#habilidades">
              <FontAwesomeIcon icon={faCogs} /> {t('header.nav.skills')}
            </Link>
          </div>
        </nav>
        <div className="header__controls">
          <div className="header__controls-section header__contact">
            <a href="mailto:tuemail@ejemplo.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            {/* Usar <button> en lugar de <a> */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="header__download-button"
              aria-label="Descargar CV"
            >
              <FontAwesomeIcon icon={faDownload} />
            </button>
          </div>
          <div className="header__controls-section">
            <div className="header__language-selector">
              <select onChange={changeLanguage} value={i18n.language}>
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="de">DE</option>
                <option value="fr">FR</option>
                <option value="it">IT</option>
              </select>
            </div>
            <button
              onClick={toggleTheme}
              className="header__theme-toggle"
              aria-label="Toggle Theme"
            >
              <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
            </button>
          </div>
        </div>
      </header>
      <PDFModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
