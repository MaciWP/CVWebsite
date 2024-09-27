import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/components/Languages.scss';

import esFlag from '../assets/images/flags/es.webp';
import caFlag from '../assets/images/flags/ca.webp';
import enFlag from '../assets/images/flags/en.webp';

const languages = [
  { code: 'es', name: 'Spanish', level: 'Native', proficiency: 100, flag: esFlag },
  { code: 'ca', name: 'Catalan', level: 'Native', proficiency: 100, flag: caFlag },
  { code: 'en', name: 'English', level: 'B1-B2', proficiency: 75, flag: enFlag },
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