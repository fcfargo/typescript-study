import { FetchTodosAction, Todo } from '../actions';
import { ActionTypes } from '../actions/types.';

export default function (state: Todo[] = [], action: FetchTodosAction) {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
}
