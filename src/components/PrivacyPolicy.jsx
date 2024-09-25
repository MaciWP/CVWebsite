// src/components/PrivacyPolicy.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="privacy-policy">
      <h1>{t('footer.privacyPolicy')}</h1>
      <p>
        {/* Contenido de tu política de privacidad */}
        Aquí va el contenido de la política de privacidad.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
