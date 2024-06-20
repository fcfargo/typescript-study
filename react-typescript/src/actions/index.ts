import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types.';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.FETCH_TODOS;
  payload: Todo[];
  [extraProps: string]: unknown;
}

export const fetchTodos = async (dispatch: Dispatch) => {
  const { data } = await axios.get<Todo[]>(
    'https://jsonplaceholder.typicode.com/todos'
  );

  dispatch<FetchTodosAction>({
    type: ActionTypes.FETCH_TODOS,
    payload: data,
  });
};
