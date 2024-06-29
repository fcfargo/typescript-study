import { Provider } from 'react-redux';
import reducers from '../state/reducers';
import { configureStore } from '@reduxjs/toolkit';
import RepositoriesList from './RepositoriesList';

const store = configureStore({ reducer: reducers });

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <h1>Search For a Package</h1>
        <RepositoriesList />
      </Provider>
    </div>
  );
};

export default App;
