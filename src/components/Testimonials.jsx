// src/components/Testimonials.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import '../styles/components/Testimonials.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    quote: 'Un profesional excepcional con gran atención al detalle.',
    author: 'María García, CEO en TechCorp',
  },
  // Añade más testimonios aquí
];

const Testimonials = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonios">
      <h2>{t('testimonials.title')}</h2>
      <Slider {...settings}>
        {testimonials.map((testi, idx) => (
          <div key={idx}>
            <blockquote>
              <p>"{testi.quote}"</p>
              <footer>- {testi.author}</footer>
            </blockquote>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
