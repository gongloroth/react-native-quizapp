import {
  REQUEST_TOKEN,
  REQUEST_TOKEN_SUCCESS,
  REQUEST_TOKEN_FAIL,
  RESET_TOKEN
} from '../actions/types';

const INITIAL_STATE = {
  token: '',
  tokenRequest: false,
 };

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case REQUEST_TOKEN:
      return { ...state, tokenRequest: true };
    case REQUEST_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        tokenRequest: false
      };
    case REQUEST_TOKEN_FAIL:
      return { ...state,
        error: 'Token request failed',
        tokenRequest: false,
       };
    case RESET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
};
