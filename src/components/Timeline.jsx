// src/components/Timeline.jsx

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/components/Timeline.scss';

const experiences = [
  // Datos de experiencia profesional
  {
    type: 'work',
    title: 'Arquitecto de Software',
    subtitle: 'Empresa ABC',
    period: '2020 - Presente',
    description: 'Diseño de arquitecturas de software escalables.',
    details: 'Información detallada sobre el rol, responsabilidades y logros.',
    icon: faBriefcase,
  },
  // Datos de educación
  {
    type: 'education',
    title: 'Máster en Ciencias de la Computación',
    subtitle: 'Universidad XYZ',
    period: '2015 - 2017',
    description: 'Especialización en Inteligencia Artificial.',
    details: 'Información detallada sobre cursos, proyectos y tesis.',
    icon: faGraduationCap,
  },
  // Añade más elementos aquí
];

const Timeline = () => {
  const { t } = useTranslation();
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleDetails = (idx) => {
    setExpandedItem(expandedItem === idx ? null : idx);
  };

  return (
    <section id="timeline">
      <h2>{t('timeline.title')}</h2>
      <VerticalTimeline>
        {experiences.map((item, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={item.period}
            icon={<FontAwesomeIcon icon={item.icon} />}
            iconStyle={{
              background: item.type === 'work' ? 'var(--primary-color)' : 'var(--accent-color)',
              color: '#fff',
            }}
            position={idx % 2 === 0 ? 'left' : 'right'}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
            <p>{item.description}</p>
            {expandedItem === idx && <p className="details">{item.details}</p>}
            <button className="toggle-details-button" onClick={() => toggleDetails(idx)}>
              {expandedItem === idx ? t('timeline.hideDetails') : t('timeline.showDetails')}
            </button>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
