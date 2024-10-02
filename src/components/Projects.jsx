import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaPython, FaReact, FaAndroid, FaMobileAlt } from 'react-icons/fa';
import { SiOpencv, SiTensorflow, SiPytorch } from 'react-icons/si';
import '../styles/components/Projects.scss';

const technologyIcons = {
  Python: <FaPython />,
  Kivy: <FaPython />,
  YOLOv10: <FaPython />,
  Android: <FaAndroid />,
  iOS: <FaMobileAlt />,
  OpenCV: <SiOpencv />,
  TensorFlow: <SiTensorflow />,
  PyTorch: <SiPytorch />,
  'ChatGPT API': <FaReact />,
};

const Projects = () => {
  const { t } = useTranslation();

  const projects = t('projects.items', { returnObjects: true });

  return (
    <section id="projects" className="projects section">
      <div className="title-container">
        <h2 className="section-title">{t('projects.title')}</h2>
      </div>
      <div className="projects__grid">
        {projects.map((proj, index) => (
          <div key={index} className="projects__card">
            <h3 className="projects__card-title">{proj.name}</h3>
            <p className="projects__card-description">{proj.description}</p>
            <div className="projects__card-technologies">
              {proj.technologies.map((tech) => (
                <span key={tech} className="projects__card-tech">
                  {technologyIcons[tech]} {tech}
                </span>
              ))}
            </div>
            
              <a href={proj.github}
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