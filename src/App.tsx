import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

import AuthProvider from './hooks';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
    </Router>
  );
}

export default App;
