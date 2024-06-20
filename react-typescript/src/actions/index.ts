import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types.';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type FetchTodosAction = {
  type: ActionTypes.FETCH_TODOS;
  payload: Todo[];
};

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const { data } = await axios.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );

    dispatch<FetchTodosAction>({
      type: ActionTypes.FETCH_TODOS,
      payload: data,
    });
  };
};
