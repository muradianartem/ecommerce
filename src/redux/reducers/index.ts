import { combineReducers } from 'redux';
import { getCategoriesReducer } from './categoryReducer';

const rootReducer = combineReducers({
  posts: getCategoriesReducer
});

export default rootReducer;