import {
  ANSWER_OPTIONS,
  ANSWER_OPTION_1_CHANGED,
  ANSWER_OPTION_2_CHANGED,
  ANSWER_OPTION_3_CHANGED,
  ANSWER_OPTION_4_CHANGED,
  ANSWER_OPTION_5_CHANGED,
  ANSWER_OPTION_6_CHANGED,
  ANSWER_OPTION_7_CHANGED,
  ANSWER_OPTION_8_CHANGED,
  ANSWER_OPTION_9_CHANGED,
  ANSWER_OPTION_10_CHANGED,
  CALCULATE_RESULT,
  CALCULATE_SUCCESS,
  CALCULATE_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  answer1: '',
  answer2: '',
  answer3: '',
  answer4: '',
  answer5: '',
  answer6: '',
  answer7: '',
  answer8: '',
  answer9: '',
  answer10: '',
  score: 0,
  calculating: false,
 };

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case ANSWER_OPTIONS:
      return { ...state, answers: action.payload };
    case ANSWER_OPTION_1_CHANGED:
      return {
        ...state,
        answer1: action.payload,
      };
    case ANSWER_OPTION_2_CHANGED:
      return {
        ...state,
        answer2: action.payload,
      };
    case ANSWER_OPTION_3_CHANGED:
      return {
        ...state,
        answer3: action.payload,
      };
    case ANSWER_OPTION_4_CHANGED:
      return {
        ...state,
        answer4: action.payload,
      };
    case ANSWER_OPTION_5_CHANGED:
      return {
        ...state,
        answer5: action.payload,
      };
    case ANSWER_OPTION_6_CHANGED:
      return {
        ...state,
        answer6: action.payload,
      };
    case ANSWER_OPTION_7_CHANGED:
      return {
        ...state,
        answer7: action.payload,
      };
    case ANSWER_OPTION_8_CHANGED:
      return {
        ...state,
        answer8: action.payload,
      };
    case ANSWER_OPTION_9_CHANGED:
      return {
        ...state,
        answer9: action.payload,
      };
    case ANSWER_OPTION_10_CHANGED:
      return {
        ...state,
        answer10: action.payload,
      };
    case CALCULATE_RESULT:
      return { ...state, calculating: true };
    case CALCULATE_SUCCESS:
      return { ...state, score: action.payload, calculating: false };
    default:
      return state;
  }
};
