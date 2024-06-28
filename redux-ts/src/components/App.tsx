import { Provider } from 'react-redux';
import reducers from '../state/reducers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer: reducers });

const App = () => {
  return (
    <div>
      <Provider store={store}>Hello there!</Provider>
    </div>
  );
};

export default App;
