import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../contexts/ThemeContext';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/components/Education.scss';

const experiences = [
  {
    company: 'BJumper',
    role: 'Senior Software Developer',
    period: '2019 - Present',
    description:
      'Led development of scalable backend systems using Python and Django, designed secure RESTful APIs, and implemented containerization strategies.',
    achievements: [
      'Optimized performance and ensured seamless user experiences',
      'Implemented Docker and Docker Compose for streamlined development',
      'Integrated OpenAI and Llama-Index for AI-driven features',
      'Established CI/CD pipelines with Pre-Commit, Flake8, Black, and Mypy',
    ],
  },
  {
    company: 'Busmatick Group',
    role: 'Software Developer',
    period: '2018',
    description:
      'Developed cross-platform applications for Android and Windows using .NET, managing smart card data for public transport systems.',
    achievements: [
      'Implemented real-time web services for seamless communication',
      'Managed Mifare Classic 1K smart card data',
    ],
  },
];

const Experience = () => {
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
    <section className="section" id="experience">
      <div className="title-container">
        <h2 className="section-title">{t('experience.title')}</h2>
      </div>
      <VerticalTimeline>
        {experiences.map((exp, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={exp.period}
            dateClassName={theme === 'dark' ? 'dark-text' : theme === 'high-contrast' ? 'high-contrast-text' : ''}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            iconStyle={styles.iconStyle}
            contentStyle={styles.content}
            contentArrowStyle={styles.arrowStyle}
          >
            <h3 className="vertical-timeline-element-title">{exp.role}</h3>
            <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
            <p>{exp.description}</p>
            <ul>
              {exp.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;