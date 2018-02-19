import {
  QUESTIONS_LOADING_SUCCESS,
  QUESTIONS_LOADING_FAIL,
  QUESTIONS_LOADING
} from '../actions/types';

const INITIAL_STATE = {
  questions: [],
  loadingQuestions: false,
 };

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case QUESTIONS_LOADING:
      return { ...state, loadingQuestions: true };
    case QUESTIONS_LOADING_SUCCESS:
      return {
        ...state,
        questions: action.payload.results,
        loadingQuestions: false
      };
    case QUESTIONS_LOADING_FAIL:
      return { ...state,
        error: 'Loading questions failed.',
        loadingQuestions: false,
       };
    default:
      return state;
  }
};
