// src/App.jsx

import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import './styles/main.scss';

const Header = lazy(() => import('./components/Header'));
const Introduction = lazy(() => import('./components/Introduction'));
const Timeline = lazy(() => import('./components/Timeline'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Languages = lazy(() => import('./components/Languages'));
const Footer = lazy(() => import('./components/Footer'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <div className="App">
      <Helmet>
        {/* Meta etiquetas */}
      </Helmet>
      <Suspense fallback={<div>Cargando...</div>}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Introduction />
                <Timeline />
                <Skills />
                <Projects />
                <Languages />
                <Footer />
              </>
            }
          />
          <Route
            path="/politica-de-privacidad"
            element={
              <>
                <PrivacyPolicy />
                <Footer />
              </>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
