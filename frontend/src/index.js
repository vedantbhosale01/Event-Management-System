import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider} from '@mui/styles'
import {theme }from './theme'
import { ContextProvider } from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContextProvider>
    <App />
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);

