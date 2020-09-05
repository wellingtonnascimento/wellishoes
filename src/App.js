import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/globalStyled';
import Header from './components/Header';
import Routes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}
