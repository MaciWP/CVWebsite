import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact, faJs, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';
import '../styles/components/Projects.scss';

const projects = [
  {
    id: 1,
    name: 'CV Website',
    description: 'A portfolio website built with React.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/yourusername/cv-website',
  },
  // Add more projects here
];

const technologyIcons = {
  React: faReact,
  JavaScript: faJs,
  HTML5: faHtml5,
  CSS3: faCss3,
};

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="projects,section">
      <div className="title-container" >
        <h2 className="section-title">{t('projects.title')}</h2>
      </div>
      <div className="projects__grid">
        {projects.map((proj) => (
          <div key={proj.id} className="projects__card">
            <h3 className="projects__card-title">{proj.name}</h3>
            <p className="projects__card-description">{proj.description}</p>
            <div className="projects__card-technologies">
              {proj.technologies.map((tech) => (
                <span key={tech} className="projects__card-tech">
                  <FontAwesomeIcon icon={technologyIcons[tech]} /> {tech}
                </span>
              ))}
            </div>
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="projects__card-link"
            >
              <FontAwesomeIcon icon={faGithub} /> {t('projects.viewProject')}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;