import {
  CATEGORY_CHANGED,
  CATEGORIES_LOADING_SUCCES,
  CATEGORIES_LOADING_FAIL,
  CATEGORIES_LOADING
} from '../actions/types';

const INITIAL_STATE = {
  categories: [],
  loadingCategories: false,
  PlaceholderId: '',
  Placeholder: '',
 };

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case CATEGORY_CHANGED:
      return { ...state, Placeholder: action.payload.name, PlaceholderId: action.payload.id };
    case CATEGORIES_LOADING:
      return { ...state, loadingCategories: true };
    case CATEGORIES_LOADING_SUCCES:
      return {
        ...state,
        categories: action.payload.trivia_categories,
        loadingCategories: false
      };
    case CATEGORIES_LOADING_FAIL:
    return { ...state,
      error: 'Loading failed.',
      loadingCategories: false,
     };
    default:
      return state;
  }
};
