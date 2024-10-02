import React, { Suspense, useContext, useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from './contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import './styles/main.scss';

const Header = React.lazy(() => import('./components/Header'));
const Introduction = React.lazy(() => import('./components/Introduction'));
const Experience = React.lazy(() => import('./components/Experience'));
const Education = React.lazy(() => import('./components/Education'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Languages = React.lazy(() => import('./components/Languages'));
const Footer = React.lazy(() => import('./components/Footer'));

const LoadingFallback = () => {
  const { t } = useTranslation();
  return <div>{t('common.loading')}</div>;
};

function App() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <title>{t('header.name')} - {t('introduction.title')}</title>
          <meta name="description" content={t('introduction.description')} />
          <meta name="keywords" content="software developer, Python, Django, AWS, Docker" />
          
          {/* Open Graph tags */}
          <meta property="og:title" content={`${t('header.name')} - ${t('introduction.title')}`} />
          <meta property="og:description" content={t('introduction.description')} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://oriolmacias.dev" />
          <meta property="og:image" content="https://oriolmacias.dev/profile-image.jpg" />
          
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${t('header.name')} - ${t('introduction.title')}`} />
          <meta name="twitter:description" content={t('introduction.description')} />
          <meta name="twitter:image" content="https://oriolmacias.dev/profile-image.jpg" />
          
          {/* Schema.org structured data */}
          <script type="application/ld+json">
            {`
              {
                "@context": "http://schema.org",
                "@type": "Person",
                "name": "${t('header.name')}",
                "jobTitle": "${t('introduction.title')}",
                "description": "${t('introduction.description')}",
                "url": "https://oriolmacias.dev",
                "sameAs": [
                  "https://linkedin.com/in/oriolmaciasbadosa",
                  "https://github.com/MaciWP"
                ]
              }
            `}
          </script>
        </Helmet>
      </HelmetProvider>
      <Suspense fallback={<LoadingFallback />}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Suspense fallback={<LoadingFallback />}>
                  <Introduction />
                </Suspense>
                <Suspense fallback={<LoadingFallback />}>
                  <Experience />
                </Suspense>
                <Suspense fallback={<LoadingFallback />}>
                  <Education />
                </Suspense>
                <Suspense fallback={<LoadingFallback />}>
                  <Skills />
                </Suspense>
                <Suspense fallback={<LoadingFallback />}>
                  <Projects />
                </Suspense>
                <Suspense fallback={<LoadingFallback />}>
                  <Languages />
                </Suspense>
              </main>
            }
          />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;