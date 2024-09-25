// src/components/Introduction.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import Lottie from 'react-lottie';
import animationData from '../assets/animations/introAnimation.json';
import '../styles/components/Introduction.scss';
import photo from '../assets/images/photo.jpeg';

const Introduction = () => {
  const { t } = useTranslation();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <section id="introduccion" className="introduction">
      <div className="introduction__content">
        {/* Imagen de perfil en la izquierda */}
        <div className="introduction__photo">
          <img src={photo} alt={t('introduction.altText')} />
        </div>

        {/* Texto de introducción en el centro */}
        <div className="introduction__text">
          <h2 className="introduction__title">{t('introduction.title')}</h2>
          <p className="introduction__description">{t('introduction.description')}</p>
        </div>

        {/* Animación a la derecha */}
        <div className="introduction__animation">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
