import React from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { reducers } from './state/store';

const store = configureStore({ reducer: reducers });

const root = createRoot(document.getElementById('root')!);

const App = () => {
  return <div>Hello there!</div>;
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
