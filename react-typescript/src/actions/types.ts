import { DeleteTodosAction, FetchTodosAction } from './todos';

export enum ActionTypes {
  FETCH_TODOS = 'fetch_todos',
  DELETE_TODOS = 'delete_todos',
}

export type Action = FetchTodosAction | DeleteTodosAction;
