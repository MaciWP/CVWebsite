import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTools, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FaPython, FaJava, FaDocker, FaAws } from 'react-icons/fa';
import { SiDjango, SiFlask, SiCsharp, SiPostgresql, SiMysql, SiOracle, SiCelery } from 'react-icons/si';
import '../styles/components/Skills.scss';

const skillIcons = {
  Python: <FaPython />,
  Java: <FaJava />,
  'C#': <SiCsharp />,
  Django: <SiDjango />,
  Flask: <SiFlask />,
  Docker: <FaDocker />,
  PostgreSQL: <SiPostgresql />,
  MySQL: <SiMysql />,
  Oracle: <SiOracle />,
  AWS: <FaAws />,
  Celery: <SiCelery />,
};

const skills = [
  {
    category: 'programmingLanguages',
    icon: faCode,
    items: [
      { name: 'Python', proficiency: 95 },
      { name: 'C#', proficiency: 85 },
      { name: 'Java', proficiency: 80 },
      { name: 'SQL', proficiency: 90 },
    ],
  },
  {
    category: 'frameworks',
    icon: faTools,
    items: [
      { name: 'Django', proficiency: 95 },
      { name: 'Flask', proficiency: 85 },
      { name: 'Docker', proficiency: 90 },
      { name: 'PostgreSQL', proficiency: 90 },
      { name: 'AWS', proficiency: 80 },
      { name: 'Celery', proficiency: 85 },
    ],
  },
  {
    category: 'softSkills',
    icon: faUsers,
    items: [
      { name: 'System Architecture', description: 'Expertise in designing scalable architectures using Django and Docker.' },
      { name: 'Problem Solving', description: 'Demonstrated ability to solve complex challenges in backend development.' },
      { name: 'AI Integration', description: 'Experience with integrating YOLOv10, OpenAI, and Llama-Index.' },
      { name: 'Code Quality', description: 'Implemented robust CI/CD pipelines ensuring high code quality.' },
    ],
  },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills section">
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