import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CategoryReducer from './CategoryReducer';
import QuestionReducer from './QuestionReducer';

export default combineReducers({
  auth: AuthReducer,
  cat: CategoryReducer,
  quest: QuestionReducer
});
