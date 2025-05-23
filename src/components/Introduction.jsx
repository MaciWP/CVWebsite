import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import "../styles/components/Introduction.scss";
import photo from "../assets/images/photo.webp";

const Introduction = () => {
  const { t } = useTranslation();
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    import("../assets/animations/introAnimation.min.json")
      .then((module) => {
        setAnimationData(module.default);
      })
      .catch((err) => {
        console.error("Error loading animation", err);
      });
  }, []);

  return (
    <section id="introduction" className="introduction">
      <div className="introduction__content">
        <div className="introduction__photo">
          <img
            src={photo}
            alt={t("introduction.altText")}
            width="250"
            height="250"
            fetchpriority="high"
          />
        </div>
        <div className="introduction__text">
          <h2 className="introduction__title">{t("introduction.title")}</h2>
          <p className="introduction__description">
            {t("introduction.description")}
          </p>
          <p className="introduction__statement">
            {t("introduction.statement")}
          </p>
        </div>
        <div
          className="introduction__animation"
          aria-label={t("introduction.animationAltText")}
        >
          {animationData ? (
            <Lottie animationData={animationData} loop autoplay />
          ) : (
            <div>Loading animation...</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
