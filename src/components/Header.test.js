// src/components/Header.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

test('renders header title', () => {
  render(
    <I18nextProvider i18n={i18n}>
      <Header />
    </I18nextProvider>
  );
  const titleElement = screen.getByText(/Tu Nombre/i);
  expect(titleElement).toBeInTheDocument();
});
