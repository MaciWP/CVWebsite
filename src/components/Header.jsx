import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBriefcase,
  faGraduationCap,
  faCogs,
  faLanguage,
  faEnvelope,
  faDownload,
  faSun,
  faMoon,
  faAdjust,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ThemeContext } from '../contexts/ThemeContext';
import PDFModal from './PDFModal';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme, toggleHighContrast } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const navItems = [
    { to: 'introduction', icon: faHome, label: 'header.nav.home' },
    { to: 'experience', icon: faBriefcase, label: 'header.nav.experience' },
    { to: 'education', icon: faGraduationCap, label: 'header.nav.education' },
    { to: 'skills', icon: faCogs, label: 'header.nav.skills' },
    { to: 'languages', icon: faLanguage, label: 'header.nav.languages' },
  ];

  return (
    <header className="header">
      <h1 className="header__title">{t('header.name')}</h1>
      {!isMobile && (
        <nav className="header__nav">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="header__nav-item"
            >
              <FontAwesomeIcon icon={item.icon} />
              <span className="nav-text">{t(item.label)}</span>
            </Link>
          ))}
        </nav>
      )}
      <div className="header__controls">
        <div className="header__social">
          <a href="mailto:your.email@example.com" aria-label={t('contact.email')}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        {isMobile ? (
          <a
            href="/TuCV.pdf"
            download
            className="header__download-button"
            aria-label={t('contact.downloadCV')}
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ) : (
          <button
            onClick={() => setIsModalOpen(true)}
            className="header__download-button"
            aria-label={t('contact.downloadCV')}
          >
            <FontAwesomeIcon icon={faDownload} />
          </button>
        )}
        <select onChange={changeLanguage} value={i18n.language} className="header__language-selector">
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="de">DE</option>
          <option value="fr">FR</option>
          <option value="it">IT</option>
        </select>
        <button onClick={toggleTheme} className="header__theme-toggle" aria-label={theme === 'dark' ? t('header.lightMode') : t('header.darkMode')}>
          <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
        </button>
        <button onClick={toggleHighContrast} className="header__contrast-toggle" aria-label={t('header.highContrast')}>
          <FontAwesomeIcon icon={faAdjust} />
        </button>
      </div>
      <PDFModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />    </header>
  );
};

export default Header;