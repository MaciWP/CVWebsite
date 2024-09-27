import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaPython, FaReact, FaAndroid, FaMobileAlt } from 'react-icons/fa';
import { SiOpencv, SiTensorflow, SiPytorch } from 'react-icons/si';
import '../styles/components/Projects.scss';

const projects = [
  {
    id: 1,
    name: 'Pelusas Card Game Calculator',
    description: 'A mobile app that enhances scorekeeping for the card game "Pelusas" using YOLOv10 for advanced image recognition.',
    technologies: ['Python', 'Kivy', 'YOLOv10', 'Android', 'iOS'],
    github: 'https://github.com/yourusername/pelusas-calculator',
  },
  {
    id: 2,
    name: 'Card Detection Application',
    description: 'A real-time card detection app using YOLOv10 for image recognition, with a focus on high accuracy and performance.',
    technologies: ['Python', 'Kivy', 'OpenCV', 'TensorFlow', 'PyTorch'],
    github: 'https://github.com/yourusername/card-detection-app',
  },
  {
    id: 3,
    name: 'Legal Chatbot for Document Generation',
    description: 'A chatbot that automates legal document generation using a local AI model and ChatGPT API.',
    technologies: ['Python', 'Kivy', 'ChatGPT API'],
    github: 'https://github.com/yourusername/legal-chatbot',
  },
];

const technologyIcons = {
  Python: <FaPython />,
  Kivy: <FaPython />, // Using FaPython as a fallback since SiKivy is not available
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

  return (
    <section id="projects" className="projects section">
      <div className="title-container">
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
                  {technologyIcons[tech]} {tech}
                </span>
              ))}
            </div>
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="projects__card-link" FontAwesomeIcon icon={faGithub}> {t('projects.viewProject')}</a>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;