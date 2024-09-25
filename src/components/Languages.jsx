// src/components/Languages.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Line } from 'rc-progress';
import '../styles/components/Languages.scss';

import enFlag from '../assets/images/flags/en.png';
import esFlag from '../assets/images/flags/es.png';
import deFlag from '../assets/images/flags/de.png';
import frFlag from '../assets/images/flags/fr.png';
import itFlag from '../assets/images/flags/it.png';

const languages = [
  { code: 'en', name: 'English', level: 'C2', proficiency: 100, flag: enFlag },
  { code: 'es', name: 'Español', level: 'Nativo', proficiency: 100, flag: esFlag },
  { code: 'de', name: 'Deutsch', level: 'B2', proficiency: 75, flag: deFlag },
  { code: 'fr', name: 'Français', level: 'B1', proficiency: 60, flag: frFlag },
  { code: 'it', name: 'Italiano', level: 'A2', proficiency: 40, flag: itFlag },
];

const Languages = () => {
  const { t } = useTranslation();

  return (
    <section id="idiomas">
      <h2>{t('languages.title')}</h2>
      <div className="language-list">
        {languages.map((lang, idx) => (
          <div key={idx} className="language-item">
            <img src={lang.flag} alt={lang.name} />
            <div className="language-info">
              <h4>{lang.name}</h4>
              <p>{lang.level}</p>
              <Line
                percent={lang.proficiency}
                strokeWidth="4"
                strokeColor="var(--primary-color)"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
