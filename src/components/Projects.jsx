// src/components/Projects.jsx

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/components/Projects.scss';

const Projects = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/TU_NOMBRE_DE_USUARIO/repos')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener los repositorios');
        }
        return response.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => {
        console.error('Error fetching repos:', error);
        setError(error);
      });
  }, []);

  return (
    <section id="proyectos" className="projects">
      <h2 className="projects__title">{t('projects.title')}</h2>
      {error ? (
        <p className="projects__error">Error al cargar los proyectos. Por favor, inténtalo más tarde.</p>
      ) : (
        <div className="projects__grid">
          {projects.map((proj) => (
            <div key={proj.id} className="projects__card">
              <h3 className="projects__card-title">{proj.name}</h3>
              <p className="projects__card-description">{proj.description}</p>
              <a href={proj.html_url} target="_blank" rel="noopener noreferrer">
                {t('projects.viewMore')}
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
