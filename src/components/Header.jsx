import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faCogs,
  faLanguage,
  faEnvelope,
  faDownload,
  faSun,
  faMoon,
  faAdjust,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ThemeContext } from '../contexts/ThemeContext';
import PDFModal from './PDFModal';
import Tooltip from '@mui/material/Tooltip';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1680);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1680);
      if (window.innerWidth > 1680) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const navItems = [
    { to: 'experience', icon: faBriefcase, label: 'header.nav.experience' },
    { to: 'skills', icon: faCogs, label: 'header.nav.skills' },
    { to: 'languages', icon: faLanguage, label: 'header.nav.languages' },
  ];

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return faSun;
      case 'dark':
        return faMoon;
      case 'high-contrast':
        return faAdjust;
      default:
        return faSun;
    }
  };

  const headerIcons = [
    { icon: faEnvelope, label: 'Email', action: () => window.location.href = 'mailto:oriolomb@gmail.com' },
    { icon: faLinkedin, label: 'LinkedIn', action: () => window.open('https://linkedin.com/in/oriolmaciasbadosa', '_blank') },
    { icon: faGithub, label: 'GitHub', action: () => window.open('https://github.com/MaciWP', '_blank') },
    { icon: faDownload, label: 'Download CV', action: () => setIsModalOpen(true) },
    { icon: getThemeIcon(), label: 'Toggle Theme', action: toggleTheme },
  ];

  return (
    <header className="header">
      <Link to="introduction" smooth={true} duration={500} className="header__title-link">
        <h1 className="header__title">{t('header.name')}</h1>
      </Link>
      {isMobile ? (
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="header__menu-button">
          <FontAwesomeIcon icon={faBars} />
        </button>
      ) : (
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
      <div className={`header__controls ${isMobile && isMenuOpen ? 'header__controls--open' : ''}`}>
        {headerIcons.map((item, index) => (
          <Tooltip key={index} title={t(`header.${item.label}`)}>
            <button onClick={item.action} className="header__icon-button">
              <FontAwesomeIcon icon={item.icon} />
            </button>
          </Tooltip>
        ))}
        <Tooltip title={t('header.languageSelector')}>
          <select onChange={changeLanguage} value={i18n.language} className="header__language-selector">
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="de">DE</option>
            <option value="fr">FR</option>
            <option value="it">IT</option>
          </select>
        </Tooltip>
      </div>
      <PDFModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </header>
  );
};

export default Header;