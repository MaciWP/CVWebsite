import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTools, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FaPython, FaJava, FaDocker, FaAws } from 'react-icons/fa';
import { SiDjango, SiFlask, SiCsharp, SiPostgresql, SiMysql, SiOracle, SiCelery } from 'react-icons/si';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';
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

const Skills = () => {
  const { t } = useTranslation();

  const technicalSkills = t('skills.items', { returnObjects: true });

  return (
    <section id="skills" className="skills section">
      <div className="title-container">
        <h2 className="section-title">{t('skills.title')}</h2>
      </div>
      <div className="skills__chart">
        <ResponsiveContainer width="100%" height={500}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={technicalSkills}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar name="Skills" dataKey="level" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="skills__categories">
        {['programmingLanguages', 'frameworks', 'softSkills'].map((category, idx) => (
          <div key={idx} className="skills__category">
            <h3 className="skills__category-title">
              <FontAwesomeIcon icon={category === 'programmingLanguages' ? faCode : category === 'frameworks' ? faTools : faUsers} />
              {t(`skills.categories.${category}`)}
            </h3>
            {category !== 'softSkills' ? (
              <div className="skills__bars">
                {technicalSkills.filter(skill => 
                  (category === 'programmingLanguages' && ['Python', 'C#', 'Java', 'SQL'].includes(skill.name)) ||
                  (category === 'frameworks' && ['Django', 'Flask', 'Docker', 'PostgreSQL', 'AWS', 'Celery'].includes(skill.name))
                ).map((item, index) => (
                  <div key={index} className="skills__bar">
                    <span className="skills__bar-name">
                      {skillIcons[item.name]}
                      {item.name}
                    </span>
                    <div className="skills__bar-progress">
                      <div
                        className="skills__bar-fill"
                        style={{ width: `${item.level}%` }}
                        aria-label={`${item.name} proficiency: ${item.level}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="skills__soft-skills">
                {t('skills.softSkills', { returnObjects: true }).map((item, index) => (
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