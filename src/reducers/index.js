import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CategoryReducer from './CategoryReducer';
import QuestionReducer from './QuestionReducer';
import AnswerReducer from './AnswerReducer';
import TokenReducer from './TokenReducer';

export default combineReducers({
  auth: AuthReducer,
  cat: CategoryReducer,
  quest: QuestionReducer,
  ans: AnswerReducer,
  token: TokenReducer,
});
