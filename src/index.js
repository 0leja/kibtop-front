import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store/store';
import {Provider} from 'react-redux'
import { CurrencyProvider } from './locales/CurrencyContext';

import './locales/18n'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <CurrencyProvider>
          <App />
        </CurrencyProvider>
      </Suspense>
    </Provider>
  </BrowserRouter>
  
);


