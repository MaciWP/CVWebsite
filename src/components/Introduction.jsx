import React from 'react';
import { useTranslation } from 'react-i18next';
import Lottie from 'lottie-react';
import animationData from '../assets/animations/introAnimation.json';
import '../styles/components/Introduction.scss';
import photo from '../assets/images/photo.webp';

const Introduction = () => {
  const { t } = useTranslation();


  return (
    <section id="introduction" className="introduction">
      <div className="introduction__content">
        <div className="introduction__photo">
          <img
            src={photo}
            alt={t('introduction.altText')}
            loading="lazy"
          />
        </div>
        <div className="introduction__text">
          <h2 className="introduction__title">{t('introduction.title')}</h2>
          <p className="introduction__description">{t('introduction.description')}</p>
        </div>
        <div className="introduction__animation" aria-label={t('introduction.animationAltText')}>
        <Lottie 
            animationData={animationData} 
            loop={true} 
            autoplay={true} 
            style={{ height: 300, width: 300 }} 
          />        </div>
      </div>
    </section>
  );
};

export default Introduction;