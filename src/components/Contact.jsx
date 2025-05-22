// src/components/Contact.jsx

import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/components/Contact.scss";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contacto">
      <h2>{t("contact.title")}</h2>
      <p>
        {t("contact.email")}:{" "}
        <a href="mailto:oriolomb@gmail.com">oriolomb@gmail.com</a>
      </p>
      <div className="social-media">
        <a
          href="https://linkedin.com/in/oriolmaciasbadosa"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/MaciWP"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <div className="contact-actions">
        <button onClick={() => window.open("/TuCV.pdf")}>
          {t("contact.downloadCV")}
        </button>
        <button onClick={() => (window.location.href = "#contacto")}>
          {t("contact.scheduleInterview")}
        </button>
      </div>
    </section>
  );
};

export default Contact;
