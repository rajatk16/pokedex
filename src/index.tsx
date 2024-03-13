import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider  } from 'react-redux';

import './index.css';
import { App } from './App';
import { store } from './redux';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
      
        <App />
      </Provider>
    </React.StrictMode>
  )
}