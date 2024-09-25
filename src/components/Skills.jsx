// src/components/Skills.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/components/Skills.scss';

const skills = [
  {
    category: 'Lenguajes de Programación',
    items: ['Java', 'Python', 'C++', 'JavaScript'],
  },
  {
    category: 'Frameworks',
    items: ['React', 'Angular', 'Spring Boot', 'Django'],
  },
  {
    category: 'Bases de Datos',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'Herramientas y Plataformas',
    items: ['Docker', 'Kubernetes', 'AWS', 'Git'],
  },
  // Añade más categorías y habilidades aquí
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="habilidades" className="skills">
      <h2 className="skills__title">{t('skills.title')}</h2>
      <div className="skills__categories">
        {skills.map((skillCategory, idx) => (
          <div key={idx} className="skills__category">
            <h3 className="skills__category-title">{skillCategory.category}</h3>
            <div className="skills__tags">
              {skillCategory.items.map((item, index) => (
                <span key={index} className="skills__tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
