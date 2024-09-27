import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/components/Languages.scss';

import enFlag from '../assets/images/flags/en.webp';
import deFlag from '../assets/images/flags/de.webp';
import frFlag from '../assets/images/flags/fr.webp';
import itFlag from '../assets/images/flags/it.webp';

const languages = [
  { code: 'en', name: 'English', level: 'C2', proficiency: 100, flag: enFlag },
  { code: 'de', name: 'Deutsch', level: 'B2', proficiency: 75, flag: deFlag },
  { code: 'fr', name: 'Français', level: 'B1', proficiency: 60, flag: frFlag },
  { code: 'it', name: 'Italiano', level: 'A2', proficiency: 40, flag: itFlag },
];

const Languages = () => {
  const { t } = useTranslation();


  return (
    <section id="languages" className="section">
      <div className="title-container">
        <h2 className="section-title">{t('languages.title')}</h2>
      </div>
      <div className="language-list">
        {languages.map((lang, idx) => (
          <div key={idx} className="language-item">
            <img src={lang.flag} alt={lang.name} loading="lazy" />
            <div className="language-info">
              <h4>{lang.name}</h4>
              <p>{t('languages.level')}: {lang.level}</p>
              <div className="language-progress">
                <div
                  className="language-progress-bar"
                  style={{ width: `${lang.proficiency}%` }}
                  aria-label={`${lang.name} proficiency: ${lang.proficiency}%`}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;