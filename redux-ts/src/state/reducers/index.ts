import { combineReducers } from 'redux';
import repositoriesReducer, { RepositoriesState } from './repositoriesReducer';

export interface StoreState {
  repos: RepositoriesState;
}

const reducers = combineReducers({
  repos: repositoriesReducer,
});

export default reducers;
