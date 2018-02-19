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
  CATEGORIES_LOADING_FAIL,
  QUESTIONS_LOADING_SUCCESS,
  QUESTIONS_LOADING_FAIL,
  QUESTIONS_LOADING
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


export const loadQuestions = (categoryId) => {
  return (dispatch) => {
    dispatch({ type: QUESTIONS_LOADING });
    console.log('loading questions...');

    const params = {
      amount: 10,
      category: categoryId + 9,
      type: 'multiple'
    };
    let url = 'https://opentdb.com/api.php?';

    const esc = encodeURIComponent;
    const query = Object.keys(params)
    .map(k => `${esc(k)}=${esc(params[k])}`)
    .join('&');
    console.log(query);

    url += query;
    console.log(url);

    fetch(url)
    .then((response) => response.json())
    .catch((error) => {
    console.log(error);
     })
    .then((responseData) => loadingQuestionsSuccesS(dispatch, responseData))
    .catch((error) => {
      console.log(error);
      loadingQuestionsFail(dispatch);
    });
  };
};

export const loadingQuestionsSuccesS = (dispatch, questions) => {
  dispatch({
    type: QUESTIONS_LOADING_SUCCESS,
    payload: questions
  });
};

export const loadingQuestionsFail = (dispatch) => {
  dispatch({ type: QUESTIONS_LOADING_FAIL });
};
