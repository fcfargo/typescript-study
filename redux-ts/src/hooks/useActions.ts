import { useDispatch } from 'react-redux';
import * as actionCreators from '../state/action-creators';
import { bindActionCreators } from 'redux';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};
