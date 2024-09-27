import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTools, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FaJava, FaPython, FaJs, FaReact, FaAngular, FaNode } from 'react-icons/fa';
import { SiCplusplus, SiSpringboot, SiDjango } from 'react-icons/si';
import '../styles/components/Skills.scss';

const skillIcons = {
  Java: <FaJava />,
  Python: <FaPython />,
  'C++': <SiCplusplus />,
  JavaScript: <FaJs />,
  React: <FaReact />,
  Angular: <FaAngular />,
  'Node.js': <FaNode />,
  'Spring Boot': <SiSpringboot />,
  Django: <SiDjango />,
};

const skills = [
  {
    category: 'programmingLanguages',
    icon: faCode,
    items: [
      { name: 'Java', proficiency: 90 },
      { name: 'Python', proficiency: 85 },
      { name: 'C++', proficiency: 80 },
      { name: 'JavaScript', proficiency: 90 },
    ],
  },
  {
    category: 'frameworks',
    icon: faTools,
    items: [
      { name: 'React', proficiency: 85 },
      { name: 'Angular', proficiency: 80 },
      { name: 'Node.js', proficiency: 85 },
      { name: 'Spring Boot', proficiency: 90 },
      { name: 'Django', proficiency: 85 },
    ],
  },
  {
    category: 'softSkills',
    icon: faUsers,
    items: [
      { name: 'Leadership', description: 'Led a team of 10 developers to deliver projects on time.' },
      { name: 'Problem Solving', description: 'Resolved critical issues reducing downtime by 30%.' },
      { name: 'Communication', description: 'Effectively communicated with stakeholders and clients.' },
    ],
  },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills,section">
      <div className="title-container">
        <h2 className="section-title">{t('skills.title')}</h2>
      </div>
      <div className="skills__categories">
        {skills.map((skillCategory, idx) => (
          <div key={idx} className="skills__category">
            <h3 className="skills__category-title">
              <FontAwesomeIcon icon={skillCategory.icon} />
              {t(`skills.categories.${skillCategory.category}`)}
            </h3>
            {skillCategory.category !== 'softSkills' ? (
              <div className="skills__bars">
                {skillCategory.items.map((item, index) => (
                  <div key={index} className="skills__bar">
                    <span className="skills__bar-name">
                      {skillIcons[item.name]}
                      {item.name}
                    </span>
                    <div className="skills__bar-progress">
                      <div
                        className="skills__bar-fill"
                        style={{ width: `${item.proficiency}%` }}
                        aria-label={`${item.name} proficiency: ${item.proficiency}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="skills__soft-skills">
                {skillCategory.items.map((item, index) => (
                  <li key={index} className="skills__soft-skill">
                    <strong>{item.name}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;