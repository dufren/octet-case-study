import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import '@styles/less/app.less';

import { Provider } from 'react-redux';
import { store } from '@api/store/index.ts';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
