import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  CATEGORY_CHANGED,
  CATEGORIES_LOADING,
  CATEGORIES_LOADING_SUCCES,
  CATEGORIES_LOADING_FAIL
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSucces(dispatch, user))
    .catch((error) => {
      console.log(error);

      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSucces(dispatch, user))
      .catch(() => loginUserFail(dispatch));
    });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSucces = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};

export const categoryChanged = (category) => {
  return {
    type: CATEGORY_CHANGED,
    payload: category
  };
};

export const loadCategories = () => {
  return (dispatch) => {
    dispatch({ type: CATEGORIES_LOADING });

    console.log('loading...');
    fetch('https://opentdb.com/api_category.php')
    .then((response) => response.json())
    .catch((error) => {
    console.log(error);
     })
    .then((responseData) => loadingSucces(dispatch, responseData))
    .catch((error) => {
      console.log(error);
      loadingFail(dispatch);
    });
  };
};

export const loadingSucces = (dispatch, categories) => {
  dispatch({
    type: CATEGORIES_LOADING_SUCCES,
    payload: categories
  });
};

export const loadingFail = (dispatch) => {
  dispatch({ type: CATEGORIES_LOADING_FAIL });
};
