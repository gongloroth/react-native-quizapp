import {
  CATEGORY_CHANGED,
  CATEGORIES_LOADING,
  CATEGORIES_LOADING_SUCCES,
  CATEGORIES_LOADING_FAIL,
} from './types';

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
