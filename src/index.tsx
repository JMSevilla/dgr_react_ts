import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import ApplicationEntryPoint from './router'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { GlobalProvider } from './core/GlobalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <GlobalProvider>
      <ApplicationEntryPoint />
    </GlobalProvider>
  </BrowserRouter>
);

/**
 * 1. Complete all the dependencies setup > Initial
 * 2. File structuring
 * 3. Code quality > maintainable > Button > reusable code > Code quality , maintainability
 */