import {
  ANSWER_OPTIONS,
  ANSWER_OPTION_CHANGED,
} from '../actions/types';

const INITIAL_STATE = {
  selected: '',
  answers: []
 };

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case ANSWER_OPTIONS:
      return { ...state, answers: action.payload };
    case ANSWER_OPTION_CHANGED:
      return {
        ...state,
        selected: action.payload,
      };
    default:
      return state;
  }
};
