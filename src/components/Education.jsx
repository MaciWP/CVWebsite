import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../contexts/ThemeContext';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/components/Education.scss';

const educations = [
  {
    degree: 'Higher Vocational Training in Cross-Platform Application Development',
    institution: 'IES Montilivi, Girona',
    period: '2015',
    description: 'Specialized training in cross-platform application development.',
  },
  {
    degree: 'Intermediate Vocational Training in Microcomputer Systems and Networks',
    institution: 'IES Salvador Espriu, Girona',
    period: '2012',
    description: 'Focused on microcomputer systems and network management.',
  },
];

const certifications = [
  'SP2 EcoStruxure IT Advanced Technical (Schneider Electric, 2019)',
  'SP2 EcoStruxure IT Commercial (Schneider Electric, 2019)',
  'Implementation Overview CPIMTM (iTRACS)',
];

const Education = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const getStyles = () => {
    switch(theme) {
      case 'dark':
        return {
          content: {
            background: '#2c2c2c',
            color: '#f0f0f0',
            borderTop: '3px solid #1e90ff'
          },
          arrowStyle: { borderRight: '7px solid #2c2c2c' },
          iconStyle: { background: '#1e90ff', color: '#fff' },
        };
      case 'high-contrast':
        return {
          content: {
            background: '#000000',
            color: '#ffffff',
            borderTop: '3px solid #00ffff'
          },
          arrowStyle: { borderRight: '7px solid #000000' },
          iconStyle: { background: '#00ffff', color: '#000000' },
        };
      default:
        return {
          content: {
            background: '#ffffff',
            color: '#333333',
            borderTop: '3px solid #005A9C'
          },
          arrowStyle: { borderRight: '7px solid #ffffff' },
          iconStyle: { background: '#005A9C', color: '#fff' },
        };
    }
  };

  const styles = getStyles();

  return (
    <section className="section" id="education">
      <div className="title-container">
        <h2 className="section-title">{t('education.title')}</h2>
      </div>
      <VerticalTimeline>
        {educations.map((edu, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={edu.period}
            dateClassName={theme === 'dark' ? 'dark-text' : theme === 'high-contrast' ? 'high-contrast-text' : ''}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
            iconStyle={styles.iconStyle}
            contentStyle={styles.content}
            contentArrowStyle={styles.arrowStyle}
          >
            <h3 className="vertical-timeline-element-title">{edu.degree}</h3>
            <h4 className="vertical-timeline-element-subtitle">{edu.institution}</h4>
            <p>{edu.description}</p>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
          iconStyle={styles.iconStyle}
          contentStyle={styles.content}
          contentArrowStyle={styles.arrowStyle}
        >
          <h3 className="vertical-timeline-element-title">Certifications</h3>
          <ul>
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Education;