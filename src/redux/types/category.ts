import { Category } from "../interfaces/categories";

export const GET_CATEGORIES = 'GET_CATEGORIES';

export interface GetCategoriesStateType {
  categories: Category[]
};

interface GetCATEGORIESActionType {
  type: typeof GET_CATEGORIES;
  payload: Category[];
}

export type CategoryActionTypes = GetCATEGORIESActionType;