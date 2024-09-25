// src/components/Experience.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/components/Experience.scss';

const experiences = [
  {
    company: 'Empresa ABC',
    role: 'Arquitecto de Software',
    period: '2020 - Presente',
    description: 'Responsable del diseño e implementación de arquitectura de microservicios en la nube.',
  },
  // Añade más experiencias aquí
];

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experiencia">
      <h2>{t('experience.title')}</h2>
      <VerticalTimeline>
        {experiences.map((exp, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={exp.period}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            iconStyle={{ background: '#005A9C', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">{exp.role}</h3>
            <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
            <p>{exp.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
