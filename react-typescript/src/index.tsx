import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './components/App';
import reducers from './reducers';

const store = configureStore({ reducer: reducers });

const el = document.getElementById('root');

const root = createRoot(el!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
