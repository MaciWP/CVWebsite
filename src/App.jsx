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
          <title>{`${t('header.name')} - ${t('introduction.title')}`}</title>
          <meta
            name="description"
            content={t('introduction.description')}
          />
        </Helmet>
      </HelmetProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Introduction />
                <Experience />
                <Education />
                <Skills />
                <Projects />
                <Languages />
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