import {
  REQUEST_TOKEN,
  REQUEST_TOKEN_SUCCESS,
  REQUEST_TOKEN_FAIL,
  RESET_TOKEN
} from './types';

export const requestToken = () => {
  return (dispatch) => {
    dispatch({ type: REQUEST_TOKEN });
    console.log('requesting token...');

    let url = 'https://opentdb.com/api_token.php?command=request';

    fetch(url)
    .then((response) => response.json())
    .catch((error) => {
    console.log(error);
     })
    .then((responseData) => requestTokenSuccess(dispatch, responseData))
    .catch((error) => {
      console.log(error);
      requestTokenFail(dispatch);
      });
  };
};

export const requestTokenSuccess = (dispatch, token) => {
  dispatch({
    type: REQUEST_TOKEN_SUCCESS,
    payload: token
  });
};

export const requestTokenFail = (dispatch) => {
  dispatch({ type: REQUEST_TOKEN_FAIL });
};

export const resetToken = () => {
  return { type: RESET_TOKEN, payload: '' };
};
