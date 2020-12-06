import {
  GET_CATEGORIES,
  GetCategoriesStateType,
  CategoryActionTypes
} from '../types/category';

const initialStateGetCategories: GetCategoriesStateType = {
  categories: []
};

export const getCategoriesReducer = (
  state = initialStateGetCategories,
  action: CategoryActionTypes
): GetCategoriesStateType => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
};
