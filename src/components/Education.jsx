// src/components/Education.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/components/Education.scss';

const educations = [
  {
    degree: 'Máster en Ciencias de la Computación',
    institution: 'Universidad XYZ',
    period: '2015 - 2017',
    description: 'Especialización en Inteligencia Artificial y Machine Learning.',
  },
  // Añade más educación aquí
];

const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="educacion">
      <h2>{t('education.title')}</h2>
      <VerticalTimeline>
        {educations.map((edu, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={edu.period}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
            iconStyle={{ background: 'var(--primary-color)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">{edu.degree}</h3>
            <h4 className="vertical-timeline-element-subtitle">{edu.institution}</h4>
            <p>{edu.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Education;
